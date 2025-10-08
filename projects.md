---
layout: single
title: "Projects"
permalink: /projects/
author_profile: true
---

# Projects

A collection of my work in 6G research, edge AI, educational technology, and interactive systems.

{% assign projects = site.projects | sort: 'date' | reverse %}

<div class="projects-grid">
  {% for project in projects %}
    <div class="project-card">
      {% if project.video %}
        <div class="project-video">
          <video 
            src="{{ project.video }}" 
            poster="{{ project.images[0] | default: '/assets/images/default-poster.jpg' }}"
            muted 
            loop 
            playsinline
            class="project-video-element"
          ></video>
        </div>
      {% elsif project.images %}
        <div class="project-image">
          <img 
            src="{{ project.images[0] }}" 
            alt="{{ project.alt | default: project.title }}"
            loading="lazy"
          >
        </div>
      {% endif %}
      
      <div class="project-content">
        <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
        <p>{{ project.excerpt }}</p>
        
        {% if project.tags %}
          <div class="project-tags">
            {% for tag in project.tags %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
        
        {% if project.links %}
          <div class="project-links">
            {% if project.links.github %}
              <a href="{{ project.links.github }}" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i> GitHub
              </a>
            {% endif %}
            {% if project.links.demo %}
              <a href="{{ project.links.demo }}" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-external-link-alt"></i> Demo
              </a>
            {% endif %}
          </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

## Filter by Tags

<div class="tag-filters">
  {% assign all_tags = site.projects | map: 'tags' | flatten | uniq | sort %}
  {% for tag in all_tags %}
    <button class="tag-filter" data-tag="{{ tag }}">{{ tag }}</button>
  {% endfor %}
  <button class="tag-filter active" data-tag="all">All</button>
</div>
