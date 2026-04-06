# Implementasi Login Google Provider dengan NextAuth.js + Firebase

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

## B. Konfigurasi Google OAuth

### Masuk ke Google Cloud Console Buka:

https://console.cloud.google.com/apis/credentials

![alt text](assets/docs_p17/1.png)

### Buat Project Baru

• Klik New Project

![alt text](assets/docs_p17/2.png)

Nama project: `MyAppNext`

![alt text](assets/docs_p17/3.png)

• Klik Create

• Setelah berhasil klik https://console.cloud.google.com/apis/credentials pastikan projectnya `MyAppNext`

![alt text](assets/docs_p17/4.png)

### Konfigurasi OAuth Consent Screen

1. Konfigurasi OAuth Consent Screen

![alt text](assets/docs_p17/5.png)

2. Pilih Get Started

![alt text](assets/docs_p17/6.png)

3. Maka akan muncul seperti berikut dan isikan

![alt text](assets/docs_p17/7.png)

![alt text](assets/docs_p17/8.png)

![alt text](assets/docs_p17/9.png)

![alt text](assets/docs_p17/10.png)

o Klik create

### Buat OAuth Credentials

1. Klik create client pada Clients

![alt text](assets/docs_p17/11.png)

![alt text](assets/docs_p17/12.png)

![alt text](assets/docs_p17/13.png)

![alt text](assets/docs_p17/14.png)

## C. Tambahkan Environment Variables

1. Copy dan paste client ID dan Client secret ke `.env.local`

![alt text](assets/docs_p17/16.png)

![alt text](assets/docs_p17/17.png)


## D. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session

1. Buka file `[...nextauth].ts` pada folder `api/auth` dan modifikasi menjadi berikut

![alt text](assets/docs_p17/18.png)

![alt text](assets/docs_p17/19.png)

## E. Tambahkan Button Login Google
1. Modifikasi file `index.tsx` pada folder `views/auth/login`

![alt text](assets/docs_p17/20.png)

2. Jalankan browser `localhost:3000/auth/login` masuk melalui sign in with google. Jika berhasil maka akan terhubung dengan akun google.

![alt text](assets/docs_p17/21.png)

![alt text](assets/docs_p17/22.png)

Pilih akun yang akan digunakan

![alt text](assets/docs_p17/23.png)

kemudian lanjutkan

![alt text](assets/docs_p17/24.png)

login berhasil

![alt text](assets/docs_p17/25.png)

![alt text](assets/docs_p17/29.png)

3. Menampilkan image dari google

o Buka file `index.tsx` dan tambahkan code berikut

![alt text](assets/docs_p17/26.png)

o Buka file `navbar.module.css` dan tambahkan code berikut

![alt text](assets/docs_p17/27.png)

o Jika berhasil maka tampillannya akan seperti berikut

![alt text](assets/docs_p17/28.png)

![alt text](assets/docs_p17/30.png)

## G. Simpan Data Google ke Database

1. Buka file `servicefirebase.ts` pada folder `src/utils/db/` dan tambahkan beberapa kode berikut

![alt text](assets/docs_p17/31.png)

o Tambahkan juga code berikut

![alt text](assets/docs_p17/32.png)

o Panggil Service di JWT Callback buka file `[...nextAuth].ts`

![alt text](assets/docs_p17/33.png)

o Jalankan browser dan login menggunakan akun google setelah cek di firebase, jika data akun googlenya masuk ke database maka anda telah berhasil

klik sign in

![alt text](assets/docs_p17/34.png)

pilih sign in with google

![alt text](assets/docs_p17/35.png)

terdapat user pada navbar

![alt text](assets/docs_p17/36.png)

data masuk ke Firebase

![alt text](assets/docs_p17/37.png)


## H. Pengujian

| Skenario | Hasil yang Diharapkan |
| :--- | :--- |
| Login Google pertama kali | Data tersimpan di Firestore |
| Login Google kedua kali | Data diupdate |
| User role member akses /admin | Redirect |
| User role admin akses /admin | Bisa masuk |
| Avatar tampil | Ya |

1. Login Google pertama kali 

