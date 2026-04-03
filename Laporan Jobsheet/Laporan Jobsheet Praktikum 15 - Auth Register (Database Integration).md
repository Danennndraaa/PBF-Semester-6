# Auth Register (Database Integration)

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

## C. Langkah Praktikum

### Bagian 1 – Membuat Register View

1. Buat folder pada views dengan nama register dan tambahkan 2 file yaitu `index.tsx`
dan `register.module.scss`

![alt text](assets/docs_p15/1.png)

2. Modifikasi file `index.tsx` ( pada folder `views/auth/register/index.tsx`)

serta juga

o Tambahkan form inputan pada file `index.tsx` ( pada folder `views/auth/register/index.tsx`) Form berisi:

• Email

• Full Name

• Password

• Button Register

o Kode keseluruahannya sebagai berikut :

![alt text](assets/docs_p15/4.png)

3. Buka file `register.tsx` pada folder `auth/register.tsx`

![alt text](assets/docs_p15/2.png)

4. Modifikasi file `register.tsx` ( pada folder `pages/auth/register.tsx`)

![alt text](assets/docs_p15/3.png)

5. Modifikasi `register.module.scss`

![alt text](assets/docs_p15/5.png)

6. Jalankan browser http://localhost:3000/auth/register sehingga tampilan sebagai berikut

![alt text](assets/docs_p15/6.png)


### Bagian 2 – Membuat API Register

1. Buka file `servicefirebase.ts` pada folder `src/utils/db` dan modifikasi

![alt text](assets/docs_p15/7.png)

2. Buat file `register.ts` pada folder api

![alt text](assets/docs_p15/8.png)

3. Modifikasi file `register.ts`

![alt text](assets/docs_p15/9.png)

4. Modifikasi `index.tsx` pada folder register ( tambahkan beberapa code)

![alt text](assets/docs_p15/10.png)

5. Buka browser http://localhost:3000/auth/register isikan data dan klik register. Jika berhasil maka akan masuk ke menu login

![alt text](assets/docs_p15/11.png)

hasil firebase: 

![alt text](assets/docs_p15/12.png)

hasil redirect:

![alt text](assets/docs_p15/13.png)


### Bagian 3 – Install bcrypt

1. jalankan perintah berikut pada terminal `npm install bcrypt --force`

![alt text](assets/docs_p15/14.png)

2. jalankan juga perintah berikut pada terminal `npm install --save-dev @types/bcrypt -–force`

![alt text](assets/docs_p15/15.png)

3. Buka file `servicefirebase.ts` pada folder `src/utils/db` dan modifikasi

![alt text](assets/docs_p15/16.png)

![alt text](assets/docs_p15/17.png)

4. Jalankan browser http://localhost:3000/auth/register dan input data setelah itu klik register

![alt text](assets/docs_p15/18.png)

5. Buka pada firebase jika berhasil maka data register akan masuk

![alt text](assets/docs_p15/19.png)

6. Jika user memasukkan data yang sama sistem tidak akan memproses tetapi
permasalahannya user memasukkan data yang sama tidak ada pemberitahuan pada layar maka dari itu perlu ada perubahan pada code `index.tsx` pada folder `views/auth/register`

o Line 42

![alt text](assets/docs_p15/20.png)

o Line 93 dan 94

![alt text](assets/docs_p15/21.png)

o Line 34 rubah menjadi email

![alt text](assets/docs_p15/22.png)

7. Modifikasi juga pada `register.module.scss`

![alt text](assets/docs_p15/23.png)

8. Jika berhasil maka hasilnya seperti berikut

![alt text](assets/docs_p15/24.png)

9. Tambakan loading dengan menambahkan kode pada index.tsx

![alt text](assets/docs_p15/25.png)

10. Jika berhasil maka hasilnya akan muncul loading saat klik register

![alt text](assets/docs_p15/26.png)



## D. Pengujian

### Uji 1 – Register Baru

Input:

• Email baru

![alt text](assets/docs_p15/27.png)

Hasil:

• Data tersimpan di Firestore

• Password ter-hash

![alt text](assets/docs_p15/28.png)

• Redirect ke login

