# Deployment Guide

This guide covers deploying your portfolio to Vercel with a custom domain.

## Vercel Deployment

### 1. Connect to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Deploy**:
   - Click "Deploy" - Vercel will build and deploy automatically
   - Your site will be available at `your-project.vercel.app`

### 2. Custom Domain Setup

1. **Add Domain in Vercel**:
   - Go to your project dashboard
   - Click "Settings" → "Domains"
   - Add `edmundgunnjr.com`
   - Add `www.edmundgunnjr.com` (optional)

2. **DNS Configuration**:
   
   **Option A: Using Vercel's DNS (Recommended)**:
   - In Vercel, go to Settings → Domains
   - Click "Configure" next to your domain
   - Follow Vercel's DNS setup instructions
   
   **Option B: Using External DNS**:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate**:
   - Vercel automatically provides SSL certificates
   - Wait 5-10 minutes for DNS propagation
   - Test your domain: `https://edmundgunnjr.com`

### 3. Environment Variables

1. **In Vercel Dashboard**:
   - Go to Settings → Environment Variables
   - Add any required variables:
     ```
     NEXT_PUBLIC_SITE_URL=https://edmundgunnjr.com
     NEXT_PUBLIC_SITE_NAME=Edmund Gunn, Jr. — Portfolio
     ```

### 4. Performance Optimization

1. **Image Optimization**:
   - Use Next.js Image component for all images
   - Optimize images before uploading
   - Use WebP/AVIF formats when possible

2. **Build Optimization**:
   - Ensure `npm run build` completes successfully
   - Check build logs for any warnings
   - Test the production build locally: `npm run start`

## Local Development

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Content Management

1. **Add New Project**:
   - Create MDX file in `content/projects/`
   - Add media files to `public/media/`
   - Update frontmatter with required fields

2. **Update Profile**:
   - Edit JSON files in `content/meta/`
   - Changes reflect immediately in development

3. **Content Audit**:
   - Visit `/admin/content-audit` to check for issues
   - Fix any missing alt text or incomplete frontmatter

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check TypeScript errors: `npm run type-check`
   - Verify all imports are correct
   - Ensure all required dependencies are installed

2. **Image Loading Issues**:
   - Verify image paths are correct
   - Check file permissions
   - Ensure images are in `public/` directory

3. **Domain Not Working**:
   - Wait for DNS propagation (up to 24 hours)
   - Check DNS records are correct
   - Verify SSL certificate is active

### Performance Issues

1. **Slow Loading**:
   - Optimize images and videos
   - Enable Vercel's automatic optimizations
   - Check for large bundle sizes

2. **SEO Issues**:
   - Verify meta tags are correct
   - Test with Google's Rich Results Test
   - Check OpenGraph previews

## Monitoring

### Analytics (Optional)

1. **Plausible Analytics**:
   - Sign up at [plausible.io](https://plausible.io)
   - Add your domain
   - Add the tracking script to your layout

2. **Vercel Analytics**:
   - Enable in Vercel dashboard
   - Provides performance metrics
   - No additional setup required

### Uptime Monitoring

- Use services like UptimeRobot or Pingdom
- Monitor your domain availability
- Set up alerts for downtime

## Security

### Best Practices

1. **Environment Variables**:
   - Never commit sensitive data
   - Use Vercel's environment variable system
   - Rotate keys regularly

2. **Content Security**:
   - Validate all user inputs
   - Sanitize MDX content
   - Use HTTPS everywhere

3. **Dependencies**:
   - Keep dependencies updated
   - Run `npm audit` regularly
   - Use automated security scanning

## Backup

### Content Backup

1. **Version Control**:
   - All content is in Git
   - Regular commits preserve history
   - GitHub provides backup

2. **Media Files**:
   - Consider using a CDN for large files
   - Backup important media files
   - Use version control for assets

### Database Backup

- No database required for this setup
- All content is file-based
- Git provides full version history
