/** @type {import('./$types').PageServerLoad} */
import dotenv from 'dotenv';
import type { Quote } from '$lib/types/types';
dotenv.config();

export async function load({ fetch }) {
	const apiKey = process.env.API_KEY;
	const url = 'https://api.api-ninjas.com/v1/quotes?category=success';
	const response = await fetch(url, {
		headers: {
			'x-api-key': apiKey
		}
	});
	const data: Quote = await response.json();
	console.log(data);
	return { data };
}
