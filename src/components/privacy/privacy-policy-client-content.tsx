
"use client";

import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

const PAGE_TITLE = 'Privacy Policy';

export default function PrivacyPolicyClientContent() {
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // This will only run on the client, after initial hydration
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="container py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <section className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 mx-auto mb-4 text-accent" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            {PAGE_TITLE}
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Last Updated: {lastUpdated || 'Loading...'}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-4 prose-a:text-accent hover:prose-a:text-accent/80">
          <p>
            Welcome to LockMe (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at support@lockme.my.
          </p>

          <h2 id="what-information-do-we-collect">1. What Information Do We Collect?</h2>
          <p>
            LockMe is an offline-first desktop application designed for file encryption and decryption.
          </p>
          <h3>Information You Provide to Us</h3>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:
          </p>
          <ul>
            <li><strong>Contact Information:</strong> If you contact us directly (e.g., via email for support or through our contact form), we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</li>
          </ul>
          <h3>Information Automatically Collected</h3>
          <p>
            As LockMe is a desktop application that primarily operates offline, we do <strong>not</strong> automatically collect any personal information from your use of the core encryption/decryption features of the application itself. Your files and the passwords you use for encryption remain on your local device and are not transmitted to us.
          </p>
          <p>
            When you visit our website (the &quot;Website&quot;), we may collect certain information automatically from your device. This information may include your IP address, browser type, operating system, referring URLs, pages viewed, and dates/times of access. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes. We also use cookies as described in our &quot;Cookies and Similar Technologies&quot; section.
          </p>

          <h2 id="how-do-we-use-your-information">2. How Do We Use Your Information?</h2>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below.
          </p>
          <ul>
            <li><strong>To respond to user inquiries/offer support to users.</strong> We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
            <li><strong>To send administrative information to you.</strong> We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</li>
            <li><strong>To protect our Services.</strong> We may use your information as part of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention).</li>
            <li><strong>For other Business Purposes.</strong> We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and your experience.</li>
          </ul>
          <p>
            <strong>LockMe application data:</strong> We do not use, access, or process the files you encrypt or the passwords you set within the LockMe desktop application. This data remains entirely on your local device.
          </p>

          <h2 id="will-your-information-be-shared">3. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>
          <p>
            Specifically:
          </p>
          <ul>
            <li>We may process or share your data that we hold based on the following legal basis:
              <ul>
                <li><strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                <li><strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
              </ul>
            </li>
          </ul>
          <p>
            We do not sell your personal information.
          </p>
          
          <h2 id="cookies">4. Cookies and Similar Technologies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
          </p>
          <p>
            We use cookies for the following purposes on our Website:
          </p>
          <ul>
            <li><strong>Essential Cookies:</strong> These cookies are necessary for the Website to function and cannot be switched off in our systems. For example, we use a cookie to remember your cookie consent preferences.</li>
            <li><strong>Performance and Analytics Cookies (Optional):</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance. (We are not currently using these but may in the future).</li>
          </ul>
          <p>
            You can manage your cookie preferences through our cookie consent banner. Most web browsers also allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.
          </p>

          <h2 id="data-security">5. How Do We Keep Your Information Safe?</h2>
          <p>
            We aim to protect your personal information through a system of organizational and technical security measures.
          </p>
          <p>
            However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
          </p>
          <p>
            The LockMe application itself relies on strong encryption (AES-256 and RSA) and the security of your chosen password to protect your files locally. The security of these files is your responsibility, including keeping your password confidential and your device secure.
          </p>

          <h2 id="childrens-privacy">6. Do We Collect Information From Minors?</h2>
          <p>
            We do not knowingly solicit data from or market to children under 18 years of age. By using the Website or Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Website or Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at support@lockme.my.
          </p>

          <h2 id="your-privacy-rights">7. What Are Your Privacy Rights?</h2>
          <p>
            In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. To make such a request, please use the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.
          </p>

          <h2 id="updates-to-this-notice">8. Do We Make Updates to This Notice?</h2>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
          </p>

          <h2 id="contact-us">9. How Can You Contact Us About This Notice?</h2>
          <p>
            If you have questions or comments about this notice, you may email us at support@lockme.my.
          </p>
        </div>
      </section>
    </div>
  );
}
