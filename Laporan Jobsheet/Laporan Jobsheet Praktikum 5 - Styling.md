# Styling pada Next.js (Global CSS, CSS Module, Inline Style, SCSS, dan Tailwind CSS)

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

## D. Langkah Praktikum

### 2. CSS Module (Local Scope)

a. Struktur Komponen Navbar

![images](assets/docs_p5/1.png)

b. File CSS Module

• Modifikasi `navbar.module.css`

![images](assets/docs_p5/2.png)

c. Pemanggilan di Komponen

• Modifikasi kode pada `index.tsx` pada folder navbar

![images](assets/docs_p5/3.png)

• Jalankan browser 

![images](assets/docs_p5/4.png)


### 3. Styling untuk Pages (CSS Module)

• Tambahkan `login.module.css` pada folder auth

![images](assets/docs_p5/5.png)

• Modifikasi `login.module.css`

![images](assets/docs_p5/6.png)


• Modifikasi `login.tsx`

![images](assets/docs_p5/7.png)

• Jalankan browser

![images](assets/docs_p5/8.png)


### 4. Conditional Rendering Navbar (Tanpa Navbar di Login)

• Modifikasi `index.tsx` pada folder Appsheel

![images](assets/docs_p5/9.png)

• Jalankan browser

![images](assets/docs_p5/10.png)


### 5. Refactoring Struktur Project (Best Practice)

a. Struktur Awal (Kurang Rapi)

![images](assets/docs_p5/11.png)

b. Struktur Refactor (Disarankan)

![images](assets/docs_p5/12.png)

• Modifikasi `login.module.css` pada folder view/auth/login/

![images](assets/docs_p5/13.png)

• Modifikasi `login.tsx` pada folder pages/auth

![images](assets/docs_p5/14.png)

• Modifikasi `index.tsx` pada folder views/auth/login

![images](assets/docs_p5/15.png)

• Jalankan browser

![images](assets/docs_p5/16.png)


### 6. Inline Styling (CSS-in-JS)

• Modifikasi `index.tsx` pada folder views/auth/login

![images](assets/docs_p5/17.png)

• Jalankan browser

![images](assets/docs_p5/18.png)


### 7. Kombinasi Global CSS + CSS Module

• Modifikasi `global.css`

![images](assets/docs_p5/19.png)

• Modifikasi `index.tsx` pada folder components/layouts/navbar

![images](assets/docs_p5/20.png)

• Jalankan browser

![images](assets/docs_p5/21.png)


### 8. SCSS (SASS)

a. Install SASS

![images](assets/docs_p5/22.png)

• Cek pada `package.json` jika berhasil maka akan muncul seperti pada gambar

![images](assets/docs_p5/23.png)

b. Global Variable

• Tambahkan `colors.scss` pada folder styles

![images](assets/docs_p5/24.png)

• Modifikasi `colors.scss`

![images](assets/docs_p5/25.png)

c. Gunakan di Module

• Tambahkan file `login.module.scss` pada folder views/auth/login/

![images](assets/docs_p5/26.png)

• Modifikasi `index.tsx`

![images](assets/docs_p5/27.png)

• Modifikasi `login.module.scss`

![images](assets/docs_p5/28.png)

• Jalankan browser

![images](assets/docs_p5/29.png)


### 9. Tailwind CSS

a. Install

![images](assets/docs_p5/30.png)

b. Konfigurasi `tailwind.config.js`

![images](assets/docs_p5/31.png)

c. Konfigurasi `postcss.config.mjs`

![images](assets/docs_p5/32.png)

d. Import di Global CSS

![images](assets/docs_p5/33.png)

e. Contoh Penggunaan

• Modifikasi `index.tsx` pada folder auth/login/

![images](assets/docs_p5/34.png)

• Jalankan browser

![images](assets/docs_p5/35.png)


## E. Tugas Praktikum

### Tugas 1

struktur folder views

![images](assets/docs_p5/36.png)

struktur folder auth

![images](assets/docs_p5/37.png)

isi kode `register.module.css`

![images](assets/docs_p5/38.png)

isi kode `index.tsx`

![images](assets/docs_p5/39.png)

isi kode `register.tsx`

![images](assets/docs_p5/40.png)

hasil

![images](assets/docs_p5/41.png)


### Tugas 2

• hasil Refactor halaman Produk ke folder views

![images](assets/docs_p5/42.png)