![alt text](assets/docs_p17/24.png)

Data tersimpan di Firestore

![alt text](assets/docs_p17/37.png)

2. Login Google kedua kali 

![alt text](assets/docs_p17/72.png)

Data diupdate

![alt text](assets/docs_p17/74.png)

![alt text](assets/docs_p17/73.png)

3. User role member akses /admin 

![alt text](assets/docs_p17/37.png)

Redirect

![alt text](assets/docs_p17/75.png)

4. User role admin akses /admin 

![alt text](assets/docs_p17/76.png)

Bisa masuk

![alt text](assets/docs_p17/77.png)

![alt text](assets/docs_p17/78.png)

![alt text](assets/docs_p17/79.png)

5. Avatar tampil 

Ya

![alt text](assets/docs_p17/36.png)


## Analisis & Diskusi


**1. Apa perbedaan login credential dan login Google?**
* **Login Credential:** Pengguna mendaftar menggunakan email dan *password* yang dibuat khusus untuk aplikasi kita. Aplikasi kita bertanggung jawab penuh untuk mengenkripsi (men-hash), menyimpan, dan memvalidasi *password* tersebut ke dalam *database* saat *login*.
* **Login Google (OAuth):** Proses autentikasi didelegasikan kepada pihak ketiga (Google). Aplikasi kita tidak menyimpan atau mengetahui *password* pengguna. Google hanya mengirimkan token konfirmasi beserta profil dasar (nama, email, avatar) yang dijamin validitasnya kepada aplikasi kita setelah pengguna berhasil masuk melalui layar *login* Google.

**2. Mengapa data Google tetap perlu disimpan ke database?**
Data dari Google (seperti nama dan email) bersifat umum dan terbatas. Kita tetap perlu menyimpannya ke *database* internal (seperti Firebase Firestore) untuk membuat entitas (baris data) yang mewakili pengguna tersebut di dalam sistem kita. Dengan menyimpannya, kita bisa menambahkan atribut khusus aplikasi yang tidak disediakan oleh Google, seperti penetapan `role` (hak akses), status keanggotaan, saldo, serta mengaitkan pengguna tersebut dengan data transaksional aplikasi (misalnya riwayat pesanan atau daftar produk yang dibuat).

**3. Apa fungsi JWT callback?**
Pada NextAuth.js, fungsi JWT *callback* dieksekusi setiap kali token JWT dibuat atau diperbarui. Fungsinya adalah sebagai tempat untuk memanipulasi atau menambahkan data (*payload*) ke dalam token JWT tersebut. Misalnya, setelah pengguna berhasil *login* via Google dan datanya tersimpan/ditemukan di Firebase, kita menggunakan JWT *callback* untuk menyisipkan data tambahan dari Firebase (seperti `role` atau `fullname`) ke dalam token, sehingga data ini bisa diteruskan ke *session* klien (*frontend*) tanpa perlu melakukan *query* ke *database* berulang-ulang.

**4. Mengapa perlu multi-role?**
Multi-role (seperti pembagian peran antara `member` dan `admin`) sangat penting untuk Otorisasi atau *Access Control*. Multi-role memastikan bahwa fitur dan halaman aplikasi yang sensitif hanya bisa diakses oleh pihak yang berwenang. Sebagai contoh, *middleware* dapat menggunakan data `role` ini untuk mencegah pengguna biasa (`member`) membuka halaman *dashboard* `/admin`, sambil tetap mengizinkan administrator (`admin`) untuk masuk dan mengelola sistem.

**5. Apa risiko jika tidak menyimpan user ke database?**
Jika pengguna *login* via Google namun tidak dicatat ke *database*, aplikasi kita akan menjadi statis dan tidak memiliki memori (*stateless* murni) terhadap pengguna tersebut. Risikonya meliputi:
* Sistem tidak bisa memberikan otorisasi berbasis peran (Role-Based Access Control) karena atribut `role` tidak memiliki tempat penyimpanan yang permanen. Semua orang yang *login* via Google akan dianggap sama.
* Aplikasi tidak dapat menyimpan riwayat interaksi pengguna (misalnya profil tambahan, alamat, atau keranjang belanja), karena tidak ada ID pengguna internal yang bisa dijadikan kunci relasi (Foreign Key) di dalam *database*.


