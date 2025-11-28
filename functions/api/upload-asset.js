export async function onRequestPost({ request, env }) {
    const body = await request.json();

    await env.DB.prepare(
        "INSERT INTO targets (title, category, target_index, image_key, image_url, thumbnail_url, video_url, event_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    )
        .bind(
            body.title,
            body.category,
            body.target_index,
            body.image_key,
            body.image_url,
            body.thumbnail_url,
            body.video_url,
            body.event_code
        )
        .run();

    return new Response("OK", { status: 200 });
}
