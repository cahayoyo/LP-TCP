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
import bilahHilir from '../assets/ipa-bilahhilir.png';
import sungaiBengkal from '../assets/ipa-sungaibengkal.png';
import bumiarum from '../assets/ipa-bumiarum.jpeg';
import tondano from '../assets/ipa-tondano.png';
import renah from '../assets/ipa-renah.png';
import kelayang from '../assets/ipa-kelayang.png';
import toboali from '../assets/ipa-toboali.png';
import selatNasik from '../assets/ipa-selatnasik.png';
import cikarang from '../assets/ipa-cikarang.png';
import sukmajaya from '../assets/pipa-sukmajaya.png';
import terabek from '../assets/pipa-terabek.png';
import drainaseDepok from '../assets/drainase-depok.png';
import boosterSukatani from '../assets/booster-sukatani.png';
import filterCiburial from '../assets/filter-ciburial.png';
import waterTankSawangan from '../assets/watertank-sawangan.png';
import pipaGiDepok from '../assets/pipa-gi-depok.png';
import drainaseMekarsari from '../assets/drainase-mekarsari.png';
import pagarTppas from '../assets/pagar-tppas.png';
import ipalBandung from '../assets/ipal-bandung.png';
import logoPupr from '../assets/pupr.png';
import logoDepok from '../assets/pemerintah-depok.png';
import logoJabar from '../assets/pemerintah-jawa-barat.webp';
import logoJambi from '../assets/pemerintah-jambi.png';
import logoSulut from '../assets/pemerintah-sulawesi-utara.svg';
import logoSumut from '../assets/sumatera-utara.svg';
import logoLampung from '../assets/lampung.png';
import logoBabel from '../assets/bangka-belitung.svg';
import logoRsudAlihsan from '../assets/rsud-alihsan.jpg';
import logoTirtaAsasta from '../assets/tirta-asasta-depok.webp';
import logoTirtaKahuripan from '../assets/tirta-kahuripan.jpeg';
import logoTirtaBhagasi from '../assets/tirta-bhagasi.png';
import logoPdamTangerang from '../assets/pdam-tanggerang.png';
import logoTirtaPakuan from '../assets/tirta-pakuan.png';
import logoTirtaWening from '../assets/tirta-wening.jpg';
import logoTirtaRangga from '../assets/tirta-rangga.jpg';
import logoAetra from '../assets/aetra.png';
import logoHero from '../assets/hero.png';
import logoSriPertiwi from '../assets/sri-pertiwi-sejati.jpg';
import logoAlindatama from '../assets/alindatama.png';
import logoGrandCikarang from '../assets/grand-cikarang.png';
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
  title: 'Kontraktor IPA Baja | PT. Tri Cipta Patriot',
  short: 'Tri Cipta Patriot',
  tagline: 'Water Treatment Plant Specialist',
  description:
    'PT. Tri Cipta Patriot melayani perencanaan, fabrikasi, pembangunan, dan pemeliharaan instalasi pengolahan air (IPA) baja kapasitas 10–50 liter/detik.',
  socialImageAlt: 'PT. Tri Cipta Patriot — Spesialis Instalasi Pengolahan Air Baja, dengan foto instalasi IPA baja.',
  email: 'triciptapatriot@ymail.com',
  phone: '021-28566921',
  address: 'Purwakarta, Jawa Barat, Indonesia',
};

// TODO: ganti '#' dengan URL resmi akun sebelum deploy
export const socials = [
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
];

export const nav = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#ipa', label: 'IPA Struktur Baja' },
  { href: '#workshop', label: 'Workshop' },
  { href: '#proyek', label: 'Proyek' },
];

