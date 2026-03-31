# Middleware & Route Protection

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

## C. Langkah Praktikum

### Bagian 1 – Install NextAuth

1. Jalankan `npm install next-auth --force` di Terminal

![alt text](assets/docs_p14/1.png)


### Bagian 2 – Konfigurasi API Auth

1. Buat file dan folder pada folder pages/api/auth/`[...nextauth].ts`

![alt text](assets/docs_p14/2.png)

2. Modifikasi Modifikasi file `[...nextauth].ts`:

![alt text](assets/docs_p14/3.png)


### Bagian 3 – Tambahkan Secret

1. Untuk mendapatkan nilai RANDOM_BASE64_STRING gunakan generator RANDOM_BASE64_STRING seperti https://www.convertsimple.com/random-
base64-generator/

![alt text](assets/docs_p14/4.png)

2. Buka file `.env.local` dan tambahkan code pada line 10

![alt text](assets/docs_p14/5.png)


### Bagian 4 – Tambahkan SessionProvider

1. Buka file `_app.tsx` dan modifikasi:

![alt text](assets/docs_p14/6.png)


### Bagian 5 – Tambahkan Tombol Login & Logout

1. Buka index.tsx pada folder component/navbar:

![alt text](assets/docs_p14/7.png)

2. Modifikasi file index.tsx pada line 10 dan 2:

![alt text](assets/docs_p14/8.png)

3. Buka file file navbar.module.scss tambahkan code pada line 9

![alt text](assets/docs_p14/9.png)

4. Jalankan http://localhost:3000/

![alt text](assets/docs_p14/10.png)

5. Jika di klik sign in maka akan muncul dan isikan textbox masing-masing. Setelah itu klik button sign in dan setelah diklik maka akan kembali ke halaman localhost

![alt text](assets/docs_p14/11.png)

6. Session masih kosong karena belum SignIn

![alt text](assets/docs_p14/12.png)

7. Setelah berhasil login maka akan muncul session

![alt text](assets/docs_p14/13.png)

8. Untuk dapat menangkap data pada session maka tambahkan code sebagai berikut :

![alt text](assets/docs_p14/14.png)

o Uji coba sign in dan sign out

o Jalankan Kembali npm run dev

9. Jalankan localhost:3000

![alt text](assets/docs_p14/15.png)

10. Klik sign in dan isikan textboxnya

![alt text](assets/docs_p14/16.png)

11. Maka akan muncul tombol signout

![alt text](assets/docs_p14/17.png)

12. Ketika user klik signout maka akan kembali sign in

![alt text](assets/docs_p14/18.png)

13. Session akan Kosong

![alt text](assets/docs_p14/19.png)


## D. Menambahkan Data Tambahan (Full Name)

1. Buka file `[...nextauth].ts` dan tambahkan code pada line 22

![alt text](assets/docs_p14/20.png)

2. Pada callbacks modifikasi codenya menjadi berikut :

![alt text](assets/docs_p14/21.png)

3. Modifikasi navbar.module.scss

![alt text](assets/docs_p14/22.png)

4. Modifikasi `index.tsx` pada folder components/layouts/navbar

![alt text](assets/docs_p14/23.png)

5. Jalankan browser pada localhost:3000

![alt text](assets/docs_p14/24.png)

6. Lakukan sign in

![alt text](assets/docs_p14/25.png)

7. Isikan Texbox dan klik sign in

![alt text](assets/docs_p14/26.png)

8. Session akan Tertangkap

![alt text](assets/docs_p14/27.png)

9. Terdapat FullName pada Navbar

![alt text](assets/docs_p14/28.png)


### E. Proteksi Halaman Profile

### Buat Halaman Profile

1. pages/profile/`index.tsx` dan modifikasi file `index.tsx`

![alt text](assets/docs_p14/29.png)

2. jalankan browser (Jika Belum Login)

![alt text](assets/docs_p14/30.png)

3. Session masih kosong

![alt text](assets/docs_p14/31.png)

4. Isi TextBox dan klik sign in

![alt text](assets/docs_p14/32.png)

5. Setelah berhasil login maka akan muncul Fullname

![alt text](assets/docs_p14/33.png)

6. Session akan Tertangkap

![alt text](assets/docs_p14/34.png)


### Buat Middleware Authorization

1. Buat file `withAuth.ts` dan folder dengan nama `middleware` di src

![alt text](assets/docs_p14/35.png)

2. Modifikasi `withAuth.ts`

![alt text](assets/docs_p14/36.png)

3. Modifikasi file middleware.tsx

![alt text](assets/docs_p14/37.png)

