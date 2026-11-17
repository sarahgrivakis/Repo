import html from '../content/page.html?raw';

export const prerender = false;

export const GET = () =>
  new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8' } });
