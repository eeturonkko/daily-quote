/** @type {import('./$types').PageServerLoad} */
import dotenv from 'dotenv';
import type { Quote } from '$lib/types/types';
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