![alt text](assets/docs_p15/29.png)

### Uji 2 – Email Sudah Ada

Input:

• Email yang sama

Hasil:

• Error 400

• Message: Email already exists

![alt text](assets/docs_p15/30.png)

### Uji 3 – Method GET

Akses:

/api/register

Hasil:

• 405 Method Not Allowed

![alt text](assets/docs_p15/31.png)


## G. Tugas Praktikum

1. Implementasikan register terhubung database.

Kode:

![alt text](assets/docs_p15/9.png)

![alt text](assets/docs_p15/10.png)

Hasil:

![alt text](assets/docs_p15/11.png)

![alt text](assets/docs_p15/12.png)


2. Tambahkan validasi:

Kode:

![alt text](assets/docs_p15/32.png)

o Email wajib

![alt text](assets/docs_p15/35.png)

o Password minimal 6 karakter

![alt text](assets/docs_p15/36.png)

3. Tambahkan role default "member".

![alt text](assets/docs_p15/33.png)

4. Tampilkan pesan error di UI.

![alt text](assets/docs_p15/34.png)

5. Screenshot hasil:

o Register sukses

![alt text](assets/docs_p15/27.png)

o Email sudah ada

![alt text](assets/docs_p15/38.png)

o Database Firestore

![alt text](assets/docs_p15/28.png)


## H. Pertanyaan Analisis

**1. Mengapa password harus di-hash?**
Password harus di-hash untuk melindungi keamanan dan privasi data pengguna jika suatu saat *database* mengalami kebocoran (*data breach*). Hashing adalah proses kriptografi satu arah (*one-way function*) yang mengubah kata sandi asli menjadi deretan karakter acak yang tidak bisa dikembalikan ke bentuk semula. Dengan begitu, pihak mana pun (termasuk admin *database* atau peretas) tidak akan bisa mengetahui *password* asli milik pengguna.

**2. Apa perbedaan addDoc dan setDoc?**
Keduanya adalah metode dari Firebase Firestore untuk menyimpan data, dengan perbedaan utama pada penanganan ID dokumen:
* **`addDoc`**: Secara otomatis membuatkan ID acak dan unik (*auto-generated ID*) untuk dokumen baru yang ditambahkan ke dalam sebuah koleksi.
* **`setDoc`**: Mengharuskan developer untuk menentukan ID dokumen secara manual. Jika dokumen dengan ID yang ditentukan tersebut sudah ada, `setDoc` akan menimpa (*overwrite*) data lamanya secara keseluruhan (kecuali jika opsi `merge: true` digunakan).

**3. Mengapa perlu validasi method POST?**
Validasi *method* POST pada API Route (terutama untuk proses registrasi atau otentikasi) diperlukan untuk keamanan dan standarisasi REST API. *Endpoint* ini dirancang khusus untuk menerima dan memproses pengiriman data rahasia. Jika tidak divalidasi, *endpoint* bisa saja diakses menggunakan *method* GET, yang sangat berbahaya karena data sensitif seperti *password* berisiko terekspos di parameter URL.

**4. Apa risiko jika email tidak dicek unik?**
Jika sistem tidak memvalidasi keunikan email saat registrasi, akan terjadi duplikasi identitas pengguna. Risikonya, sistem akan mengalami konflik otentikasi. Ketika pengguna mencoba *login*, aplikasi akan kebingungan (ambigu) dalam menentukan akun, profil, dan hak akses mana yang harus dimuat karena ada lebih dari satu akun yang dikaitkan dengan email yang sama. Ini merusak integritas *database* secara fatal.

**5. Apa fungsi role pada user?**
Fungsi atribut *role* (misalnya `admin`, `member`, `guest`) adalah untuk keperluan **Otorisasi** melalui skema *Role-Based Access Control* (RBAC). *Role* mendefinisikan batasan wewenang atau hak akses seorang pengguna di dalam aplikasi. Sebagai contoh, sebuah *middleware* dapat menggunakan *role* ini untuk memastikan bahwa hanya pengguna dengan *role* `admin` yang diizinkan mengakses halaman *dashboard* pengelolaan data, sementara `member` hanya diizinkan berbelanja.