• Pisahkan Hero Section dan Main Section

kode `index.tsx`

![images](assets/docs_p5/43.png)

![images](assets/docs_p5/44.png)

hasil

![images](assets/docs_p5/45.png)


### Tugas 3

• Terapkan Tailwind CSS

• Gunakan minimal 5 utility class

kode `index.tsx`

![images](assets/docs_p5/43.png)

hasil

![images](assets/docs_p5/45.png)

utility yang dipakai:

1. Layout & Flexbox

Kelas-kelas ini mengatur bagaimana elemen diposisikan dan menyesuaikan ukurannya di dalam layar:

• flex: Mengubah elemen menjadi flex container (display: flex).

• flex-col: Mengatur arah flex items menjadi kolom (vertikal).

• flex-1: Membuat elemen (pada Main Section) mengisi sisa ruang vertikal yang tersedia.

• justify-center: Memusatkan elemen anak secara horizontal (karena arahnya baris/default).

• items-start: Menempatkan elemen anak di bagian atas (awal) dari sumbu silang.

• min-h-screen: Membuat tinggi minimum container utama setara dengan 100% tinggi layar (100vh).

• w-full: Membuat lebar elemen menjadi 100%.

• max-w-2xl: Membatasi lebar maksimal elemen menjadi ukuran 2xl (sekitar 42rem atau 672px).

2. Spacing (Margin & Padding)

Kelas-kelas ini memberikan jarak di dalam (padding) atau di luar (margin) elemen:

• p-10: Memberikan padding di semua sisi sebesar 2.5rem (40px).

• p-8: Memberikan padding di semua sisi sebesar 2rem (32px).

• p-6: Memberikan padding di semua sisi sebesar 1.5rem (24px).

• mb-4: Memberikan margin-bottom (jarak bawah) sebesar 1rem (16px).

3. Typography (Teks & Font)

Kelas-kelas ini mengatur ukuran, ketebalan, warna, dan perataan teks:

• Ukuran: text-4xl (sangat besar), text-2xl (besar), text-lg (sedikit lebih besar dari teks normal).

Ketebalan: font-bold (tebal), font-semibold (setengah tebal).

Perataan: text-center (membuat teks rata tengah).

Warna:

• text-white (putih)

• text-gray-800 (abu-abu gelap)

• text-gray-500 (abu-abu sedang)

4. Backgrounds (Latar Belakang)

Kelas-kelas ini memberikan warna pada latar belakang elemen:

• bg-gray-50: Warna abu-abu sangat terang untuk background keseluruhan halaman.

• bg-blue-600: Warna biru solid untuk bagian Hero Section.

• bg-white: Warna putih untuk kartu "Daftar Produk".

5. Borders & Effects (Batas & Efek Bayangan)

Kelas-kelas ini memberikan sentuhan visual akhir seperti sudut membulat dan bayangan:

• rounded-lg: Membuat sudut elemen menjadi membulat (border-radius besar).

• shadow-md: Memberikan efek bayangan berukuran sedang (medium).

• shadow-lg: Memberikan efek bayangan yang lebih besar dan kentara (large).


## Pertanyaan Refleksi

1. Kapan sebaiknya menggunakan CSS Module dibanding Global CSS?

> Global CSS digunakan untuk utility umum yang berlaku di seluruh aplikasi.

> CSS Module sebaiknya digunakan untuk styling spesifik pada komponen karena memiliki scope lokal. Hal ini mencegah terjadinya bentrok antar nama class di halaman yang berbeda.

2. Apa kelemahan inline styling?

> Meskipun cocok untuk styling kecil dan dinamis, kelemahan utamanya adalah tidak disarankan untuk menyusun layout yang besar karena membuat kode JSX menjadi berantakan dan sulit dikelola.

3. Mengapa SCSS cocok untuk project skala besar?

> SCSS sangat scalable dan maintainable untuk proyek besar. SCSS memiliki fitur variable yang memungkinkan kita menyimpan warna, font, dan ukuran di satu tempat, serta mendukung nested rule yang strukturnya dapat mengikuti struktur HTML.

4. Apa keunggulan Tailwind dibanding CSS tradisional?

> Menggunakan Tailwind CSS membuat proses penulisan kode menjadi lebih cepat dan hasilnya sangat konsisten. Kita bisa langsung menerapkan gaya ke elemen HTML tanpa perlu bolak-balik antara file CSS dan file komponen.