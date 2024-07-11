// /pages/api/preview.ts
import fetch from 'node-fetch';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('Preview API called with query:', req.query);

  if (!req.query.slug) {
    return res.status(404).end();
  }

  const content: any = await fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/articles/${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
    { headers: { 'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '' } }
  )
  .then(res => res.json()).catch(error => {
    console.error('Error fetching content:', error);
    return null;
  });

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  console.log('Content fetched:', content);

  res.setPreviewData({
    slug: content.id,
    draftKey: req.query.draftKey,
  });

  const redirectUrl = `/articles/${content.id}`;
  console.log('Redirecting to:', redirectUrl);

  res.writeHead(307, { Location: redirectUrl });
  res.end('Preview mode enabled');
};

export default handler;