// Semua foto galeri workshop sudah foto asli.
export const workshop = {
  location: 'Purwakarta',
  locationLabel: 'Lokasi Workshop',
  eyebrow: 'Darangdan, Purwakarta, Jawa Barat',
  heading: 'PT. Tri Cipta Patriot Workshop Instalasi Pengolahan Air Struktur Baja',
  desc: 'Workshop Tri Cipta Patriot dilengkapi dengan fasilitas produksi modern untuk mendukung pembuatan instalasi pengolahan air berbasis struktur baja dengan kualitas tinggi, presisi, dan sesuai standar.',
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

// Semua foto proyek sudah foto asli.
export const projects = [
  {
    tag: 'IPA Baja',
    title: 'Pembangunan IPA Baja SPAM Bilah Hilir',
    location: 'Labuhan Batu, Sumatera Utara',
    spec: '50 LPD',
    specIcon: 'droplet',
    image: bilahHilir,
    alt: 'Pembangunan IPA Baja SPAM Bilah Hilir di Labuhan Batu, Sumatera Utara',
  },
  {
    tag: 'IPA Baja',
    title: 'Rehabilitasi IPA Baja SPAM IKK Bumiarum',
    location: 'Pringsewu, Lampung',
    spec: '3×25 LPD',
    specIcon: 'droplet',
    image: bumiarum,
    alt: 'Rehabilitasi IPA Baja SPAM IKK Bumiarum di Kabupaten Pringsewu, Lampung',
  },
  {
    tag: 'IPA Baja',
    title: 'Peningkatan IPA Baja SPAM IKK Sungai Bengkal',
    location: 'Tebo, Jambi',
    spec: '30 LPD',
    specIcon: 'droplet',
    image: sungaiBengkal,
    alt: 'Peningkatan IPA Baja SPAM IKK Sungai Bengkal di Kabupaten Tebo, Jambi',
  },
  {
    tag: 'IPA Baja',
    title: 'Pembangunan IPA Baja SPAM IKK Renah Mendaluh',
    location: 'Tanjung Jabung Barat, Jambi',
    spec: '10 LPD',
    specIcon: 'droplet',
    image: renah,
    alt: 'Pembangunan IPA Baja SPAM IKK Renah Mendaluh di Tanjung Jabung Barat, Jambi',
  },
  {
    tag: 'IPA Baja',
    title: 'Pembangunan IPA Baja KSPN Tanjung Kelayang',
    location: 'Tanjung Kelayang, Belitung',
    spec: '20 LPD',
    specIcon: 'droplet',
    image: kelayang,
    alt: 'Pembangunan IPA Baja KSPN Tanjung Kelayang di Belitung',
  },
  {
    tag: 'IPA Baja',
    title: 'Pembangunan IPA Baja SPAM IKK Tondano',
    location: 'Minahasa, Sulawesi Utara',
    spec: '20 LPD',
    specIcon: 'droplet',
    image: tondano,
    alt: 'Pembangunan IPA Baja SPAM IKK Tondano di Kabupaten Minahasa, Sulawesi Utara',
  },
  {
    tag: 'IPA Baja',
    title: 'Peningkatan IPA Baja Toboali',
    location: 'Toboali Rindik, Bangka Belitung',
    spec: '20 LPD',
    specIcon: 'droplet',
    image: toboali,
    alt: 'Peningkatan IPA Baja Toboali di Bangka Belitung',
  },
  {
    tag: 'IPA Baja',
    title: 'Pembangunan IPA Baja SPAM IKK Selat Nasik',
    location: 'Selat Nasik, Bangka Belitung',
    spec: '10 LPD',
    specIcon: 'droplet',
    image: selatNasik,
    alt: 'Pembangunan IPA Baja SPAM IKK Selat Nasik di Bangka Belitung',
  },
  {
    tag: 'IPAL',
    title: 'Rehabilitasi dan Pengembangan IPAL RSUD Al Ihsan',
    location: 'Bandung, Jawa Barat',
    spec: '',
    image: ipalBandung,
    alt: 'Rehabilitasi dan Pengembangan IPAL RSUD Al Ihsan di Bandung, Jawa Barat',
  },
  {
    tag: 'Pipa Distribusi',
    specIcon: 'pipe',
    title: 'Pembangunan Pipa Distribusi IPA Sukmajaya',
    location: 'Sukmajaya, Jawa Barat',
    spec: '',
    image: sukmajaya,
    alt: 'Pembangunan Pipa Distribusi IPA Sukmajaya di Sukmajaya, Jawa Barat',
  },
  {
    tag: 'IPA Baja',
    title: 'Pembangunan IPA Baja Perumahan Grand Cikarang City',
    location: 'Cikarang, Jawa Barat',
    spec: '50 LPD',
    specIcon: 'droplet',
    image: cikarang,
    alt: 'Pembangunan IPA Baja Perumahan Grand Cikarang City di Cikarang, Jawa Barat',
  },
  {
    tag: 'Pipa Distribusi',
    specIcon: 'pipe',
    title: 'Pengadaan dan Pemasangan Pipa Transmisi Kolong Terabek',
    location: 'Bangka Belitung',
    spec: '',
    image: terabek,
    alt: 'Pengadaan dan Pemasangan Pipa Transmisi Kolong Terabek di Bangka Belitung',
  },
  {
    tag: 'Drainase',
    title: 'Pembangunan Drainase Primer Kota Depok',
    location: 'Depok, Jawa Barat',
    spec: '',
    image: drainaseDepok,
    alt: 'Pembangunan Drainase Primer Kota Depok di Jawa Barat',
  },
  {
    tag: 'Pompa Booster',
    title: 'Pembangunan Booster Pump Sukatani',
    location: 'Sukatani, Jawa Barat',
    spec: '500 m³',
    specIcon: 'droplet',
    image: boosterSukatani,
    alt: 'Pembangunan Booster Pump Sukatani di Jawa Barat',
  },
  {
    tag: 'Filter Air',
    title: 'Pembangunan Filter Mata Air Ciburial',
    location: 'Ciomas, Jawa Barat',
    spec: '',
    image: filterCiburial,
    alt: 'Pembangunan Filter Mata Air Ciburial di Jawa Barat',
  },
  {
    tag: 'Water Tank',
    title: 'Pembangunan Water Tank Sawangan',
    location: 'Sawangan, Jawa Barat',
    spec: '',
    image: waterTankSawangan,
    alt: 'Pembangunan Water Tank Sawangan di Jawa Barat',
  },
  {
    tag: 'Pipa Distribusi',
    specIcon: 'pipe',
    title: 'Pembangunan Jembatan Pipa GI Dia. 300 mm Grand Depok City',
    location: 'Depok, Jawa Barat',
    spec: '',
    image: pipaGiDepok,
    alt: 'Pembangunan Jembatan Pipa GI Dia. 300 mm Grand Depok City di Jawa Barat',
  },
  {
    tag: 'Drainase',
    title: 'Penataan Drainase Inlet Kali Cipinang RW.13 Kel. Mekarsari',
    location: 'Mekarsari, Jawa Barat',
    spec: '',
    image: drainaseMekarsari,
    alt: 'Penataan Drainase Inlet Kali Cipinang RW.13 Kel. Mekarsari di Jawa Barat',
  },
  {
    tag: 'Pagar TPPAS',
    title: 'Pengadaan dan Pemasangan Pagar Lanjutan TPPAS Regional Nambo Ruas A',
    location: 'Nambo, Jawa Barat',
    spec: '',
    image: pagarTppas,
    alt: 'Pengadaan dan Pemasangan Pagar Lanjutan TPPAS Regional Nambo Ruas A di Nambo, Jawa Barat',
  },
];

export const ipaSizes = [
  { capacity: 10, image: ipa10, alt: 'IPA struktur baja kapasitas 10 liter per detik' },
  { capacity: 20, image: ipa20, alt: 'IPA struktur baja kapasitas 20 liter per detik' },
  { capacity: 30, image: ipa30, alt: 'IPA struktur baja kapasitas 30 liter per detik' },
  { capacity: 40, image: ipa40, alt: 'IPA struktur baja kapasitas 40 liter per detik' },
  { capacity: 50, image: ipa50, alt: 'IPA struktur baja kapasitas 50 liter per detik' },
];

export const ipaStandards = {
  eyebrow: 'Sesuai Dengan',
  heading: 'Standar Nasional Indonesia',
  abbreviation: '(SNI)',
  description:
    'IPA Struktur Baja Tri Cipta Patriot mengacu pada standar nasional Indonesia untuk memastikan kualitas, keamanan, dan keberlanjutan dalam penyediaan air bersih.',
  items: [
    {
      code: 'SNI 6773 : 2008',
      description: 'Spesifikasi Unit Paket Instalasi Pengolahan Air.',
      icon: 'specification',
    },
    {
      code: 'SNI 6774 : 2008',
      description: 'Tata Cara Perencanaan Unit Paket Instalasi Pengolahan Air.',
      icon: 'planning',
    },
    {
      code: 'SNI 6775 : 2008',
      description: 'Tata Cara Pengoperasian dan Pemeliharaan Unit Paket Instalasi Pengolahan Air.',
      icon: 'maintenance',
    },
  ],
};

export const ipaRegulation = {
  heading: 'Spesifikasi Sesuai Regulasi',
  lines: [
    'Spesifikasi sesuai Surat Edaran Direktur Jenderal Cipta Karya Nomor 11/SE/DC/2021 Tahun 2021',
    'Tentang Perubahan Surat Edaran Direktur Jenderal Cipta Karya Nomor 08/SE/DC/2020 Tahun 2020',
    'Tentang Standar Teknis Modul Instalasi Pengolahan Air Minum Struktur Baja di Lingkungan Direktorat Jenderal Cipta Karya.',
  ],
};

// Instansi pengguna jasa. Logo yang belum ada pakai placeholder inisial.
export const clients = [
  { name: 'Kementerian PUPR', logo: logoPupr },
  { name: 'Pemerintah Kota Depok', logo: logoDepok },
  { name: 'Pemerintah Jawa Barat', logo: logoJabar },
  { name: 'Pemerintah Jambi', logo: logoJambi },
  { name: 'Pemerintah Sulawesi Utara', logo: logoSulut },
  { name: 'Pemerintah Sumatera Utara', logo: logoSumut },
  { name: 'Pemerintah Lampung', logo: logoLampung },
  { name: 'Pemerintah Bangka Belitung', logo: logoBabel },
  { name: 'RSUD Al Ihsan', logo: logoRsudAlihsan },
  { name: 'PDAM Tirta Asasta Depok', logo: logoTirtaAsasta },
  { name: 'PDAM Tirta Kahuripan', logo: logoTirtaKahuripan },
  { name: 'PDAM Tirta Bhagasi', logo: logoTirtaBhagasi },
  { name: 'PDAM Kota Tangerang', logo: logoPdamTangerang },
  { name: 'PDAM Tirta Pakuan', logo: logoTirtaPakuan },
  { name: 'PDAM Tirta Wening', logo: logoTirtaWening },
  { name: 'PDAM Tirta Rangga', logo: logoTirtaRangga },
  { name: 'PT. AETRA Air Jakarta', logo: logoAetra },
  { name: 'PT. HERO Supermarket, Tbk', logo: logoHero },
  { name: 'PT. Sri Pertiwi Sejati', logo: logoSriPertiwi },
  { name: 'PT. Alindatama Sakti BC', logo: logoAlindatama },
  { name: 'Perumahan Grand Cikarang City', logo: logoGrandCikarang },
];
