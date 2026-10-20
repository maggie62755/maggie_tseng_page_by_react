---
title: "Easy Markdown to PDF"
description: "A VS Code extension for turning Markdown into PDF, with live preview, customizable layouts, and local rendering."
technologies: ["TypeScript", "VS Code API", "Playwright", "PDF.js", "Mermaid", "KaTeX"]
status: "Completed"
date: "2026/10"
image: "images/projects/markdown-to-pdf-preview.png"
link: "https://github.com/maggie62755/markdown-to-pdf#readme"
sourceCode: "https://github.com/maggie62755/markdown-to-pdf"
---

## Introduction

**Easy Markdown to PDF** is a VS Code extension that brings Markdown editing, PDF preview, and export into one workflow. It helps turn technical notes and documentation into formatted PDFs without leaving the editor.

Right-click a Markdown document, choose **Markdown: Export to PDF**, review the preview, and save the result. Rendering runs locally with bundled Chromium, styles, and fonts.

## Core Features

- **Live PDF Preview**: Includes unsaved editor changes and automatically refreshes after a typing pause. Navigate pages, zoom, fit to width, search, and select or copy text directly in the preview.
- **Rich Markdown Support**: Render syntax-highlighted code, tables, local images, KaTeX math, Mermaid diagrams, and GitHub-style alerts.
- **English & Traditional Chinese Typography**: Bundled fonts provide consistent text rendering, including Traditional Chinese and monospaced code.
- **Customizable Layouts**: Adjust paper size, orientation, font size, margins, page numbering, and inline code colors. Choose One Light or GitHub Dark for code blocks.
- **Local Processing**: Conversion requires no cloud service, separately installed Chrome, or browser download on first export.
- **Actionable Diagnostics**: Missing images and invalid math or diagrams appear as warnings with links back to the Markdown source.

## Development Highlights

### Keeping Preview and Export Consistent

The exported file uses the exact PDF bytes shown in the preview. When the document changes, export stays disabled until the latest preview is ready, helping prevent stale content from being saved.

### Rendering Technical Content

The extension combines **markdown-it** for parsing, **Shiki** for syntax highlighting, **KaTeX** for math, and **Mermaid** for diagrams. **Playwright** drives bundled Chromium to generate the PDF, while **PDF.js** powers the in-editor viewer.

### Managing Long Documents

The viewer retains rendered canvases and text layers only for the current page and its immediate neighbors. Released pages are redrawn when revisited, limiting the preview's memory footprint.

## Preview

![Mermaid diagrams, tables, and mathematical formulas in the PDF preview](images/projects/markdown-to-pdf-features.png)

## Availability

Install from a platform-specific **VSIX** package or build from source using the repository instructions. The extension is not yet published on the VS Code Marketplace.

Local rendering and preview checks have passed on **macOS Apple Silicon**. Build automation also targets macOS Intel, Windows x64, and Ubuntu x64; native validation for those platforms is pending.

[View the project and installation guide on GitHub](https://github.com/maggie62755/markdown-to-pdf)
