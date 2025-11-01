'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Shield, Globe2, FileCheck, Star, ArrowRight, HelpCircle } from "lucide-react";
import { config } from "@/lib/config";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 border-b bg-white transition-transform duration-300 ${
          navVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              EC
            </div>
            <span className="text-xl font-bold">EuroConform</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#faq-teaser" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Button asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#0A3D91] to-[#0E57C5] text-white">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center animate-in fade-in duration-1000">
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
                <Link href="#pricing">View Pricing</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-[#0A3D91] hover:bg-primary hover:text-white hover:border-white">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 6 Cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose EuroConform?</h2>
            <p className="text-lg text-muted-foreground">
              Professional compliance partner headquartered in Malta, ensuring your products meet all EU requirements
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-in slide-in-from-bottom-4">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-4" />
                <CardTitle>EU Compliance Services</CardTitle>
                <CardDescription>
                  Comprehensive EU Authorised Representative and Responsible Economic Operator services for seamless market access
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-in slide-in-from-bottom-4">
              <CardHeader>
                <Globe2 className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Malta EU Address</CardTitle>
                <CardDescription>
                  Professional EU presence with dedicated support and compliance management
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-in slide-in-from-bottom-4">
              <CardHeader>
                <FileCheck className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Technical File Checks</CardTitle>
                <CardDescription>
                  Expert review of technical documentation ensuring regulatory compliance
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-in slide-in-from-bottom-4">
              <CardHeader>
                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Product Verification</CardTitle>
                <CardDescription>
                  QR code enabled labels with public verification portal for transparency
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-in slide-in-from-bottom-4">
              <CardHeader>
                <Star className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Expert Support</CardTitle>
                <CardDescription>
                  Dedicated account management with priority support
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-in slide-in-from-bottom-4">
              <CardHeader>
                <HelpCircle className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Legal Compliance</CardTitle>
                <CardDescription>
                  Fully compliant with Article 4 (EU) 2019/1020 and Article 16 (EU) 2023/988
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section id="faq-teaser" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="border-primary border-2 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <HelpCircle className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Quick answers to common questions about our EU compliance services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold mb-1">What is an EU Authorised Representative?</h4>
                    <p className="text-sm text-muted-foreground">
                      Under Article 4 of Regulation (EU) 2019/1020, non-EU manufacturers must designate an EU-based representative to ensure product compliance and act as a contact point for market surveillance authorities.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold mb-1">What is a Responsible Person?</h4>
                    <p className="text-sm text-muted-foreground">
                      Required under Article 16 of Regulation (EU) 2023/988, the Responsible Person ensures product safety compliance, handles incident reporting, and cooperates with EU authorities.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <h4 className="font-semibold mb-1">How quickly can I get started?</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete your subscription and create your designation in minutes. Upload your documents and sign the contract electronically to activate your EU compliance services.
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  <Link href="/faq">View All FAQs <ArrowRight className="ml-2 h-4 w-4 inline" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Annual subscriptions with transparent EU compliance services
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {/* Bronze */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Bronze</CardTitle>
                <CardDescription>Perfect for small manufacturers</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold">€1,000</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {config.packages.bronze.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>Up to {config.packages.bronze.maxProducts} products</strong></span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/auth/register?package=bronze">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Silver */}
            <Card className="border-primary border-2 relative hover:shadow-xl transition-shadow duration-300">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Most Popular</Badge>
              <CardHeader>
                <CardTitle>Silver</CardTitle>
                <CardDescription>Ideal for growing businesses</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold">€1,800</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {config.packages.silver.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>Up to {config.packages.silver.maxProducts} products</strong></span>
                  </li>
                </ul>
                <Button className="w-full bg-primary" asChild>
                  <Link href="/auth/register?package=silver">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Gold */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Gold</CardTitle>
                <CardDescription>For enterprise needs</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold">€3,000</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {config.packages.gold.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm"><strong>Unlimited products</strong></span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/auth/register?package=gold">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl font-bold text-center mb-8">Additional Services</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold mb-2">{config.addOns.technicalFileCheck.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Expert review of technical documentation to ensure regulatory compliance
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">€100</p>
                    <p className="text-sm text-muted-foreground">{config.addOns.technicalFileCheck.unit}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have questions? We&apos;d love to hear from you.
              </p>
            </div>

            <Card className="border-primary border-2">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded text-sm">
                      Thank you for your message! We&apos;ll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
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
                <li><Link href="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
                <li><Link href="/verify" className="text-muted-foreground hover:text-primary">Verify Product</Link></li>
                <li><Link href="/auth/login" className="text-muted-foreground hover:text-primary">Sign In</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                <li><Link href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
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
