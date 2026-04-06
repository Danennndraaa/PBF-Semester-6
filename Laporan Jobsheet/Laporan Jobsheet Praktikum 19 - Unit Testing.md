# Implementasi Unit Testing pada Next.js menggunakan Jest
Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

### PRAKTIKUM 1 – Setup Jest di Next.js

1. Install Dependencies

![alt text](assets/docs_p19/1.png)

2. Buat File Konfigurasi

Doc : https://nextjs.org/docs/pages/guides/testing/jest

• Buat file:

o `jest.config.mjs` kemudian Isi dengan:

![alt text](assets/docs_p19/2.png)

3. Tambahkan Script di package.json

![alt text](assets/docs_p19/3.png)

### PRAKTIKUM 2 – Struktur Folder Testing

Buat folder:

`src/__test__/`

![alt text](assets/docs_p19/4.png)

### PRAKTIKUM 3 – Testing Halaman About

1. Buat File Testing

`src/__test__/pages`/`about.spec.tsx`

![alt text](assets/docs_p19/5.png)

2. Contoh Testing Snapshot. Pada `about.spec.tsx` tambahkan code berikut :

![alt text](assets/docs_p19/6.png)

Jalankan Testing

• `npm run test`

• Jika berhasil:

• PASS `about.spec.tsx`

![alt text](assets/docs_p19/7.png)

jika sudah dijalankan akan muncul folder `__snapshots__`

![alt text](assets/docs_p19/8.png)

### PRAKTIKUM 4 – Coverage Report

• Jalankan:

o `npm run test:coverage`

![alt text](assets/docs_p19/9.png)

• Akan muncul folder:

o coverage/

o Buka:

▪ `coverage/lcov-report/index.html` ( buka di melalui explorer)

![alt text](assets/docs_p19/10.png)

![alt text](assets/docs_p19/11.png)


### PRAKTIKUM 5 – Konfigurasi Coverage Lengkap

• Update `jest.config.mjs`:

![alt text](assets/docs_p19/12.png)

• Jalankan `npm run test:coverage`

![alt text](assets/docs_p19/13.png)

![alt text](assets/docs_p19/14.png)

• Jika dilihat di index.htmlnya

![alt text](assets/docs_p19/15.png)


### PRAKTIKUM 6 – Testing dengan getByTestId

1. Tambahkan pada About Page

• `<h1 data-testid="title">About Page</h1>`

![alt text](assets/docs_p19/16.png)

2. Update Testing pada `about.spec.tsx`

![alt text](assets/docs_p19/17.png)

• Dicoba untuk di run

![alt text](assets/docs_p19/18.png)

• Coba Jika dibuat Salah:

- Rubah menjadi toBe("About")

![alt text](assets/docs_p19/19.png)

• Jalan kan dan Hasil:

o FAIL

Expected: "About"

Received: "About Page"

![alt text](assets/docs_p19/20.png)

![alt text](assets/docs_p19/21.png)

### PRAKTIKUM 7 – Testing Page dengan Router (Mocking)

Kita coba untuk melakukan testing pada halaman produk

1. Buat file `product.spec.tsx`

![alt text](assets/docs_p19/22.png)

2. Tambahkan kode berikut

![alt text](assets/docs_p19/23.png)

3. Ketika testing halaman Product, sering muncul error:

• NextRouter was not mounted

![alt text](assets/docs_p19/24.png)

Solusi: Mock Next Router

Tambahkan di file `product.spec.tsx`

![alt text](assets/docs_p19/25.png)

### PRAKTIKUM 8 – Menangani Undefined Data
• Jalankan `npm run test:coverage` maka akan muncul error

![alt text](assets/docs_p19/26.png)

• Jika muncul error:

o Cannot read properties of undefined

o Perbaiki di komponen:

Pada file `index.tsx` pada folder pages/produk

![alt text](assets/docs_p19/30.png)

Jalankan `npm run test:coverage` maka akan muncul error

![alt text](assets/docs_p19/29.png)

Maka Solusinya perbaiki code pada file

