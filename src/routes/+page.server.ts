/** @type {import('./$types').PageServerLoad} */
import dotenv from 'dotenv';
import type { Quote } from '$lib/types/types';
import type { Actions } from './$types';
import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';
dotenv.config();

export async function load({ fetch }) {
	const apiKey = process.env.API_KEY;
	if (!apiKey) {
		throw new Error('API key is not set');
	}
	try {
		const url = 'https://api.api-ninjas.com/v1/quotes?category=success';
		const response = await fetch(url, {
			headers: {
				'x-api-key': apiKey
			}
		});
		const quote: Quote[] = await response.json();
		return {
			quote: quote[0].quote,
			author: quote[0].author
		};
	} catch (error) {
		throw new Error('Failed to fetch quote');
	}
}

export const actions: Actions = {
	favorite: async ({ request }) => {
		const data = await request.formData();
		const quote = data.get('quote');
		const author = data.get('author');
		const { error } = await supabase.from('favorites').insert([{ quote, author }]);
		if (error) {
			return {
				status: 500,
				body: error
			};
		} else {
			redirect(303, '/favorites');
		}
	}
};
