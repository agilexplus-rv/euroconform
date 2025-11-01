'use client';

import { useState } from 'react';
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ChevronDown, 
  HelpCircle, 
  Shield, 
  CheckCircle2, 
  Clock, 
  QrCode, 
  Scale, 
  ArrowUpDown,
  FileText,
  Mail,
  Search,
  Users,
  CreditCard,
  RefreshCw,
  Eye,
  Lock,
  X
} from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What is an EU Authorised Representative?",
    answer: "An EU Authorised Representative is a mandatory requirement under Article 4 of Regulation (EU) 2019/1020 on market surveillance. Non-EU manufacturers must designate an EU-based representative to ensure product compliance with EU legislation. The Authorised Representative acts as a contact point for EU market surveillance authorities and ensures that technical documentation is available within the EU for the products placed on the market.",
    icon: Shield,
    category: "Legal"
  },
  {
    id: 2,
    question: "What is a Responsible Person under Article 16?",
    answer: "The Responsible Person is required under Article 16 of Regulation (EU) 2023/988 on General Product Safety. This person must be established within the EU and is responsible for ensuring the product's compliance with safety requirements. The Responsible Person handles product safety obligations, cooperation with authorities, and incident reporting.",
    icon: Users,
    category: "Legal"
  },
  {
    id: 3,
    question: "What services are included in the annual subscription?",
    answer: "All packages include: Malta EU address for regulatory purposes, automatic label generation with QR codes, public product verification portal, email support, and annual designation management. Higher-tier packages include priority support, audit exports, and dedicated account management.",
    icon: CheckCircle2,
    category: "Services"
  },
  {
    id: 4,
    question: "How does the designation process work?",
    answer: "The process is straightforward: 1) Sign up and select your package, 2) Complete annual subscription payment, 3) Create designation and upload necessary documents, 4) Sign the designation contract with eIDAS-qualified electronic signature, 5) Activate designation and generate product labels, 6) Receive reminders before expiry for seamless renewal.",
    icon: Clock,
    category: "Process"
  },
  {
    id: 5,
    question: "What happens when my designation expires?",
    answer: "You'll receive automated email reminders at 30, 7, and 1 day before your designation expires. You can renew your designation through your client portal with one-click payment and contract re-signature. If a designation expires without renewal, all associated products will be marked as inactive in the public verification system.",
    icon: RefreshCw,
    category: "Process"
  },
  {
    id: 6,
    question: "How do I verify a product on the verification portal?",
    answer: "Each product receives a unique verification code and QR code on its label. Simply scan the QR code or visit euroconform.eu/verify/CODE to view the product's designation status. The verification page shows whether the designation is active, expired, or not found.",
    icon: QrCode,
    category: "Technical"
  },
  {
    id: 7,
    question: "What legal protections are in place?",
    answer: "EuroConform Ltd operates in full compliance with EU regulations. Our liability is limited to fees paid in the preceding 12 months. All contracts are governed by Maltese law and jurisdiction.",
    icon: Scale,
    category: "Legal"
  },
  {
    id: 8,
    question: "Can I change my package after signing up?",
    answer: "Yes, you can upgrade your package at any time through your client portal. We'll prorate the difference and extend your subscription period accordingly. Downgrades take effect at the next renewal cycle.",
    icon: ArrowUpDown,
    category: "Services"
  },
  {
    id: 9,
    question: "What formats are available for product labels?",
    answer: "Product labels are available in SVG format for digital use and printing, and PDF format optimized for A4 printing. All labels include the unique verification QR code, EuroConform EU address, and product information.",
    icon: FileText,
    category: "Technical"
  },
  {
    id: 10,
    question: "How can I contact support?",
    answer: "For general inquiries, please use the contact form. Bronze and Silver clients receive standard email support, while Gold clients have access to priority support and a dedicated account manager.",
    icon: Mail,
    category: "Support"
  }
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <Link href="/#faq-teaser" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact Us</Link>
            <Button asChild><Link href="/auth/login">Sign In</Link></Button>
          </nav>
        </div>
      </header>

      <section className="py-24 bg-gradient-to-br from-[#0A3D91] to-[#0E57C5] text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <HelpCircle className="h-8 w-8" />
              </div>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100">Everything you need to know about EuroConform services</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10 h-12 text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="mt-2 text-sm text-muted-foreground">
                  Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">No FAQs found matching your search.</p>
                  </CardContent>
                </Card>
              ) : (
                filteredFaqs.map((faq) => {
                  const Icon = faq.icon;
                  const isOpen = openFaq === faq.id;
                  
                  return (
                    <Card 
                      key={faq.id} 
                      className={`transition-all duration-300 hover:shadow-lg ${
                        isOpen ? 'border-primary shadow-md' : ''
                      }`}
                    >
                      <CardHeader 
                        className="cursor-pointer"
                        onClick={() => toggleFaq(faq.id)}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <CardTitle className="text-lg">{faq.question}</CardTitle>
                                <Badge variant="secondary" className="text-xs">
                                  {faq.category}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <ChevronDown 
                            className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                              isOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </div>
                      </CardHeader>
                      {isOpen && (
                        <CardContent className="pt-0 animate-in fade-in-50 duration-300 pl-[4.5rem]">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </CardContent>
                      )}
                    </Card>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0A3D91] to-[#0E57C5] text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-blue-100 mb-6">
              Our team is here to help you with any questions about our EU compliance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/#contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-[#0A3D91] hover:bg-primary hover:text-white hover:border-white">
                <Link href="/#pricing">View Pricing</Link>
              </Button>
            </div>
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