4. Jika user mengarahkan ke halaman profile tidak akan bisa, user akan diarahkan ke alamat localhost


## F. Pengujian

### Uji 1 – Belum Login
Akses:

/profile

![alt text](assets/docs_p14/40.png)

Hasil:

Redirect ke home

![alt text](assets/docs_p14/41.png)


### Uji 2 – Sudah Login

Login terlebih dahulu → Akses /profile

![alt text](assets/docs_p14/42.png)

Hasil:

Bisa masuk

![alt text](assets/docs_p14/44.png)


### Uji 3 – Logout
Klik Sign Out → Akses /profile

![alt text](assets/docs_p14/46.png)

Hasil:

Tidak bisa masuk

![alt text](assets/docs_p14/40.png)

![alt text](assets/docs_p14/47.png)


## H. Tugas Praktikum
1. Implementasikan login menggunakan Credentials Provider.

![alt text](assets/docs_p14/3.png)

2. Tambahkan field full name.

![alt text](assets/docs_p14/23.png)

3. Tampilkan full name setelah login.

![alt text](assets/docs_p14/28.png)

4. Buat halaman profile.

![alt text](assets/docs_p14/33.png)


5. Lindungi halaman profile dengan middleware.

![alt text](assets/docs_p14/37.png)

6. Dokumentasikan:

o Screenshot login

![alt text](assets/docs_p14/32.png)

![alt text](assets/docs_p14/33.png)

o Screenshot session

Belum Login

![alt text](assets/docs_p14/15.png)

Sudah Login

![alt text](assets/docs_p14/13.png)

o Screenshot redirect middleware

![alt text](assets/docs_p14/40.png)

Belum Login

![alt text](assets/docs_p14/41.png)

Sudah Login

![alt text](assets/docs_p14/44.png)



## I. Pertanyaan Analisis

**1. Mengapa session menggunakan JWT?**
Session menggunakan JWT (JSON Web Token) karena ia bersifat *stateless*. Artinya, server tidak perlu menyimpan status *login* *user* di dalam *database* (seperti session konvensional), melainkan semua data identitas dikemas dalam satu token terenkripsi yang disimpan di sisi klien (*browser*). Ini membuat proses autentikasi menjadi lebih cepat, ringan, dan sangat mudah diskalakan (*scalable*).

**2. Apa perbedaan authorize() dan callback jwt()?**
* `authorize()` digunakan spesifik pada *Credentials Provider* untuk memverifikasi siapa user (memeriksa email/password ke *database*) dan mengembalikan objek *user* jika datanya valid.
* `callback jwt()` dijalankan setiap kali token JWT dibuat atau diperbarui. Fungsi ini bertugas untuk menerima objek *user* dari `authorize()`, lalu mengekstrak data tambahan (seperti `fullname` atau `role`) untuk disisipkan ke dalam isi (payload) token JWT tersebut.

**3. Mengapa middleware perlu getToken()?**
`getToken()` dari `next-auth/jwt` digunakan oleh *middleware* untuk mengekstrak dan mendekripsi token JWT yang terkirim di dalam *cookie browser* pada setiap *request*. Middleware sangat membutuhkannya untuk mengetahui apakah pengguna yang sedang meminta halaman tersebut sudah sah (memiliki token valid) atau belum, sebelum server memutuskan untuk memblokir atau mengizinkan akses ke *route* tujuan.

**4. Apa risiko jika NEXTAUTH_SECRET tidak digunakan?**
`NEXTAUTH_SECRET` adalah kunci rahasia yang digunakan NextAuth untuk menandatangani (sign) dan mengenkripsi token JWT. Jika tidak diatur, di lingkungan produksi (*production*), NextAuth akan langsung *error* dan menolak beroperasi demi keamanan. Jika dibiarkan menggunakan *secret* bawaan yang lemah, *hacker* bisa dengan mudah mendekripsi isi token JWT, atau bahkan memalsukan token tersebut untuk membajak akun pengguna lain.

**5. Apa perbedaan autentikasi dan otorisasi dalam sistem ini?**
* **Autentikasi (Authentication):** Berfungsi memverifikasi *siapa user*. Dalam sistem ini, prosesnya terjadi saat pengguna mengisi email dan password di halaman login, kemudian divalidasi oleh fungsi `authorize()`.
* **Otorisasi (Authorization):** Mengontrol akses user (mengatur apa saja yang boleh dan tidak boleh diakses oleh pengguna). Dalam sistem ini, prosesnya terjadi di *Middleware* yang memblokir pengguna anonim agar tidak bisa membuka halaman rahasia `/profile`.