import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const favorites = pgTable('favorites', {
	id: serial('id').primaryKey(),
	quote: text('quote').unique(),
	author: text('author')
});
