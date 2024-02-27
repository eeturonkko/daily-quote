import { z } from 'zod';

export const formSchema = z.object({
	firstName: z.string().min(2).max(50),
	lastName: z.string().min(2).max(50),
	email: z.string().email(),
	message: z.string().min(1).max(500)
});

export type FormSchema = typeof formSchema;
