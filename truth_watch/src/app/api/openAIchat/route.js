// src/app/api/chat/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const userMessage = body.message;

        const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }],
            }),
        });

        const data = await openaiRes.json();

        // Log the OpenAI response in case it's an error
        if (!openaiRes.ok) {
            console.error("OpenAI Error:", data);
            return NextResponse.json({ error: data }, { status: openaiRes.status });
        }

        return NextResponse.json({ response: data.choices[0].message.content });
    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error", details: error.message },
            { status: 500 }
        );
    }
}
