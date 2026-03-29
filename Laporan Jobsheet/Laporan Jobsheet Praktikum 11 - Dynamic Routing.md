# Dynamic Routing & Static Generation

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

## C. Langkah Praktikum

### Bagian 1 – Membuat Dynamic Route

1. Modifikasi file `[product].tsx` pada pages/products/

![alt text](assets/docs_p11/1.png)

2. Jalankan browser http://localhost:3000/produk

![alt text](assets/docs_p11/2.png)

Jika kita klik salah satu gambar maka akan menuju halaman lain

![alt text](assets/docs_p11/3.png)

### Bagian 2 – Implementasi CSR (Client Rendering)

1. Modifikasi pada file `[produk].tsx` pada folder src/pages/produk/

![alt text](assets/docs_p11/4.png)

2. Pada `file produk.ts` pada folder pages/api di rename menjadi `[[...product]].ts`

![alt text](assets/docs_p11/5.png)

3. Modifikasi file `servicefirebase.ts`

![alt text](assets/docs_p11/6.png)

4. Modifikasi file `[[...produk]].ts`

![alt text](assets/docs_p11/7.png)

5. Jalankan browser `http://localhost:3000/api/produk/OSUzMH1h7hdyff34q9bA`

![alt text](assets/docs_p11/8.png)

6. Jalankan alamat url http://localhost:3000/api/produk/123

![alt text](assets/docs_p11/9.png)

7. Buat file dengan nama `index.tsx` pada folder views/DetailProduct selain itu buat juga file dengan nama `detailProduct.module.scss`

![alt text](assets/docs_p11/10.png)

8. Modifikasi `detailProduct.module.scss`

![alt text](assets/docs_p11/11.png)

9. Modifikasi `index.tsx` pada folder views/DetailProduct

![alt text](assets/docs_p11/12.png)

10. Modifikasi file `[product].tsx`

![alt text](assets/docs_p11/13.png)

12. Jalankan browser http://localhost:3000/produk/ saat produk diklik maka akan muncul detailProduk `http://localhost:3000/produk/OSUzMH1h7hdyff34q9bA`

![alt text](assets/docs_p11/14.png)

![alt text](assets/docs_p11/15.png)

13. Agar tulisan detail produk ditengah maka modifikasi file `detailProduct.module.scss` line 73-79 dan file `index.tsx` tambahkan code pada line 7 menjadi

![alt text](assets/docs_p11/16.png)

![alt text](assets/docs_p11/17.png)

14. Sehingga hasilnya seperti berikut

![alt text](assets/docs_p11/18.png)


### Bagian 3 – Implementasi SSR

1. Modifikasi [produk].tsx pada folder src/pages/produk dan comment line 10 sampai 18 karena akan menggunakan metode SSR. Tambahkan beberapa kode untuk SSR

![alt text](assets/docs_p11/19.png)

2. Jalankan browser http://localhost:3000/produk/server

![alt text](assets/docs_p11/20.png)

![alt text](assets/docs_p11/21.png)


### Bagian 4 – Implementasi Static Site Generation (Dynamic SSG)

1. Buka file `[produk].tsx` dan modifikasi seperti berikut

![alt text](assets/docs_p11/22.png)

2. Buka file `index.tsx` pada folder src/views/DetailProduct dan modifikasi pada line 10

![alt text](assets/docs_p11/23.png)

3. Build 

![alt text](assets/docs_p11/24.png)

![alt text](assets/docs_p11/25.png)

6. Jalankan browser http://localhost:3000/produk/static kemudian klik salah satu gambar

![alt text](assets/docs_p11/26.png)

![alt text](assets/docs_p11/27.png)


### D. Pengujian

1. Uji 1 – CSR

• Refresh halaman detail

• Perhatikan loading

![alt text](assets/docs_p11/28.png)

terlihat halaman loading karena dirender

• Periksa Network → XHR → API request terlihat

![alt text](assets/docs_p11/29.png)

terdapat request ke API


2. Uji 2 – SSR

• Refresh halaman detail

• Tidak ada loading

![alt text](assets/docs_p11/30.png)

tidak ada loading karena sudah dirender

• Periksa Network → tidak terlihat fetch detail

![alt text](assets/docs_p11/31.png)

tidak ada request ke API


3. Uji 3 – SSG

1. Jalankan:

o npm run build

o npm run start

![alt text](assets/docs_p11/32.png)

Tampilan awal

