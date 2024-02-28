import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { formSchema } from './formSchema';
import { superValidate } from 'sveltekit-superforms';
import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	sendMessage: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		const { firstName, lastName, email, message } = form.data;

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { error } = await supabase.from('messages').insert({
			first_name: firstName,
			last_name: lastName,
			email,
			content: message
		});

		if (error) {
			return {
				status: 500,
				body: {
					error: error.message
				}
			};
		} else {
			redirect(303, '/contact/success');
		}
	}
};
