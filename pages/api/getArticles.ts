import { client } from "../../lib/client";

export const getArticles = async ({
  limit = 100,
  fields,
}: {
  limit?: number
  fields?: any
}) => {
  return client.get({
    endpoint: "articles",
    queries: { fields, limit, orders: "-publishedAt" },
  });
};
