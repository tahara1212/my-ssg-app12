interface ContentProps {
  content: {
    title: string;
    body: string;
  };
}

const SlugPage: React.FC<ContentProps> = ({ content }) => {
  return (
    <div>
      <h1>{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.body }}></div>
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  const slug = context.params?.slug;
  const draftKey = context.previewData?.draftKey;
  const content = await fetch(
   `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/articles/${slug}${
    draftKey !== undefined ? `?draftKey=${draftKey}` : ''
   }`,
   { headers: { 'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '' } }
  )
   .then((res) => res.json());
   return {
     props: {
       content
     }
   };
 };

 export default SlugPage;