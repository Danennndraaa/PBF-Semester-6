# Implementasi Login Database & Multi-Role

Pemrograman Berbasis Framework

Nama: Danendra Adhipramana

Nim: 244107023011

Prodi: D4 Teknik Informatika

# Documentations

## C. Langkah Praktikum

### BAGIAN 1 – Custom Login Page

1. Tambahkan custom page di NextAuth line 52-54 pada `[...nextauth].ts`

![alt text](assets/docs_p16/1.png)

2. Jalankan browser http://localhost:3000/ dan klik sign in maka akan diarahkan ke login

![alt text](assets/docs_p16/2.png)

![alt text](assets/docs_p16/3.png)

### BAGIAN 2 – Handle Login di Frontend

1. Copy paste isi dari `register/index.tsx` ke file `login/index.tsx`

![alt text](assets/docs_p16/4.png)

2. Copy paste isi dari `register/register.module.scss` ke file `login/login.module.scss`

• Semua text register pada file `index.tsx` pada folder login diubah menjadi login

Pada tampilan login kita tidak perlu hapus fullname jadi pada folder `views/auth/login/index.tsx` hapus fullname

![alt text](assets/docs_p16/5.png)

3. Jangan lupa setting link hrefnya

![alt text](assets/docs_p16/6.png)

4. Lakukan hal yang sama pada file `login.module.scss` rubah text register menjadi login

![alt text](assets/docs_p16/7.png)

5. Cek pada file `login.tsx` pada `pages/auth`

![alt text](assets/docs_p16/8.png)

![alt text](assets/docs_p16/9.png)

6. Sehingga hasilnya seperti berikut :

![alt text](assets/docs_p16/10.png)

7. Buka file `index.tsx` pada folder `views/auth/login` dan modifikasi codenya seperti berikut

![alt text](assets/docs_p16/11.png)

8. Buka file `servicefirebase.ts` dan tambahkan code di line 32-45

![alt text](assets/docs_p16/12.png)


### BAGIAN 3 – Authorize di NextAuth (Database Login)

Buka file `[...nextauth].ts` modifikasi menjadi berikut ( pada bagian `providers` )

![alt text](assets/docs_p16/13.png)


### BAGIAN 4 – Tambahkan Role ke Token

1. JWT Callback pada file `[...nextauth].ts` Modifikasi menjadi

![alt text](assets/docs_p16/14.png)

2. Jalankan browser http://localhost:3000/auth/login

![alt text](assets/docs_p16/15.png)

![alt text](assets/docs_p16/16.png)

TERDAPAT ERROR SEPERTI INI: 

> `In this case, the problem is that a <head> tag is being rendered inside a <div>, which is invalid HTML. The <head> element must be a direct child of <html>, not nested inside other elements.`

![alt text](assets/docs_p16/17.png)

3. BUKA FILE SRC/VIEWS/AUTH/LOGIN/INDEX.TSX agar tidak terjadi error HTML

TAMBAHKAN <> </> SEPERTI PADA GAMBAR BERIKUT ( LINE 42 DAN 94)

![alt text](assets/docs_p16/18.png)

Error sudah hilang

![alt text](assets/docs_p16/19.png)


### BAGIAN 5 – Callback URL Logic

1. Modifikasi `withAuth.ts` pada folder `src/middleware`

![alt text](assets/docs_p16/20.png)

Tujuannya:

Setelah login, user kembali ke halaman sebelumnya.


### BAGIAN 6 – Membuat halaman Admin dan authorize

1. Buat halaman admin

![alt text](assets/docs_p16/21.png)

2. Pada `index.tsx` tambahkan code berikut

![alt text](assets/docs_p16/22.png)

3. Modifikasi `withAuth.ts`

![alt text](assets/docs_p16/23.png)

• Jalankan browser localhost:3000/produk dan pada status sudah login. Rubah urlnya menjadi http://localhost:3000/admin maka user akan diarahkan ke localhost. Pada intinya role selain admin tidak bisa mengakses

Role: Member

![alt text](assets/docs_p16/25.png)

status sudah login

![alt text](assets/docs_p16/26.png)

akses localhost:3000/produk

![alt text](assets/docs_p16/27.png)

Rubah url menjadi http://localhost:3000/admin

![alt text](assets/docs_p16/28.png)

diarahkan ke localhost

![alt text](assets/docs_p16/29.png)


• Untuk mencoba halaman admin rubah role pada firebase pada salah satu akun dan jalankan http://localhost:3000/admin

Ubah Role Member ke Admin

![alt text](assets/docs_p16/30.png)

![alt text](assets/docs_p16/31.png)

jalankan http://localhost:3000/admin

![alt text](assets/docs_p16/32.png)


## D. Pengujian

### Uji 1 – Login Valid

Input:

• Email benar

• Password benar

![alt text](assets/docs_p16/34.png)

