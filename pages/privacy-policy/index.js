import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold hover:text-indigo-400 transition-colors">
            BitBuster Games
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
              <p className="mb-4">
                This Privacy Policy explains how BitBuster Games ("we", "us", or "our") handles information through our website. We are committed to protecting your privacy and being transparent about our practices.
              </p>
              <p>Last updated: 12.14.2024</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Website Hosting</h2>
              <p className="mb-4">
                Our website is hosted on Netlify. While we do not collect any personal data directly, Netlify may collect certain technical information as part of their service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP addresses - temporarily stored in server logs</li>
                <li>Browser type and version</li>
                <li>Time and date of access</li>
                <li>Pages visited</li>
              </ul>
              <p className="mt-4">
                This information is collected by Netlify for security and operational purposes. For more information about how Netlify processes data, please visit{" "}
                <Link href="https://www.netlify.com/privacy/" target="_blank" className="text-indigo-400 hover:text-indigo-300">
                  Netlify's Privacy Policy
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Data Collection and Usage</h2>
              <p>
                Our website does not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use cookies</li>
                <li>Collect personal information</li>
                <li>Require user registration</li>
                <li>Track user behavior</li>
                <li>Use any analytics services</li>
                <li>Use any advertising services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">External Links</h2>
              <p>
                Our website contains links to external sites (such as Google Play Store). This privacy policy applies only to our website. When you click links to other websites, we encourage you to read their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">Email: scharlt.coding@gmail.com</p>
            </section>
          </div>
        </div>
      </main>

      <footer className="text-white/70 text-center pb-8">
        {new Date().getFullYear()} &copy; Tobias Scharl &bull; <Link className="hover:text-white duration-300" href="/privacy-policy">Privacy Policy</Link> &bull; <Link className="hover:text-white duration-300" href="/imprint">Imprint</Link>
      </footer>
    </div>
  );
}
