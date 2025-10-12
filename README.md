# Edmund Gunn, Jr. — Portfolio

A modern, accessible portfolio website built with Jekyll and Minimal Mistakes theme, optimized for GitHub Pages deployment.

## Features

- **GitHub Pages Compatible**: No build servers required, deploys directly from GitHub
- **Minimal Mistakes Theme**: Professional, responsive design with excellent accessibility
- **Smooth Page Transitions**: Swup.js with reduced-motion support
- **Content Management**: Easy-to-edit Markdown files and collections
- **Media Support**: Optimized for images and videos with lazy loading
- **SEO Optimized**: OpenGraph, Twitter cards, and structured data

## Quick Start

### Local Development

1. **Install Ruby and Jekyll**:
   ```bash
   # Install Ruby (if not already installed)
   # On macOS with Homebrew:
   brew install ruby
   
   # Install Jekyll and bundler
   gem install jekyll bundler
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Run development server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **Open [http://localhost:4000](http://localhost:4000)**

### GitHub Pages Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial Jekyll portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save settings

3. **Your site will be available at**:
   `https://gunnchos3kmlv.github.io/edmundgunnjr.github.io`

## Content Management

### Adding a New Project

1. **Create a new file** in `_projects/`:
   ```markdown
   ---
   title: "My New Project"
   excerpt: "Brief description of the project"
   tags: [React, TypeScript, AI]
   video: /assets/media/my-project-demo.mp4
   images:
     - /assets/media/my-project-1.jpg
     - /assets/media/my-project-2.jpg
   alt: "Description of the main image for accessibility"
   featured: true
   links:
     github: "https://github.com/username/repo"
     demo: "https://my-project.com"
   ---
   
   # My New Project
   
   Your project content goes here...
   ```

2. **Add media files** to `assets/media/`
3. **The project will automatically appear** on the projects page

### Adding Research Content

1. **Create a new file** in `_research/`:
   ```markdown
   ---
   title: "My Research Paper"
   excerpt: "Brief description of the research"
   tags: [Machine Learning, 6G, Wireless]
   links:
     github: "https://github.com/username/repo"
     pdf: "/assets/research/my-paper.pdf"
   ---
   
   # My Research Paper
   
   Your research content goes here...
   ```

### Updating Profile Information

Edit the `_config.yml` file to update:
- Personal information and contact details
- Social media links
- Site settings and navigation

## Media Guidelines

### Images
- **Format**: WebP or AVIF preferred, JPEG/PNG fallback
- **Size**: Optimize for web (max 2MB per image)
- **Dimensions**: 16:9 aspect ratio for project images
- **Alt Text**: Always include descriptive alt text in frontmatter

### Videos
- **Format**: MP4 (H.264 codec)
- **Duration**: 30-60 seconds for project demos
- **Size**: Compress for web delivery (max 10MB per video)
- **Poster**: Include a poster image for video previews

### Adding Media Files

1. **Place files** in `assets/media/` or `assets/images/`
2. **Reference in frontmatter**:
   ```yaml
   video: /assets/media/my-demo.mp4
   images:
     - /assets/media/image-1.jpg
     - /assets/media/image-2.jpg
   alt: "Descriptive alt text for accessibility"
   ```

## Customization

### Brand Colors
Edit `assets/css/custom.scss` to change:
- Primary and secondary colors
- Accent colors
- Dark mode support

### Page Transitions
The site uses Swup.js for smooth page transitions:
- Automatically disabled for users with `prefers-reduced-motion: reduce`
- Fade transitions between pages
- Respects accessibility preferences

### CRT Filter (Optional)
Add the `crt-filter` class to any element for a retro CRT monitor effect:
```html
<div class="crt-filter">
  <!-- Your content here -->
</div>
```

## URL Shortening

To use a shorter URL like `edmundgunnjr.github.io`:

1. **Create a new organization** named `edmundgunnjr`
2. **Transfer the repository** to the organization
3. **Rename the repository** to `edmundgunnjr.github.io`
4. **Update the `_config.yml`**:
   ```yaml
   url: "https://edmundgunnjr.github.io"
   baseurl: ""
   ```

## Performance & Accessibility

### Performance Features
- **Lazy Loading**: Images and videos load only when needed
- **Optimized Assets**: Compressed media files
- **Efficient CSS**: Minimal custom styles
- **Fast Transitions**: 60fps page transitions

### Accessibility Features
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Semantic HTML and proper alt text
- **Color Contrast**: WCAG AA compliant color combinations
- **Reduced Motion**: Respects user's motion preferences
- **Focus Management**: Clear focus indicators

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Ruby and Jekyll versions
   - Run `bundle update` to update dependencies
   - Verify all frontmatter is valid YAML

2. **Images Not Loading**:
   - Check file paths are correct
   - Ensure images are in `assets/` directory
   - Verify file permissions

3. **GitHub Pages Not Updating**:
   - Wait 5-10 minutes for deployment
   - Check repository settings
   - Verify `_config.yml` is valid

### Local Development Issues

1. **Ruby Version Conflicts**:
   ```bash
   # Use rbenv or rvm to manage Ruby versions
   rbenv install 3.1.0
   rbenv local 3.1.0
   ```

2. **Bundle Install Failures**:
   ```bash
   # Clear bundle cache
   bundle clean --force
   bundle install
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `bundle exec jekyll serve`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- **Email**: [edmundgunnjr@gmail.com](mailto:edmundgunnjr@gmail.com)
- **LinkedIn**: [linkedin.com/in/edmund-gunn-jr](https://www.linkedin.com/in/edmund-gunn-jr)
- **GitHub**: [github.com/gunnchOS3k](https://github.com/gunnchOS3k)
