"use client";

import React from "react";
import PageTransition from "@/components/PageTransition";

export default function TermsAndConditionsPage() {
  return (
    <PageTransition>
      <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs font-mono text-slate-500 mt-2">
              Last Updated: August 17, 2026
            </p>
          </div>

          <div className="text-sm text-slate-400 font-light leading-relaxed space-y-6">
            <p>
              Welcome to We For Technology! These terms and conditions outline the rules and regulations for the use of We For Technology's Website, located at https://wefortechnology.com.
            </p>
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use We For Technology if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h3 className="text-lg font-bold text-white pt-4">1. Intellectual Property Rights</h3>
            <p>
              Other than the content you own, under these Terms, We For Technology and/or its licensors own all the intellectual property rights and materials contained in this Website. All rights reserved.
            </p>
            <p>
              Upon complete fulfillment of software development contracts and payment clearances, intellectual property ownership of customized software source codes is fully transferred to the hiring client as specified in our formal service level agreements.
            </p>

            <h3 className="text-lg font-bold text-white pt-4">2. Restrictions</h3>
            <p>
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Publishing any website material in any other media without explicit consent.</li>
              <li>Selling, sublicensing and/or otherwise commercializing any website material.</li>
              <li>Using this website in any way that is or may be damaging to this website.</li>
              <li>Using this website in any way that impacts user access to this website.</li>
              <li>Using this website contrary to applicable laws and regulations.</li>
            </ul>

            <h3 className="text-lg font-bold text-white pt-4">3. Limitation of Liability</h3>
            <p>
              In no event shall We For Technology, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website or deployment of our custom software solutions. We For Technology, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of our services.
            </p>

            <h3 className="text-lg font-bold text-white pt-4">4. Governing Law & Jurisdiction</h3>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the State of Uttar Pradesh, India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
