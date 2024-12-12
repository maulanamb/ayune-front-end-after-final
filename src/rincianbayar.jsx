import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePayment } from "./PaymentContext";
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";
import "./file_css/rincianbayar.css";

const Rincianbayar = () => {
  const { totalPayment, setTotalPayment } = usePayment(); // Ambil dan perbarui totalPayment
  const location = useLocation();
  const { expert } = location.state || {}; // Ambil data dari state

  const serviceFee = 2000; // Biaya layanan tetap
  const totalPrice = expert ? expert.price + serviceFee : 0; // Hitung total

  useEffect(() => {
    if (expert) {
      setTotalPayment(totalPrice); // Perbarui nilai totalPayment di Context
    }
  }, [expert, totalPrice, setTotalPayment]); // Jalankan hanya jika nilai berubah

  if (!expert) {
    return <p>Data ahli tidak ditemukan.</p>; // Error handling
  }
  return (
    <div className="rincianbayar-page">
       {/* header */}
       <Header />

    <div className="bayar-page">
    <main className="payment-details">
          <div className="title">
            <h1>Rincian Pembayaran</h1>
          </div>
          <div className="card">
            <div className="doctor-info">
              <img src={`assets/images/expert${expert.id}.png`} alt={expert.name} className="doctor-photo" />
              <div className="doctor-details">
                <strong>{expert.name}</strong>
                <p>Spesialis {expert.specialty}</p>
              </div>
            </div>
            <div className="price-info">
              <p>Biaya sesi 30 menit</p>
              <span>Rp {expert.price.toLocaleString()}</span>
            </div>
            <div className="price-info">
              <p>Biaya layanan</p>
              <span>Rp {serviceFee.toLocaleString()}</span>
            </div>
            <div className="total-price">
              <strong>Total Pembayaranmu</strong>
              <span>Rp {totalPrice.toLocaleString()}</span>
            </div>
            <Link to="/Opsi_Bayar">
              <button className="pay-button">Bayar</button>
            </Link>
          </div>
        </main>
    </div>
    
    <div className="footer-separator"></div>
      {/* Footer */}
      <Footer />
    </div>

  );
};

export default Rincianbayar;
