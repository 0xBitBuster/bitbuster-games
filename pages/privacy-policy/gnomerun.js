import Link from "next/link";

export default function GnomeRunPrivacy() {
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
          <header className="text-center mb-12">
            <img src="/images/gnomerun.png" alt="Gnome Run App Icon" className="h-40 mx-auto rounded-3xl mb-6" />
            <h1 className="text-4xl font-bold mb-4">Gnome Run</h1>
            <p className="text-xl font-semibold text-gray-300">Privacy Policy</p>
          </header>

          <div className="space-y-8 text-gray-300">
            <section>
              <p>
                This privacy policy is applicable to the Gnome Run app (hereinafter referred to as "Application") for mobile devices, which was developed by Tobias Scharl (hereinafter referred to as "Service Provider") as a Free service. This service is provided "AS IS".
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Information Collection and Use</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">User Provided Information</h3>
                <p>
                  The Application acquires the information you supply when you download and register the Application. Registration with the Service Provider is not mandatory. However, bear in mind that you might not be able to utilize some of the features offered by the Application unless you register with them.
                </p>
                <p>
                  The Service Provider may also use the information you provided them to contact you from time to time to provide you with important information, required notices and marketing promotions.
                </p>

                <h3 className="text-xl font-semibold text-white mt-6">Automatically Collected Information</h3>
                <p>
                  In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Location Information</h2>
              <p>
                This Application does not gather precise information about the location of your mobile device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Third Party Access</h2>
              <p className="mb-4">
                Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
              </p>
              <p className="mb-4">
                Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Link href="https://www.google.com/policies/privacy/" target="_blank" className="text-indigo-400 hover:text-indigo-300">
                    Google Play Services
                  </Link>
                </li>
                <li>
                  <Link href="https://support.google.com/admob/answer/6128543" target="_blank" className="text-indigo-400 hover:text-indigo-300">
                    AdMob
                  </Link>
                </li>
                <li>
                  <Link href="https://unity3d.com/legal/privacy-policy" target="_blank" className="text-indigo-400 hover:text-indigo-300">
                    Unity
                  </Link>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Data Retention Policy</h2>
              <p>
                The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. The Service Provider will retain Automatically Collected information for up to 24 months and thereafter may store it in aggregate. If you'd like the Service Provider to delete User Provided Data that you have provided via the Application, please contact them at scharlt.coding@gmail.com and we will respond in a reasonable time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Children</h2>
              <p>
                The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13. The Application does not address anyone under the age of 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Security</h2>
              <p>
                The Service Provider is concerned about safeguarding the confidentiality of your information. We provide physical, electronic, and procedural safeguards to protect information we process and maintain.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page. You are advised to consult this Privacy Policy regularly for any changes.
              </p>
              <p>This privacy policy is effective as of 2024-09-26</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Your Consent</h2>
              <p>
                By using the Application, you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <p>
                If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact the Service Provider via email at scharlt.coding@gmail.com.
              </p>
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