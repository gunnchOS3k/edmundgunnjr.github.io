# 🚀 Deploy Your Portfolio to GitHub Pages

## Quick Deployment Guide

### Option 1: GitHub Pages (Recommended)

1. **Create a new repository** on GitHub:
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `edmund-gunn-portfolio` (or your preferred name)
   - Make it **Public**
   - Don't initialize with README

2. **Upload your files**:
   ```bash
   # Navigate to your portfolio folder
   cd /Users/gunnchos/Downloads/edmund-gunn-portfolio
   
   # Initialize git repository
   git init
   
   # Add all files
   git add .
   
   # Commit changes
   git commit -m "Initial portfolio website"
   
   # Add remote origin (replace with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/edmund-gunn-portfolio.git
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

4. **Your website will be live at**:
   `https://YOUR_USERNAME.github.io/edmund-gunn-portfolio`

### Option 2: Netlify (Alternative)

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up/Login** with GitHub
3. **Drag and drop** your portfolio folder to Netlify
4. **Get instant deployment** with a custom URL

### Option 3: Vercel (Alternative)

1. **Go to [vercel.com](https://vercel.com)**
2. **Import your GitHub repository**
3. **Deploy with one click**

## 🎯 Career Fair Optimization

### Before the Career Fair:

1. **Test your website** on different devices
2. **Update contact information** if needed
3. **Prepare a QR code** linking to your portfolio
4. **Practice your elevator pitch** based on your projects

### During the Career Fair:

1. **Share your portfolio URL** with recruiters
2. **Show projects on your phone/tablet**
3. **Highlight key achievements** from your experience
4. **Follow up** with personalized messages

## 📱 Mobile Testing

Test your website on:
- **iPhone Safari**
- **Android Chrome**
- **iPad Safari**
- **Desktop Chrome/Firefox**

## 🔧 Custom Domain (Optional)

If you want a custom domain like `edmundgunn.com`:

1. **Buy a domain** from Namecheap, GoDaddy, etc.
2. **In GitHub Pages settings**:
   - Add your custom domain
   - Add CNAME file to your repository
3. **Update DNS records** with your domain provider

## 📊 Analytics (Optional)

Add Google Analytics to track visitors:

1. **Get Google Analytics ID**
2. **Add tracking code** to your HTML
3. **Monitor visitor behavior**

## 🎨 Customization Tips

- **Update colors** in `styles.css`
- **Add more projects** in the projects section
- **Update skills** based on your expertise
- **Add testimonials** if you have them

## 🚀 Performance Tips

- **Optimize images** (use WebP format)
- **Minify CSS/JS** for faster loading
- **Use a CDN** for global performance
- **Enable compression** on your hosting

---

**Your portfolio is ready to impress recruiters! 🎉**
