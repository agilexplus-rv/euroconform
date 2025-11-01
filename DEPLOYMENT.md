# EuroConform Deployment Guide

Comprehensive deployment guide for Hetzner VPS using Docker Compose, Nginx, and Let's Encrypt.

## Prerequisites

- Hetzner VPS (minimum 2GB RAM, 2 CPUs)
- Domain name pointing to server IP
- SSH access to server
- Docker & Docker Compose installed

## Server Setup

### 1. Initial Server Configuration

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose-plugin -y

# Add user to docker group
sudo usermod -aG docker $USER

# Install Nginx
sudo apt install nginx -y

# Install Certbot
sudo apt install certbot python3-certbot-nginx -y
```

### 2. Clone and Configure

```bash
# Clone repository
cd /opt
sudo git clone <repository-url> euroconform
cd euroconform

# Create production environment file
sudo cp .env.example .env
sudo nano .env
```

**Configure `.env` with production values:**

```env
# Database
DATABASE_URL="postgresql://postgres:STRONG_PASSWORD_HERE@postgres:5432/euroconform?schema=public"
POSTGRES_PASSWORD="STRONG_PASSWORD_HERE"

# Next.js
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
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."

# Redis
REDIS_URL="redis://redis:6379"

# MinIO (local S3)
AWS_ACCESS_KEY_ID="strong-access-key"
AWS_SECRET_ACCESS_KEY="strong-secret-key"
AWS_REGION="eu-south-1"
AWS_ENDPOINT="http://minio:9000"
AWS_BUCKET_NAME="euroconform-documents"
AWS_BUCKET_ENDPOINT="http://minio:9000"

# SMTP
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="rudvel@gmail.com"
SMTP_PASSWORD="app-specific-password"
SMTP_FROM="noreply@euroconform.eu"

# Company Info
COMPANY_NAME="EuroConform Ltd"
COMPANY_ADDRESS="Malta"
INSURANCE_COVERAGE="€1 million"

# Security
JWT_SECRET="generate-with-openssl-rand-hex-32"
ENCRYPTION_KEY="generate-with-openssl-rand-hex-32"

# MinIO
MINIO_ROOT_USER="minioadmin"
MINIO_ROOT_PASSWORD="STRONG_PASSWORD_HERE"
```

Generate secrets:
```bash
openssl rand -hex 32  # For JWT_SECRET
openssl rand -hex 32  # For ENCRYPTION_KEY
```

### 3. SSL Certificate Setup

```bash
# Stop Nginx temporarily
sudo systemctl stop nginx

# Obtain certificate (standalone mode)
sudo certbot certonly --standalone -d euroconform.eu -d www.euroconform.eu

# Certificate will be at:
# /etc/letsencrypt/live/euroconform.eu/fullchain.pem
# /etc/letsencrypt/live/euroconform.eu/privkey.pem
```

### 4. Configure Nginx

```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/euroconform
```

**Content:**
```nginx
upstream euroconform {
    server localhost:3000;
}

server {
    listen 80;
    server_name euroconform.eu www.euroconform.eu;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name euroconform.eu www.euroconform.eu;

    ssl_certificate /etc/letsencrypt/live/euroconform.eu/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/euroconform.eu/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json image/svg+xml;

    client_max_body_size 50M;

    location / {
        proxy_pass http://euroconform;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    location /_next/static {
        proxy_pass http://euroconform;
        add_header Cache-Control "public, max-age=3600, immutable";
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/euroconform /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 5. Build and Deploy

```bash
cd /opt/euroconform

# Build containers
sudo docker compose build

# Start services
sudo docker compose up -d

# Run migrations
sudo docker compose exec app npm run db:push

# Check logs
sudo docker compose logs -f app
```

### 6. SSL Auto-Renewal

```bash
# Certbot auto-renewal is automatic, but verify:
sudo certbot renew --dry-run

# Add renewal hook to restart Nginx
sudo nano /etc/letsencrypt/renewal-hooks/deploy/restart-nginx.sh
```

```bash
#!/bin/bash
systemctl reload nginx
```

```bash
sudo chmod +x /etc/letsencrypt/renewal-hooks/deploy/restart-nginx.sh
```

### 7. Firewall Configuration

```bash
# Enable UFW firewall
sudo ufw enable

# Allow SSH
sudo ufw allow 22/tcp

# Allow HTTP/HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Deny direct Docker access
sudo ufw deny 3000/tcp
sudo ufw deny 5432/tcp
sudo ufw deny 6379/tcp
sudo ufw deny 9000/tcp
sudo ufw deny 9001/tcp

# Check status
sudo ufw status
```

### 8. Monitoring & Maintenance

```bash
# View logs
sudo docker compose logs -f

# Restart services
sudo docker compose restart

# Database backup
sudo docker compose exec postgres pg_dump -U postgres euroconform > backup.sql

# Update application
cd /opt/euroconform
sudo git pull
sudo docker compose build
sudo docker compose up -d

# Database migrations
sudo docker compose exec app npm run db:migrate
```

### 9. Keycloak Setup (Optional)

If using external Keycloak:

1. Deploy Keycloak instance
2. Configure realm: `euroconform`
3. Create client: `euroconform-web`
4. Enable 2FA TOTP
5. Configure OIDC endpoints

## Health Checks

```bash
# Application health
curl http://localhost:3000/health

# Database connection
sudo docker compose exec postgres pg_isready

# Redis connection
sudo docker compose exec redis redis-cli ping

# MinIO connection
curl http://localhost:9000/minio/health/live
```

## Troubleshooting

### Database Connection Issues
```bash
# Check PostgreSQL
sudo docker compose exec postgres psql -U postgres -c "SELECT version();"
```

### Redis Connection Issues
```bash
# Check Redis
sudo docker compose exec redis redis-cli ping
```

### SSL Certificate Issues
```bash
# Check certificate expiry
sudo certbot certificates

# Renew manually
sudo certbot renew
```

### Disk Space
```bash
# Clean Docker
sudo docker system prune -a

# Clean old images
sudo docker image prune -a
```

## Backup Strategy

### Daily Backups
```bash
# Create backup script
sudo nano /opt/euroconform/backup.sh
```

```bash
#!/bin/bash
BACKUP_DIR="/opt/euroconform/backups"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Database backup
sudo docker compose exec -T postgres pg_dump -U postgres euroconform | gzip > $BACKUP_DIR/db_$DATE.sql.gz

# MinIO backup
sudo docker compose exec -T minio mc mirror /data $BACKUP_DIR/files_$DATE

# Clean old backups (keep 7 days)
find $BACKUP_DIR -type f -mtime +7 -delete
```

```bash
sudo chmod +x /opt/euroconform/backup.sh

# Add to crontab
sudo crontab -e
# Add: 0 2 * * * /opt/euroconform/backup.sh
```

## Security Checklist

- [ ] Strong database passwords
- [ ] SSL certificates installed
- [ ] Firewall configured
- [ ] Docker ports not exposed
- [ ] Nginx security headers
- [ ] Rate limiting enabled
- [ ] Regular backups
- [ ] SSL auto-renewal
- [ ] Monitoring enabled
- [ ] Log rotation configured

## Support

For deployment issues, contact rudvel@gmail.com

