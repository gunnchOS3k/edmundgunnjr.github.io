---
layout: home
title: "Edmund Gunn, Jr."
excerpt: "6G/URLLC • Secure SoCs • Edge AI — MS Computer E @ NYU"
header:
  overlay_image: /assets/images/hero-bg.jpg
  overlay_filter: 0.5
  actions:
    - label: "View Projects"
      url: "/projects/"
    - label: "Download Resume"
      url: "/assets/Edmund_Gunn_Jr_Resume.pdf"
---

# AI/ML Engineer & 6G Researcher focused on Edge Computing & Educational Technology

Hands-on AI development, network security automation, and educational technology. Currently pursuing M.S. Computer Engineering at NYU Tandon with research focus on 6G wireless technology, edge AI, and secure embedded systems. Winner of NASA Space Apps NYC for AI-powered shark detection from space.

## Featured Projects

{% assign featured_projects = site.projects | where: "featured", true | limit: 6 %}
<div class="featured-projects">
  {% for project in featured_projects %}
    <div class="project-card">
      <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
      <p>{{ project.excerpt }}</p>
      {% if project.tags %}
        <div class="tags">
          {% for tag in project.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>

## Recent Research

{% assign recent_research = site.research | limit: 3 %}
<div class="research-preview">
  {% for research in recent_research %}
    <div class="research-card">
      <h3><a href="{{ research.url }}">{{ research.title }}</a></h3>
      <p>{{ research.excerpt }}</p>
    </div>
  {% endfor %}
</div>

## Get In Touch

Ready to collaborate on cutting-edge wireless technology, edge AI, or educational initiatives? Let's connect!

- **Email:** [edmundgunnjr@gmail.com](mailto:edmundgunnjr@gmail.com)
- **LinkedIn:** [linkedin.com/in/edmund-gunn-jr](https://www.linkedin.com/in/edmund-gunn-jr/)
- **GitHub:** [github.com/gunnchOS3k](https://github.com/gunnchOS3k)
