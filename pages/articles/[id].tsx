import { client } from "../../lib/client";

export default function ArticlePage({ blog: article }: any) {
  return (
    <main>
    <h1>{article.title}</h1>
    <p>{article.publishedAt}</p>
    <div
      dangerouslySetInnerHTML={{
        __html: `${article.body}`,
      }}
    />
  </main>
  )
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "articles" });

  const paths = data.contents.map((content: any) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "articles", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};