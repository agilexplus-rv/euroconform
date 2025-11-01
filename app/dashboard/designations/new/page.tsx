'use client';

import { useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

export default function NewDesignationPage() {
  const [step, setStep] = useState(1);
  const [designationType, setDesignationType] = useState('');

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
        </div>
      </header>

      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link href="/dashboard/designations" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Designations
            </Link>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Create New Designation</h1>
            <p className="text-muted-foreground">
              Step {step} of 4: Set up your EU Authorised Representative or Responsible Person designation
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8 flex items-center justify-between">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  s < step ? 'bg-green-500 text-white' :
                  s === step ? 'bg-primary text-white' :
                  'bg-gray-200 text-gray-600'
                }`}>
                  {s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    s < step ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <form>
            {/* Step 1: Select Type */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Select Designation Type</CardTitle>
                  <CardDescription>
                    Choose the type of EU compliance designation you need
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={designationType} onValueChange={setDesignationType}>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 hover:border-primary cursor-pointer">
                        <RadioGroupItem value="EU_AUTHORISED_REPRESENTATIVE" id="ea" className="mb-3" />
                        <Label htmlFor="ea" className="cursor-pointer w-full">
                          <div>
                            <p className="font-semibold">EU Authorised Representative</p>
                            <p className="text-sm text-muted-foreground mb-2">
                              Article 4, Regulation (EU) 2019/1020
                            </p>
                            <p className="text-sm">
                              Required for non-EU manufacturers placing products on the EU market. 
                              Acts as a contact point for market surveillance authorities.
                            </p>
                          </div>
                        </Label>
                      </div>
                      <div className="border rounded-lg p-4 hover:border-primary cursor-pointer">
                        <RadioGroupItem value="RESPONSIBLE_PERSON" id="rp" className="mb-3" />
                        <Label htmlFor="rp" className="cursor-pointer w-full">
                          <div>
                            <p className="font-semibold">Responsible Person</p>
                            <p className="text-sm text-muted-foreground mb-2">
                              Article 16, Regulation (EU) 2023/988
                            </p>
                            <p className="text-sm">
                              Required for ensuring product safety compliance. 
                              Handles product safety obligations and incident reporting.
                            </p>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Upload Documents */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Upload Required Documents</CardTitle>
                  <CardDescription>
                    Provide the necessary documentation for compliance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Documentation upload will be available after basic authentication is implemented.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Review Contract */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Review Designation Contract</CardTitle>
                  <CardDescription>
                    Please review the terms and conditions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg p-6 mb-4 bg-gray-50">
                    <h3 className="font-semibold mb-4">Designation Contract Terms</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">•</span>
                        <span>12-month term, renewable online annually</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">•</span>
                        <span>EuroConform Ltd acts as EU Authorised Representative / Responsible Person</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">•</span>
                        <span>Manufacturer obligations: technical documentation availability, incident reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">•</span>
                        <span>Liability: Limited to fees paid in preceding 12 months; €1 million insurance coverage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold">•</span>
                        <span>Jurisdiction: Maltese law & jurisdiction</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Sign Contract */}
            {step === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle>Sign Designation Contract</CardTitle>
                  <CardDescription>
                    Complete the designation with eIDAS-qualified electronic signature
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Electronic signature integration will be available after authentication setup.
                  </p>
                  <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                    <p className="text-sm text-blue-900">
                      QES (Qualified Electronic Signature) required for full eIDAS compliance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <div>
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                    Previous
                  </Button>
                )}
              </div>
              <div className="flex gap-2">
                <Button type="button" variant="outline" asChild>
                  <Link href="/dashboard/designations">Cancel</Link>
                </Button>
                {step < 4 ? (
                  <Button type="button" onClick={() => setStep(step + 1)} disabled={step === 1 && !designationType}>
                    Continue
                  </Button>
                ) : (
                  <Button type="button">
                    Complete Designation
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

