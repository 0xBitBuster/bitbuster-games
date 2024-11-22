import "@/styles/globals.css";
import { Poppins } from "next/font/google"

const poppinsFont = Poppins({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] 
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppinsFont.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
