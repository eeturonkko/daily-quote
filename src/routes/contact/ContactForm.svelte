<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { formSchema, type FormSchema } from './formSchema';
	import { Textarea } from '$lib/components/ui/textarea';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';

	export let data: SuperValidated<Infer<FormSchema>>;
	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form method="POST" action="?/sendMessage" use:enhance>
	<div class="mt-4 flex gap-3">
		<Form.Field {form} name="firstName" class="text-start">
			<Form.Control let:attrs>
				<Form.Label class="">First name</Form.Label>
				<Input {...attrs} bind:value={$formData.firstName} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="lastName" class="text-start">
			<Form.Control let:attrs>
				<Form.Label>Last name</Form.Label>
				<Input {...attrs} bind:value={$formData.lastName} />
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
	</div>
	<Form.Field {form} name="email" class="text-start">
		<Form.Control let:attrs>
			<Form.Label>Email</Form.Label>
			<Input {...attrs} bind:value={$formData.email} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="message" class="text-start">
		<Form.Control let:attrs>
			<Form.Label>Message</Form.Label>
			<Textarea {...attrs} bind:value={$formData.message} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<div class="flex items-start">
		<Form.Button>Submit</Form.Button>
	</div>
</form>
