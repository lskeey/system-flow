# Task List Application

Aplikasi Task List ini dibangun dengan menggunakan ViteJS untuk front-end, PHP untuk back-end, dan MySQL sebagai database. Aplikasi ini memungkinkan pengguna untuk mengelola daftar tugas dengan mudah.

## Teknologi yang Digunakan

- **Front-end**: ViteJS, Tailwind CSS, Shadcn UI
- **Back-end**: PHP
- **Database**: MySQL

## Langkah-langkah Instalasi

### 1. Clone Repositori

Pertama, clone repositori ini ke komputer lokal Anda:

```bash
git clone <URL_REPOSITORI>
cd <NAMA_FOLDER_REPOSITORI>
```

### 2. Mengatur Database

1. Buka XAMPP atau server lokal Anda.
2. Buat database baru dengan nama `task_list`.
3. Impor file `task_list.sql` yang ada di folder `api` ke dalam database yang telah Anda buat.

### 3. Menjalankan Back-end

1. Tempatkan folder `api` di dalam folder `htdocs` (jika menggunakan XAMPP).
2. Pastikan server Apache dan MySQL berjalan di XAMPP.
3. Akses API di `http://localhost/api/tasks` (atau sesuai dengan pengaturan server Anda).

### 4. Menjalankan Front-end

1. Navigasikan ke folder front-end di terminal.
2. Jalankan perintah berikut untuk menginstal dependensi:

```bash
npm install
```

3. Setelah instalasi selesai, jalankan aplikasi dengan perintah:

```bash
npm run dev
```

4. Akses aplikasi di `http://localhost:5173` (atau port yang ditentukan).
