import Navbar from "../navbar"; 

type AppshellProps = {
  children: React.ReactNode;
};

const Appshell = (props:AppshellProps) => {
    const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
      <footer style={{ backgroundColor: '#333', color: 'white', padding: '15px', textAlign: 'center' }}>
        <p>&copy; Danendra - 244107023011 - 2026 - Pemrograman Berbasis Framework</p>
      </footer>
    </main>
  );
};

export default Appshell;