# ✨ Steph's Portfolio

A beautiful, feminine React + TypeScript portfolio with a secret CMS to manage your projects!

## 🌸 Features

- **Beautiful Design** - Soft colors, elegant typography, smooth animations
- **Secret CMS** - Hidden admin panel at `/secret-login` to manage your content
- **localStorage Persistence** - Your data saves locally in the browser
- **Fully Responsive** - Looks great on all devices
- **TypeScript** - Type-safe code

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🔐 Secret CMS Access

1. Go to `yoursite.com/secret-login`
2. Default password: `steph2024`
3. Change password in `src/context/AuthContext.tsx`

## 📦 Deploy to GitHub Pages (FREE!)

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **"New repository"**
3. Name it: `your-username.github.io` (for main site) OR any name like `portfolio`
4. Make it **Public**
5. Click **Create repository**

### Step 2: Update Vite Config for GitHub Pages

If your repo is NOT `username.github.io`, update `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Add this line with your repo name
})
```

### Step 3: Build & Deploy

```bash
# Build the project
npm run build

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to main branch
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages**
3. Source: **GitHub Actions**
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Step 5: Access Your Site!

Your portfolio will be live at:
- `https://your-username.github.io` (if using username.github.io repo)
- `https://your-username.github.io/repo-name` (if using custom repo name)

## 🎨 Customization

### Change Password
Edit `src/context/AuthContext.tsx`:
```ts
const SECRET_PASSWORD = "your-new-password";
```

### Change Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-rose: #E8A0A0;
  --accent-mauve: #C9A0DC;
  /* etc */
}
```

### Change Default Data
Edit `src/context/DataContext.tsx` to change default projects, experience, etc.

## 💖 Made with love!
