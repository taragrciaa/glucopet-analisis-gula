# 🐾 Glucopet

PWA edukasi gula, tracking konsumsi harian, dan Activity Burn untuk Gen Z Indonesia.
Dibuat dengan HTML, CSS, dan JavaScript vanilla (ES6+), tanpa framework dan tanpa build step.

## Fitur

| Tab | Isi |
|---|---|
| 🏠 **Faktapedia** | Hero cover, batas resmi gula (Kemenkes RI 50 g, AHA remaja 25 g, konversi 1 sdm = 12,5 g dan 1 sdt = 4 g), 7 bahaya gula (3 di antaranya infografis SVG), Detektif Label Kemasan (12 nama samaran gula, bisa diklik), 10 kartu Mitos vs Fakta, Craving Hacks |
| 🧮 **Kalkulator** | Gula Tracker Harian (progress bar, riwayat, hapus/reset), Dashboard Total Harian (air + gula + kalori + Burn Solution), kalkulator batas gula personal |
| 📸 **Gula Lens** | Upload dari galeri atau kamera, scan laser, tag kategori cepat, hasil kalori, gula, risiko, dan durasi olahraga pembakar |
| 🍱 **Kuliner** | 60 item (Boba & Tea, Pastry Hits, Street Food, Fast Food & Es Krim, Kaki Lima & Tradisional, Kemasan) dengan pencarian, filter, tombol catat, dan detail burn |
| 💧 **Hidrasi** | Target air = berat badan (kg) × 29 ml, tombol gelas 200/300/500 ml, animasi gelombang air, konfeti saat target tercapai |

Data tracker dan hidrasi disimpan di `localStorage` perangkat pengguna dan otomatis mulai baru setiap hari.

## Struktur file

```
glucopet/
├── index.html      # Struktur SPA
├── styles.css      # Tema, animasi, layout responsif
├── app.js          # Semua logika dan data
├── manifest.json   # Konfigurasi PWA
├── sw.js           # Service Worker (cache offline)
├── icon.svg        # Ikon aplikasi
└── README.md
```

## Jalankan lokal

```bash
npx serve .
```

Buka alamat yang muncul (biasanya `http://localhost:3000`). Service Worker hanya aktif di `localhost` atau HTTPS, jadi jangan buka `index.html` langsung dari folder.

## Push ke GitHub

```bash
git init
git add .
git commit -m "Glucopet PWA"
git branch -M main
git remote add origin https://github.com/USERNAME/glucopet.git
git push -u origin main
```

## Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com), pilih **Add New → Project**, lalu import repo GitHub.
2. **Framework Preset**: Other. Kosongkan Build Command dan Output Directory.
3. Klik **Deploy**.

Setiap `git push` ke `main` akan ter-deploy otomatis dengan HTTPS, sehingga tombol "Install" PWA muncul di browser.

## Install di HP

- **Android (Chrome):** menu ⋮ → **Install app** / **Add to Home screen**.
- **iPhone (Safari):** tombol Share → **Add to Home Screen**.

## Cara kerja Gula Lens

Gula Lens berjalan sepenuhnya di browser, tanpa API key dan tanpa mengirim foto ke server. Aplikasi **tidak mengenali isi foto**. Hasilnya ditentukan dengan urutan berikut:

1. **Tag kategori** yang dipilih pengguna (🚰 Air, 🧋 Boba, ☕ Kopi, 🥐 Pastry, 🍦 Es Krim, 🍗 Snack, 🧃 Kemasan).
2. **Kata kunci nama file** (contoh: `boba.jpg`, `kopi_susu.png`).
3. **Pencocokan nama file** dengan database kuliner.
4. Kalau semuanya tidak cocok, aplikasi meminta pengguna memilih kategori, tanpa menebak angka.

Angka diambil dari rentang tipikal tiap kategori (misalnya Boba 280-450 kkal dan 32-48 g gula), jadi hasilnya perkiraan, bukan pengukuran.

## Mengubah data

Semua data ada di `app.js`:

| Ingin mengubah | Cari |
|---|---|
| Item kuliner (emoji, nama, kategori, kkal, gula) | `const F=[` |
| Rentang kategori Gula Lens dan kata kuncinya | `const LC=` |
| Laju pembakaran kalori per menit (joging, jalan, gowes, skipping) | `const RATES=` |
| Ambang risiko Aman / Sedang / Tinggi | `const lvl=` |
| Konten edukasi | `DANGER`, `ALIAS`, `MYTHS`, `CRAVING` |

Setiap item kuliner sebaiknya memakai emoji yang unik. Browser akan menampilkan peringatan di console jika ada yang kembar.

**Penting:** setiap kali mengubah file yang di-cache, naikkan nama cache di `sw.js` (misalnya `glucopet-v5` menjadi `glucopet-v6`) supaya pengguna lama mendapat versi terbaru.

## Sumber edukasi

Batas konsumsi gula mengacu pada Permenkes No. 30 Tahun 2013 (Kemenkes RI), rekomendasi WHO (gula bebas kurang dari 10% energi harian), dan American Heart Association (maks. 25 g/hari untuk remaja).

## Catatan

- Nilai gizi di database adalah **perkiraan per porsi umum** dan bisa berbeda antar outlet, resep, dan ukuran.
- Estimasi durasi olahraga memakai asumsi berat badan ±60 kg.
- Glucopet bersifat edukatif dan **bukan pengganti saran medis**. Konsultasikan kondisi kesehatanmu dengan tenaga kesehatan.
- Untuk ikon install Android yang optimal, tambahkan ikon PNG 192×192 dan 512×512 ke `manifest.json`.
- 
