import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { formSchema } from './formSchema';
import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	test: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		const { firstName, lastName, email, message } = form.data;

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		console.log(
			`First Name: ${firstName} Last Name: ${lastName} Email: ${email} Message: ${message}`
		);
	}
};
