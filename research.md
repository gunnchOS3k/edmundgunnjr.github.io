---
layout: single
title: "Research"
permalink: /research/
author_profile: true
---

# Research

My research focuses on 6G wireless technology, edge AI, and low-latency interactive systems.

{% assign research = site.research | sort: 'date' | reverse %}

<div class="research-grid">
  {% for item in research %}
    <div class="research-card">
      <h3><a href="{{ item.url }}">{{ item.title }}</a></h3>
      <p>{{ item.excerpt }}</p>
      
      {% if item.tags %}
        <div class="research-tags">
          {% for tag in item.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
      
      {% if item.links %}
        <div class="research-links">
          {% if item.links.github %}
            <a href="{{ item.links.github }}" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i> GitHub
            </a>
          {% endif %}
          {% if item.links.pdf %}
            <a href="{{ item.links.pdf }}" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-file-pdf"></i> PDF
            </a>
          {% endif %}
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>

## Research Focus Areas

### 6G/URLLC
Ultra-reliable low-latency communication for next-generation wireless systems, with applications in gaming, haptics, and real-time interactive systems.

### Edge AI
Making machine learning models more robust and efficient for real-time applications, with focus on on-device inference and model optimization.

### Secure SoCs
Hardware security for embedded systems and IoT devices, including secure boot, attestation, and trusted execution environments.

### Interactive Systems
Low-latency input processing for gaming and haptic applications, exploring the intersection of wireless technology and human-computer interaction.
