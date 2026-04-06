import { useRouter } from "next/router";
import Navbar from "../navbar"; 
import { Roboto } from "next/font/google";

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
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      {/* <footer style={{ backgroundColor: '#333', color: 'white', padding: '15px', textAlign: 'center' }}>
        <p>&copy; Danendra - 244107023011 - 2026 - Pemrograman Berbasis Framework</p>
      </footer> */}
    </main>
  );
};

export default Appshell;