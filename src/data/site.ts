// Semua konten hardcode ada di sini. Edit file ini saja untuk ganti teks/data.
import ipa10 from '../assets/ipa-10l.png';
import ipa20 from '../assets/ipa-20l.png';
import ipa30 from '../assets/ipa-30l.png';
import ipa40 from '../assets/ipa-40l.png';
import ipa50 from '../assets/ipa-50l.png';

export const site = {
  name: 'PT. Tri Cipta Patriot',
  short: 'Tri Cipta Patriot',
  tagline: 'Water Treatment Plant Specialist',
  description:
    'Perencanaan, konstruksi, dan pemeliharaan instalasi pengolahan air bersih dan air limbah untuk kebutuhan industri, komersial, dan kawasan.',
  // TODO: ganti dengan data resmi sebelum deploy
  email: 'info@tcpatriot.co.id',
  phone: '+62 812 0000 0000',
  address: 'Jakarta, Indonesia',
  hours: 'Senin–Jumat, 08.00–17.00 WIB',
};

export const nav = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#ipa', label: 'IPA Struktur Baja' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#kontak', label: 'Kontak' },
];

export const services = [
  {
    title: 'Water Treatment Plant',
    desc: 'Instalasi pengolahan air bersih dari sumber permukaan maupun air tanah, sesuai baku mutu yang berlaku.',
    points: ['Koagulasi–flokulasi–filtrasi', 'Desinfeksi', 'Kapasitas sesuai kebutuhan'],
  },
  {
    title: 'Wastewater Treatment',
    desc: 'Pengolahan air limbah domestik dan industri agar aman dibuang atau digunakan kembali.',
    points: ['STP domestik', 'WWTP industri', 'Penyesuaian baku mutu'],
  },
  {
    title: 'Reverse Osmosis',
    desc: 'Sistem membrane untuk air proses, boiler feed, dan kebutuhan air dengan kemurnian tinggi.',
    points: ['RO & demineralisasi', 'Pra-perlakuan', 'Monitoring kualitas air'],
  },
  {
    title: 'Operasi & Pemeliharaan',
    desc: 'Dukungan teknis setelah instalasi beroperasi, termasuk pelatihan operator dan penyediaan spare part.',
    points: ['Commissioning', 'Pelatihan operator', 'Perawatan berkala'],
  },
];

export const steps = [
  {
    title: 'Kajian & desain',
    desc: 'Analisis sumber air, kebutuhan kapasitas, dan kualitas air keluaran. Hasilnya berupa desain proses dan gambar kerja.',
  },
  {
    title: 'Fabrikasi & instalasi',
    desc: 'Pembuatan unit, pemipaan, kelistrikan, dan pemasangan di lokasi sesuai jadwal proyek.',
  },
  {
    title: 'Commissioning',
    desc: 'Uji coba, penyetelan dosis dan parameter operasi sampai kualitas air sesuai target.',
  },
  {
    title: 'Operasi & perawatan',
    desc: 'Pendampingan operasi, pelatihan operator, dan perawatan berkala untuk menjaga kinerja instalasi.',
  },
];

// TODO: ganti judul, deskripsi, dan foto proyek dengan data asli.
export const projects = [
  {
    title: 'Instalasi WTP Industri',
    meta: 'Air bersih · Kapasitas sesuai kebutuhan',
    image: '/img/proyek-1.svg',
    alt: 'Ilustrasi instalasi water treatment plant',
  },
  {
    title: 'Sistem Pengolahan Air Limbah',
    meta: 'Domestik / industri',
    image: '/img/proyek-2.svg',
    alt: 'Ilustrasi instalasi pengolahan air limbah',
  },
  {
    title: 'Reverse Osmosis Air Proses',
    meta: 'Air proses · Boiler feed',
    image: '/img/proyek-3.svg',
    alt: 'Ilustrasi unit reverse osmosis',
  },
];

export const needs = [
  'Water Treatment Plant (WTP)',
  'Wastewater Treatment (STP/WWTP)',
  'Reverse Osmosis',
  'Operasi & Pemeliharaan',
  'Konsultasi / lain-lain',
];

export const ipaSizes = [
  { capacity: 10, image: ipa10, alt: 'IPA struktur baja kapasitas 10 liter per detik' },
  { capacity: 20, image: ipa20, alt: 'IPA struktur baja kapasitas 20 liter per detik' },
  { capacity: 30, image: ipa30, alt: 'IPA struktur baja kapasitas 30 liter per detik' },
  { capacity: 40, image: ipa40, alt: 'IPA struktur baja kapasitas 40 liter per detik' },
  { capacity: 50, image: ipa50, alt: 'IPA struktur baja kapasitas 50 liter per detik' },
];
