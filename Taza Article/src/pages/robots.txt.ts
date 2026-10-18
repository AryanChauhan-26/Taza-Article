import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${siteConfig.siteUrl}/sitemap-index.xml
`;

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
