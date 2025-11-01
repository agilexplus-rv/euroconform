'use client';

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/header";

export default function VerifyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Verify Product</h1>
              <p className="text-xl text-muted-foreground">
                Verify EU compliance status of any product using its unique verification code
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Enter Verification Code</CardTitle>
                <CardDescription>
                  Scan the QR code on the product label or enter the code manually
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const code = formData.get('code');
                  if (code) window.location.href = `/verify/${code}`;
                }} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      name="code"
                      placeholder="Enter verification code"
                      required
                      className="text-lg"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Verify Product
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Verification codes are unique ULIDs displayed on product compliance labels
                </p>
              </CardContent>
            </Card>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>How Verification Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">1. Find Your Code</p>
                    <p>Locate the unique verification code on your product&apos;s compliance label</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">2. Enter or Scan</p>
                    <p>Either type the code above or scan the QR code with your device</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">3. View Status</p>
                    <p>Get instant confirmation of the product&apos;s EU compliance status</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} EuroConform Ltd, Malta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

