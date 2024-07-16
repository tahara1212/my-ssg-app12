import { createClient } from "microcms-js-sdk";

// microCMSの設定
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "", 
  apiKey: process.env.MICROCMS_API_KEY || "", 
});

// 記事のデータ
const articleData = {
  title: "テキスト1212121",
  body: "複数行のテキストを入力\n複数行のテキストを入力",
  eye_catch: "",
  desc: "複数行のテキストを入力\n複数行のテキストを入力",
  tagman: ["参照先id1", "参照先id2"]
};

// 記事を作成する関数
async function createArticle() {
  try {
    const response = await client.create({
      endpoint: 'articles',
      content: articleData,
    });

    console.log('Article created with ID:', response.id);
  } catch (error) {
    console.error('Error creating article:', error);
  }
}

// 記事を作成
createArticle();