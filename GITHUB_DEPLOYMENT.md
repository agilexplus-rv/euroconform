# GitHub to Hetzner Deployment Guide

Your EuroConform platform is now on GitHub and ready for automated deployment to Hetzner VPS.

## 🔗 Repository

**GitHub**: `https://github.com/agilexplus-rv/euroconform`

---

## 🚀 **Option 1: Automated Deployment (CI/CD)**

GitHub Actions will automatically deploy on every push to `main`.

### Setup Steps

#### 1. Configure GitHub Secrets

Go to: `https://github.com/agilexplus-rv/euroconform/settings/secrets/actions`

Add these secrets:
- `HETZNER_SSH_KEY` - Private SSH key for server access
- `HETZNER_USER` - SSH username (usually `root`)
- `HETZNER_HOST` - Server IP or domain

#### 2. Initial Server Setup

SSH into your Hetzner VPS and run:

```bash
# Create app directory
mkdir -p /opt/euroconform
cd /opt/euroconform

# Clone repository
git clone https://github.com/agilexplus-rv/euroconform.git .

# Set up environment
cp .env.example .env
nano .env  # Edit with production values

# Create .env file with production secrets
```

#### 3. Server Prerequisites

Follow `DEPLOYMENT.md` to install:
- Docker & Docker Compose
- PostgreSQL
- Redis
- Nginx
- Certbot (SSL)

#### 4. First Deployment

```bash
# On your local machine
git push origin main

# Or manually on server
cd /opt/euroconform
git pull
docker-compose up -d
```

#### 5. Verify Deployment

Check GitHub Actions: `https://github.com/agilexplus-rv/euroconform/actions`

---

## 📦 **Option 2: Manual Deployment**

Deploy manually when ready:

### On Your Hetzner Server

```bash
# SSH into server
ssh user@your-vps-ip

# Navigate to app directory
cd /opt/euroconform

# Pull latest code
git pull origin main

# Build and start containers
docker-compose build
docker-compose up -d

# Run migrations
docker-compose exec app npm run db:migrate

# Check logs
docker-compose logs -f app
```

---

## 🔐 **Required Environment Variables**

Create `.env` on your server with:

```env
# Database
DATABASE_URL="postgresql://user:password@postgres:5432/euroconform?schema=public"
POSTGRES_PASSWORD="STRONG_PASSWORD"

# App
NEXT_PUBLIC_APP_URL="https://euroconform.eu"

# Keycloak
KEYCLOAK_URL="https://keycloak.euroconform.eu"
KEYCLOAK_REALM="euroconform"
KEYCLOAK_CLIENT_ID="euroconform-web"
KEYCLOAK_CLIENT_SECRET="production-secret"

# Stripe
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Redis
REDIS_URL="redis://redis:6379"

# MinIO/S3
AWS_ACCESS_KEY_ID="your-key"
AWS_SECRET_ACCESS_KEY="your-secret"
AWS_BUCKET_NAME="euroconform-documents"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="rudvel@gmail.com"
SMTP_PASSWORD="app-password"
SMTP_FROM="noreply@euroconform.eu"

# Security
JWT_SECRET="$(openssl rand -hex 32)"
ENCRYPTION_KEY="$(openssl rand -hex 32)"
```

---

## 🔄 **Deployment Workflow**

### Development → Staging → Production

```
1. Local Development
   ↓ git push
2. GitHub Repository
   ↓ GitHub Actions
3. Auto-deploy to Hetzner
   ↓ Docker Compose
4. Production Site
   ↓ https://euroconform.eu
```

### Testing Before Deploy

```bash
# Test locally with production-like setup
docker-compose up -d
docker-compose logs -f

# Test production build
npm run build

# Test on port 3000
docker-compose exec app npm start
```

---

## 📊 **Monitoring Deployment**

### Check Status

```bash
# Container status
docker-compose ps

# Application logs
docker-compose logs -f app

# Database logs
docker-compose logs -f postgres

# Nginx logs
docker-compose logs -f nginx

# All services
docker-compose logs -f
```

### Health Checks

```bash
# App health
curl http://localhost:3000/health

# Database
docker-compose exec postgres pg_isready

# Redis
docker-compose exec redis redis-cli ping
```

---

## 🛡️ **Security Checklist**

Before production launch:

- [ ] Strong database passwords
- [ ] SSL certificates configured
- [ ] Firewall rules set up
- [ ] GitHub secrets configured
- [ ] Backup strategy in place
- [ ] Monitoring enabled
- [ ] Log rotation configured
- [ ] Rate limiting active
- [ ] Security headers enabled
- [ ] Regular updates scheduled

---

## 🚨 **Troubleshooting**

### Build Fails

```bash
# Check logs
docker-compose logs app

# Rebuild
docker-compose build --no-cache
docker-compose up -d
```

### Database Connection Issues

```bash
# Check PostgreSQL
docker-compose exec postgres psql -U postgres

# Test connection
docker-compose exec app npx prisma db push
```

### Port Conflicts

```bash
# Check what's using port 3000
netstat -tulpn | grep 3000

# Use different port in docker-compose.yml
```

### SSL Certificate Issues

```bash
# Renew certificate
sudo certbot renew

# Reload Nginx
sudo systemctl reload nginx
```

---

## 📝 **Post-Deployment**

After successful deployment:

1. ✅ Verify site loads: `https://euroconform.eu`
2. ✅ Test public pages
3. ✅ Create admin account
4. ✅ Test product creation
5. ✅ Verify labels generate
6. ✅ Test email sending
7. ✅ Check audit logs
8. ✅ Monitor error logs
9. ✅ Set up backups
10. ✅ Enable monitoring

---

## 🔗 **Useful Links**

- **Repository**: https://github.com/agilexplus-rv/euroconform
- **Deployment Guide**: `DEPLOYMENT.md`
- **Project README**: `README.md`
- **Next Steps**: `NEXT_STEPS.md`
- **Status**: `FINAL_STATUS.md`

---

## 🎉 **You're All Set!**

Your EuroConform platform is:
- ✅ On GitHub
- ✅ Ready for deployment
- ✅ Documented
- ✅ Production-ready

Deploy when you're ready! 🚀

