# Catch-All Routing, Optional Catch-All, Linking & Navigating pada Next.js Pages
Router

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

## D. Langkah Kerja Praktikum

### Langkah 1 – Menjalankan Project

![images](assets/docs_p4/1.png)

### Langkah 2 – Membuat Catch-All Route
Buat folder shop dan file […slug].tsx:

![images](assets/docs_p4/2.png)

Modifikasi Isi file […slug].tsx dengan kode berikut:

![images](assets/docs_p4/3.png)

Cek menggunakan console.log apakah nilai segment berhasil didapat

• Jalankan browser dan ketik urlnya sebagai berikut

![images](assets/docs_p4/4.png)

• Cek Vscode jika pada console.log dapat menampilkan nilai querynya berarti berhasil

![images](assets/docs_p4/5.png)

• Modifikasi [...slug].tsx untuk menampilkan nilai query

![images](assets/docs_p4/38.png)

hasil

![images](assets/docs_p4/6.png)

### Langkah 3 – Pengujian Catch-All Route
Akses URL berikut di browser:

/shop/clothes

![images](assets/docs_p4/7.png)

/shop/clothes/tops

![images](assets/docs_p4/8.png)

/shop/clothes/tops/t-shirt

![images](assets/docs_p4/9.png)

Modifikasi `[…slug].tsx` agar Berapapun banyaknya seqment tetap terbaca 

![images](assets/docs_p4/10.png)

Hasil

![images](assets/docs_p4/11.png)

![images](assets/docs_p4/12.png)

### Langkah 4 – Optional Catch-All Route
Rename file `[...slug].tsx` → `[[...slug]].tsx`

![images](assets/docs_p4/13.png)

hasil

![images](assets/docs_p4/14.png)

### Langkah 5 – Validasi Parameter

Kode `[[...slug]].tsx`

![images](assets/docs_p4/15.png)

Hasil

![images](assets/docs_p4/16.png)

### Langkah 6 – Membuat Halaman Login & Register
Buat folder:

![images](assets/docs_p4/17.png)

Kode `register.tsx`:

![images](assets/docs_p4/18.png)

Kode `login.tsx`:

![images](assets/docs_p4/19.png)

hasil `register.tsx`

![images](assets/docs_p4/20.png)

hasil `login.tsx`

![images](assets/docs_p4/21.png)


### Langkah 7 – Navigasi Imperatif (router.push)
Tambahkan button login:

![images](assets/docs_p4/22.png)

hasil

![images](assets/docs_p4/23.png)

Jika di klik button login maka akan menuju /produk

![images](assets/docs_p4/24.png)

### Langkah 8 – Simulasi Redirect (Belum Login)

kode `index.tsx` pada `produk`

![images](assets/docs_p4/35.png)

Hasil

ketika membuka url /produk

![images](assets/docs_p4/25.png)

akan mengarah ke halaman login

![images](assets/docs_p4/26.png)

## E. Tugas Praktikum

### Tugas 1 (Wajib)
• Buat catch-all route:

• /category/[...slug].tsx

• Tampilkan seluruh parameter URL dalam bentuk list.

Struktur Folder

![images](assets/docs_p4/27.png)

Kode `[...slug].tsx`

![images](assets/docs_p4/28.png)

Hasil

![images](assets/docs_p4/29.png)

### Tugas 2 (Wajib)
• Buat navigasi:

o Login → Product (imperatif)

o Login ↔ Register (Link)

kode `register.tsx`

![images](assets/docs_p4/30.png)

kode `login.tsx`

![images](assets/docs_p4/31.png)

Hasil

hasil `login.tsx`

![images](assets/docs_p4/32.png)

ketika klik login

![images](assets/docs_p4/33.png)

ketika klik register

![images](assets/docs_p4/34.png)

### Tugas 3 (Pengayaan)
• Terapkan redirect otomatis ke login jika user belum login.

kode `index.tsx` pada `produk`

![images](assets/docs_p4/35.png)

saat akses link /produk

![images](assets/docs_p4/36.png)

akan mengarah ke halaman login

![images](assets/docs_p4/37.png)

## Pertanyaan Refleksi

1. Apa perbedaan [id].js dan [...slug].js?

> [id].js adalah Dynamic Route standar yang hanya menangkap satu segmen URL setelah path foldernya. (Contoh: /produk/1 tertangkap, tapi /produk/1/detail akan error 404).

> [...slug].js adalah Catch-All Route yang menangkap seluruh sisa segmen URL tanpa batas. (Contoh: /shop/baju/tshirt/pria semuanya akan ditangkap oleh file ini).

2. Mengapa slug berbentuk array?

> Karena URL bisa terdiri dari banyak segmen yang dipisahkan oleh tanda garis miring (/). Next.js mengumpulkan semua segmen tersebut secara berurutan dan menyimpannya ke dalam bentuk array agar struktur path-nya tetap terjaga dan mudah diakses oleh developer melalui index (contoh: slug[0], slug[1]).

3. Kapan sebaiknya menggunakan Link dan router.push()?

> Gunakan <Link> (Deklaratif): Untuk navigasi standar seperti tombol menu di navbar, footer, atau teks tautan (hyperlink) murni. Ini adalah best practice untuk SEO dan aksesibilitas.

> Gunakan router.push() (Imperatif): Ketika navigasi bergantung pada sebuah kejadian (event) atau logika tertentu. Misalnya: mengarahkan user setelah tombol submit form diklik, atau mengalihkan user ke halaman login karena session habis.

4. Mengapa navigasi Next.js tidak me-refresh halaman?

> Karena Next.js menerapkan konsep Client-Side Navigation untuk komponen halamannya. Saat menggunakan <Link> atau router.push(), Next.js hanya akan mengambil data JSON atau komponen JavaScript yang dibutuhkan untuk rute tujuan secara background, lalu memperbarui antarmuka pengguna (DOM) secara langsung menggunakan React, tanpa meminta ulang seluruh dokumen HTML ke server.