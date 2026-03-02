import { useRouter } from "next/router";
import Navbar from "../navbar"; 

const disableNavbar = ['/auth/login', '/auth/register', '/404'];

type AppshellProps = {
  children: React.ReactNode;
};

const Appshell = (props:AppshellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
      <footer style={{ backgroundColor: '#333', color: 'white', padding: '15px', textAlign: 'center' }}>
        <p>&copy; Danendra - 244107023011 - 2026 - Pemrograman Berbasis Framework</p>
      </footer>
    </main>
  );
};

export default Appshell;