# ⚡ Quick Start Guide

**Get your site live in 10 minutes!**

---

## Step 1: Add Logo Files (5 minutes)

**You need 5 logo files in `/public` folder:**

### Easiest Method:

1. **Go to:** https://realfavicongenerator.net/
2. **Upload** your microscope logo image
3. **Click** "Generate your Favicons"
4. **Download** the package
5. **Rename** files:
   - `favicon-16x16.png` → `logo-16x16.png`
   - `favicon-32x32.png` → `logo-32x32.png`
   - `apple-touch-icon.png` → `logo-180x180.png`
   - `android-chrome-192x192.png` → `logo-192x192.png`
   - `android-chrome-512x512.png` → `logo-512x512.png`
6. **Copy** all 5 files to `/public` folder

**Detailed instructions:** See `LOGO_SETUP_INSTRUCTIONS.md`

---

## Step 2: Test Locally (2 minutes)

```bash
# Install dependencies (if not done)
npm install

# Start dev server
npm run dev

# Open browser: http://localhost:5173
# Test the site works correctly
```

---

## Step 3: Build (1 minute)

```bash
# Build for production
npm run build

# This creates a 'dist' folder with optimized files
```

---

## Step 4: Deploy to Netlify (2 minutes)

### Option A: Drag & Drop (Easiest)

1. **Go to:** https://app.netlify.com/drop
2. **Drag** the `dist` folder onto the page
3. **Done!** Your site is live instantly

### Option B: Netlify CLI

```bash
# Install Netlify CLI (first time only)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
npm run deploy
```

### Option C: GitHub + Netlify

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main

# Then:
# 1. Go to https://app.netlify.com/
# 2. Click "Add new site" → "Import from Git"
# 3. Select your repository
# 4. Click "Deploy site"
```

---

## Step 5: Test Live Site (2 minutes)

**Your site is now live at:**
```
https://random-name-12345.netlify.app
```

**Test checklist:**
- [ ] Homepage loads
- [ ] Click "Start Learning"
- [ ] Navigate between slides
- [ ] Try all 4 formats
- [ ] Test on mobile
- [ ] Check favicon in browser tab
- [ ] Share link with friend

---

## Optional: Customize Site Name

**Change from:**
```
https://random-name-12345.netlify.app
```

**To:**
```
https://laras-histology.netlify.app
```

**How:**
1. Netlify Dashboard → Site settings
2. Domain management → Options → Edit site name
3. Enter: `laras-histology`
4. Save

---

## 🎉 You're Done!

**Your site is live and ready to share!**

### Share with users:
- Send link via WhatsApp
- Text the link
- Create QR code at: https://qr-code-generator.com/

### Add to home screen:
- **iOS:** Safari → Share → Add to Home Screen
- **Android:** Chrome → Menu → Add to Home screen

---

## 🆘 Need Help?

**If something doesn't work:**

1. **Check deployment readiness:**
   ```bash
   npm run check
   ```

2. **Read full guides:**
   - `NETLIFY_DEPLOYMENT_GUIDE.md` - Complete deployment guide
   - `LOGO_SETUP_INSTRUCTIONS.md` - Logo preparation
   - `DEPLOYMENT_READY_SUMMARY.md` - Full checklist

3. **Common issues:**
   - **Build fails:** Run `npm install` first
   - **Logo missing:** Add files to `/public` folder
   - **404 errors:** Check `netlify.toml` exists

---

## 📝 Quick Commands

```bash
# Check if ready to deploy
npm run check

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Netlify (requires Netlify CLI)
npm run deploy
```

---

**That's it! Happy deploying! 🚀**
