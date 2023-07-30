This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 個人メモ

■ 用語

* Hasura：PostgreSQL などから GraphQL API を構築してくれるオープンソースエンジン。（基本的な機能は無料で使える）
* Nextjs：React をベースに開発された、フロントエンドフレームワーク。
* Apollo Client：GraphQL API のクライアントライブラリ。
* GraphQL：エンドポイントが 1 つになった RestAPI みたいなもの。

■ Nextjs について

* ファイルベースルーティング機能が便利
  * ディレクトリの階層構造がそのまま URL と対応
* Google クローラが辿れるリンク作成が可能で SEO 対策ができる
  * Next が提供している Link タグと通常の a タグを組み合わせてリンクを作成
  * js が有効なら SPA の振る舞い、無効ならページの再読み込みが行われる
* SSR、SSG、ISR を使い分けることで描画速度を高速化できる
  * SSR：サーバ側でレンダリング（データが更新されたら描画内容も更新される）
  * SSG：ビルド時に HTML を生成（データが更新されても描画内容は更新されない）
  * ISR：リクエスト時にキャッシュを作成、次のアクセスではキャッシュを返して、裏でキャッシュを再生成する

■ Apollo Client について

* クエリと呼ばれるテキストを送信して、GraphQL からデータ取得をしてくれる
* 同じクエリからデータ取得をするときはクライアント側にあるキャッシュを返してくれて高速（クエリ正規化）

■ Jest について

* JS/TS のテストフレームワーク
* data-testid 属性を設定してテストを行う
* クエリに対応するダミーデータを作成できる（これはGraphQLとセットで）
* テスト例
  * ○○ というテキストが表示されているか？
  * リンク押下で正しく画面遷移できるか？
