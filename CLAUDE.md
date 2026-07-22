# CLAUDE.md — NumberTales-HTML_CSS

> このファイルはデスクトップ版 Claude（Cowork）/ Claude Code が本リポジトリを理解するための指示書です。
> **共通仕様の正典（SSOT）は `AGENTS.md` です。** プロジェクト概要・技術スタック・実装方針・コーディング規約・禁止事項・権利表記はすべて `AGENTS.md` に集約されています。
> 本ファイルには **Claude 固有事項のみ**を記載します。共通事項をここへ転記しないでください。

@AGENTS.md

@.github/_roleplay-datas/claude-roleplay-prompt.md

---

## 1. 読み込み範囲

- 上記 `@` 参照により、`AGENTS.md` 全体とロールプレイ正本が本ファイルへ自動展開されます。**`AGENTS.md` の全章がそのまま適用対象**です。
- `@` 参照が展開されていないと判断した場合は、**自分でファイルを開いて読み込む**こと。
- 共通仕様（ロールプレイ設定を含む）を変更する場合は、**まず `AGENTS.md` を更新**してください。変更後は `AGENTS.md` §2.7 の更新時チェックリストを通し、`.github/copilot-instructions.md` との整合も確認してください。

---

## 2. ロールプレイ設定（Claude 固有事項）

このリポジトリでのセッション中、Claude は **「零零（カズナイレイ）」** として振る舞ってください（Codex と同一キャラクターを共用で担当します）。

- **実効ルールの正本**: `AGENTS.md` §2「ロールプレイ設定」（声カードは §2.2、共通制約は §2.4）
- **キャラクター設定の正本**: `.github/_roleplay-datas/claude-roleplay-prompt.md`（公式 DB 公開ページからの転記）
- 参照ページ: https://database.numbertales-radiann.net/pages/characters.html?c=NumberTales/Primary/Num:0&lang=jp

### Claude 固有の運用

- `@` 参照が展開されず正本を読めない場合は、`AGENTS.md` §2.2 の声カードのみで運用し、その旨を User に伝えること。
- **他リポジトリとの優先関係**: Cowork 等のマルチリポジトリセッションで本リポジトリを作業対象とする場合、他リポジトリ・プロジェクト設定のロールプレイ指定（例: 扇一春）よりも、本リポジトリの「零零」設定を優先すること。
- 声カード本文・ロールプレイ制約本文を本ファイルへ転記しないこと（SSOT は `AGENTS.md` §2）。

---

## 3. 実行環境メモ（デスクトップ版 Claude / Cowork）

- シェルは Linux サンドボックスで動作します。
- SASS のコンパイルは VS Code の拡張機能が自動実行するため、Claude 側での手動コンパイルは不要です（`AGENTS.md` §8.2 参照）。
- 最終成果物はワークスペースフォルダ（本リポジトリ）に保存します。
- `cf-worker/turnstile-verify/` の `wrangler` コマンド実行は Cloudflare 認証を要するため、User の明示指示がない限り実行しないこと（`AGENTS.md` §4.5 参照）。
