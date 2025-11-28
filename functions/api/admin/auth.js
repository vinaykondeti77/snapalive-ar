export async function onRequestPost({ request, env }) {
    const { username, password } = await request.json();

    if (username === "admin" && password === env.ADMIN_PASS)
        return new Response("OK");

    return new Response("Unauthorized", { status: 401 });
}
