import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { projects = [] } = await request.json();

    const apiKey = process.env.OPEN_ROUTER || process.env.OPENROUTER_API_KEY;
    const fallbackSummary = [
      "This portfolio reflects a builder with a strong mix of launch readiness, visual storytelling, and cross-functional execution.",
      "The project history suggests a developer who is comfortable moving across product, design, and technical implementation.",
      "The work leans toward polished, practical experiences that balance creativity with usefulness."
    ].join("\n\n");

    if (!apiKey) {
      return NextResponse.json({ summary: fallbackSummary, source: "fallback" });
    }

    const prompt = `You are a creative portfolio strategist. Analyze this developer's project list and write a concise, inspiring genome-style profile in 3 short paragraphs. Mention strengths, themes, and personality. Keep it polished and human, not robotic.\n\nProjects:\n${JSON.stringify(projects.slice(0, 8), null, 2)}`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "Portfolio Genome"
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You write elegant, concise portfolio summaries."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter request failed: ${response.status}`);
    }

    const data = await response.json();
    const summary = data?.choices?.[0]?.message?.content?.trim() || fallbackSummary;

    return NextResponse.json({ summary, source: "openrouter" });
  } catch (error) {
    console.error("Genome route failed:", error);
    return NextResponse.json({
      summary: "This portfolio reflects a builder with a strong mix of launch readiness, visual storytelling, and cross-functional execution. The project history suggests a developer who values practical outcomes and memorable experiences.",
      source: "fallback"
    });
  }
}
