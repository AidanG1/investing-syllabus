import data from '$lib/data';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    let content = [...data].sort((a, b) => a.order - b.order); // shallow copy
    return {
        body: {
            content
        }
    };
}