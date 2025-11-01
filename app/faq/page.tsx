import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              EC
            </div>
            <span className="text-xl font-bold">EuroConform</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
            <Button asChild><Link href="/auth/login">Sign In</Link></Button>
          </nav>
        </div>
      </header>

      <section className="py-24 bg-gradient-to-br from-[#0A3D91] to-[#0E57C5] text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100">Everything you need to know about EuroConform services</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>What is an EU Authorised Representative?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  An EU Authorised Representative is a mandatory requirement under Article 4 of Regulation (EU) 2019/1020 on market surveillance. 
                  Non-EU manufacturers must designate an EU-based representative to ensure product compliance with EU legislation.
                </p>
                <p className="text-sm text-muted-foreground">
                  The Authorised Representative acts as a contact point for EU market surveillance authorities and ensures that technical documentation 
                  is available within the EU for the products placed on the market.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What is a Responsible Person under Article 16?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  The Responsible Person is required under Article 16 of Regulation (EU) 2023/988 on General Product Safety. 
                  This person must be established within the EU and is responsible for ensuring the product&apos;s compliance with safety requirements.
                </p>
                <p className="text-sm text-muted-foreground">
                  The Responsible Person handles product safety obligations, cooperation with authorities, and incident reporting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What services are included in the annual subscription?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  All packages include:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 mb-2">
                  <li>Malta EU address for regulatory purposes</li>
                  <li>Automatic label generation with QR codes</li>
                  <li>Public product verification portal</li>
                  <li>Email support</li>
                  <li>Annual designation management</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  Higher-tier packages include priority support, audit exports, and dedicated account management.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How does the designation process work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  The process is straightforward:
                </p>
                <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                  <li>Sign up and select your package</li>
                  <li>Complete annual subscription payment</li>
                  <li>Create designation and upload necessary documents</li>
                  <li>Sign the designation contract with eIDAS-qualified electronic signature</li>
                  <li>Activate designation and generate product labels</li>
                  <li>Receive reminders before expiry for seamless renewal</li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What happens when my designation expires?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  You&apos;ll receive automated email reminders at 30, 7, and 1 day before your designation expires. 
                  You can renew your designation through your client portal with one-click payment and contract re-signature.
                </p>
                <p className="text-sm text-muted-foreground">
                  If a designation expires without renewal, all associated products will be marked as inactive in the public verification system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How do I verify a product on the verification portal?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Each product receives a unique verification code and QR code on its label. Simply scan the QR code or visit 
                  <code className="bg-gray-100 px-1 rounded">euroconform.eu/verify/CODE</code> to view the product&apos;s designation status.
                </p>
                <p className="text-sm text-muted-foreground">
                  The verification page shows whether the designation is active, expired, or not found.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What is EuroConform&apos;s insurance coverage?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  EuroConform Ltd maintains €1 million in professional liability insurance coverage. 
                  Our liability is limited to fees paid in the preceding 12 months. All contracts are governed by Maltese law and jurisdiction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Can I change my package after signing up?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes, you can upgrade your package at any time through your client portal. 
                  We&apos;ll prorate the difference and extend your subscription period accordingly. 
                  Downgrades take effect at the next renewal cycle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What formats are available for product labels?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  Product labels are available in:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>SVG format for digital use and printing</li>
                  <li>PDF format optimized for A4 printing</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2">
                  All labels include the unique verification QR code, EuroConform EU address, and product information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How can I contact support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  For general inquiries, please use the contact form or email rudvel@gmail.com. 
                  Bronze and Silver clients receive standard email support, while Gold clients have access to priority support 
                  and a dedicated account manager.
                </p>
                <div className="mt-4">
                  <Button asChild><Link href="/contact">Contact Us</Link></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} EuroConform Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

