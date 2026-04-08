# Deployment Aplikasi Next.js ke Vercel

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

### PRAKTIKUM 2 – Deployment ke Vercel

1. Login ke Vercel

• Buka: https://vercel.com

• Login menggunakan GitHub

2. Import Project

    1. Klik Add New Project
    
    ![alt text](assets/docs_p20/1.png)

    2. Pilih Continue with Github kemudian Install terlebih dahulu githubnya

    ![alt text](assets/docs_p20/2.png)

    ![alt text](assets/docs_p20/3.png)

    ![alt text](assets/docs_p20/4.png)

    3. Klik Import

    ![alt text](assets/docs_p20/5.png)


### C. Mengatasi Error Saat Deployment

- Dikarenakan pada code masih terdapat code static-site generation

Masalah: Static Site Generation Gagal

- Hapus file `static.tsx`

![alt text](assets/docs_p20/6.png)

- Comment pada line 46 pada file `[produk].tsx` yang berhubungan dengan static-site generation dicomment semua

Solusi

Gunakan SSR (Server Side Rendering)

- SSR yang sebelumnya di comment dibuka commentnya pada file `[produk].tsx`

![alt text](assets/docs_p20/7.png)


Gunakan Environment Variable

• Buat di .env.local:

o NEXT_PUBLIC_API_URL=http://localhost:3000

![alt text](assets/docs_p20/8.png)

• Ganti semua hardcoded URL:

`process.env.NEXT_PUBLIC_API_URL`

o Contoh:

> `fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`)`

o pada file [produk].tsx

![alt text](assets/docs_p20/9.png)

o pada file server.tsx

![alt text](assets/docs_p20/10.png)

• Commit dan push kembali.

o Selanjutnya import lakukan pengaturannya sbb

![alt text](assets/docs_p20/11.png)

![alt text](assets/docs_p20/12.png)

o Setelah itu klik deploy dan jika berhasil maka akan muncul

![alt text](assets/docs_p20/13.png)

![alt text](assets/docs_p20/14.png)

![alt text](assets/docs_p20/17.png)

![alt text](assets/docs_p20/18.png)

![alt text](assets/docs_p20/19.png)


### PRAKTIKUM 3 – Menambahkan Environment Variable di Vercel

1. Buka Project di Vercel

Settings → Environment Variables

![alt text](assets/docs_p20/20.png)

2. Import dari `.env.local`

Klik Import `.env` dan setting next_public_api_url sesuai dengan url vercel project

Atau isi manual:

`NEXT_PUBLIC_API_URL=https://namaproject.vercel.app`

![alt text](assets/docs_p20/21.png)

![alt text](assets/docs_p20/22.png)

Note : tanpa tanda / dibelakang url

![alt text](assets/docs_p20/23.png)


3. Redeploy

o Deployment → Redeploy

![alt text](assets/docs_p20/24.png)

![alt text](assets/docs_p20/25.png)

![alt text](assets/docs_p20/26.png)

![alt text](assets/docs_p20/27.png)


### PRAKTIKUM 4 – Konfigurasi Google OAuth Production

1. Masuk ke Google Cloud Console

• Buka google developer console

• Credentials

• Pilih OAuth Client

![alt text](assets/docs_p20/28.png)

2. Tambahkan Authorized Origins dan juga Tambahkan Redirect URI

![alt text](assets/docs_p20/29.png)

Note : Ubah juga URL pada Github agar dapat Login menggunakan Github

![alt text](assets/docs_p20/34.png)

o Save perubahan.

Note : ada kesalahan pada code index.tsx pada folder views/auth/login

Code dimodifikasi

![alt text](assets/docs_p20/30.png)

Redeploy Vercel

o Agar environment terbaru terbaca.

![alt text](assets/docs_p20/31.png)

![alt text](assets/docs_p20/32.png)

![alt text](assets/docs_p20/33.png)


### PRAKTIKUM 5 – Pengujian Setelah Deployment

Coba akses:

• /

![alt text](assets/docs_p20/35.png)

• /about

![alt text](assets/docs_p20/36.png)

• /product

![alt text](assets/docs_p20/37.png)

• /profile: 

• Login Google

![alt text](assets/docs_p20/38.png)

• Login credential biasa

![alt text](assets/docs_p20/39.png)

• Login Github

![alt text](assets/docs_p20/40.png)


## Tugas Praktikum
1. Deploy project Next.js ke 

![alt text](assets/docs_p20/16.png)

2. Pastikan API tidak menggunakan localhost

