export async function onRequestGet({ request, env }) {
    const url = new URL(request.url);
    const eventCode = url.searchParams.get("eventCode");

    const result = await env.DB.prepare(
        "SELECT * FROM targets WHERE event_code = ? LIMIT 1"
    ).bind(eventCode).first();

    if (!result) {
        return new Response("Event not found", { status: 404 });
    }

    return Response.redirect(`/public/ar/index.html?event=${eventCode}`, 302);
}
