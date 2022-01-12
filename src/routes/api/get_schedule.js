import { schedule } from '$lib/sections';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    return {
        body: {
            schedule
        }
    };
}