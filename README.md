# Japanese Nihongo Learning by Azmi Aziz

Aplikasi belajar bahasa Jepang untuk pemula. Materi disusun bertahap dari Hiragana dan Katakana, dilanjutkan 100 kosakata dasar dan pola kalimat.

## Simulasi JLPT

Menu **Simulasi JLPT** menyediakan mini-simulasi latihan untuk level N5 sampai N1. Setiap level berisi soal 文字・語彙, 文法, 読解, dan 聴解; sesi memakai timer, navigasi soal, audio Jepang dari browser, serta riwayat skor yang disimpan di browser.

Paket ini merupakan latihan ringkas, bukan ujian penuh, materi resmi, atau prediksi skor JLPT. Penilaian JLPT resmi menggunakan skala dan kriteria tersendiri.

## Jalankan secara lokal

Dari folder proyek:

```powershell
python -m http.server 8000
```

Buka `http://localhost:8000` di browser.

## GitHub Pages

Workflow di `.github/workflows/pages.yml` menerbitkan aplikasi ke GitHub Pages setiap kali perubahan di-push ke branch `main`.

Setelah workflow pertama berhasil, aplikasi dapat dibuka dari menu **Settings → Pages** pada repository.
