export const products = [
  { id: "telur-asin-pindang", name: "Telur Asin Pindang" },
  { id: "sambal-kepiting", name: "Sambal Kepiting" },
  { id: "sambal-ikan-roa", name: "Sambal Ikan Roa" },
  { id: "sari-buah-nanas", name: "Sari Buah Nanas" },
  { id: "crispy-baby-crabs", name: "Crispy Baby Crabs" },
  { id: "keripik-tempe-kepiting", name: "Keripik Tempe Kepiting" },
];

const createMapsSearchUrl = (name, area) => {
  const query = encodeURIComponent(`${name}, ${area}, Balikpapan`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};

export const locations = [
  {
    id: 1,
    name: "Toko Pribumi",
    area: "Pasar Inpres",
    mapsUrl: createMapsSearchUrl("Toko Pribumi", "Pasar Inpres"),
    productIds: ["telur-asin-pindang", "crispy-baby-crabs"],
  },
  {
    id: 2,
    name: "Toko Akbar",
    area: "Balikpapan",
    mapsUrl: createMapsSearchUrl("Toko Akbar", "Balikpapan"),
    productIds: ["telur-asin-pindang", "sambal-kepiting"],
  },
  {
    id: 3,
    name: "Toko Karya Fadilah",
    area: "Balikpapan",
    mapsUrl: createMapsSearchUrl("Toko Karya Fadilah", "Balikpapan"),
    productIds: ["crispy-baby-crabs", "keripik-tempe-kepiting"],
  },
  {
    id: 4,
    name: "Toko Salabila",
    area: "Nusantara",
    mapsUrl: createMapsSearchUrl("Toko Salabila", "Nusantara"),
    productIds: ["telur-asin-pindang", "sambal-ikan-roa"],
  },
  {
    id: 5,
    name: "Aneka Amplang / Goleki",
    area: "Sepinggan",
    mapsUrl: createMapsSearchUrl("Aneka Amplang Goleki", "Sepinggan"),
    productIds: ["crispy-baby-crabs", "keripik-tempe-kepiting"],
  },
  {
    id: 6,
    name: "Borneo Shop / Kalimantan Living",
    area: "Bandara Sepinggan",
    mapsUrl: createMapsSearchUrl(
      "Borneo Shop Kalimantan Living",
      "Bandara Sepinggan",
    ),
    productIds: ["telur-asin-pindang", "sari-buah-nanas", "crispy-baby-crabs"],
  },
];
