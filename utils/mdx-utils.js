import { supabase } from '../services/api';

export const getPosts = async () => {

	let { data: posts, error } = await supabase
		.from('posts')
		.select('*')

	if (error){
		console.log(error)
	}

	return posts;
}

export const getPostBySlug = async (id) => {

    let { data: posts, error } = await supabase
		.from('posts')
		.select('*')
		.eq('id', id)

	if (error){
		console.log(error)
	}

    return posts;

}