// app/api/gemini-chat/route.js

export async function POST(req) {
    const { message } = await req.json();

    try {
        const res = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [
                        {
                            role: 'user',
                            parts: [
                                {
                                    text: `You are a friendly and informative cybersecurity expert. Your goal is to provide accurate, concise, and easy-to-understand answers to cybersecurity-related questions.  When explaining technical terms, use analogies and simple language. Focus on providing practical advice and best practices. If a question is outside your area of expertise, or requires specific investigation, politely state that and suggest resources for further help.  Answer this query:\n\n${message}`,
                                },
                            ],
                        },
                    ],
                }),
            }
        );

        if (!res.ok) {
            console.error(`Gemini API error: ${res.status} ${res.statusText}`); // More detailed error logging
            return Response.json({ error: 'Failed to generate a response from the Gemini API. Please try again later.' }, { status: 500 }); // More user-friendly error
        }

        const data = await res.json();
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I am unable to provide a response at this time.'; // Slightly improved default message
        return Response.json({ reply });

    } catch (err) {
        console.error("Error during Gemini API call:", err); // More descriptive error log
        return Response.json({ error: 'Error generating response. Please check server logs for details.' }, { status: 500 }); // More informative error for debugging
    }
}