import type { APIRoute } from 'astro';
import { site } from '../config';

// Every crawler is welcome, including AI search and assistant crawlers.
// Google states AI Overviews and AI Mode use the same crawling rules as Search.
const body = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: DuckAssistBot
Allow: /

Sitemap: ${site.url}/sitemap-index.xml
`;

export const GET: APIRoute = () => new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
