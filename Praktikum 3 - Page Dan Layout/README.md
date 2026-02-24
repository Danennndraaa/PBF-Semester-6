# Routing, Nested Routing, Dynamic Routing, dan Layouting pada Next.js (Pages Router)

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

## D. Langkah Praktikum

### 1. Routing Dasar (Static Routing)
a. Menambahkan Halaman About

![images](docs/1.png)

b. Kode

![images](docs/2.png)

c. Hasil

![images](docs/3.png)


### 2. Routing Menggunakan Folder
a. Rapikan Struktur Pages

![images](docs/4.png)

b. hasil

![images](docs/5.png)

### 3. Nested Routing
a. Buat Folder Setting

![images](docs/6.png)

modifikasi kode:

`app.tsx`

![images](docs/7.png)

`user.tsx`

![images](docs/8.png)

Akses di Browser:

Hasil `user.tsx`

![images](docs/10.png)

Hasil `app.tsx`

![images](docs/9.png)

Modifikasi struktur folder pages dengan menambahkan folder user dan user.tsx pada setting
dipindah ke folder user dan rubah file user.tsx menjadi index.tsx

![images](docs/11.png)

Hasil

![images](docs/12.png)

b. Nested Lebih Dalam
Struktur Folder

![images](docs/13.png)

Kode:

![images](docs/14.png)

Hasil:

![images](docs/15.png)

### 4. Dynamic Routing
a. Buat Halaman Produk

![images](docs/16.png)

Kode `index.tsx`

![images](docs/17.png)

Hasil `app.tsx`

![images](docs/18.png)

Modifikasi `[id].tsx`

Buka browser http://localhost:3000/produk/sepatu tambahkan segment sepatu

![images](docs/19.png)

Cek menggunakan Console Log dengan console ninja

![images](docs/20.png)

Modifikasi [id].tsx agar dapat mengambil nilai dari id

![images](docs/21.png)

Hasil

![images](docs/22.png)

### 5. Membuat Komponen Navbar
a. Struktur Komponen

![images](docs/23.png)

Modifikasi `global.css`

![images](docs/24.png)

Modifikasi `index.tsx` dengan menambahkan classname untuk style navbar

![images](docs/25.png)

Modifikasi `index.tsx` pada folder pages

![images](docs/26.png)

Hasil

![images](docs/27.png)

Modifikasi navbar agar tampil di semua page

Modifikasi _app.tsx ( Menambahkan navbar )

![images](docs/28.png)

Hasil

![images](docs/29.png)

### 6. Membuat Layout Global (App Shell)
a. Buat AppShell

![images](docs/30.png)

Modifikasi `index.tsx` pad AppShell

![images](docs/31.png)

### 7. Implementasi Layout di _app.tsx

Kode `app.tsx`

![images](docs/32.png)

Modifikasi pada _app.tsx tambahkan footer

![images](docs/33.png)

Hasil

![images](docs/34.png)

## Tugas Praktikum

### Tugas 1 – Routing
1. Buat halaman:

o /profile

o /profile/edit

Struktur Folder

![images](docs/35.png)

Kode `index.tsx`

![images](docs/36.png)

Kode `edit.tsx`

![images](docs/37.png)

Hasil `/profile`

![images](docs/38.png)

Hasil `/profile/edit`

![images](docs/39.png)

### Tugas 2 – Dynamic Routing
1. Buat routing:
2. /blog/[slug]
3. Tampilkan nilai slug di halaman

Struktur Folder

![images](docs/40.png)

Kode `[slug].tsx`

![images](docs/41.png)

Hasil

![images](docs/42.png)

### Tugas 3 – Layout
1. Tambahkan Footer pada AppShell
2. Footer tampil di semua halaman

Kode `index.tsx` pada ``_app.tsx``

![images](docs/43.png)

Hasil

![images](docs/44.png)

## Pertanyaan Refleksi

1. Apa perbedaan routing berbasis file dan routing manual?

> Routing berbasis file (Next.js): Routing otomatis dibuat berdasarkan struktur folder dan nama file di dalam direktori pages/ tanpa memerlukan konfigurasi tambahan.

>Routing manual (seperti React Router standar): Developer harus menulis kode konfigurasi secara eksplisit untuk memetakan setiap alamat URL ke komponen tertentu.

2. Mengapa dynamic routing penting dalam aplikasi web?

> Dynamic routing memungkinkan kita membuat satu buah template halaman yang bisa menampilkan data berbeda-beda berdasarkan parameter yang ada di URL. Misalnya, daripada membuat ratusan file untuk ratusan artikel blog yang berbeda, kita cukup membuat satu file [slug].tsx yang menangani semua artikel tersebut secara dinamis.

3. Apa keuntungan menggunakan layout global dibanding memanggil komponen satu per satu?

> Keuntungan utamanya adalah efisiensi dan konsistensi. Komponen seperti Navbar dan Footer akan otomatis muncul di semua halaman tanpa perlu kita import dan panggil satu per satu di setiap file halaman. Jika ada perubahan pada desain Navbar, kita hanya perlu mengubahnya di satu tempat (AppShell), dan perubahannya akan langsung teraplikasi ke seluruh aplikasi.