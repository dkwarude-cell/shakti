# शक्ति Link - Complete Deployment Guide

## Project Overview

**शक्ति Link** is a three-tier web application for transparent charitable giving, connecting donors, educational institutions, and suppliers.

- **Frontend:** React + Vite (Vercel deployment ready)
- **Backend:** Spring Boot 3.4.3 (Java 23)
- **Database:** PostgreSQL
- **Status:** Production-ready with security hardened

---

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Pre-Deployment Checklist](#pre-deployment-checklist)
3. [Environment Setup](#environment-setup)
4. [Backend Deployment](#backend-deployment)
5. [Frontend Deployment](#frontend-deployment)
6. [Database Setup](#database-setup)
7. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Technology Stack

### Frontend
- **Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **Styling:** Tailwind CSS 3.3.6
- **HTTP Client:** Axios 1.6.2
- **State Management:** Zustand 4.4.2
- **Routing:** React Router 6.20.1

### Backend
- **Framework:** Spring Boot 3.4.3
- **Java Version:** 23
- **Security:** Spring Security + JWT
- **ORM:** JPA/Hibernate
- **Database Driver:** PostgreSQL JDBC
- **Email:** Spring Mail
- **Build Tool:** Maven

### Database
- **Type:** PostgreSQL 12+
- **Connection Pooling:** HikariCP
- **Migration:** Database schema validation

---

## Pre-Deployment Checklist

- [ ] GitHub repository created and code pushed
- [ ] Environment variables file created (.env for backend)
- [ ] Database credentials secured
- [ ] JWT secret generated and secured
- [ ] Email credentials configured (Gmail App Password)
- [ ] Frontend dist/ folder built
- [ ] Backend JAR built (mvn clean package)
- [ ] SSL/HTTPS certificates ready
- [ ] Firewall/security groups configured

---

## Environment Setup

### Backend Environment Variables

Create a `.env` file in the `Tech_Horizon/` directory with the following variables:

```
# Database
DB_URL=jdbc:postgresql://your-db-host:5432/tech_horizon_prod
DB_USERNAME=your_db_user
DB_PASSWORD=your_secure_db_password

# JWT Security
JWT_SECRET=your_secret_key_min_32_chars_generated_with_openssl_rand
JWT_EXPIRATION=3600000

# Email Configuration
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=your_gmail_app_password

# Server
SERVER_PORT=8080
JPA_DDL_AUTO=validate
SHOW_SQL=false
SPRING_PROFILES_ACTIVE=production
```

### Frontend Environment Variables

Create `.env` in `Frontend/` directory:

```
VITE_API_BASE_URL=https://your-backend-api.com
```

---

## Backend Deployment

### Option 1: Railway.app (Recommended for Beginners)

1. **Create Railway Account**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Database" → "PostgreSQL"
   - Add service → "Deploy from GitHub repo"

3. **Connect GitHub Repository**
   - Select your Shakti-Link-Repo
   - Configure build command: `mvn clean package`
   - Set root directory: `Tech_Horizon`

4. **Configure Environment Variables**
   - Go to Variables tab
   - Add all variables from `.env` file
   - Ensure `SPRING_PROFILES_ACTIVE=production`

5. **Deploy**
   - Railway auto-deploys on GitHub push
   - Monitor logs in dashboard
   - Get public API URL from service details

### Option 2: Render.com

1. Go to https://render.com
2. Create new "Web Service"
3. Connect GitHub repository
4. Set build command: `cd Tech_Horizon && mvn clean package`
5. Set start command: `java -jar target/Tech_Horizon-*.jar`
6. Add environment variables
7. Deploy and monitor

### Option 3: AWS Elastic Beanstalk

1. Package the Spring Boot JAR
2. Create Beanstalk environment
3. Upload JAR to Beanstalk
4. Configure environment properties
5. Set RDS PostgreSQL connection
6. Deploy

### Building Backend Locally

```bash
cd Tech_Horizon
mvn clean package
```

Output: `Tech_Horizon/target/Tech_Horizon-*.jar`

---

## Frontend Deployment

### Deploy to Vercel

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Create New Project**
   - Import `Shakti-Link-Repo` GitHub repository
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Environment Variables**
   - Go to Settings → Environment Variables
   - Add: `VITE_API_BASE_URL=https://your-backend-api.com`

4. **Deploy**
   - Vercel automatically deploys on GitHub push
   - Get production URL (e.g., shakti-link.vercel.app)

### Deploy to Netlify

1. Create Netlify account
2. Connect GitHub repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variable: `VITE_API_BASE_URL`
5. Deploy

---

## Database Setup

### PostgreSQL Installation

**Windows:**
```bash
# Using WSL or native Windows installer
# Download from https://www.postgresql.org/download/windows/
```

**macOS:**
```bash
brew install postgresql@15
brew services start postgresql@15
```

**Linux (Ubuntu):**
```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
```

### Create Database

```sql
-- Connect to PostgreSQL
psql -U postgres

-- Create database for production
CREATE DATABASE tech_horizon_prod;
CREATE USER tech_horizon_user WITH PASSWORD 'your_secure_password';
ALTER ROLE tech_horizon_user SET client_encoding TO 'utf8';
ALTER ROLE tech_horizon_user SET default_transaction_isolation TO 'read committed';
ALTER ROLE tech_horizon_user SET default_transaction_deferrable TO on;
ALTER ROLE tech_horizon_user SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE tech_horizon_prod TO tech_horizon_user;

-- Connect to the database
\c tech_horizon_prod

-- Grant schema privileges
GRANT ALL ON SCHEMA public TO tech_horizon_user;
```

### Using Managed PostgreSQL

**Railway.app PostgreSQL:**
- Automatically provisioned when adding database service
- Connection details provided in dashboard

**AWS RDS:**
1. Create RDS instance
2. PostgreSQL engine
3. Get connection endpoint: `your-db-identifier.c9akciq32.us-east-1.rds.amazonaws.com:5432`
4. Create database using SQL above

**Render.com PostgreSQL:**
1. Add PostgreSQL in Render dashboard
2. Get internal/external connection URLs
3. Use internal URL for backend, external for local testing

---

## Gmail Configuration for Emails

1. **Enable 2-Factor Authentication**
   - Go to myaccount.google.com
   - Security settings
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Google generates 16-character password
   - Copy this as `MAIL_PASSWORD`

3. **Add to .env**
   ```
   MAIL_USERNAME=your_email@gmail.com
   MAIL_PASSWORD=xxxx xxxx xxxx xxxx
   ```

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     Internet Users                          │
└─────────────────────────────────────────────────────────────┘
                              ↓
          ┌────────────────────────────┐
          │  Frontend (Vercel)         │
          │  https://shakti-link.com   │
          │  React + Vite (dist/)      │
          └────────────────────────────┘
                        ↓ API Calls
          ┌────────────────────────────┐
          │  Backend (Railway/Render)  │
          │  https://api.shakti-link   │
          │  Spring Boot 3.4.3 (JAR)   │
          └────────────────────────────┘
                        ↓ SQL Queries
          ┌────────────────────────────┐
          │  Database (Managed PG)     │
          │  PostgreSQL (Cloud)        │
          │  Connection Pool: HikariCP │
          └────────────────────────────┘
```

---

## Monitoring & Maintenance

### Backend Monitoring

**Railway Dashboard:**
- Real-time logs
- Performance metrics
- Error tracking
- CPU/Memory usage

**Set Up Alerts:**
- Monitor error rates
- Set log alerts for exceptions
- Monitor response times

### Database Monitoring

**Check Database Size:**
```sql
SELECT schemaname, COUNT(*) as table_count
FROM pg_tables WHERE schemaname = 'public'
GROUP BY schemaname;
```

**Backup Strategy:**
- Enable automated backups (minimum daily)
- Export database dumps weekly
- Store backups securely

### Frontend Monitoring

**Vercel Analytics:**
- Built-in performance metrics
- Error tracking
- Real User Monitoring (RUM)

---

## Security Best Practices

✅ **Implemented:**
- All credentials externalized to environment variables
- JWT secret secured (32+ characters)
- Database password not in code
- Email credentials via app-specific passwords
- DDL mode: `validate` (prevents data loss)
- HTTPS/SSL configured

✅ **Additional Recommendations:**
- Enable CORS only for known domains
- Rate limiting on API endpoints
- Web Application Firewall (WAF)
- Regular security audits
- Database encryption at rest
- SSH key authentication for deployments

---

## Troubleshooting

### Backend won't start
- Check environment variables are set
- Verify database connection string
- Check database exists and user has permissions
- Review logs for detailed error messages

### Frontend API calls failing
- Verify `VITE_API_BASE_URL` is correct
- Check CORS settings in Spring Boot
- Ensure backend is running
- Check browser console for detailed errors

### Database connection issues
- Verify connection string format
- Check firewall allows connection
- Confirm database user permissions
- Test connection with `psql` CLI

### Email not sending
- Verify Gmail app password is correct
- Check 2-FA is enabled on Gmail account
- Ensure MAIL_USERNAME matches app password gmail
- Review backend logs for SMTP errors

---

## Deployment Summary

**Frontend:**
- Build: `npm run build` → `dist/` folder
- Host: Vercel (push to GitHub auto-deploys)
- URL: `https://shakti-link.vercel.app`

**Backend:**
- Build: `mvn clean package` → `target/Tech_Horizon-*.jar`
- Host: Railway/Render/AWS
- Environment: .env with all credentials
- Profile: `production` (activate via `SPRING_PROFILES_ACTIVE`)

**Database:**
- Type: PostgreSQL (managed cloud instance)
- Schema: Auto-created on first run (then `validate` mode)
- Backups: Daily automated + weekly manual

---

## Next Steps

1. ✅ All code in GitHub
2. Set up PostgreSQL (local or cloud)
3. Configure .env file with secrets
4. Deploy backend to Railway/Render
5. Deploy frontend to Vercel
6. Test end-to-end deployment
7. Monitor logs and metrics
8. Set up continuous deployment on GitHub push

---

## Support & Contact

For issues or questions:
- Check logs on deployment platform dashboard
- Review error messages in backend logs
- Test API endpoints with Postman
- Verify environment variables match .env.example

---

**Happy Deploying! 🚀**