## Tugas Mandiri

1. Tambahkan role editor

![alt text](assets/docs_p17/61.png)

![alt text](assets/docs_p17/60.png)

tambahkan juga middleware

![alt text](assets/docs_p17/63.png)

![alt text](assets/docs_p17/64.png)

2. Buat halaman khusus editor

![alt text](assets/docs_p17/62.png)

![alt text](assets/docs_p17/65.png)

3. Tambahkan provider GitHub

* Masuk Ke Github, kemudian Pilih Setting

![alt text](assets/docs_p17/38.png)

* Scroll kebawah sampai, pilih developer Setting 

![alt text](assets/docs_p17/39.png)

![alt text](assets/docs_p17/40.png)

* Pilih OAuth Apps

![alt text](assets/docs_p17/41.png)

* Klik New OAuth App

![alt text](assets/docs_p17/42.png)

* Isi Form sesuai dengan OAuth Google diatas, klik Register Application

![alt text](assets/docs_p17/43.png)

* Jika sudah, pilih Generate a new client secret

![alt text](assets/docs_p17/44.png)

![alt text](assets/docs_p17/47.png)

* copy client id dan client secret ke `.env.local`

![alt text](assets/docs_p17/46.png)

* Tambahkan Kode pada `[...nextauth].ts` seperti dengan OAuth Google

![alt text](assets/docs_p17/48.png)

![alt text](assets/docs_p17/49.png)

* Tambahkan juga Button Sign in with github di `index.tsx` pada login

![alt text](assets/docs_p17/50.png)

* Tambahkan kode pada `servicefirebase.ts` seperti dengan OAuth Google agar data disimpann ke firebase

![alt text](assets/docs_p17/51.png)

Hasil: 

Klik Sign In

![alt text](assets/docs_p17/53.png)

tampilan login

![alt text](assets/docs_p17/54.png)

pilih sign in with github

![alt text](assets/docs_p17/55.png)

klik authorize

![alt text](assets/docs_p17/56.png)

Berhasil Masuk dengan github

![alt text](assets/docs_p17/58.png)

![alt text](assets/docs_p17/59.png)

Data tersimpan di Firebase dengan role default Editor

![alt text](assets/docs_p17/60.png)

4. Refactor service agar reusable

![alt text](assets/docs_p17/66.png)

![alt text](assets/docs_p17/67.png)

![alt text](assets/docs_p17/68.png)

![alt text](assets/docs_p17/69.png)

Hasil:

* Kode Lebih Bersih: Dari yang sebelumnya ratusan baris kode berulang, sekarang jauh lebih ringkas.

* Mudah Menambah Fitur: Kalau suatu saat penambahan login lewat Facebook atau Twitter, cukup membuat satu wrapper function baru (misal signInWithFacebook) dengan 1 baris kode saja, lalu mengarahkannya ke handleOAuthLogin. Sisanya akan otomatis ditangani.


5. Gunakan next/image untuk optimasi avatar

* Langkah 1: Daftarkan Domain Google & GitHub di Config Next.js

Secara default, komponen `<Image />` bawaan Next.js menolak me-render gambar dari URL luar demi keamanan. Kita harus memberikan "izin" pada domain foto profil Google dan GitHub.

Buka file konfigurasi Next.js yang ada di luar folder src `next.config.ts`, lalu tambahkan pengaturan images:

![alt text](assets/docs_p17/70.png)

* Langkah 2: Gunakan next/image di Komponen UI
 buka file komponen tempat kamu menampilkan Avatar/Foto Profil (biasanya di Navbar, Header, atau Profile Page).

Ubah tag `<img>` biasa menjadi komponen `<Image />` dari Next.js. Komponen ini mewajibkan kamu mengisi atribut width dan height.

Tambahkan juga import `import Image from "next/image";`

![alt text](assets/docs_p17/71.png)

Hasil 

![alt text](assets/docs_p17/73.png)