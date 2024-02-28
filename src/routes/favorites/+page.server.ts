import { supabase } from '$lib/supabaseClient';
import type { Favorite } from '$lib/types/types';

export async function load() {
	const { data } = await supabase.from('favorites').select();
	const response: Favorite[] = data as Favorite[];
	return {
		favorites: response
	};
}
