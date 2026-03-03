# API Routes pada Next.js dan Integrasi Firebase (Fullstack Next.js)

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

## D. Langkah Kerja Praktikum

### Langkah 1 – Menjalankan Project

![images](assets/docs_p7/1.png)


### Langkah 2 – Membuat API Produk

•  Buat file pada pages/api/`produk.ts`

![images](assets/docs_p7/2.png)

• Tambahkan data statis:

![images](assets/docs_p7/3.png)

• Jalankan browser 

![images](assets/docs_p7/4.png)


### Langkah 3 – Fetch Data API di Frontend

•  Modifikasi kode pada pages/product/`index.tsx`

![images](assets/docs_p7/5.png)

• Jalankan browser

![images](assets/docs_p7/6.png)


## E. Integrasi Firebase

### Langkah 5 – Setup Firebase

• Buka Firebase Go To Console ( login dengan akun google)

![images](assets/docs_p7/7.png)

•  Buat project baru yaitu Framework-next

![images](assets/docs_p7/8.png)

•  klik Continue

![images](assets/docs_p7/9.png)

• klik create project dan disable google analytics

![images](assets/docs_p7/10.png)

• Klik Continue

![images](assets/docs_p7/11.png)

• jika sudah berhasil akan menuju ke halaman Dashboard

![images](assets/docs_p7/12.png)

• klik add app dan pilih web

![images](assets/docs_p7/13.png)

• klik register app

![images](assets/docs_p7/14.png)

•  klik continue to console

![images](assets/docs_p7/15.png)

3. Aktifkan Firestore Database

![images](assets/docs_p7/16.png)

• Klik create database

![images](assets/docs_p7/17.png)

• pilih standart option kemudian Next

![images](assets/docs_p7/18.png)

• Pilih Location asia-southeast2 (Jakarta) kemudian klik Next

![images](assets/docs_p7/19.png)

• klik Create

![images](assets/docs_p7/20.png)

• Jika berhasil akan menuju ke halaman Firestore Database

![images](assets/docs_p7/21.png)

• Rubah rulesnya jadi true dan klik publish

![images](assets/docs_p7/22.png)

4. Buat collection `products`:

![images](assets/docs_p7/23.png)

• Gunakan auto-id kemudian Tambahkan field:

![images](assets/docs_p7/24.png)

• jika document berhasil dibuat akan muncul seperti dibawah 

![images](assets/docs_p7/25.png)


### Langkah 6 – Install Firebase

• install `npm install firebase` pada project

![images](assets/docs_p7/26.png)

• Buat folder dan file ts pada pages utlis/db/`firebase.ts`

![images](assets/docs_p7/27.png)

• Copy paste yang ada pada kotak merah ke file `firebase.ts`

![images](assets/docs_p7/28.png)


### Langkah 7 – Konfigurasi Environment Variable agar credensial firebase tidak dapat dilihat saat dipush di repository

• Buat file: `.env.local` dan Modifikasi file env Isikan sesuai dengan yang ada pada firebase

![images](assets/docs_p7/29.png)


### Langkah 8 – Konfigurasi Firebase

• Modifikasi firebase.ts

![images](assets/docs_p7/30.png)


### Langkah 9 – Ambil Data dari Firestore

• Buat File ulits/db/`servicefirebase.ts`

![images](assets/docs_p7/31.png)

• modifikasi file `servicefirebase.ts`

![images](assets/docs_p7/32.png)


### Langkah 10 – API Mengambil Data Firebase

• Edit pages/api/`product.ts`:

![images](assets/docs_p7/33.png)

• Jalankan browser

![images](assets/docs_p7/34.png)

• Modifikasi `index.ts` pada produk sesuaikan nama typenya dan db nya

![images](assets/docs_p7/38.png)

• Jalankan browser

![images](assets/docs_p7/35.png)

## F. Tugas Praktikum

### Tugas 1 (Wajib)

• Tambahkan minimal 3 data produk di Firestore

![images](assets/docs_p7/36.png)

• Pastikan data tampil di halaman produk

![images](assets/docs_p7/37.png)

![images](assets/docs_p7/39.png)


### Tugas 2

• Tambahkan field baru:

    o category

![images](assets/docs_p7/36.png)

• Tampilkan category di frontend

![images](assets/docs_p7/39.png)

### Tugas 3

• Tambahkan tombol Refresh Data

• Gunakan fetch ulang tanpa reload halaman

kode:

![images](assets/docs_p7/40.png)

hasil:

![images](assets/docs_p7/41.png)


## Pertanyaan Refleksi

1. Apa fungsi API Routes pada Next.js?

> API Routes berfungsi untuk membuat endpoint backend (API) langsung di dalam aplikasi Next.js tanpa perlu membuat server backend terpisah (seperti Node.js/Express). File yang dibuat di dalam folder pages/api/ akan otomatis menjadi rute API yang mengembalikan data (biasanya berformat JSON).

2. Mengapa `.env.local` tidak boleh di-push ke repository?

> File `.env.local` berisi variabel lingkungan (environment variables) yang menyimpan data rahasia seperti API Keys, konfigurasi database, dan password. Jika di-push ke repository publik (seperti GitHub), data rahasia tersebut bisa bocor dan disalahgunakan oleh pihak yang tidak bertanggung jawab.

3. Apa perbedaan data statis dan data dinamis?

> Data Statis: Data yang ditulis langsung (di-hardcode) di dalam kode aplikasi. Jika ingin mengubah datanya, kamu harus mengubah kodenya dan melakukan deploy ulang aplikasinya.

> Data Dinamis: Data yang diambil dari sumber luar, seperti database (Firestore) atau API pihak ketiga. Datanya bisa berubah-ubah kapan saja tanpa perlu mengubah kode atau melakukan deploy ulang.

4. Mengapa Next.js disebut framework fullstack?

> Karena Next.js menyediakan fitur yang memungkinkan pengembang untuk membuat bagian antarmuka pengguna (Frontend dengan React) sekaligus membangun server logic dan rute API (Backend dengan API Routes) dalam satu kerangka kerja dan satu repository yang sama.