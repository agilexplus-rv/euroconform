import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Package2, FileCheck, DollarSign, Calendar, AlertCircle, CheckCircle2 } from "lucide-react";

export default async function DashboardPage() {
  // Mock data for now - replace with actual queries
  const stats = {
    totalProducts: 0,
    activeDesignations: 0,
    subscriptionStatus: "No Subscription",
    daysUntilExpiry: null as number | null,
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              EC
            </div>
            <span className="text-xl font-bold">EuroConform</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link href="/dashboard/products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/dashboard/designations" className="text-sm font-medium hover:text-primary transition-colors">
              Designations
            </Link>
            <Link href="/dashboard/audit" className="text-sm font-medium hover:text-primary transition-colors">
              Audit Log
            </Link>
            <Button variant="outline" size="sm">
              Sign Out
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's an overview of your compliance status.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Products</CardTitle>
                <Package2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalProducts}</div>
                <p className="text-xs text-muted-foreground">Registered products</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Designations</CardTitle>
                <FileCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeDesignations}</div>
                <p className="text-xs text-muted-foreground">Valid designations</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscription</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-sm">{stats.subscriptionStatus}</div>
                <p className="text-xs text-muted-foreground">Current plan</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Renewal</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.daysUntilExpiry !== null ? `${stats.daysUntilExpiry}` : '—'}
                </div>
                <p className="text-xs text-muted-foreground">Days remaining</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Get Started</CardTitle>
                <CardDescription>
                  Set up your EU Authorised Representative designation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {stats.activeDesignations === 0 ? (
                  <>
                    <div className="flex items-start gap-2 text-sm">
                      <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <div>
                        <p className="font-medium">No active designation</p>
                        <p className="text-muted-foreground">
                          Create a designation to start selling products in the EU.
                        </p>
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href="/dashboard/designations/new">Create Designation</Link>
                    </Button>
                  </>
                ) : (
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Designation active</p>
                      <p className="text-muted-foreground">
                        Your products can be sold in the EU.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                  Manage your registered products
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {stats.totalProducts === 0 ? (
                  <>
                    <div className="flex items-start gap-2 text-sm">
                      <AlertCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                      <div>
                        <p className="font-medium">No products registered</p>
                        <p className="text-muted-foreground">
                          Add products to generate compliance labels.
                        </p>
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href="/dashboard/products/new">Add Product</Link>
                    </Button>
                  </>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{stats.totalProducts} products</p>
                      <p className="text-xs text-muted-foreground">Registered</p>
                    </div>
                    <Button variant="outline" asChild>
                      <Link href="/dashboard/products">Manage</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your latest compliance actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>No recent activity</p>
                <p className="text-sm mt-2">Actions will appear here as you use the platform</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

