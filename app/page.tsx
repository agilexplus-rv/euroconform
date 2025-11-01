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
              Verify
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
              Unlock the benefits of the EU market through our comprehensive compliance services. Let us be your trusted partner for seamless market access across all 27 EU member states.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/pricing">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-[#0A3D91] hover:bg-primary hover:text-white hover:border-white">
                <Link href="#contact">Contact Us</Link>
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
              Professional compliance partner headquartered in Malta, ensuring your products meet all EU requirements
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle>EU Compliance Services</CardTitle>
                <CardDescription>
                  Comprehensive EU Authorised Representative and Responsible Economic Operator services for seamless market access
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
                  Dedicated account management with priority support
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

      {/* Contact & Pricing Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary border-2">
                <CardHeader>
                  <CardTitle className="text-primary">Get Started Today</CardTitle>
                  <CardDescription>
                    Choose the plan that fits your business needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    From €1,000/year for small manufacturers to comprehensive enterprise solutions
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-primary border-2">
                <CardHeader>
                  <CardTitle className="text-primary">Have Questions?</CardTitle>
                  <CardDescription>
                    Our team is here to help you succeed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Reach out to discuss your compliance needs and get expert guidance
                  </p>
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
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
                <li><Link href="/auth/login" className="text-muted-foreground hover:text-primary">Sign In</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} EuroConform Ltd, Malta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
