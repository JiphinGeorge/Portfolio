import Head from 'next/head';
import { ScrollTop } from '../components/ScrollTop';
import { Footer } from '../components/Footer';
import { PrivacyPolicyContainer } from '../styles/privacypolicy';
import RouteTransition from '../components/Animations/RouteTransition';
import FadeInAnimation from '../components/Animations/FadeInAnimation';


export default function PrivacyPolicy() {
  return (
    <RouteTransition>
      <Head>
        <title>Privacy Policy | Jiphin George</title>
      </Head>
      <PrivacyPolicyContainer>
        <br/><br/>
        <FadeInAnimation delay={0.2}>
          <h1>Privacy Policy</h1>
        </FadeInAnimation>

        <FadeInAnimation delay={0.3}>
          <h2>Last Updated: August 7th, 2025</h2>
        </FadeInAnimation>

        <FadeInAnimation delay={0.4}>
          <p>Your privacy is important to us. This Privacy Policy explains how Jiphin George&apos;s Portfolio collects, uses, and protects your information when you interact with our website.</p>
        </FadeInAnimation>

          <div>
            <h3>1. Information We Collect</h3>
            <p>We may collect the following types of information when you use our website:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and feedback (via forms).</li>
              <li><strong>Non-Personal Information:</strong> IP address, browser type, device type, pages visited, and interactions (collected via cookies and third-party tools)</li>
            </ul>
          </div>

          <div>
            <h3>2. How We Use Your Information</h3>
            <p>Your information is used for the following purposes:</p>
            <ul>
              <li>To respond to your inquiries submitted through the contact form.</li>
              <li>To gather feedback and improve the website&apos;s functionality.</li>
              <li>To monitor and analyze site performance and usage trends using third-party analytics tools.</li>
            </ul>
          </div>

          <div>
            <h3>3. Third-Party Services</h3>
            <p>We use third-party services to enhance your experience, including:</p>
            <ul>
              <li><strong>Google Analytics:</strong> Tracks website traffic and usage patterns.</li>
              <li><strong>Vercel Analytics:</strong> Monitors website performance.</li>
              <li><strong>Email.js:</strong> Facilitates email communication and form submissions.</li>
              <li><strong>Calendly:</strong> Schedules and manages appointments and meetings.</li>
            </ul>
            <p>These third-party services may collect, use, and store your data according to their respective privacy policies.</p>
          </div>

          <div>
            <h3>4. Cookies and Tracking Technologies</h3>
            <p>We may use cookies and similar technologies for analytics and improving user experience. By continuing to use this site, you consent to our use of cookies.</p>
          </div>

          <div>
            <h3>5. Data Protection</h3>
            <p>We take appropriate measures to safeguard your personal information against unauthorized access, disclosure, alteration, or destruction. However, no online platform can guarantee absolute security. We retain your data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.</p>
          </div>

          <div>
            <h3>6. Data Sharing</h3>
            <p>We do not sell, rent, or share your personal information with third parties except as required by law or to provide essential services (e.g., analytics, hosting).</p>
          </div>

          <div>
            <h3>7. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access, update, or delete your personal information.</li>
              <li>Withdraw consent for data collection at any time.</li>
              <li>Request clarification on how your data is used.</li>
            </ul>
          </div>

          <div>
            <h3>8. Changes to This Privacy Policy</h3>
            <p>We may update this Privacy Policy periodically. Any changes will be reflected on this page, and we encourage you to review it regularly.</p>
          </div>

          <div>
            <h3>9. Contact Information</h3>
            <p>If you have questions or concerns about this Privacy Policy, contact us at:</p>
            <p><strong>Jiphin George</strong><br />
              Email: jiphingeorge80@gmail.com
            </p>
          </div>
      </PrivacyPolicyContainer>
      <ScrollTop />
      <Footer />
    </RouteTransition>
  );
}