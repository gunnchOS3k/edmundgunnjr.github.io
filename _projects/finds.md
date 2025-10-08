---
title: "FINDS — Sharks From Space"
excerpt: "NASA Space Apps NYC — Best Use of Google Gemini. Maps likely shark-activity hotspots using NASA data + AI-assisted feature scoring; zero-egress Cloudflare R2; OpenSpace 3D viz; Edge IO gesture demo."
tags: [AI, NASA, Cloudflare R2, OpenSpace]
video: /assets/media/finds-demo.mp4
images:
  - /assets/media/finds-1.jpg
  - /assets/media/finds-2.jpg
alt: "FINDS shark hotspot visualization interface"
featured: true
links:
  github: "https://github.com/gunnchOS3k/FINDS-Sharks-From-Space"
---

# FINDS — Sharks From Space

**NASA Space Apps 2025 - Best Use of Google Gemini (Winner)**

## The Challenge

How do you predict shark activity hotspots using satellite data? Our team built FINDS (Forecasting Intelligence for Nearshore Data Systems) to answer this question by combining NASA satellite imagery with AI-powered feature analysis.

## Our Pipeline

We created a comprehensive system that:

- **Data Ingestion**: Processed NASA satellite data for ocean temperature, chlorophyll levels, and sea surface height
- **AI Analysis**: Used Google Gemini to score and analyze complex environmental features
- **Edge Caching**: Implemented zero-egress Cloudflare R2 storage for global performance
- **3D Visualization**: Integrated OpenSpace for immersive data exploration
- **Gesture Controls**: Added Edge IO gesture recognition for hands-free navigation

## Why Gemini?

Google Gemini's structured JSON output was perfect for our feature scoring pipeline. It could analyze complex satellite imagery and return consistent, parseable data that our system could process in real-time.

## Technical Highlights

- **Zero-egress architecture** with Cloudflare R2
- **Real-time AI scoring** of environmental features
- **3D visualization** with OpenSpace integration
- **Edge gesture controls** for immersive interaction
- **Responsive PWA** with offline capabilities

## Impact

Won "Best Use of Google Gemini" at NASA Space Apps 2025 NYC, demonstrating practical applications of AI for environmental monitoring and public safety.

## Challenge → Pipeline → Why Gemini → R2 Caching → 45s Demo

The project demonstrates the power of combining NASA's open data with modern AI tools to solve real-world environmental challenges. Our 45-second demo showcases the complete pipeline from raw satellite data to interactive 3D visualization.
