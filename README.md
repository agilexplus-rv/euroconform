# EuroConform Ltd - EU Compliance Platform

**Your Gateway to EU Product Compliance**

EuroConform provides comprehensive EU Authorised Representative (Article 4 Regulation (EU) 2019/1020) and Responsible Person (Article 16 Regulation (EU) 2023/988) services for non-EU manufacturers and online sellers.

## 🎯 Mission

To provide non-EU manufacturers and online sellers with a reliable, transparent, and future-ready compliance partner ensuring smooth EU market access and alignment with emerging sustainability and environmental obligations.

## ✨ Features

### Public Portal
- **Home Page**: Brand presentation with legal citations
- **Pricing**: Transparent Bronze/Silver/Gold packages
- **FAQ**: Comprehensive answers about Articles 4 & 16
- **Contact**: Form forwarding to rudvel@gmail.com
- **Product Verification**: Public QR code validation at `/verify/[code]`

### Client Portal (Keycloak-Protected)
- **Dashboard**: Overview of designations & subscriptions
- **Organisation Profile**: Company and billing management
- **Designation Wizard**: Annual workflow with QES contract
- **Product Management**: CRUD within package limits + label download
- **Contract Vault**: Signed PDFs with eIDAS validation
- **Audit Trail**: View + CSV/XLSX export
- **Account Management**: 2FA, password, notifications

### Admin Area
- User and organisation management
- Designation and contract oversight
- Audit trail browser
- Package configuration
- Partner & trade fair management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **UI**: Tailwind CSS + shadcn/ui + lucide-react icons
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Keycloak (2FA TOTP, OIDC)
- **Payments**: Stripe (annual subscriptions + add-ons)
- **Queue**: Redis + BullMQ (reminders & webhooks)
- **Email**: SMTP to rudvel@gmail.com
- **Storage**: S3/MinIO for PDF/SVG documents
- **Deployment**: Docker Compose on Hetzner VPS

## 📦 Pricing

| Package | Products | Annual Fee | Features |
|---------|----------|------------|----------|
| Bronze | 1-10 | €1,000 | EU address, labels, verification, email support |
| Silver | 11-50 | €1,800 | Priority support, audit export, onboarding |
| Gold | 50+ | €3,000 | Dedicated manager, SLA, custom limits |

**Add-ons**:
- Technical File Check: €100/hour
- DPP Onboarding: €200/SKU (Phase 2, hidden initially)

**Referrals**: 20% commission for approved partners

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- PostgreSQL 16
- Redis 7

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd EuroConform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start services with Docker Compose**
   ```bash
   docker-compose up -d
   ```

5. **Run database migrations**
   ```bash
   npm run db:push
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## 🐳 Docker Deployment

### Local Development
```bash
docker-compose up -d
```

### Production (Hetzner VPS)

1. **Set up Nginx reverse proxy with Let's Encrypt**
   ```bash
   # Install Certbot
   sudo apt update
   sudo apt install certbot python3-certbot-nginx

   # Obtain SSL certificate
   sudo certbot certonly --nginx -d euroconform.eu -d www.euroconform.eu

   # Configure Nginx
   sudo cp nginx.conf /etc/nginx/sites-available/euroconform
   sudo ln -s /etc/nginx/sites-available/euroconform /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

2. **Build and deploy**
   ```bash
   docker-compose -f docker-compose.yml build
   docker-compose -f docker-compose.yml up -d
   ```

## 📁 Project Structure

```
EuroConform/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── pricing/           # Pricing page
│   ├── faq/               # FAQ page
│   ├── contact/           # Contact form
│   ├── verify/            # Product verification
│   └── layout.tsx         # Root layout
├── lib/                   # Core utilities
│   ├── prisma.ts          # Database client
│   ├── stripe.ts          # Stripe integration
│   ├── email.ts           # Email templates
│   ├── label.ts           # Label generation (SVG/PDF)
│   ├── qr.ts              # QR code generation
│   ├── audit.ts           # Audit logging
│   └── config.ts          # App configuration
├── components/            # React components
│   └── ui/                # shadcn/ui components
├── prisma/
│   └── schema.prisma      # Database schema
├── public/                # Static assets
├── docker-compose.yml     # Docker services
├── Dockerfile             # App container
├── nginx.conf             # Nginx configuration
└── .env.example           # Environment template
```

## 🔐 Security

- Helmet.js for security headers
- Content Security Policy (CSP)
- Rate limiting
- Input validation with Zod
- HTTPS-only in production
- Append-only audit logs
- Professional liability insurance: €1 million

## 📊 Legal Basis

All services comply with:
- **Article 4**: Regulation (EU) 2019/1020 - Market Surveillance
- **Article 16**: Regulation (EU) 2023/988 - General Product Safety

## 📧 Support

- **Email**: rudvel@gmail.com
- **Company**: EuroConform Ltd, Malta
- **Insurance**: €1 million professional liability

## 📝 License

Proprietary - © EuroConform Ltd. All rights reserved.

## 🤝 Contributing

This is a private commercial project. For partner opportunities, contact rudvel@gmail.com.
