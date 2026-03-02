const ProductView = () => {
  return (
    // 1. flex, 2. flex-col, 3. min-h-screen, 4. bg-gray-50
    <div className="flex flex-col min-h-screen bg-gray-50"> 
      
      {/* --- HERO SECTION --- */}
      {/* 5. bg-blue-600, 6. text-white, 7. p-10, 8. text-center */}
      <section className="bg-blue-600 text-white p-10 text-center shadow-md">
        <h1 className="text-4xl font-bold mb-4">Katalog Produk</h1>
        <p className="text-lg">Temukan berbagai macam produk terbaik kami di sini.</p>
      </section>

      {/* --- MAIN SECTION --- */}
      {/* 9. flex-1, 10. p-8, 11. flex, 12. justify-center */}
      <section className="flex-1 p-8 flex justify-center items-start">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Daftar Produk</h2>
          <p className="text-gray-500">Belum ada produk yang tersedia saat ini.</p>
        </div>
      </section>

    </div>
  );
};

export default ProductView;