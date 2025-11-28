export async function onRequestPost({ request, env }) {
    const body = await request.json();

    await env.DB.prepare(
        "UPDATE targets SET title=?, category=? WHERE id=?"
    )
        .bind(body.title, body.category, body.id)
        .run();

    return new Response("Updated");
}
