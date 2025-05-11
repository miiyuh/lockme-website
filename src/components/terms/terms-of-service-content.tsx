
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
    <div className="container py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <section className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 mx-auto mb-4 text-accent" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            {PAGE_TITLE}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Last Updated: {lastUpdated || 'Loading...'}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-4 prose-a:text-accent hover:prose-a:text-accent/80">
          <h2 id="introduction">1. Introduction</h2>
          <p>
            Welcome to LockMe (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)! These Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) govern your use of our website located at [Your Website URL] (together or individually &quot;Service&quot;) operated by LockMe.
          </p>
          <p>
            Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages. Please read it here <a href="/privacy-policy">/privacy-policy</a>.
          </p>
          <p>
            Your agreement with us includes these Terms and our Privacy Policy (&quot;Agreements&quot;). You acknowledge that you have read and understood Agreements, and agree to be bound of them.
          </p>
          <p>
            If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at support@lockme.my so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
          </p>

          <h2 id="use-of-service">2. Use of Service</h2>
          <p>
            You may use the Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
          </p>
          <ul>
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk mail&quot;, &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
          </ul>

          <h2 id="intellectual-property">3. Intellectual Property</h2>
          <p>
            The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of LockMe and its licensors. The LockMe desktop application is open source under the MIT license. The website content, design, and branding are protected by copyright, trademark, and other laws of both foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of LockMe.
          </p>

          <h2 id="disclaimer-of-warranty">4. Disclaimer Of Warranty</h2>
          <p>
            THESE SERVICES ARE PROVIDED BY COMPANY ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
          </p>

          <h2 id="limitation-of-liability">5. Limitation Of Liability</h2>
          <p>
            EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS&apos; FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
          </p>
          
          <h2 id="governing-law">6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction, e.g., Malaysia], without regard to its conflict of law provisions.
          </p>

          <h2 id="changes-to-service">7. Changes To Service</h2>
          <p>
            We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period.
          </p>

          <h2 id="amendments-to-terms">8. Amendments To Terms</h2>
          <p>
            We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically. Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes.
          </p>

          <h2 id="contact-us">9. Contact Us</h2>
          <p>
            Please send your feedback, comments, requests for technical support by email: support@lockme.my.
          </p>
        </div>
      </section>
    </div>
  );
}