![alt text](assets/docs_p19/31.png)

Note pastikan : comment pada code berikut pada 2 code testing

![alt text](assets/docs_p19/32.png)

![alt text](assets/docs_p19/33.png)

Analisis Coverage

![alt text](assets/docs_p19/34.png)

Jika dilihat aplikasi yang dibuat masih 9% jadi perlu banyak perbaikan sebelum proses deploy.

## Tugas Praktikum
1. Buat unit test untuk:

o Halaman Product

![alt text](assets/docs_p19/35.png)

o 1 Komponen

![alt text](assets/docs_p19/37.png)

![alt text](assets/docs_p19/38.png)

2. Gunakan minimal:

o 1 Snapshot test

![alt text](assets/docs_p19/6.png)

o 1 toBe()

![alt text](assets/docs_p19/19.png)

o 1 getByTestId()

![alt text](assets/docs_p19/17.png)



3. Buat coverage minimal 50%

![alt text](assets/docs_p19/38.png)

![alt text](assets/docs_p19/41.png)

![alt text](assets/docs_p19/42.png)

![alt text](assets/docs_p19/39.png)

![alt text](assets/docs_p19/40.png)

![alt text](assets/docs_p19/43.png)


4. Lakukan mocking untuk router

![alt text](assets/docs_p19/25.png)

5. Dokumentasikan hasil coverage

![alt text](assets/docs_p19/41.png)

![alt text](assets/docs_p19/42.png)

![alt text](assets/docs_p19/39.png)

![alt text](assets/docs_p19/40.png)

![alt text](assets/docs_p19/43.png)

![alt text](assets/docs_p19/44.png)

![alt text](assets/docs_p19/45.png)



## Diskusi & Refleksi

**1. Mengapa unit testing penting sebelum production?**
Unit testing sangat penting untuk mencegah *bug* masuk ke dalam *production*, menjamin stabilitas kode, dan memastikan bahwa perubahan fitur baru tidak merusak fitur lama yang sudah berjalan dengan baik. Dengan melakukan *testing*, kualitas perangkat lunak dapat terukur sebelum dirilis ke pengguna nyata.

**2. Mengapa branch coverage sulit mencapai 100%?**
*Branch coverage* adalah indikator yang mengukur seberapa banyak kondisi logika percabangan (seperti `if/else`, `switch/case`, atau *ternary operator*) yang berhasil diuji. Karena biasanya terdapat banyak kondisi yang memerlukan pengujian percabangan ini, mencapai 100% menjadi proses yang sangat sulit, memakan waktu ekstra, dan mewajibkan *developer* menyimulasikan setiap probabilitas kondisi yang mungkin terjadi.

**3. Apa itu mocking?**
*Mocking* adalah teknik dalam *unit testing* untuk memalsukan atau membuat tiruan dari dependensi atau fungsi eksternal (seperti mengambil data dari *database*, *fetch* API, atau `next/router`). Tujuannya agar kita dapat mengisolasi bagian kode yang sedang dites dan memastikannya berfungsi tanpa harus bergantung pada respons dari sistem eksternal tersebut.

**4. Kapan snapshot test digunakan?**
*Snapshot test* digunakan ketika kita ingin memastikan bahwa tampilan antarmuka pengguna (struktur UI/DOM) dari sebuah komponen tidak berubah secara tidak sengaja di masa depan. *Test* ini akan mengambil "foto" dari struktur HTML komponen, dan jika ada perubahan pada kode yang merusak struktur tersebut, Jest akan segera memunculkan peringatan.

**5. Apakah semua file harus dites?**
Tidak semua *file* diwajibkan harus lolos uji 100%. Secara standar industri, persentase *coverage* 80% ke atas sudah dianggap cukup dan aman untuk diteruskan ke tahap *production*. Namun, yang menjadi aturan wajib adalah **semua fitur kritikal** (*critical feature*) dari aplikasi (seperti logika kalkulasi harga, alur *login*, atau validasi pendaftaran) harus diuji secara menyeluruh untuk mencegah kegagalan sistem yang fatal.