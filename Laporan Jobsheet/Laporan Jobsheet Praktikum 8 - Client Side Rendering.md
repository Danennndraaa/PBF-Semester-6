# Client Side Rendering & Data Fetching

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

## C. Langkah Praktikum

### Bagian 1 – Setup Data Produk

1. Buat endpoint API /api/products.

2. Pastikan data memiliki:

    o id

    o name

    o category

    o price

    o image

![images](assets/docs_p8/1.png)

• Jalankan browser 

![images](assets/docs_p8/3.png)


### Bagian 2 – Implementasi CSR dengan useEffect

• Membuat file `index.tsx` pada folder views/products

![images](assets/docs_p8/4.png)

• Modifikasi `index.tsx`

![images](assets/docs_p8/5.png)

•  Buka file `index.tsx` pada pages/produk/

![images](assets/docs_p8/6.png)

• Modifikasi `index.tsx` pada pages/produk/

![images](assets/docs_p8/7.png)

• Jalankan browser

![images](assets/docs_p8/8.png)

• Pada folder produk buat file `produk.modules.scss`

![images](assets/docs_p8/9.png)

• Modifikasi `produk.modules.scss`

![images](assets/docs_p8/10.png)

• Modifikasi Pada file `index.tsx` pada folder pages/views/product 

![images](assets/docs_p8/11.png)

• Jalankan Browser

![images](assets/docs_p8/12.png)

### Bagian 3 – Implementasi Skeleton Loading

• Modfikasi file `index.tsx` pada folder views/product/`index.tsx`

![images](assets/docs_p8/13.png)

• Modifikasi file `product.module.scss`

![images](assets/docs_p8/14.png)

•  Jalankan browser maka akan muncul skeleton yang terdapat animasi berkedip

![images](assets/docs_p8/15.png)



• Modifikasi pada `index.tsx` pada folder views/product/`index.tsx`

![images](assets/docs_p8/16.png)

• Jalankan browser

![images](assets/docs_p8/17.png)


### Bagian 5 – Implementasi SWR

1. Install SWR

![images](assets/docs_p8/18.png)

2. Buka dan modifkasi file `index.tsx` pada folder pages/product/

![images](assets/docs_p8/19.png)

• Jalankan browser

![images](assets/docs_p8/20.png)


3. Agar terlihat lebih rapi

• Buat folder swr pada utils dan tambahkan file dengan nama fetcher.js

![images](assets/docs_p8/21.png)

• Modifikasi file fetcher.ts

![images](assets/docs_p8/22.png)

• Modifikasi file `index.tsx` pada folder pages/produk/

![images](assets/docs_p8/23.png)

• Jalankan browser

![images](assets/docs_p8/24.png)

Bandingkan:

• useEffect manual

• SWR

1. useEffect Manual (Standar React)

Pendekatan ini menggunakan API bawaan React (useState dan useEffect) untuk mengambil data dari server.

> Cara Kerja: Kamu harus mengatur state loading, error, dan data secara manual. Data akan di-fetch setiap kali komponen di-mount.

> Kelebihan: Tidak perlu meng-install package tambahan, bawaan langsung dari React, cocok untuk pengambilan data yang sangat sederhana.

> Kekurangan: Penulisan boilerplate code (kode berulang) sangat banyak. Sulit mengelola sinkronisasi data (caching), validasi ulang (revalidation), atau logika coba ulang otomatis (retry) jika gagal.

2. SWR (State While Revalidate)

SWR adalah library custom hooks yang dikembangkan oleh Vercel (pembuat Next.js) khusus untuk data fetching.

> Cara Kerja: Mengembalikan data dari cache terlebih dahulu (cepat/instan), lalu melakukan fetch (revalidasi) di belakang layar untuk mendapatkan data terbaru, sebelum akhirnya memperbarui interface dengan data terbaru.

> Kelebihan: Sangat cepat (karena caching), otomatis melakukan pembaruan saat jendela kembali fokus (focus revalidation), polling berkala, kode jauh lebih ringkas, dan manajemen loading/error sangat mudah.

> Kekurangan: Menambahkan dependensi library eksternal ke dalam proyek (swr).


## D. Tugas Praktikum

### 1. Jelaskan perbedaan:

    o Client Side Rendering (CSR): Proses rendering seluruh antarmuka aplikasi terjadi di sisi browser (klien). Server hanya mengirimkan file HTML kosong dan file Javascript. Kekurangannya adalah proses loading awal lambat dan tidak ramah SEO.

    o Server Side Rendering (SSR): Proses rendering HTML dilakukan di server secara langsung pada saat request terjadi. Halaman yang dikirimkan ke browser sudah dalam bentuk HTML penuh dengan data yang dikandungnya. Baik untuk halaman dengan data yang sering berubah dan memerlukan SEO tinggi.

    o Static Site Generation (SSG): Proses rendering HTML dilakukan di server, tetapi pada saat waktu kompilasi (build time). Halaman HTML yang jadi akan dibagikan ke CDN dan dikirimkan secara instan ke user. Sangat cepat dan paling ramah SEO, tetapi tidak cocok jika kontennya selalu berubah-ubah dalam hitungan detik.


### 2. Buat halaman produk dengan:

o Skeleton loading

![images](assets/docs_p8/26.png)


o Animasi

![images](assets/docs_p8/27.png)


### 3. Refactor kode dari useEffect menjadi SWR.

kode pages/produk/index.tsx

![images](assets/docs_p8/25.png)


Hasil Akhir

![images](assets/docs_p8/28.png)
