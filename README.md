# payjp-example-tokenize-backend

PAY.JPのカード情報のトークン化をクライアントサイド（Mobile SDKなど）で動かすためのサンプルサーバーアプリケーションです。

トークン化して取得したトークンIDをエンドポイント `/save_card` にPOSTすると、顧客（`Customer`）を生成して返却するシンプルなAPIを動かすことができます。

モバイルSDKのリポジトリのサンプルアプリでは、このサーバーアプリをHerokuにデプロイして動かすことで、トークン化の一連のフローを簡単に試すことができます。

注意: アプリは最低限の実装となっており、実際の開発で利用することはできません。

# Get started

## Deploy to Heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/payjp/example-tokenize-backend/tree/master)

- Deploy to Herokuボタンをクリックする
- Herokuにログイン（アカウントがなければ登録）
- `App name` に適当な名前を入れる
- [https://pay.jp/d/settings] で取得した**テスト秘密鍵**（`sk_test_****`）をコピー
- `PAYJP_TEST_SECRET_KEY` にテスト秘密鍵をペースト
- Deploy appをクリック


`https://[設定した名前].herokuapp.com/save_card` がモバイルSDKのサンプルアプリに必要なエンドポイントURLです。

## Run locally

- git clone
- `npm install`
- [https://pay.jp/d/settings] で取得した**テスト秘密鍵**（`sk_test_****`）をコピー
- テスト秘密鍵を指定して起動

```
PAYJP_TEST_SECRET_KEY=sk_test_**** PORT=8000 npm start
```