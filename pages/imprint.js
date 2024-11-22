import Link from "next/link";

export default function Imprint() {
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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Imprint</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Information according to § 5 TMG</h2>
              <img src="/images/address.png" alt="Address" />
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
              <p>Email: Scharlt.coding@gmail.com</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Dispute Resolution</h2>
              <p className="mb-4">
                The European Commission provides a platform for online dispute resolution (OS): 
                <Link href="https://ec.europa.eu/consumers/odr/" className="text-indigo-400 hover:text-indigo-300 ml-1" target="_blank">
                  https://ec.europa.eu/consumers/odr/
                </Link>
              </p>
              <p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
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