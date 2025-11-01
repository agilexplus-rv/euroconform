import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, Globe2, Users, Star, FileCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              EC
            </div>
            <span className="text-xl font-bold">EuroConform</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/verify" className="text-sm font-medium hover:text-primary transition-colors">
              Verify Product
            </Link>
            <Button asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A3D91] to-[#0E57C5] text-white">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-6">
              Professional EU Compliance Services
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Your Gateway to EU Product Compliance
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              EU Authorised Representative & Responsible Person services ensuring smooth EU market access under Article 4 (Regulation EU 2019/1020) and Article 16 (Regulation EU 2023/988)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/pricing">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose EuroConform?</h2>
            <p className="text-lg text-muted-foreground">
              Professional compliance partner headquartered in Malta with €1 million professional liability insurance
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle>EU Authorised Representative</CardTitle>
                <CardDescription>
                  Compliant with Article 4, Regulation (EU) 2019/1020 - Market Surveillance and Compliance of Products
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Responsible Person</CardTitle>
                <CardDescription>
                  Compliant with Article 16, Regulation (EU) 2023/988 - General Product Safety Regulation
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Globe2 className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Malta EU Address</CardTitle>
                <CardDescription>
                  Professional EU presence with dedicated support and compliance management
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <FileCheck className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Technical File Checks</CardTitle>
                <CardDescription>
                  Expert review of technical documentation ensuring regulatory compliance
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Product Verification</CardTitle>
                <CardDescription>
                  QR code enabled labels with public verification portal for transparency
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Star className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Expert Support</CardTitle>
                <CardDescription>
                  Dedicated account management for Gold clients with priority support
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Basis Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Legal Framework</h2>
            <p className="text-lg text-muted-foreground">
              Our services are based on current EU regulations
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-primary">Article 4</CardTitle>
                <CardDescription className="font-medium">Regulation (EU) 2019/1020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Market Surveillance and Compliance of Products</p>
                <p className="text-sm text-muted-foreground">
                  Non-EU manufacturers must designate an EU Authorised Representative to ensure compliance with EU product legislation and facilitate market surveillance authorities.
                </p>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-primary">Article 16</CardTitle>
                <CardDescription className="font-medium">Regulation (EU) 2023/988</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">General Product Safety Regulation</p>
                <p className="text-sm text-muted-foreground">
                  Products placed on the EU market must have a Responsible Person established within the EU to handle product safety obligations and regulatory compliance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A3D91] to-[#0E57C5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ready to Start Your EU Market Access?
          </h2>
          <p className="mb-8 text-xl text-blue-100 max-w-2xl mx-auto">
            Join 200+ manufacturers and online sellers who trust EuroConform for their compliance needs
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/pricing">View Pricing Plans</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
                  EC
                </div>
                <span className="text-xl font-bold">EuroConform</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your Gateway to EU Product Compliance
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
                <li><Link href="/verify" className="text-muted-foreground hover:text-primary">Verify Product</Link></li>
                <li><Link href="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                <li><Link href="/partners" className="text-muted-foreground hover:text-primary">Partner Program</Link></li>
                <li><Link href="/trade-fairs" className="text-muted-foreground hover:text-primary">Trade Fairs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <p className="text-sm text-muted-foreground">
                EuroConform Ltd<br />
                Malta<br />
                Professional Liability: €1 million
              </p>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} EuroConform Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
