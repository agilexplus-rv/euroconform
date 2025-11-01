import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, FileCheck } from "lucide-react";

export default async function DesignationsPage() {
  // Mock data - replace with actual query
  const designations: any[] = [];

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
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
            <Link href="/dashboard/products" className="text-sm font-medium hover:text-primary transition-colors">Products</Link>
            <Link href="/dashboard/designations" className="text-sm font-medium text-primary">Designations</Link>
            <Link href="/dashboard/audit" className="text-sm font-medium hover:text-primary transition-colors">Audit Log</Link>
            <Button variant="outline" size="sm">Sign Out</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Designations</h1>
              <p className="text-muted-foreground">
                Manage your EU Authorised Representative and Responsible Person designations
              </p>
            </div>
            <Button asChild>
              <Link href="/dashboard/designations/new">
                <Plus className="mr-2 h-4 w-4" />
                Create Designation
              </Link>
            </Button>
          </div>

          {designations.length === 0 ? (
            <Card>
              <CardContent className="py-12">
                <div className="text-center">
                  <FileCheck className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No designations yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Create your first EU Authorised Representative or Responsible Person designation to start selling products in the EU.
                  </p>
                  <Button asChild>
                    <Link href="/dashboard/designations/new">
                      <Plus className="mr-2 h-4 w-4" />
                      Create Your First Designation
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {designations.map((designation) => (
                <Card key={designation.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="mb-2">
                          {designation.type === 'EU_AUTHORISED_REPRESENTATIVE' 
                            ? 'EU Authorised Representative' 
                            : 'Responsible Person'}
                        </CardTitle>
                        <Badge>{designation.status}</Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{designation.uniqueId}</p>
                        <p className="text-xs text-muted-foreground">
                          {designation.contractExpiresAt 
                            ? `Expires: ${new Date(designation.contractExpiresAt).toLocaleDateString('en-GB')}`
                            : 'Not signed'}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium">Contract Status</p>
                        <p className="text-sm text-muted-foreground">
                          {designation.contractSignedAt 
                            ? `Signed ${new Date(designation.contractSignedAt).toLocaleDateString('en-GB')}`
                            : 'Pending signature'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Product Limit</p>
                        <p className="text-sm text-muted-foreground">
                          {designation.maxProducts === Infinity ? 'Unlimited' : designation.maxProducts}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Products Registered</p>
                        <p className="text-sm text-muted-foreground">
                          {designation.products?.length || 0}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Contract
                      </Button>
                      <Button variant="outline" size="sm" disabled={designation.status === 'ACTIVE'}>
                        Renew
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

