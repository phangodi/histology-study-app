# Logo Setup Instructions 🎨

**Your logo:** Purple microscope on gradient background  
**Status:** Need to create multiple sizes  
**Location:** Save all files to `/public` folder

---

## Quick Setup (5 minutes)

### Method 1: Online Favicon Generator (Easiest) ⭐

**1. Go to this website:**
```
https://realfavicongenerator.net/
```

**2. Upload your logo image**
- Click "Select your Favicon image"
- Choose the microscope logo file
- Wait for upload

**3. Configure settings:**
- **iOS:** Keep default settings
- **Android:** Keep default settings
- **Windows:** Keep default settings
- **macOS Safari:** Keep default settings

**4. Generate files:**
- Click "Generate your Favicons and HTML code"
- Click "Favicon package" to download

**5. Extract and rename files:**

Download will contain these files - rename them:

| Original Filename | Rename To | Purpose |
|------------------|-----------|---------|
| `favicon-16x16.png` | `logo-16x16.png` | Browser tab (small) |
| `favicon-32x32.png` | `logo-32x32.png` | Browser tab (large) |
| `apple-touch-icon.png` | `logo-180x180.png` | iOS home screen |
| `android-chrome-192x192.png` | `logo-192x192.png` | Android home screen |
| `android-chrome-512x512.png` | `logo-512x512.png` | PWA splash screen |

**6. Copy to project:**
- Copy all 5 renamed files to `/public` folder
- Done! ✅

---

### Method 2: Using Figma/Photoshop (Manual)

**If you have the original logo file:**

**1. Open logo in your editor**

**2. Export 5 sizes:**

**Size: 16x16px**
- File name: `logo-16x16.png`
- Format: PNG
- Background: Transparent or #7c3aed (purple)

**Size: 32x32px**
- File name: `logo-32x32.png`
- Format: PNG
- Background: Transparent or #7c3aed

**Size: 180x180px**
- File name: `logo-180x180.png`
- Format: PNG
- Background: #7c3aed (purple)
- Add padding: 10% around logo

**Size: 192x192px**
- File name: `logo-192x192.png`
- Format: PNG
- Background: #7c3aed (purple)
- Add padding: 10% around logo

**Size: 512x512px**
- File name: `logo-512x512.png`
- Format: PNG
- Background: #7c3aed (purple)
- Add padding: 10% around logo

**3. Save all files to `/public` folder**

---

### Method 3: Using Online Image Resizer

**1. Go to:**
```
https://www.iloveimg.com/resize-image
```

**2. Upload your logo**

**3. Resize to each size:**
- 16x16px → Save as `logo-16x16.png`
- 32x32px → Save as `logo-32x32.png`
- 180x180px → Save as `logo-180x180.png`
- 192x192px → Save as `logo-192x192.png`
- 512x512px → Save as `logo-512x512.png`

**4. Copy all files to `/public` folder**

---

## File Structure

After adding logos, your `/public` folder should look like:

```
public/
├── _redirects
├── manifest.json
├── logo-16x16.png      ← Browser tab (small)
├── logo-32x32.png      ← Browser tab (large)
├── logo-180x180.png    ← iOS home screen
├── logo-192x192.png    ← Android home screen
└── logo-512x512.png    ← PWA splash & social sharing
```

---

## Verification

### Test Locally:

**1. Start dev server:**
```bash
npm run dev
```

**2. Open browser:**
```
http://localhost:5173
```

**3. Check favicon:**
- Look at browser tab
- Should see microscope logo (may need to refresh)

**4. Test PWA manifest:**
- Open DevTools (F12)
- Go to "Application" tab
- Click "Manifest" in sidebar
- Should see all icons listed

### Test After Deployment:

**1. Browser Tab:**
- Open deployed site
- Check favicon appears in tab

**2. iOS (Safari):**
- Open site on iPhone
- Tap Share → "Add to Home Screen"
- Check logo appears correctly

**3. Android (Chrome):**
- Open site on Android
- Tap menu → "Add to Home screen"
- Check logo appears correctly

**4. Social Sharing:**
- Share link on WhatsApp
- Should see logo in preview
- Share link on Twitter
- Should see logo in card preview

---

## Troubleshooting

### Logo Not Showing in Browser Tab:

**Problem:** Favicon doesn't appear
**Solutions:**
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Close and reopen browser
3. Check file names match exactly (case-sensitive)
4. Verify files are in `/public` folder, not `/public/public`

### Logo Looks Blurry:

**Problem:** Low quality logo
**Solutions:**
1. Use higher resolution source image
2. Export at 2x size, then scale down
3. Use PNG format (not JPG)
4. Ensure transparent background

### Logo Not Showing on Home Screen:

**Problem:** PWA icon doesn't appear
**Solutions:**
1. Check `manifest.json` exists in `/public`
2. Verify icon paths in `manifest.json`
3. Clear browser cache
4. Re-add to home screen

### Wrong Colors:

**Problem:** Logo colors look different
**Solutions:**
1. Check color profile (use sRGB)
2. Ensure PNG format (supports transparency)
3. Match background to theme color (#7c3aed)

---

## Design Tips

### For Best Results:

**✅ DO:**
- Use transparent background for small sizes (16x16, 32x32)
- Use purple background (#7c3aed) for large sizes
- Add 10% padding around logo for large sizes
- Keep logo centered
- Use high-quality source image
- Test on multiple devices

**❌ DON'T:**
- Use JPG format (no transparency)
- Make logo too detailed (won't show at small sizes)
- Use white background (won't stand out)
- Forget to test on mobile
- Use low-resolution source

### Color Reference:

**Theme Purple:** `#7c3aed`
- RGB: (124, 58, 237)
- HSL: (260, 83%, 58%)

**Gradient (if needed):**
- Start: `#7c3aed` (purple)
- End: `#3b82f6` (blue)

---

## Alternative: Temporary Placeholder

**If you can't create logos right now:**

You can use a temporary text-based favicon until you add the proper logos.

**Create a simple SVG favicon:**

1. Create file: `/public/favicon.svg`
2. Add this content:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#7c3aed"/>
  <text x="50" y="70" font-size="60" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold">L</text>
</svg>
```

3. Update `index.html`:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

**This will show a purple square with "L" until you add the proper logos.**

---

## Summary

**Required Files:**
- ✅ `logo-16x16.png` (16x16px)
- ✅ `logo-32x32.png` (32x32px)
- ✅ `logo-180x180.png` (180x180px)
- ✅ `logo-192x192.png` (192x192px)
- ✅ `logo-512x512.png` (512x512px)

**Location:** `/public` folder

**Recommended Tool:** https://realfavicongenerator.net/

**Time Required:** 5 minutes

**After Adding Logos:**
1. Test locally (`npm run dev`)
2. Build project (`npm run build`)
3. Deploy to Netlify
4. Test on live site
5. Test on mobile devices
6. Share with users!

---

**Need the logo file?**
The microscope logo image is in your project. If you need help locating it, check:
- Email attachments
- Downloads folder
- Design files folder
- Or ask the designer for the original file

**Ready to deploy once logos are added! 🚀**
