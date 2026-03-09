# Static Site Generation (SSG)

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

## C. Langkah Praktikum

### Bagian 1 – Setup Halaman Static

1. Buat file baru pada pages/products/`static.tsx`

![images](assets/docs_p10/1.png)

2. Modifikasi file `static.tsx`

![images](assets/docs_p10/2.png)


### Bagian 3 – Build Production Mode

1. Pindah beberapa folder diluar pages antara lain
- Untuk menghindari error maka folder Views, utils, styles dipindah di luar
folder src sehingga susunan folder pada src sebagai berikut

![images](assets/docs_p10/3.png)

2. Jalankan: npm run build
- Jalankan npm run dev dan pastikan ini jalan, buka dua terminal

o Terminal 1 : jalankan aplikasi npm run dev

![images](assets/docs_p10/4.png)

o Terminal 2 : build aplikasi

![images](assets/docs_p10/5.png)


- Hal ini dikarenakan aplikasi berjalan di local http://localhost:3000/api/produk (
jika berhasil maka akan muncul pesan route(pages))

![images](assets/docs_p10/6.png)

3. Jika berhasil: npm run start

![images](assets/docs_p10/7.png)

4. Akses: http://localhost:3000/produk/static

![images](assets/docs_p10/8.png)

### Bagian 4 – Pengujian Perubahan Data

1. Buka database firebasenya
- Tambahkan produk baru di database.

![images](assets/docs_p10/9.png)

jika sudah tambah data: 

![images](assets/docs_p10/10.png)

2. Buka halaman:

• /produk (CSR) → Data bertambah

![images](assets/docs_p10/11.png)

• /produk/server (SSR) → Data bertambah

![images](assets/docs_p10/12.png)

• /produk/static (SSG) → Data tidak berubah

![images](assets/docs_p10/13.png)


### Uji 2 – Build Ulang

1. Jalankan kembali:

• npm run build

![images](assets/docs_p10/14.png)

![images](assets/docs_p10/15.png)

• npm run start

o npm run dev stop terlebih dahulu setelah itu npm run start

![images](assets/docs_p10/16.png)

2. Refresh halaman static
→ Data baru muncul

![images](assets/docs_p10/17.png)


## D. Tugas Praktikum

### 1. Buat 3 halaman:

o CSR

kode: 

![images](assets/docs_p10/18.png)

hasil: 

![images](assets/docs_p10/21.png)

o SSR

kode:

![images](assets/docs_p10/19.png)

hasil

![images](assets/docs_p10/22.png)

o SSG

kode:

![images](assets/docs_p10/20.png)

hasil

![images](assets/docs_p10/23.png)


### 2. Lakukan pengujian:

o Hapus data

Hapus data pada Firebase

![images](assets/docs_p10/24.png)

Hasil CSR

![images](assets/docs_p10/25.png)

Hasil SSR

![images](assets/docs_p10/26.png)

Hasil SSG

![images](assets/docs_p10/27.png)

Build Ulang

![images](assets/docs_p10/28.png)

Hasil Build Ulang

![images](assets/docs_p10/29.png)


o Tambah data

Tambah data pada Firebase

![images](assets/docs_p10/30.png)

Data Berhasil ditambahkan

![images](assets/docs_p10/31.png)

Hasil CSR

![images](assets/docs_p10/32.png)

Hasil SSR

![images](assets/docs_p10/33.png)

Hasil SSG

![images](assets/docs_p10/34.png)

Build Ulang

![images](assets/docs_p10/35.png)

Hasil Build Ulang

![images](assets/docs_p10/36.png)


o Bandingkan hasil

Ketika Refresh ketiga halaman tersebut:

1. CSR: Langsung menampilkan perubahan data terbaru karena browser men-download ulang data dari API.

2. SSR: Langsung menampilkan perubahan data terbaru karena server merakit ulang HTML baru saat menekan tombol refresh.

3. SSG: TIDAK BERUBAH SAMA SEKALI. Halaman tetap menampilkan data lama saat melakukan npm run build. Ini membuktikan bahwa SSG murni menyajikan file HTML mati yang super cepat.

## E. Studi Analisis

1. Mengapa SSG tidak menampilkan data terbaru?

> Karena SSG (Static Site Generation) hanya mengambil data dari API/database dan merakitnya menjadi file HTML satu kali saja, yaitu saat perintah `npm run build` dijalankan. Saat user mengakses web, server hanya memberikan file HTML yang sudah jadi tersebut, tanpa peduli apakah database di belakang layar sudah berubah.

2. Mengapa SSG lebih cepat?

> Karena tidak ada proses komputasi yang terjadi di server saat ada request masuk. Tidak ada query ke database, tidak ada perakitan HTML on-the-fly. Server (atau CDN) cukup mengambil file statis (`.html`) yang sudah tersedia dan langsung mengirimkannya ke browser pengguna secara instan.

3. Kapan SSG tidak cocok digunakan?

> SSG murni sangat tidak cocok untuk halaman yang datanya berfokus pada pengguna spesifik (seperti dashboard profil/akun) atau halaman yang datanya sangat dinamis dan berubah setiap detik (seperti timeline media sosial, pergerakan saham, atau ketersediaan tiket).

4. Mengapa e-commerce tidak cocok menggunakan SSG murni?

> Di e-commerce, data seperti sisa stok barang, diskon flash sale, dan harga bisa berubah kapan saja. Jika menggunakan SSG murni, stok barang yang sebenarnya sudah habis akan tetap terlihat "Tersedia" di layar pengguna sampai developer melakukan build ulang aplikasi. Ini akan menyebabkan transaksi error dan kekecewaan pelanggan. (Catatan: Next.js modern menggunakan ISR / Incremental Static Regeneration untuk mengatasi hal ini, tapi SSG murni tidak bisa).

5. Apa perbedaan build mode dan development mode?

> Development Mode (`npm run dev`): Mode ini dirancang khusus untuk kenyamanan developer. Tidak ada optimasi kecepatan, dan fitur seperti SSG akan dimatikan (dipaksa berjalan seperti SSR agar developer bisa langsung melihat perubahan data tanpa harus build berulang kali). Terdapat fitur Hot Reload.

> Build Mode / Production (`npm run build` & `npm run start`): Mode ini mengoptimasi seluruh kode, mengecilkan ukuran file, dan mengeksekusi SSG untuk membuat file HTML statis. Ini adalah simulasi lingkungan nyata (produksi) aplikasi saat sudah di-deploy ke internet.