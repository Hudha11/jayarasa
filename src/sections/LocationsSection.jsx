import { useState } from "react";
import { locations, products } from "../data/locations";
import "../styles/locations.css";

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function LocationsSection() {
  const [selectedProduct, setSelectedProduct] = useState("all");

  const filteredLocations =
    selectedProduct === "all"
      ? locations
      : locations.filter((location) =>
          location.productIds.includes(selectedProduct),
        );

  const selectedProductName = products.find(
    (product) => product.id === selectedProduct,
  )?.name;

  return (
    <section className="locations-section" id="lokasi">
      <div className="locations-container">
        <header className="locations-heading">
          <span className="locations-eyebrow">TEMUKAN PRODUK KAMI</span>

          <h2>
            Temukan Jaya Rasa
            <br />
            di Dekat Anda.
          </h2>

          <p>
            Cari tahu toko mana yang menyediakan produk favorit Anda, lalu
            kunjungi lokasi penjualannya.
          </p>
        </header>

        <div className="locations-filter">
          <div className="locations-filter-copy">
            <label htmlFor="product-filter">Cari berdasarkan produk</label>
            <p>Pilih produk untuk melihat toko yang menyediakannya.</p>
          </div>

          <select
            id="product-filter"
            value={selectedProduct}
            onChange={(event) => setSelectedProduct(event.target.value)}
          >
            <option value="all">Semua Produk</option>

            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <div className="locations-results" aria-live="polite">
          <p>
            Menampilkan <strong>{filteredLocations.length}</strong>{" "}
            {filteredLocations.length === 1 ? "toko" : "toko"}
            {selectedProductName ? ` untuk ${selectedProductName}` : ""}
          </p>
        </div>

        {filteredLocations.length > 0 ? (
          <div className="locations-list">
            {filteredLocations.map((location) => {
              const availableProducts = products.filter((product) =>
                location.productIds.includes(product.id),
              );

              return (
                <article className="location-card" key={location.id}>
                  <div className="location-icon">
                    <LocationIcon />
                  </div>

                  <div className="location-details">
                    <h3>{location.name}</h3>

                    <p className="location-area">{location.area}</p>

                    <div className="location-products">
                      <span className="location-products-label">Produk:</span>

                      <div className="location-product-tags">
                        {availableProducts.map((product) => (
                          <span
                            className={
                              product.id === selectedProduct
                                ? "location-product-tag is-selected"
                                : "location-product-tag"
                            }
                            key={product.id}
                          >
                            {product.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    className="location-map-link"
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Cari ${location.name} di Google Maps`}
                  >
                    <span>Lihat Peta</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="locations-empty">
            <LocationIcon />
            <h3>Toko belum terdaftar</h3>
            <p>
              Belum ada toko yang tercatat menyediakan produk ini. Coba pilih
              produk lain atau tanyakan ketersediaannya melalui WhatsApp.
            </p>
            <button type="button" onClick={() => setSelectedProduct("all")}>
              Lihat semua toko
            </button>
          </div>
        )}

        <div className="locations-footer">
          <p>
            Ketersediaan produk dapat berubah. Konfirmasikan stok sebelum
            berkunjung.
          </p>

          <a
            className="locations-contact-link"
            href="https://wa.me/6285250586869?text=Halo%20Jaya%20Rasa%2C%20saya%20ingin%20menanyakan%20ketersediaan%20produk%20di%20toko."
            target="_blank"
            rel="noopener noreferrer"
          >
            Tanya melalui WhatsApp ↗
          </a>
        </div>
      </div>
    </section>
  );
}
