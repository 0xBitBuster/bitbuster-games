import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-2xl font-bold hover:text-indigo-400 transition-colors">
              BitBuster Games
            </Link>
            <Link href="https://play.google.com/store/apps/developer?id=BitBuster+Games" target="_blank">
              <img src="/images/google-play.webp" className="h-10" alt="BitBuster Games on Google Play" />
            </Link>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-slide-up">
              Gaming, but
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {" "}
                Meme-ified
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up-delay">
              Where your skills are tested and your sense of humor gets a
              workout. Built for those of you who know...
            </p>
            <div className="flex justify-center space-x-4 animate-slide-up-delay-2">
              <Link href="https://play.google.com/store/apps/developer?id=BitBuster+Games" target="_blank" className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                Play the Hits
              </Link>
              <Link href="#games" className="border border-indigo-400 hover:bg-indigo-800/30 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
                See all Games
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <img src="/illustrations/chevron-down.svg" className="w-8 h-8" alt="" />
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <div className="bg-indigo-800/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg backdrop-blur-sm bg-white/5">
              <h2 className="text-4xl mb-4">👴</h2>
              <h3 className="text-3xl font-bold">100+</h3>
              <p className="text-gray-400">Active Players</p>
            </div>
            <div className="p-6 rounded-lg backdrop-blur-sm bg-white/5">
              <h2 className="text-4xl mb-4">🏆</h2>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-gray-400">Fun Guarantee</p>
            </div>
            <div className="p-6 rounded-lg backdrop-blur-sm bg-white/5">
              <img src="/images/whip.png" className="w-12 h-12 mx-auto mb-2" alt="Whip" />
              <h3 className="text-3xl font-bold">2</h3>
              <p className="text-gray-400">Games Released</p>
            </div>
          </div>
        </div>
      </div>

      {/* Games Section */}
      <section className="py-24 container mx-auto px-6" id="games">
        <h2 className="text-4xl font-bold text-center mb-16">Our Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Link href="https://play.google.com/store/apps/details?id=com.bitbuster.gnomerunner" target="_blank"  className="group rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all transform hover:scale-105">
            <div className="aspect-video p-8 bg-gradient-to-br from-green-500/20 to-emerald-700/20 flex items-center justify-center">
              <img src="/images/gnomerun.png" className="rounded-xl w-full" alt="Gnome Run game on google play" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Gnome Run</h3>
              <p className="text-gray-400 mb-4">
                Will the knights catch you, or can you escape their trap in Gnome Runner? Step into the viral world of Gnome Run, an exciting infinite runner inspired by the popular Gnome vs Knights meme!
              </p>
              <Link href="https://play.google.com/store/apps/details?id=com.bitbuster.gnomerunner" target="_blank" className="text-sm bg-gradient-to-br from-green-600 to-green-800 px-4 py-2 rounded-full transition-colors">
                Play Now
              </Link>
            </div>
          </Link>

          <Link href="https://play.google.com/store/apps/details?id=com.bitbuster.com" target="_blank" className="group rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all transform hover:scale-105">
            <div className="aspect-video p-8 bg-gradient-to-br from-red-500/20 to-blue-700/20 flex items-center justify-center">
              <img src="/images/redorbluepillgame.png" className="rounded-xl w-full" alt="Red or blue pill game on google play" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Red Or Blue Pill</h3>
              <p className="text-gray-400 mb-4">
                A fun party game in which you have to choose between two difficult scenarios.With over 200+ mind-bending scenarios spanning various categories like friends, love, sports, and more.
              </p>
              <button className="text-sm bg-gradient-to-br from-blue-600 to-purple-600 px-4 py-2 rounded-full transition-colors">
                Play Now
              </button>
            </div>
          </Link>
        </div>
      </section>

      <footer className="text-white/70 text-center pb-8">
        {new Date().getFullYear()} &copy; Tobias Scharl &bull; <Link className="hover:text-white duration-300" href="/privacy-policy">Privacy Policy</Link> &bull; <Link className="hover:text-white duration-300" href="/imprint">Imprint</Link>
      </footer>
    </div>
  );
}
