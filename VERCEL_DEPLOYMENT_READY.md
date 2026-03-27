# शक्ति Link - Vercel Deployment Guide

## Project Preparation Status ✅

Your project has been successfully prepared for Vercel deployment:

- ✅ Frontend built successfully (Vite + React)
- ✅ Vercel configuration optimized (`vercel.json`)
- ✅ Build pipeline configured
- ✅ Security headers added
- ✅ Asset caching configured
- ✅ Code pushed to GitHub repository

---

## Deploying to Vercel

### Prerequisites
- GitHub account (already connected: https://github.com/dkwarude-cell/shakti.git)
- Vercel account (free or paid tier)

### Step 1: Login to Vercel
1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click "Add New..." → "Project"

### Step 2: Import from GitHub
1. Select your GitHub repository: `dkwarude-cell/shakti`
2. Click "Import"

### Step 3: Configure Project
The configuration will be auto-detected from `vercel.json`:

- **Root Directory:** (Auto-detected)
- **Build Command:** `cd Frontend && npm install && npm run build`
- **Output Directory:** `Frontend/dist`
- **Node.js Version:** 18.x

### Step 4: Environment Variables
Add the following in Vercel Project Settings → Environment Variables:

```
VITE_API_BASE_URL=https://your-backend-api.com/api
VITE_API_VERSION=v1
```

**For Development:**
```
VITE_API_BASE_URL=http://localhost:8080/api
VITE_API_VERSION=v1
```

### Step 5: Deploy
1. Click "Deploy"
2. Wait for deployment to complete
3. Your app will be live at: `https://your-project.vercel.app`

---

## Features Configured

### ✅ SPA Routing
All routes are correctly rewritten to `/index.html` for React Router support.

### ✅ Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: enabled

### ✅ Asset Optimization
- Production CSS: 21.08 kB (gzipped: 4.53 kB)
- Production JS: 283.83 kB (gzipped: 82.90 kB)
- Assets cached for 1 year with immutable flag

### ✅ Build Optimization
- Minified JavaScript
- Optimized CSS bundles
- Static asset versioning

---

## Backend Configuration

Your application has two parts:

### Frontend (Deployed on Vercel) ✅
- React + Vite application
- Static hosting
- Ready to deploy

### Backend (Spring Boot)
- Currently configured for Railway deployment
- See `RAILWAY_DEPLOYMENT.md` for backend setup
- API endpoint should be updated in `VITE_API_BASE_URL`

---

## Post-Deployment Checklist

- [ ] Vercel deployment successful
- [ ] Visit your Vercel URL and verify the app loads
- [ ] Update `VITE_API_BASE_URL` with your backend API
- [ ] Test all authentication flows
- [ ] Test all API calls
- [ ] Verify console has no errors
- [ ] Test on mobile devices
- [ ] Set up analytics/monitoring

---

## Troubleshooting

### Build Fails
Check build logs in Vercel Projects → Settings → Logs
Common causes:
- Missing environment variables
- Node version mismatch
- Dependencies not installed

### White Screen in Production
1. Check browser console for errors
2. Verify `VITE_API_BASE_URL` is correct
3. Verify backend API is accessible
4. Check CORS headers on backend

### API Calls Failing
1. Verify `VITE_API_BASE_URL` is correctly set
2. Check backend is running and accessible
3. Verify CORS is enabled on backend
4. Check network tab in DevTools

---

## Next Steps

1. **Deploy Backend**: Follow `RAILWAY_DEPLOYMENT.md` to deploy Spring Boot backend
2. **Configure API**: Update `VITE_API_BASE_URL` with your backend URL
3. **Test Integration**: Run full end-to-end tests
4. **Set Up Monitoring**: Consider Vercel Analytics + backend monitoring
5. **Optimize Performance**: Use Vercel's analytics to identify bottlenecks

---

## Quick Reference

| Component | Status | Next Action |
|-----------|--------|------------|
| Frontend Code | ✅ Ready | Deploy to Vercel |
| GitHub Repo | ✅ Pushed | https://github.com/dkwarude-cell/shakti |
| Build Config | ✅ Configured | Use default settings |
| Environment Vars | ⚠️ Needs Setup | Add in Vercel dashboard |
| Backend | 📋 Separate | Deploy via Railway/AWS |

---

For detailed backend deployment instructions, see `RAILWAY_DEPLOYMENT.md`.
