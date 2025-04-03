# React Based On Design System

デザインシステムに基づいたReactプロジェクトの概要

## 環境構成

Node.js: v20
React: v18
パッケージマネージャ: Yarn 1
ビルドツール: Vite

## 初回導入手順

1.Node.js v20 の環境を準備します。

2.リポジトリをクローンします。

```bash
git clone <repository-url>
cd <repository-directory>
```

3.必要なパッケージをインストールします。

```bash
yarn
```

4.ローカルサーバーを起動します。

```bash
yarn dev
```

## 使用ライブラリ

Storybook: UIカタログ作成ツール
React Hook Form: フォームバリデーションライブラリ
Hygen: コードジェネレーター

## 開発時のコマンド一覧

| 操作            | コマンド         | 備考                     |
| --------------- | ---------------- | ------------------------ |
| Webサービス起動 | `yarn dev`       | `http://localhost:5173/` |
| UIカタログ起動  | `yarn storybook` | `http://localhost:6006/` |
| ビルド          | `yarn build`     |                          |
