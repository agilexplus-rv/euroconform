import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getAuditLogs } from "@/lib/audit";
import { Download } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function AuditLogPage() {
  // Fetch audit logs
  const logs = await getAuditLogs({ limit: 100 });

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
            <Link href="/dashboard/designations" className="text-sm font-medium hover:text-primary transition-colors">Designations</Link>
            <Link href="/dashboard/audit" className="text-sm font-medium text-primary">Audit Log</Link>
            <Button variant="outline" size="sm">Sign Out</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Audit Log</h1>
              <p className="text-muted-foreground">
                Complete history of all system actions and changes
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export XLSX
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Last 100 actions logged in the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              {logs.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No audit logs yet</p>
                  <p className="text-sm mt-2">Activity will appear here as you use the platform</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Entity</TableHead>
                      <TableHead>IP Address</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {logs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell>
                          {log.timestamp.toLocaleString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </TableCell>
                        <TableCell>
                          {log.user ? (
                            <div>
                              <div className="font-medium">
                                {log.user.firstName} {log.user.lastName}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {log.user.email}
                              </div>
                            </div>
                          ) : (
                            <span className="text-muted-foreground">System</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge>{log.action}</Badge>
                        </TableCell>
                        <TableCell>
                          <span className="font-mono text-sm">
                            {log.entity}/{log.entityId.slice(0, 8)}...
                          </span>
                        </TableCell>
                        <TableCell className="font-mono text-xs">
                          {log.ipAddress || '-'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>About Audit Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The audit log provides a complete, tamper-proof record of all actions taken within your account. 
                This includes product creations, designations, contract signings, payment processing, and more.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-1">Append-Only</p>
                  <p className="text-muted-foreground">
                    Logs cannot be deleted or modified, ensuring complete traceability.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Export Ready</p>
                  <p className="text-muted-foreground">
                    Download logs in CSV or XLSX format for compliance reporting.
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Detailed Tracking</p>
                  <p className="text-muted-foreground">
                    IP addresses, timestamps, and before/after changes recorded.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

