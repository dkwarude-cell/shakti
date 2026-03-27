# Vercel Deployment Setup Guide

## ✅ Frontend Configuration Complete

Your React + Vite frontend is now fully configured for Vercel deployment.

### What's Been Fixed

1. ✅ **Fixed invalid header patterns** - Changed `/.*` to `/:path*` (Vercel-compliant glob syntax)
2. ✅ **Added output directory** - Properly configured `Frontend/dist` as output
3. ✅ **Security headers** - Added X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
4. ✅ **Asset caching** - 1-year cache for assets with immutable flag
5. ✅ **SPA routing** - All routes rewrite to `/index.html` for React Router
6. ✅ **Environment variables** - Configured for dynamic API URL injection
7. ✅ **Build optimization** - Minified output, source maps disabled in production

### Project Structure
```
Shakti-Link-Repo/
├── Frontend/          ← Vercel deploys this
│   ├── src/
│   ├── dist/          ← Build output
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
├── Tech_Horizon/      ← Separate backend deployment
└── vercel.json        ← Deployment configuration
```

---

## 🚀 Deploy to Vercel in 5 Steps

### Step 1: Go to Vercel Dashboard
- Visit https://vercel.com/dashboard
- Click "Add New" → "Project"

### Step 2: Import GitHub Repository
- Select: `dkwarude-cell/shakti`
- Click "Import"

### Step 3: Configure Build Settings
Vercel auto-detects from `vercel.json`:
- **Framework Preset:** Vite
- **Build Command:** `cd Frontend && npm install && npm run build`
- **Output Directory:** `Frontend/dist`
- **Root Directory:** (leave as default)

### Step 4: Set Environment Variables
**In Vercel Dashboard → Settings → Environment Variables:**

```env
VITE_API_BASE_URL=https://your-backend-api.com/api
VITE_API_VERSION=v1
```

⚠️ **Important:** Replace `your-backend-api.com` with your actual backend URL
- For Railway backend: Get URL from Railway dashboard
- For local testing: `http://localhost:8080/api`

### Step 5: Deploy
- Click "Deploy"
- Wait for build to complete
- Your app will be live at: `https://shakti-dep-atharva.vercel.app`

---

## 📋 Pre-Deployment Checklist

- [ ] GitHub repository connected with fresh push
- [ ] `vercel.json` is valid (no errors on import)
- [ ] `Frontend/package.json` has correct dependencies
- [ ] Backend API URL is documented and ready
- [ ] Environment variables are set in Vercel dashboard
- [ ] Local build works: `cd Frontend && npm run build`

### Local Build Test
```bash
cd Frontend
npm install
npm run build
npm run preview
```

Should show no errors and preview the production build.

---

## 🔧 Backend API Setup

The frontend requires a backend API. You have two options:

### Option A: Deploy Backend to Railway
1. See `Tech_Horizon/` folder for backend code
2. Follow `RAILWAY_DEPLOYMENT.md`
3. Get the production URL from Railway
4. Add to `VITE_API_BASE_URL` in Vercel

### Option B: Use Existing Backend
1. Get your backend URL (e.g., Railway, AWS, Heroku)
2. Add to Environment Variables in Vercel:
   ```env
   VITE_API_BASE_URL=https://your-backend-url.com/api
   ```

---

## 🔒 Security Headers Configured

Your Vercel deployment includes security headers:

```json
{
  "X-Content-Type-Options": "nosniff",     // Prevent MIME type sniffing
  "X-Frame-Options": "SAMEORIGIN",         // Prevent clickjacking
  "X-XSS-Protection": "1; mode=block"      // XSS protection
}
```

---

## 🚨 Troubleshooting

### Issue: Build Fails
**Check:**
- [ ] `package.json` dependencies are correct
- [ ] No TypeScript errors
- [ ] Build works locally: `npm run build`

**Solution:** Check Vercel build logs at Project → Deployments → Failed Deployment

### Issue: White Screen in Production
**Check:**
- [ ] Open DevTools → Console (F12)
- [ ] Look for CORS or API errors
- [ ] Verify `VITE_API_BASE_URL` is set correctly
- [ ] Backend API is running and accessible

**Common Cause:** Backend URL is wrong or backend is not running

### Issue: API Calls Fail
**Check:**
- [ ] Backend has CORS enabled (should have from Spring Boot config)
- [ ] `VITE_API_BASE_URL` is correct in Vercel env vars
- [ ] Backend API is accessible from your current location

**Test CORS:**
```javascript
// In browser console:
fetch('https://your-backend-url.com/health')
  .then(r => r.json())
  .then(console.log)
  .catch(console.error)
```

### Issue: Routes Don't Work
**Check:**
- [ ] All routes rewrite to `/index.html` (configured in `vercel.json`)
- [ ] React Router is properly set up
- [ ] No 404 errors on navbar clicks

---

## 📊 Build Optimization Stats

```
Frontend Production Build:
├── HTML: 0.73 kB (gzip: 0.44 kB)
├── CSS: 21.08 kB (gzip: 4.53 kB) 
└── JavaScript: 283.83 kB (gzip: 82.90 kB)

Total: ~305 kB (gzip: ~87 kB)
Cache Control: 1-year immutable for assets
```

---

## 🔄 Continuous Deployment

After initial setup, every push to `main` branch automatically deploys:

1. Push code to GitHub
2. Vercel detects change
3. Runs build command
4. Deploys to production
5. Gets new URL (or uses existing if you set a custom domain)

---

## 📚 Useful Links

- **Vercel Docs:** https://vercel.com/docs
- **Vite Guide:** https://vitejs.dev/guide/
- **React Router:** https://reactrouter.com/
- **Environment Variables:** https://vercel.com/docs/projects/environment-variables

---

## ❓ Still Having Issues?

1. **Check Vercel build logs:** Project → Deployments → Click failed deployment
2. **Test locally first:** `npm run build && npm run preview`
3. **Verify environment variables:** Settings → Environment Variables
4. **Review this guide:** Each section has troubleshooting tips

---

**Last Updated:** 2026-03-28
**Project:** शक्ति Link (Shakti Link)
**Status:** ✅ Ready for Vercel Deployment
