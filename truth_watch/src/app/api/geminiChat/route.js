// src/app/api/geminiChat/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const userMessage = body.message;

        // --- USE THIS MODEL FOR FREE TIER: gemini-1.5-flash ---
        const GEMINI_MODEL = "gemini-1.5-flash";

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // For robust multi-turn conversations, include the 'role'.
                    // For a single user message, it's good practice.
                    contents: [{ role: "user", parts: [{ text: userMessage }] }],

                    // Optional: You can add generation config here to control the response
                    // For example, to make the response more creative or more focused:
                    // generationConfig: {
                    //     temperature: 0.7, // Lower temperature for less randomness, higher for more
                    //     maxOutputTokens: 800, // Limit the length of the response
                    // },
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error("Gemini API Error:", data);
            // Return a more descriptive error from the API if available
            const errorMessage = data.error?.message || "An error occurred with the Gemini API.";
            return NextResponse.json({ error: errorMessage }, { status: response.status });
        }

        // Safely access the text from the response
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "No reply from Gemini.";
        return NextResponse.json({ response: text });

    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}