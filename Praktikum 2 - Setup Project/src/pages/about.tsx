export default function About() {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'left',
    borderTop: '5px solid #0070f3',
  };

  const headingStyle: React.CSSProperties = {
    color: '#111',
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const infoGroupStyle: React.CSSProperties = {
    marginBottom: '15px',
    fontSize: '1.1rem',
    color: '#444',
    borderBottom: '1px solid #eee',
    paddingBottom: '8px',
  };

  const labelStyle: React.CSSProperties = {
    color: '#0070f3',
    fontWeight: 'bold',
    display: 'inline-block',
    width: '120px',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Halaman About</h1>
        
        <div style={infoGroupStyle}>
          <span style={labelStyle}>Nama:</span> Danendra Adhipramana
        </div>
        
        <div style={infoGroupStyle}>
          <span style={labelStyle}>NIM:</span> 244107023011
        </div>
        
        <div style={infoGroupStyle}>
          <span style={labelStyle}>Mata Kuliah:</span> Pemrograman Berbasis Framework
        </div>
        
        <div style={infoGroupStyle}>
          <span style={labelStyle}>Program Studi:</span> D4 Teknik Informatika
        </div>
      </div>
    </div>
  );
}