![alt text](assets/docs_p11/33.png)

2. Tambahkan produk baru di database.

![alt text](assets/docs_p11/34.png)

3. Buka halaman detail produk baru:

Tidak muncul.

![alt text](assets/docs_p11/35.png)

4. Build ulang:

o npm run build

o npm run start

![alt text](assets/docs_p11/36.png)

![alt text](assets/docs_p11/37.png)

Baru muncul.

![alt text](assets/docs_p11/38.png)

![alt text](assets/docs_p11/39.png)

![alt text](assets/docs_p11/40.png)

tidak ada fetch api karena sudah di build


## Tugas Praktikum

1. Implementasikan halaman detail dengan:

o CSR

![alt text](assets/docs_p11/14.png)

![alt text](assets/docs_p11/15.png)

o SSR

![alt text](assets/docs_p11/20.png)

![alt text](assets/docs_p11/21.png)

o SSG

![alt text](assets/docs_p11/26.png)

![alt text](assets/docs_p11/27.png)

2. Buat tabel perbandingan:


| Aspek | CSR | SSR | SSG |
| :--- | :--- | :--- | :--- |
| **Loading** | Ada delay dan butuh *loading state* / skeleton. | Tidak perlu *loading state* (HTML sudah jadi). | Tidak perlu *loading state* (HTML sudah jadi). |
| **Build Required** | Tidak | Tidak | Ya, HTML di-generate saat proses *build*. |
| **SEO** | Kurang optimal. | Lebih optimal. | Sangat optimal. |
| **Perubahan Data** | *Real-time* / data diambil setelah halaman dimuat. | *Real-time* / data diambil setiap ada *request*. | Tidak berubah sampai dilakukan *build* ulang. |

---

3. Dokumentasikan:

o Network tab

o CSR

![alt text](assets/docs_p11/29.png)

o SSR

![alt text](assets/docs_p11/31.png)

o SSG

![alt text](assets/docs_p11/40.png)


o Build result

![alt text](assets/docs_p11/36.png)


### Pertanyaan Analisis

**1. Mengapa `getStaticPaths` wajib pada dynamic SSG?**
Fungsi `getStaticPaths` wajib digunakan pada *dynamic* SSG untuk mendaftarkan daftar parameter (seperti ID produk) yang akan dibuatkan halaman HTML statisnya secara spesifik pada saat *build time*. Tanpa fungsi ini, Next.js tidak akan tahu halaman *dynamic* mana saja yang harus di-*generate*.

**2. Mengapa CSR membutuhkan loading state?**
Karena pada metode CSR, HTML awal yang dikirimkan ke *browser* masih kosong dan data baru akan diambil (di-*fetch*) setelah komponen selesai dimuat. Terdapat *delay* atau jeda waktu sebelum data tersebut berhasil diterima dan ditampilkan. *Loading state* (seperti *skeleton*) diperlukan untuk menghindari tampilan layar yang kosong putih, memberikan *feedback* visual bahwa proses sedang berjalan, serta meningkatkan *User Experience* (UX).

**3. Mengapa SSG tidak menampilkan produk baru tanpa build ulang?**
Pada metode SSG, pengambilan data dan *generate* HTML statis murni hanya dilakukan satu kali saja, yaitu pada saat *build time* (`npm run build`). Setelah itu, HTML tersebut akan disimpan sebagai *file* statik dan tidak akan berubah lagi meskipun ada data baru di *database*, sampai perintah *build* ulang dijalankan kembali.

**4. Mana metode terbaik untuk halaman detail e-commerce?**
Metode terbaik untuk *e-commerce* adalah **SSR** (Server Side Rendering). Metode SSR sangat cocok untuk *e-commerce* karena memastikan data yang ditampilkan selalu diperbarui secara *real-time* (seperti harga dan stok) pada setiap *request*, sambil tetap memberikan performa SEO yang optimal agar halaman produk mudah ditemukan di mesin pencari. 

**5. Apa risiko menggunakan SSG untuk produk yang sering berubah?**
Risiko terbesarnya adalah *user* akan melihat data yang sudah usang atau tidak akurat. Karena halaman SSG tidak di-*update* secara otomatis, pengunjung *website* mungkin akan melihat produk yang stoknya masih "Tersedia" padahal sebenarnya sudah habis di *database*. Hal ini dapat menyebabkan transaksi *error* dan memberikan pengalaman buruk bagi pelanggan.