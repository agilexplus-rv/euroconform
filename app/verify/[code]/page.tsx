import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

interface VerifyPageProps {
  params: Promise<{ code: string }>;
}

export default async function VerifyPage({ params }: VerifyPageProps) {
  const { code } = await params;
  
  const product = await prisma.product.findUnique({
    where: { uniqueCode: code },
    include: {
      designation: {
        include: {
          organisation: {
            include: {
              user: {
                select: {
                  email: true,
                },
              },
            },
          },
        },
      },
    },
  });

  let status: 'active' | 'expired' | 'not-found' = 'not-found';
  let expiryDate: Date | null = null;

  if (product) {
    if (product.status === 'ACTIVE' && product.designation.status === 'ACTIVE') {
      status = 'active';
      if (product.designation.contractExpiresAt) {
        expiryDate = product.designation.contractExpiresAt;
        const now = new Date();
        if (expiryDate && expiryDate < now) {
          status = 'expired';
        }
      }
    } else {
      status = 'expired';
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              EC
            </div>
            <span className="text-xl font-bold">EuroConform</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Product Verification</h1>
              <p className="text-muted-foreground">Verify EU Authorised Representative or Responsible Person status</p>
            </div>

            <Card>
              <CardHeader>
                {status === 'active' && (
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                    <CardTitle className="text-2xl text-green-600">Active Designation</CardTitle>
                  </div>
                )}
                {status === 'expired' && (
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-2xl text-red-600">Expired Designation</CardTitle>
                  </div>
                )}
                {status === 'not-found' && (
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-8 w-8 text-orange-600" />
                    <CardTitle className="text-2xl text-orange-600">Product Not Found</CardTitle>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                {status === 'active' && product && (
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm font-medium text-green-800 mb-2">
                        ✓ This product is currently registered with EuroConform as EU Authorised Representative / Responsible Person
                      </p>
                    </div>
                    
                    <div className="grid gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Product Name</p>
                        <p className="text-lg">{product.name}</p>
                      </div>
                      {product.model && (
                        <div>
                          <p className="text-sm font-medium mb-1">Model</p>
                          <p className="text-lg">{product.model}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium mb-1">Verification Code</p>
                        <p className="font-mono text-lg">{product.uniqueCode}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Designation Type</p>
                        <p className="text-lg">
                          {product.designation.type === 'EU_AUTHORISED_REPRESENTATIVE' 
                            ? 'EU Authorised Representative (Article 4)' 
                            : 'Responsible Person (Article 16)'}
                        </p>
                      </div>
                      {expiryDate && (
                        <div>
                          <p className="text-sm font-medium mb-1">Valid Until</p>
                          <p className="text-lg">{expiryDate.toLocaleDateString('en-GB', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {status === 'expired' && product && (
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm font-medium text-red-800">
                        ⚠ This designation has expired and is no longer active. The manufacturer should have renewed their designation.
                      </p>
                    </div>
                    
                    <div className="grid gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Product Name</p>
                        <p className="text-lg">{product.name}</p>
                      </div>
                      {product.model && (
                        <div>
                          <p className="text-sm font-medium mb-1">Model</p>
                          <p className="text-lg">{product.model}</p>
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium mb-1">Verification Code</p>
                        <p className="font-mono text-lg">{product.uniqueCode}</p>
                      </div>
                    </div>
                  </div>
                )}

                {status === 'not-found' && (
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <p className="text-sm font-medium text-orange-800">
                        No product found with this verification code. Please verify the code and try again.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Verification Code</p>
                      <p className="font-mono text-lg">{code}</p>
                    </div>
                  </div>
                )}

                <div className="mt-6 pt-6 border-t">
                  <p className="text-xs text-muted-foreground text-center">
                    Verification provided by EuroConform Ltd, Malta. Professional liability insurance: €1 million.
                    For enquiries, contact: verification@euroconform.eu
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
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