![alt text](assets/docs_p20/15.png)

![alt text](assets/docs_p20/9.png)

![alt text](assets/docs_p20/10.png)

3. Konfigurasikan Google OAuth production

![alt text](assets/docs_p20/28.png)

![alt text](assets/docs_p20/29.png)

4. Lakukan minimal 1 redeploy

![alt text](assets/docs_p20/31.png)

![alt text](assets/docs_p20/32.png)

![alt text](assets/docs_p20/33.png)

5. Dokumentasikan:

o Screenshot dashboard Vercel

![alt text](assets/docs_p20/17.png)

o URL hasil deployment

https://praktikum-pbf.vercel.app/

![alt text](assets/docs_p20/18.png)

o Screenshot login Google berhasil

![alt text](assets/docs_p20/38.png)



## Refleksi & Diskusi

**1. Mengapa `localhost` tidak boleh digunakan di production?**
`localhost` (atau `127.0.0.1`) merujuk pada perangkat komputer lokal itu sendiri. Jika kamu menggunakan `localhost` untuk URL API di *production*, aplikasi akan mencoba mencari *server* di komputer atau HP pengguna (klien) yang sedang membuka *website* tersebut, bukan di *server* *backend* tujuanmu. Akibatnya, API akan gagal dipanggil (*error connection refused* atau *not found*) karena *endpoint* tidak tersedia di perangkat pengguna. Di *production*, kamu wajib menggunakan URL publik yang dapat diakses secara global (contoh: `https://api.domainkamu.com`).

**2. Mengapa SSG bisa gagal saat build?**
Pada metode SSG (Static Site Generation), proses pengambilan data (*fetching*) dan pembuatan halaman HTML statis terjadi pada saat waktu kompilasi atau *build time* (saat menjalankan `npm run build`). Jika pada momen tersebut *endpoint* API sedang mati, *database* tidak dapat diakses, proses autentikasi ditolak, atau format data yang diterima tidak sesuai dengan yang diharapkan oleh kode, maka Next.js tidak akan bisa menyelesaikan proses pembuatan halaman statisnya dan otomatis menggagalkan (membuat *crash*) proses *build* tersebut.

**3. Apa perbedaan SSR dan SSG saat deployment?**
* **SSG (Static Site Generation):** Hasil *deployment*-nya hanyalah sekumpulan *file* statis (HTML, CSS, dan JS) yang sudah matang. *File-file* ini sangat ringan dan bisa langsung didistribusikan secara global ke layanan CDN (seperti Vercel, Netlify, atau AWS S3) tanpa memerlukan *server* *backend* yang aktif terus-menerus. Sangat cepat dan murah secara *hosting*.
* **SSR (Server-Side Rendering):** Membutuhkan lingkungan *server* yang hidup 24/7 (seperti mesin Node.js). Saat *deployment*, *server* ini harus terus berjalan untuk mencegat setiap *request* yang masuk, mengambil data terbaru, merakit ulang HTML secara dinamis, lalu mengirimkannya ke pengguna. Ini membutuhkan resource komputasi dan biaya *server* yang lebih besar dibanding SSG.

**4. Mengapa perlu redeploy setelah menambahkan environment?**
Variabel lingkungan (*environment variables* seperti rahasia API, token, atau URL *database*) "disuntikkan" (*injected*) ke dalam kode aplikasi pada saat proses *build* berjalan atau saat *server* mulai diinisialisasi. Jika kamu menambahkan variabel baru di pengaturan penyedia *hosting* (misalnya di *dashboard* Vercel), instans aplikasi yang saat ini sedang berjalan secara langsung tidak akan tahu ada perubahan tersebut. Kamu harus melakukan *redeploy* (men- *trigger* proses *build* baru) agar sistem menarik variabel baru tersebut dan menerapkannya ke dalam aplikasi.

**5. Apa fungsi redirect URI pada OAuth?**
*Redirect URI* berfungsi sebagai titik akhir (*endpoint*) pengembalian yang aman. Ketika pengguna berhasil melakukan *login* di halaman penyedia OAuth (seperti Google atau GitHub), penyedia tersebut perlu tahu ke mana mereka harus mengirimkan pengguna kembali beserta token atau kode otorisasi (*auth code*)-nya. *Redirect URI* memastikan bahwa token rahasia ini hanya dikirimkan ke alamat URL aplikasi sah milikmu yang sudah terdaftar, sehingga mencegah serangan intersepsi di mana pihak jahat mencoba mencuri token dengan membelokkan arah *login* ke *website* palsu.