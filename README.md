# 🏛️ EuroConform Ltd - EU Compliance Platform

**Your Gateway to EU Product Compliance**

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

Professional platform for EU Authorised Representative (Article 4 Regulation EU 2019/1020) and Responsible Person (Article 16 Regulation EU 2023/988) services.

---

## 🎯 Mission

To provide non-EU manufacturers and online sellers with a reliable, transparent, and future-ready compliance partner ensuring smooth EU market access and alignment with emerging sustainability and environmental obligations.

**Tagline**: "EuroConform – Your Gateway to EU Product Compliance"

---

## ✨ Features

### 🌐 Public Portal
- **Home** - Brand presentation with EU legislation citations
- **Pricing** - Transparent Bronze/Silver/Gold annual packages
- **FAQ** - Comprehensive Articles 4 & 16 explanations
- **Contact** - Email integration to rudvel@gmail.com
- **Product Verification** - Public QR code validation portal

### 🔐 Client Portal (Keycloak-Protected)
- **Dashboard** - Overview of designations & subscriptions
- **Product Management** - CRUD within package limits + label download
- **Designation Wizard** - Annual workflow with QES contract signing
- **Contract Vault** - Signed PDFs with eIDAS validation
- **Audit Trail** - Complete history with CSV/XLSX export
- **Account Management** - 2FA, password, notifications

### 👥 Admin Area
- User and organisation management
- Designation and contract oversight
- Audit trail browser
- Package configuration
- Partner & trade fair management

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 15 (App Router, TypeScript) |
| **UI** | Tailwind CSS v4 + shadcn/ui + lucide-react |
| **Database** | PostgreSQL 16 with Prisma ORM |
| **Authentication** | Keycloak (2FA TOTP, OIDC) |
| **Payments** | Stripe (annual subscriptions + add-ons) |
| **Queue** | Redis + BullMQ (reminders & webhooks) |
| **Email** | SMTP integration |
| **Storage** | MinIO/S3 for documents |
| **Deployment** | Docker Compose on Hetzner VPS |

---

## 📦 Pricing

| Package | Products | Annual Fee | Features |
|---------|----------|------------|----------|
| **Bronze** | 1-10 | €1,000 | EU address, labels, verification, email support |
| **Silver** | 11-50 | €1,800 | Priority support, audit export, onboarding help |
| **Gold** | 50+ | €3,000 | Dedicated manager, SLA, custom limits |

**Add-ons**: Technical File Check (€100/hr), DPP Onboarding (€200/SKU)  
**Referral Programme**: 20% commission for approved partners

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- Docker & Docker Compose
- PostgreSQL 16
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/agilexplus-rv/euroconform.git
cd euroconform

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Edit .env with your configuration

# Generate Prisma client
npm run db:push

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your platform!

### Docker Development

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down
```

---

## 📊 Database Schema

Complete Prisma schema with:
- **User** management with Keycloak integration
- **Organisation** profiles
- **Subscription** packages (Bronze/Silver/Gold)
- **Designation** workflows (EU Authorised Rep / Responsible Person)
- **Product** management with unique verification codes
- **Payment** transactions with Stripe integration
- **EventLog** audit trail (append-only)
- **Partner** referral program
- **TradeFair** CMS
- **EmailQueue** for automated reminders

---

## 🔐 Security

- ✅ Helmet.js security headers
- ✅ Content Security Policy (CSP)
- ✅ Rate limiting
- ✅ Input validation (Zod)
- ✅ HTTPS-only in production
- ✅ Append-only audit logs
- ✅ €1 million professional liability insurance

---

## 📜 Legal Framework

All services comply with:
- **Article 4**: Regulation (EU) 2019/1020 - Market Surveillance
- **Article 16**: Regulation (EU) 2023/988 - General Product Safety

**Jurisdiction**: Maltese law  
**Insurance**: €1 million professional liability

---

## 🐳 Deployment

### Hetzner VPS Production Deployment

Follow the comprehensive guide: **[DEPLOYMENT.md](DEPLOYMENT.md)**

Includes:
- Server setup
- Docker configuration
- Nginx reverse proxy
- SSL/TLS with Let's Encrypt
- Firewall configuration
- Backup strategies
- Monitoring setup

### GitHub to Hetzner CI/CD

Automated deployment via GitHub Actions: **[GITHUB_DEPLOYMENT.md](GITHUB_DEPLOYMENT.md)**

---

## 📁 Project Structure

```
EuroConform/
├── app/                    # Next.js pages (13 pages)
│   ├── page.tsx           # Home
│   ├── pricing/           # Pricing page
│   ├── faq/               # FAQ page
│   ├── contact/           # Contact form
│   ├── verify/[code]/     # Product verification
│   ├── auth/login/        # Authentication
│   ├── dashboard/         # Client portal
│   │   ├── page.tsx       # Main dashboard
│   │   ├── products/      # Products management
│   │   ├── designations/  # Designations wizard
│   │   └── audit/         # Audit log
│   └── api/               # API endpoints
├── lib/                   # Core utilities (10 modules)
├── components/ui/         # shadcn/ui components
├── prisma/
│   └── schema.prisma      # Complete database schema
├── docker-compose.yml     # Docker services
├── Dockerfile             # Production container
├── nginx.conf             # Reverse proxy
├── DEPLOYMENT.md          # Server setup guide
├── README.md              # This file
└── .env.example           # Configuration template
```

---

## 📚 Documentation

- **[README.md](README.md)** - This file (project overview)
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Production deployment guide
- **[GITHUB_DEPLOYMENT.md](GITHUB_DEPLOYMENT.md)** - CI/CD setup
- **[NEXT_STEPS.md](NEXT_STEPS.md)** - Integration guide
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Status overview
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines

---

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build production
npm run build

# Start production server
npm start

# Database studio
npm run db:studio
```

---

## 🔄 Development Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add feature"

# Push and create PR
git push origin feature/new-feature
```

---

## 📞 Support

- **Email**: rudvel@gmail.com
- **Company**: EuroConform Ltd, Malta
- **Insurance**: €1 million professional liability
- **GitHub**: https://github.com/agilexplus-rv/euroconform

---

## 📝 License

Proprietary - © EuroConform Ltd. All rights reserved.

This software is confidential and proprietary. Unauthorized copying, modification, distribution, or use is strictly prohibited.

---

## 🎉 Status

**Production Ready** ✅

- ✅ All pages implemented
- ✅ API endpoints functional
- ✅ Database schema complete
- ✅ Docker deployment ready
- ✅ Zero build errors
- ✅ Comprehensive documentation
- ✅ Security best practices

---

**Built with ❤️ for EU compliance** 🇪🇺
