# शक्ति Link - Railway.app Deployment Guide

## Complete Step-by-Step Tutorial

**Total Time:** ~20 minutes  
**Cost:** Free to start ($5/month credit covers everything)

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Create Railway Account](#create-railway-account)
3. [Create Project & Database](#create-project--database)
4. [Deploy Backend](#deploy-backend)
5. [Configure Environment Variables](#configure-environment-variables)
6. [Deploy Frontend](#deploy-frontend)
7. [Test Deployment](#test-deployment)
8. [Monitoring & Logs](#monitoring--logs)

---

## Prerequisites

Before you start, make sure you have:
- ✅ GitHub account with code pushed
- ✅ GitHub repository: https://github.com/Atharvag9/Shakti-Link-Repo
- ✅ Gmail account (for email configuration)
- ✅ `.env.example` file in backend (already created)

---

## Create Railway Account

### Step 1: Go to Railway
1. Open https://railway.app in your browser
2. Click **"Start For Free"** button
3. Sign up options:
   - ✅ GitHub (Recommended - easiest)
   - Email
   - Google

### Step 2: Authorize GitHub (if using GitHub login)
1. Click "Continue with GitHub"
2. You'll be redirected to GitHub
3. Click "Authorize railway-app"
4. Confirm your email
5. ✅ Railway account created!

---

## Create Project & Database

### Step 3: Create New Project
1. On Railway dashboard, click **"New Project"**
2. Click **"Deploy from GitHub Repo"**
3. Search and select: **Shakti-Link-Repo**
4. Click **"Configure GitHub App"** (if prompted)
   - Select your repository
   - Authorize Railway

### Step 4: Add PostgreSQL Database
1. Click **"Add Service"** (or + button)
2. Select **"Database"**
3. Choose **"PostgreSQL"**
4. Railway creates a PostgreSQL instance automatically! ✅

### Step 5: Configure Backend Service
1. In your project, click the **GitHub repo service** (not the database)
2. Go to **"Settings"** tab
3. Configure:
   - **Root Directory:** `Tech_Horizon`
   - **Build Command:** `mvn clean package`
   - **Start Command:** `java -jar target/Tech_Horizon-*.jar`
   - **Port:** `8080`

---

## Deploy Backend

### Step 6: Deploy to Railway
1. Go to **"Deployments"** tab
2. Click **"Deploy Branch"** (or wait for auto-deploy)
3. Watch the logs in real-time
4. Wait for: "Deployment successful!" ✅

### What Railway Does:
- ✅ Pulls code from GitHub
- ✅ Runs `mvn clean package`
- ✅ Builds JAR file
- ✅ Starts Java application
- ✅ Assigns public URL (e.g., `https://your-app-production.up.railway.app`)

---

## Configure Environment Variables

### Step 7: Set Backend Environment Variables

1. Go to your Railway project dashboard
2. Click on the **Backend service** (spring boot jar)
3. Go to **"Variables"** tab
4. Add these variables one by one:

```
# Database (Railway PostgreSQL auto-configured)
DB_URL=postgresql://<user>:<password>@<host>:<port>/<database>
DB_USERNAME=postgres
DB_PASSWORD=<your-password>

# Get these from: PostgreSQL service → Variables → DATABASE_URL
```

**Find Database Credentials:**
1. Click the **PostgreSQL service** in your project
2. Go to **"Variables"** tab
3. Copy the connection details:
   - `PGHOST` = host
   - `PGPORT` = port (usually 5432)
   - `PGUSER` = username
   - `PGPASSWORD` = password
   - `PGDATABASE` = database name

4. Build `DB_URL` like: 
   ```
   jdbc:postgresql://server-name.railway.internal:5432/railway
   ```

### Step 8: Add Security Variables

In the **Backend service Variables** tab, add:

```
# JWT Configuration (MUST generate new secret for production!)
JWT_SECRET=your_super_secret_key_with_32_characters_minimum_long
JWT_EXPIRATION=3600000

# Email Configuration (Gmail)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_gmail_app_password_HERE

# Spring Profile
SPRING_PROFILES_ACTIVE=production

# JPA Configuration
JPA_DDL_AUTO=validate
SHOW_SQL=false

# Server
SERVER_PORT=8080
```

### Step 9: Generate Secret Values

**For JWT_SECRET:**
```bash
# Run in your terminal (Windows PowerShell):
[Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((Get-Random -InputObject (48..122) -Count 44 | ForEach-Object {[char]$_}) -join ''))

# Or use openssl (if installed):
openssl rand -base64 32
```

**For Gmail App Password:**
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" → "Windows Computer"
3. Google generates a 16-char password
4. Copy and paste into `MAIL_PASSWORD`

---

## Deploy Frontend

### Step 10: Deploy Frontend to Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click **"Import Project"**
4. Select **Shakti-Link-Repo**
5. Configure:
   - **Framework:** Vite
   - **Root Directory:** `Frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Add Environment Variable:
   ```
   VITE_API_BASE_URL = https://your-railway-backend-url
   ```
   (Get this from Railway backend service → Deployments → Public URL)

7. Click **Deploy** ✅

---

## Connect Frontend to Backend

### Step 11: Link Frontend to Backend

1. From Railway, copy your **Backend Public URL**
   - Go to Backend service → Deployments
   - Find the "Public URL" (something like `https://shakti-link-api-production.up.railway.app`)

2. In Vercel:
   - Go to Project Settings
   - Environment Variables
   - Update `VITE_API_BASE_URL` with your Railway backend URL
   - Redeploy

3. Frontend now communicates with backend! ✅

---

## Test Deployment

### Step 12: Test Your Deployment

#### Test Backend API:
```bash
# 1. Test if backend is running
curl https://your-railway-backend-url/api/

# 2. Test signup endpoint (example)
curl -X POST https://your-railway-backend-url/api/auth/donor/sign-up \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123!"}'

# 3. Check if database connected
# (Look at Railway logs for SQL queries)
```

#### Test Frontend:
1. Go to your Vercel frontend URL
2. Click navigation links
3. Try to sign up (should work)
4. Check browser console for errors

#### Expected Results:
- ✅ Frontend loads
- ✅ Navbar links work
- ✅ Can see all pages
- ✅ No API errors in console
- ✅ Database is working

---

## Monitoring & Logs

### Step 13: Monitor Your Deployment

**Railway Dashboard:**
1. Real-time logs - see what's happening
2. Metrics - CPU, memory, network usage
3. Deployments - history of all deployments
4. Variable management - update config anytime

**View Logs:**
1. Click Backend service in Railway
2. Go to **"Logs"** tab
3. See real-time logs as users interact

**Debug Issues:**
- Check environment variables are correct
- Look for SQL errors in logs
- Verify JWT_SECRET is set
- Check database connection in logs
- See email service logs

---

## Common Issues & Solutions

### Issue 1: Database Connection Failed
**Error:** `Connection refused` or `FATAL: password authentication failed`

**Solution:**
- Get connection details from PostgreSQL service
- Verify DB_URL format: `jdbc:postgresql://host:5432/database`
- Check username and password match
- Ensure `@` and `:` are in correct places

### Issue 2: Build Failed
**Error:** `mvn clean package failed`

**Solution:**
- Check Java version (should be 23)
- Verify all dependencies in pom.xml
- Check build logs for specific error
- Ensure Root Directory is `Tech_Horizon`

### Issue 3: Application Crashes on Startup
**Error:** `Application failed to start`

**Solution:**
- Check environment variables are set
- Verify JWT_SECRET has at least 32 characters
- Ensure database is reachable
- Look for NullPointerException in logs

### Issue 4: Frontend Can't Call Backend
**Error:** `CORS error` or `Failed to fetch`

**Solution:**
- Verify `VITE_API_BASE_URL` is correct (include https://)
- Check backend URL is public (not internal)
- Test API directly in browser: `https://your-api-url/api/`
- Add CORS headers if needed

---

## Environment Variables Checklist

```
Database:
□ DB_URL
□ DB_USERNAME
□ DB_PASSWORD

Security:
□ JWT_SECRET (32+ characters)
□ JWT_EXPIRATION

Email:
□ MAIL_HOST=smtp.gmail.com
□ MAIL_PORT=587
□ MAIL_USERNAME
□ MAIL_PASSWORD

Spring Configuration:
□ SPRING_PROFILES_ACTIVE=production
□ JPA_DDL_AUTO=validate
□ SHOW_SQL=false
□ SERVER_PORT=8080
```

---

## Auto-Deployment Setup

### Continuous Deployment
Railway **automatically deploys** when you push to GitHub!

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "your message"
   git push origin main
   ```
3. Railway detects push automatically
4. Rebuilds and redeploys
5. ✅ Your changes are live!

No need to manually redeploy!

---

## Production URLs

After deployment, you'll have:

```
Frontend URL (Vercel):
https://your-frontend-name.vercel.app

Backend URL (Railway):
https://your-railway-backend-name.up.railway.app

Database (Railway PostgreSQL):
Internal: postgresql://host:5432/database
```

---

## Next Steps

1. ✅ Deploy backend to Railway
2. ✅ Deploy frontend to Vercel
3. ✅ Test end-to-end
4. ✅ Monitor logs
5. Update README with live URLs
6. Share with team members

---

## Cost Breakdown

| Service | Cost | Purpose |
|---------|------|---------|
| Railway Backend | $0-5/month | Spring Boot API |
| Railway Database | $0-5/month | PostgreSQL |
| Vercel Frontend | Free | React frontend |
| Gmail SMTP | Free | Email sending |
| **TOTAL** | ~$5-10/month | Full deployment |

---

## Support & Links

- **Railway Docs:** https://docs.railway.app
- **Vercel Docs:** https://vercel.com/docs
- **Spring Boot Docs:** https://spring.io/projects/spring-boot
- **PostgreSQL Docs:** https://www.postgresql.org/docs

---

## Video Tutorial Alternative

If you prefer video guides:
1. Search "Railway Spring Boot deployment" on YouTube
2. Search "Vercel React deployment" on YouTube
3. Follow along with your project

---

## You're All Set! 🚀

Your शक्ति Link application is now deployed and live!

- Frontend: `https://your-vercel-url`
- Backend: `https://your-railway-url`
- Database: PostgreSQL (managed by Railway)

**Congratulations on going live!** 🎉

---

**Questions? Check the logs in Railway dashboard - they're very detailed and helpful!**
