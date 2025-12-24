# LifeMD Mini Project

A modern React landing page for LifeMD featuring a testimonial marquee, built with Vite and Tailwind CSS.

## Features

- 🎨 High-fidelity design matching LifeMD brand
- ♿ Fully accessible (WCAG 2.1 Level AA)
- 📱 Responsive design
- 🎭 Smooth animations and transitions
- ♾️ Infinite scrolling testimonial marquee

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. **Update the base path** in `vite.config.js` (line 12):
   - If your repo is `username.github.io` (root domain): Change `base: '/lifemd-mini-project/'` to `base: '/'`
   - If your repo is a project page: Replace `lifemd-mini-project` with your actual repository name
   - Example: If your repo is `my-awesome-project`, use `base: '/my-awesome-project/'`

2. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

3. **Push to main branch**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - Check the "Actions" tab to see deployment progress

4. **Your site will be available at**:
   - Root domain: `https://username.github.io`
   - Project page: `https://username.github.io/repository-name/`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# The dist folder contains the built files
# You can deploy the contents of dist/ to any static hosting service
```

## Project Structure

```
├── src/
│   ├── app.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── styles/
│       ├── app.css      # Component styles and animations
│       └── index.css    # Global styles
├── public/              # Static assets
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions deployment workflow
```

## Technologies

- React 19
- Vite 7
- Tailwind CSS 4
- GitHub Pages
