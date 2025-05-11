
"use client";

import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const PAGE_TITLE = 'Terms of Service';

export default function TermsOfServiceClientContent() {
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <section className="max-w-3xl mx-auto">
      <div className="text-center mb-10 md:mb-12">
        <FileText className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-accent" />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
          {PAGE_TITLE}
        </h1>
        <p className="text-md text-muted-foreground md:text-lg">
          Last Updated: {lastUpdated || 'Loading...'}
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-3 prose-p:mb-4 prose-ul:my-4 prose-li:my-2 prose-a:text-accent hover:prose-a:text-accent/80">
        <p>
          Welcome to LockMe! These Terms of Service (&quot;Terms&quot;) govern your use of the LockMe website (the &quot;Website&quot;) and the LockMe desktop application (the &quot;Application&quot;), collectively referred to as the &quot;Services,&quot; provided by LockMe (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        </p>
        <p>
          By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
        </p>

        <h2 id="use-of-services">1. Use of Services</h2>
        <p>
          <strong>1.1 Eligibility:</strong> You must be at least 13 years old to use our Services. If you are under 18, you must have your parent or legal guardian’s permission to use the Services.
        </p>
        <p>
          <strong>1.2 License to Use Application:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Application for your personal, non-commercial use strictly in accordance with these Terms and the MIT License under which the Application is distributed.
        </p>
        <p>
          <strong>1.3 Acceptable Use:</strong> You agree not to use the Services for any unlawful purpose or in any way that interrupts, damages, or impairs the Services. You agree not to:
        </p>
        <ul>
          <li>Reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of the Application, except as permitted by the MIT License.</li>
          <li>Use the Services to encrypt or manage files for illegal activities.</li>
          <li>Attempt to gain unauthorized access to our systems or engage in any activity that disrupts, diminishes the quality of, interferes with the performance of, or impairs the functionality of the Services.</li>
        </ul>

        <h2 id="intellectual-property">2. Intellectual Property</h2>
        <p>
          The LockMe name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of LockMe or its affiliates or licensors. You must not use such marks without our prior written permission. The Application source code is licensed under the MIT License. All other content on the Website, including text, graphics, logos, and images, is our property or the property of our licensors and is protected by copyright and other intellectual property laws.
        </p>
        
        <h2 id="disclaimers">3. Disclaimers</h2>
        <p>
          THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
        </p>
        <p>
          YOU ARE SOLELY RESPONSIBLE FOR THE SECURITY OF YOUR PASSWORDS AND THE BACKUP OF YOUR DATA. LOCKME IS AN OFFLINE TOOL; IF YOU LOSE YOUR PASSWORD, YOUR ENCRYPTED FILES CANNOT BE RECOVERED BY US OR ANYONE ELSE. WE ARE NOT RESPONSIBLE FOR ANY LOSS OR CORRUPTION OF YOUR DATA.
        </p>

        <h2 id="limitation-of-liability">4. Limitation of Liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL LOCKME, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; OR (C) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
        </p>

        <h2 id="indemnification">5. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless LockMe and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; or b) a breach of these Terms.
        </p>

        <h2 id="open-source">6. Open Source</h2>
        <p>
          The LockMe desktop application is licensed under the MIT License. A copy of the MIT License can be found with the source code. Your use of the Application is also subject to the terms of the MIT License.
        </p>
        
        <h2 id="governing-law">7. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of Malaysia, without regard to its conflict of law provisions.
        </p>

        <h2 id="changes-to-terms">8. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms.
        </p>

        <h2 id="contact-us">9. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at <a href="mailto:support@lockme.my">support@lockme.my</a>.
        </p>
      </div>
    </section>
  );
}
