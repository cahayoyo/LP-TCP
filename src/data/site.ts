// Semua konten hardcode ada di sini. Edit file ini saja untuk ganti teks/data.
import ipa10 from '../assets/ipa-10l.png';
import ipa20 from '../assets/ipa-20l.png';
import ipa30 from '../assets/ipa-30l.png';
import ipa40 from '../assets/ipa-40l.png';
import ipa50 from '../assets/ipa-50l.png';
import workshop1 from '../assets/workshop-1.png';
import workshop2 from '../assets/workshop-2.png';
import workshop3 from '../assets/workshop-3.png';
import workshop4 from '../assets/workshop-4.png';
import sandblasting from '../assets/sandblasting1.png';
import unloading from '../assets/unloading.png';
import pengecatan from '../assets/pengecatan.png';
import pengelasan from '../assets/pengelasan.png';
import accesories from '../assets/accesories.png';
import tubeSettler from '../assets/tube-settler.png';
import cuttingPlan from '../assets/cutting-plan.png';
import cuttingCnc from '../assets/cutting-cnc.png';
import packing from '../assets/packing.png';

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
  { href: '#workshop', label: 'Workshop' },
  { href: '#proyek', label: 'Proyek' },
  { href: '#kontak', label: 'Kontak' },
];

// Semua foto galeri workshop sudah foto asli.
export const workshop = {
  location: 'Purwakarta',
  locationLabel: 'Lokasi Workshop',
  eyebrow: 'Darangdan, Purwakarta, Jawa Barat',
  heading: 'PT. Tri Cipta Patriot Workshop Instalasi Pengolahan Air Struktur Baja',
  desc: 'Workshop kami dilengkapi dengan fasilitas produksi modern untuk mendukung pembuatan instalasi pengolahan air berbasis struktur baja dengan kualitas tinggi, presisi, dan sesuai standar.',
  sub: 'Didukung Fasilitas Workshop Lengkap dan Tenaga Ahli Berpengalaman',
  slides: [
    { image: workshop1, alt: 'Area workshop PT. Tri Cipta Patriot' },
    { image: workshop2, alt: 'Area workshop PT. Tri Cipta Patriot — 2' },
    { image: workshop3, alt: 'Area workshop PT. Tri Cipta Patriot — 3' },
    { image: workshop4, alt: 'Area workshop PT. Tri Cipta Patriot — 4' },
  ],
  features: [
    { icon: 'gear', label: 'Fasilitas Produksi Lengkap' },
    { icon: 'users', label: 'Tenaga Ahli Berpengalaman' },
    { icon: 'shield', label: 'Standar Kualitas Terjamin' },
    { icon: 'clock', label: 'Dukungan Proyek Tepat Waktu' },
  ],
  docTitle: 'Workshop PT. Tri Cipta Patriot',
  docDesc:
    'Proses produksi dilakukan secara profesional dengan dukungan peralatan modern dan tim yang berpengalaman.',
  gallery: [
    { caption: 'Unloading Material', image: unloading, alt: 'Unloading material di workshop' },
    { caption: 'Cutting Plate', image: cuttingPlan, alt: 'Proses cutting plate di workshop' },
    { caption: 'Pengelasan', image: pengelasan, alt: 'Pekerjaan pengelasan di workshop' },
    { caption: 'Sandblasting', image: sandblasting, alt: 'Proses sandblasting di workshop' },
    { caption: 'Cutting CNC', image: cuttingCnc, alt: 'Proses cutting CNC di workshop' },
    { caption: 'Pengecatan Primer', image: pengecatan, alt: 'Proses pengecatan primer di workshop' },
    { caption: 'Accessories dan Perpipaan', image: accesories, alt: 'Pemasangan accessories dan perpipaan di workshop' },
    { caption: 'Pembuatan Tube Settler', image: tubeSettler, alt: 'Pembuatan tube settler di workshop' },
    { caption: 'Packing', image: packing, alt: 'Packing komponen siap kirim di workshop' },
  ],
};

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
