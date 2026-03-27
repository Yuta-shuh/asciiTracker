# ⌨️ AsciiTrack

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/Version-1.1.0-38bdf8.svg)]()

**AsciiTrack** は、エンジニアのための16進数マトリックス型キーボード・デバッガーです。
単なる動作確認にとどまらず、ASCIIコードの構造を視覚化し、すべてのキー入力を「トラッキング」することを目的に設計されています。

分割キーボードのキーアサインの確認などにお使いください。

## ✨ Features

- **Hex Matrix Layout**: ASCIIコード（0x20 - 0x7F）を16×6の行列形式で表示。
- **Progress Tracking**: 入力済みのキーは「薄く表示」され、未入力のキーが強調されます。
- **Special Key Support**: `Enter`, `Backspace`, `Delete`, `Tab` などの制御キーや、`Meta (Win/Cmd)`、`Arrow Keys` も完全網羅。
- **Zero Dependency**: 外部ライブラリ一切なし。HTML/CSS/JSのみの軽量設計（GitHub Pagesに最適）。

## 🚀 Usage

1. [**Demo site**](https://yuta-shuh.github.io/asciiTracker/) にアクセスします。
2. キーボードを自由に叩きます。
3. マトリックス上の該当するASCIIコードが点灯し、カウントされます。
4. すべてのキーを「薄く」して、全ASCIIコードの走査を完了させてください。

## 🛠 Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), CSS Grid
- **Deployment**: GitHub Pages

## ⌨️ Supported Keys

| Category | Description |
| :--- | :--- |
| **Standard** | ASCII 32 (Space) to 126 (~) |
| **Control** | Enter, Tab, BS, Esc, Del |
| **Modifier** | Shift, Ctrl, Alt, **Meta (Win/Command)** |
| **Navigation** | ArrowUp, ArrowDown, ArrowLeft, ArrowRight |

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
Developed with 💻 by Yuta
