import html from '../content/page.html?raw';

export const prerender = false;

const body = html.replace(
  '<head>',
  '<head><meta name="robots" content="noindex, nofollow, noarchive">',
);

export const GET = () =>
  new Response(body, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'x-robots-tag': 'noindex, nofollow, noarchive',
    },
  });
