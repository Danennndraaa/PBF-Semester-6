import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import Script from "next/script"; // Tugas 3
import dynamic from "next/dynamic"; // Tugas 4

// Tugas 4: Dynamic import pada komponen Navbar
const Navbar = dynamic(() => import("../navbar"));

const disableNavbar = ['/auth/login', '/auth/register', '/404'];

type AppshellProps = {
  children: React.ReactNode;
};


const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const Appshell = (props:AppshellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
  return (
    <main className={roboto.className}>
      {/* Tugas 3: Script Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-1234567890`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1234567890');
        `}
      </Script>

      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      {/* <footer style={{ backgroundColor: '#333', color: 'white', padding: '15px', textAlign: 'center' }}>
        <p>&copy; Danendra - 244107023011 - 2026 - Pemrograman Berbasis Framework</p>
      </footer> */}
    </main>
  );
};

export default Appshell;