Hasil:

• Login berhasil

• Redirect sesuai callbackUrl

![alt text](assets/docs_p16/35.png)


### Uji 2 – Password Salah
Input:

• Email benar

• Password salah

Hasil:

• Error message tampil

• Tidak login

![alt text](assets/docs_p16/36.png)


### Uji 3 – Akses Admin sebagai User

Login sebagai:

• role: user

![alt text](assets/docs_p16/37.png)

Akses:

/admin

![alt text](assets/docs_p16/38.png)

Hasil:

• Redirect ke home

![alt text](assets/docs_p16/39.png)



### Uji 4 – Akses Admin sebagai Admin

Login sebagai:

• role: admin

![alt text](assets/docs_p16/31.png)

Akses:

/admin

![alt text](assets/docs_p16/38.png)

Hasil:

• Bisa masuk halaman admin

![alt text](assets/docs_p16/32.png)


## G. Tugas Praktikum

1. Implementasikan login database.

![alt text](assets/docs_p16/15.png)

hasil Database

![alt text](assets/docs_p16/25.png)

2. Tambahkan role pada user.

![alt text](assets/docs_p16/30.png)

3. Buat halaman:

o /profile

![alt text](assets/docs_p16/33.png)

o /admin

![alt text](assets/docs_p16/32.png)

4. Proteksi /admin hanya untuk admin.

![alt text](assets/docs_p16/23.png)

![alt text](assets/docs_p16/24.png)

5. Implementasikan callback URL.

![alt text](assets/docs_p16/20.png)



## H. Pertanyaan Analisis

**1. Mengapa password harus diverifikasi dengan bcrypt.compare?**
Password di dalam database disimpan dalam bentuk *hash* (kriptografi satu arah) yang tidak bisa dan tidak boleh di-dekripsi (dikembalikan) menjadi teks asli. Fungsi `bcrypt.compare` digunakan karena sistem tidak membandingkan teks asli dengan teks asli, melainkan mengambil password yang baru saja diinput oleh *user*, mengubahnya menjadi *hash* dengan algoritma yang sama, lalu mencocokkannya dengan *hash* yang tersimpan di database. `bcrypt.compare` juga dirancang untuk memproses pencocokan dalam waktu yang konstan (*constant time*), sehingga melindungi sistem dari ancaman *timing attacks*.

**2. Mengapa role disimpan di token?**
Menyimpan *role* (peran) di dalam token (seperti JWT) membuat sistem otentikasi bersifat *stateless* (tidak bergantung pada sesi server). Dengan menyimpan *role* secara langsung di dalam *payload* token, aplikasi tidak perlu melakukan proses *query* ke database secara berulang-ulang di setiap *request* hanya untuk mengecek apakah *user* tersebut adalah *admin* atau *member*. Server cukup memverifikasi dan membaca isi token untuk memberikan hak akses, sehingga performa aplikasi menjadi jauh lebih cepat dan ringan.

**3. Apa fungsi callbackUrl?**
`callbackUrl` berfungsi untuk merekam dan menyimpan URL halaman terakhir yang ingin dikunjungi pengguna sebelum mereka dialihkan secara paksa ke halaman *login* (misalnya karena mereka belum memiliki akses). Setelah pengguna berhasil melakukan *login*, sistem akan membaca `callbackUrl` ini dan secara otomatis mengembalikan (mengarahkan) pengguna ke halaman tujuan awal mereka tersebut. Ini sangat penting untuk menjaga *User Experience* (UX) agar alur navigasi pengguna tidak terputus.

**4. Mengapa middleware penting untuk security?**
Middleware bertindak sebagai penjaga gerbang lapisan terdepan (*Edge layer*) yang mencegat (*intercept*) setiap *request* dari klien **sebelum** *request* tersebut diproses oleh *server* atau sebelum halamannya selesai di-*render*. Keamanannya sangat krusial karena middleware bisa langsung menolak atau mengalihkan *request* dari *user* yang tidak sah tanpa perlu mengeksekusi kode komponen halaman sama sekali. Hal ini mencegah bocornya data sensitif dan menghindari *glitch* (tampilan rahasia berkedip sesaat) yang sering terjadi jika pengecekan hanya dilakukan di sisi *browser* (klien).

**5. Apa risiko jika role tidak dicek di middleware?**
Risiko terbesarnya adalah terjadinya *Privilege Escalation* (eskalasi hak akses). Jika middleware hanya mengecek status "apakah *user* sudah login" tanpa mengecek "apa *role user* tersebut", maka seorang pengguna biasa (*member*) bisa saja mengakses URL yang khusus diperuntukkan bagi admin (contoh: `/admin/settings` atau `/dashboard/users`). Akibatnya, pengguna tanpa wewenang dapat melihat, mengubah, atau bahkan menghapus data sensitif aplikasi yang seharusnya terlindungi.