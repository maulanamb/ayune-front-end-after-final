import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";
import './file_css/pilihahli.css';

const Ahli = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const experts = [
    { id: 1, name: "dr. Syarif, Sp.KK", specialty: "Anti-aging", price: 45000, status: "offline", experience: 3, rating: 4.9 },
    { id: 2, name: "dr. Emy Kusumaningsih, Sp.DV", specialty: "Dermatovenereologi Estetika", price: 75000, status: "online", experience: 7, rating: 5.0 },
    { id: 3, name: "dr. Michael Jackson Sp.KK", specialty: "Kulit & Kelamin", price: 55000, status: "offline", experience: 6, rating: 4.7 },
    { id: 4, name: "dr. Anatasya, Sp.KK", specialty: "Kulit Kusam, Pigmentasi", price: 35000, status: "online", experience: 3, rating: 4.8 },
    { id: 5, name: "dr. Clara, Sp.KK", specialty: "Kulit Sensitif, Alergi", price: 65000, status: "online", experience: 4, rating: 5.0 },
    { id: 6, name: "dr. Hana, Sp.KK", specialty: "Kulit Ibu Hamil, Stretch Mark", price: 50000, status: "offline", experience: 3, rating: 4.8 },
    { id: 7, name: "dr. Citra, Sp.KK", specialty: "Jerawat, Bekas Jerawat", price: 55000, status: "offline", experience: 4, rating: 4.8 },
    { id: 8, name: "dr. Erlina, Sp.KK", specialty: "Keloid, Bekas Luka", price: 55000, status: "online", experience: 2, rating: 4.9 },
    { id: 9, name: "dr. Andriana, Sp.KK", specialty: "Kulit Kusam & Penuaan Dini", price: 60000, status: "online", experience: 5, rating: 4.9 },
  ];

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredExperts = experts.filter((expert) =>
    expert.name.toLowerCase().includes(searchTerm) || expert.specialty.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="ahli-page-container">
      {/* header */}
      <Header />

      {/* Content */}
      <main>
        <div className="title">
          <h1>Pilih Ahli</h1>
          <input
            type="text"
            placeholder="Temukan ahli untuk mengetahui kondisi kulit anda..."
            onChange={handleSearchInput}
            className="search-input"
          />
        </div>

        <div className="sub-title">
          <div className="sub-title-h2">
            <h2>Rekomendasi Ahli</h2>
          </div>
          <div className="sub-title-h4">
            <h4>Pilih ahli kulit yang sesuai dengan kebutuhan anda</h4>
          </div>
        </div>

        {/* Cards Container */}
        <div className="all-cards">
          {filteredExperts.map((expert) => (
            expert.status === "online" ? (
              <Link
                to="/rincianbayar"
                state={{ expert }}
                key={expert.id}
                className="card-link"
              >
                <div className="expert-card">
                  {/* Card Content */}
                  <img src={`assets/images/expert${expert.id}.png`} alt={expert.name} className="expert-photo" />
                  <div className="expert-info">
                    <h3>{expert.name}</h3>
                    <p className="specialty">Spesialis {expert.specialty}</p>
                    <div className="card-details">
                    <div className="experience">
                      <span>📅</span>
                      <span>{expert.experience} Tahun</span>
                    </div>
                    <div className="rating">
                      <span>⭐</span>
                      <span>{expert.rating}/5.0</span>
                    </div>
                    </div>
                    <div className="availability">Tersedia senin - sabtu 09:00 - 20:00</div>
                    <p className="price">Rp {expert.price.toLocaleString()}</p>
                    <button className={`status ${expert.status}`}>Aktif</button>
                  </div>
                </div>
              </Link>
            ) : (
              <div key={expert.id} className="expert-card disabled-card">
                {/* Card Content */}
                <img src={`assets/images/expert${expert.id}.png`} alt={expert.name} className="expert-photo" />
                <div className="expert-info">
                  <h3>{expert.name}</h3>
                  <p className="specialty">Spesialis {expert.specialty}</p>
                  <div className="card-details">
                    <div className="experience">
                      <span>📅</span>
                      <span>{expert.experience} Tahun</span>
                    </div>
                    <div className="rating">
                      <span>⭐</span>
                      <span>{expert.rating}/5.0</span>
                    </div>
                    </div>
                    <div className="availability">Tersedia senin - sabtu 09:00 - 20:00</div>
                  <p className="price">Rp {expert.price.toLocaleString()}</p>
                  <button className={`status ${expert.status}`}>Tidak Aktif</button>
                </div>
              </div>
            )
          ))}
        </div>
      </main>

      <div className="footer-separator"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Ahli;
