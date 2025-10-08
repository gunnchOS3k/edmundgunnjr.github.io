---
title: "EdgeGesture Arcade — Voice + Hand-Gesture"
excerpt: "Qualcomm Edge AI Hackathon Winner. Offline voice & gesture arcade for Windows on Arm. Electron frontend + Python backend (ONNX Whisper, QNN EP)."
tags: [On-device ML, Electron, ONNX, Windows-on-Arm]
video: /assets/media/edgegesture-demo.mp4
images:
  - /assets/media/edge-1.jpg
  - /assets/media/edge-2.jpg
alt: "EdgeGesture Arcade interface showing voice and gesture controls"
featured: true
links:
  github: "https://github.com/gunnchOS3k/EdgeGesture-Arcade"
---

# EdgeGesture Arcade — Voice + Hand-Gesture Mini-Arcade

**Qualcomm Edge AI Hackathon (Fall 2025) - Judge's Votes + People's Choice (Winner)**

## The Vision

Create an offline voice and hand gesture arcade that runs entirely on Windows on Arm devices, with no internet dependency and ultra-low latency.

## Technical Architecture

- **Frontend**: Electron app with React-based UI
- **Backend**: Python service with ONNX Runtime
- **ML Pipeline**: Whisper (ONNX) for speech recognition
- **Acceleration**: Snapdragon NPU via ONNX Runtime QNN EP
- **Quantization**: QDQ models for optimal performance

## Games Implemented

- **Racing Game**: Voice-controlled acceleration and braking
- **Pong**: Gesture-controlled paddle movement
- **Galaga-style Shooter**: Voice commands for shooting and movement

## Packaging & Deployment

- **NSIS Installer**: Traditional Windows installer
- **MSIX Package**: Modern Windows app packaging
- **Store Assets**: Capabilities, privacy policy, and compliance checks
- **Diagnostics**: Built-in health checks and provider diagnostics

## Performance Optimizations

- **Model Quantization**: Reduced model size by 60% while maintaining accuracy
- **NPU Acceleration**: Leveraged Snapdragon NPU for 3x faster inference
- **Edge Caching**: Pre-loaded models for instant startup
- **Memory Management**: Optimized for low-memory ARM devices

## Impact

Won both Judge's Votes and People's Choice at Qualcomm Edge AI Hackathon, demonstrating the potential of on-device ML for gaming applications.

## Packaging (MSIX/NSIS), Diagnostics Endpoints, Store-Ready Assets

The project showcases modern Windows app packaging techniques, including MSIX for Microsoft Store distribution and NSIS for traditional installers. Built-in diagnostics endpoints provide real-time health monitoring, while store-ready assets ensure compliance with Microsoft's requirements.
