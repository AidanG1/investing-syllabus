import sections from '$lib/sections';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    let sections_sorted = [...sections].sort((a, b) => a.order - b.order); // shallow copy
    return {
        body: {
            sections_sorted
        }
    };
}