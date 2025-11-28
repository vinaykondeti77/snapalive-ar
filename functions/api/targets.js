export async function onRequestGet({ request, env }) {
    const url = new URL(request.url);
    const code = url.searchParams.get("eventCode");

    const result = await env.DB.prepare(
        "SELECT * FROM targets WHERE event_code = ?"
    ).bind(code).all();

    return Response.json(result.results || []);
}
