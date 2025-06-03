# React Based On Design System

デザインシステムに基づいた React プロジェクトです。  
**VS Code Dev Container 環境**に対応しており、初回セットアップが簡素化されています。

---

## 🛠️ 環境構成

- **Node.js**: v20  
- **React**: v18  
- **パッケージマネージャ**: Yarn 4 (Plug'n'Play 対応)
- **ビルドツール**: Vite
- **Dev Container**: Docker + VS Code Remote Containers

---

## 🚀 初回導入手順（DevContainer）

1. **VS Code でリポジトリを開く**

   - コマンドパレットで「**Dev Container: Reopen in Container**」を選択  
     ※ `.devcontainer/` ディレクトリの設定に従い、環境が自動構築されます。

2. **依存関係インストール**

   ```bash
   yarn install

3. **開発サーバー起動**

   ```bash
   yarn dev

4. **UIカタログ (Storybook) 起動（任意）**

   ```bash
   yarn storybook

## 📚 使用ライブラリ

| ライブラリ名          | 用途             |
| --------------- | -------------- |
| React Hook Form | フォームバリデーション    |
| Storybook       | コンポーネント UIカタログ |
| Hygen           | コンポーネント自動生成    |

## 🧪 開発時のコマンド一覧

| 操作        | コマンド                       | 備考                       |
| --------- | -------------------------- | ------------------------ |
| Webサービス起動 | `yarn dev`                 | `http://localhost:5173/` |
| UIカタログ起動  | `yarn storybook`           | `http://localhost:6006/` |
| ビルド       | `yarn build`               | `dist/` に出力されます          |
| コンポーネント生成 | `yarn hygen new component` | Hygen テンプレートから生成         |

