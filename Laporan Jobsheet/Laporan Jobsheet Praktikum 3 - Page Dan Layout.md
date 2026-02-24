# Routing, Nested Routing, Dynamic Routing, dan Layouting pada Next.js (Pages Router)

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

## D. Langkah Praktikum

### 1. Routing Dasar (Static Routing)
a. Menambahkan Halaman About

![images](assets/docs_p3/1.png)

b. Kode

![images](assets/docs_p3/2.png)

c. Hasil

![images](assets/docs_p3/3.png)


### 2. Routing Menggunakan Folder
a. Rapikan Struktur Pages

![images](assets/docs_p3/4.png)

b. hasil

![images](assets/docs_p3/5.png)

### 3. Nested Routing
a. Buat Folder Setting

![images](assets/docs_p3/6.png)

modifikasi kode:

`app.tsx`

![images](assets/docs_p3/7.png)

`user.tsx`

![images](assets/docs_p3/8.png)

Akses di Browser:

Hasil `user.tsx`

![images](assets/docs_p3/10.png)

Hasil `app.tsx`

![images](assets/docs_p3/9.png)

Modifikasi struktur folder pages dengan menambahkan folder user dan user.tsx pada setting
dipindah ke folder user dan rubah file user.tsx menjadi index.tsx

![images](assets/docs_p3/11.png)

Hasil

![images](assets/docs_p3/12.png)

b. Nested Lebih Dalam
Struktur Folder

![images](assets/docs_p3/13.png)

Kode:

![images](assets/docs_p3/14.png)

Hasil:

![images](assets/docs_p3/15.png)

### 4. Dynamic Routing
a. Buat Halaman Produk

![images](assets/docs_p3/16.png)

Kode `index.tsx`

![images](assets/docs_p3/17.png)

Hasil `app.tsx`

![images](assets/docs_p3/18.png)

Modifikasi `[id].tsx`

Buka browser http://localhost:3000/produk/sepatu tambahkan segment sepatu

![images](assets/docs_p3/19.png)

Cek menggunakan Console Log dengan console ninja

![images](assets/docs_p3/20.png)

Modifikasi [id].tsx agar dapat mengambil nilai dari id

![images](assets/docs_p3/21.png)

Hasil

![images](assets/docs_p3/22.png)

### 5. Membuat Komponen Navbar
a. Struktur Komponen

![images](assets/docs_p3/23.png)

Modifikasi `global.css`

![images](assets/docs_p3/24.png)

Modifikasi `index.tsx` dengan menambahkan classname untuk style navbar

![images](assets/docs_p3/25.png)

Modifikasi `index.tsx` pada folder pages

![images](assets/docs_p3/26.png)

Hasil

![images](assets/docs_p3/27.png)

Modifikasi navbar agar tampil di semua page

Modifikasi _app.tsx ( Menambahkan navbar )

![images](assets/docs_p3/28.png)

Hasil

![images](assets/docs_p3/29.png)

### 6. Membuat Layout Global (App Shell)
a. Buat AppShell

![images](assets/docs_p3/30.png)

Modifikasi `index.tsx` pad AppShell

![images](assets/docs_p3/31.png)

### 7. Implementasi Layout di _app.tsx

Kode `app.tsx`

![images](assets/docs_p3/32.png)

Modifikasi pada _app.tsx tambahkan footer

![images](assets/docs_p3/33.png)

Hasil

![images](assets/docs_p3/34.png)

## Tugas Praktikum

### Tugas 1 – Routing
1. Buat halaman:

o /profile

o /profile/edit

Struktur Folder

![images](assets/docs_p3/35.png)

Kode `index.tsx`

![images](assets/docs_p3/36.png)

Kode `edit.tsx`

![images](assets/docs_p3/37.png)

Hasil `/profile`

![images](assets/docs_p3/38.png)

Hasil `/profile/edit`

![images](assets/docs_p3/39.png)

### Tugas 2 – Dynamic Routing
1. Buat routing:
2. /blog/[slug]
3. Tampilkan nilai slug di halaman

Struktur Folder

![images](assets/docs_p3/40.png)

Kode `[slug].tsx`

![images](assets/docs_p3/41.png)

Hasil

![images](assets/docs_p3/42.png)

### Tugas 3 – Layout
1. Tambahkan Footer pada AppShell
2. Footer tampil di semua halaman

Kode `index.tsx` pada ``_app.tsx``

![images](assets/docs_p3/43.png)

Hasil

![images](assets/docs_p3/44.png)

## Pertanyaan Refleksi

1. Apa perbedaan routing berbasis file dan routing manual?

> Routing berbasis file (Next.js): Routing otomatis dibuat berdasarkan struktur folder dan nama file di dalam direktori pages/ tanpa memerlukan konfigurasi tambahan.

>Routing manual (seperti React Router standar): Developer harus menulis kode konfigurasi secara eksplisit untuk memetakan setiap alamat URL ke komponen tertentu.

2. Mengapa dynamic routing penting dalam aplikasi web?

> Dynamic routing memungkinkan kita membuat satu buah template halaman yang bisa menampilkan data berbeda-beda berdasarkan parameter yang ada di URL. Misalnya, daripada membuat ratusan file untuk ratusan artikel blog yang berbeda, kita cukup membuat satu file [slug].tsx yang menangani semua artikel tersebut secara dinamis.

3. Apa keuntungan menggunakan layout global dibanding memanggil komponen satu per satu?

> Keuntungan utamanya adalah efisiensi dan konsistensi. Komponen seperti Navbar dan Footer akan otomatis muncul di semua halaman tanpa perlu kita import dan panggil satu per satu di setiap file halaman. Jika ada perubahan pada desain Navbar, kita hanya perlu mengubahnya di satu tempat (AppShell), dan perubahannya akan langsung teraplikasi ke seluruh aplikasi.