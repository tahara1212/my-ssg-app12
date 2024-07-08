import { client } from "../../lib/client";

export const getArticles = async ({
  limit,
  fields,
}: {
  limit: number
  fields?: any
}) => {
  return client.get({
    endpoint: "articles",
    queries: { fields, limit, orders: "-publishedAt" },
  });
};
