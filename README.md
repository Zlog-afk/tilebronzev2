# Tile Bronze v2

Struktur:

- `index.html`  halaman katalog
- `css/style.css`  seluruh gaya (termasuk tema gelap)
- `js/app.js`  filter, pencarian, komposisi buka-tutup, tema, tombol ke atas
- `img/`  gambar produk, satu file per paduan

## Mengganti gambar produk

Foto yang ada sekarang diambil dari PDF dan hanya tiga foto bantalan umum,
jadi beberapa produk memakai foto yang sama. Untuk memakai foto asli tiap paduan,
timpa file berikut dengan nama yang sama (disarankan rasio mendekati persegi,
minimal 600 px, latar putih atau transparan):

- `img/kuningan-no-41.jpg`
- `img/kuningan-no-40.jpg`
- `img/perunggu-no-64.jpg`
- `img/perunggu-no-43.jpg`
- `img/perunggu-no-68a.jpg`

Jika ekstensinya berbeda (misalnya `.png` atau `.webp`), ubah juga atribut `src`
pada kartu produk yang bersangkutan di `index.html`.

## GitHub Pages

Semua tautan relatif, jadi folder ini bisa diunggah apa adanya ke akar repositori
atau ke subfolder repositori GitHub Pages.
