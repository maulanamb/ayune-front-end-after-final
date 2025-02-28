import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePayment } from "./PaymentContext";
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";
import "./file_css/va.css";

const Va = () => {
  const [showPopup, setShowPopup] = useState(false); // State untuk mengontrol pop-up
  const [timeLeft, setTimeLeft] = useState(86400); // Set initial time for 24 hours in seconds
  const { totalPayment } = usePayment(); // Ambil nilai totalPayment dari Context
  const navigate = useNavigate();

  // Timer function to decrement time every second
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Function to format time in HH:MM:SS
  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const remainingSeconds = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${remainingSeconds}`;
  };

  const handleCopyClick = () => {
    console.log("Tombol Bayar ditekan");
    setShowPopup(true);
  };

  const handleRedirect = () => {
    navigate("/consul"); // Mengarahkan ke halaman konsultasi
  };

  return (
    <div className="va-page">
      {/* header */}
      <Header />

      {/* Main Content */}
      <main>
        <div className="title">
          <h1>Ayo Bayar</h1>
        </div>

        <div className="total">
          <div className="grid-kiri">
            <h4>Total Tagihan</h4>
            <h2>Pembayaranmu</h2>
          </div>
          <div className="grid-kanan">
            <h4>Rp {totalPayment.toLocaleString()}</h4>
            <h2>Rp {totalPayment.toLocaleString()}</h2>
          </div>
        </div>
        <div className="virtual-account-section">
          <p>
            Mohon pastikan Anda telah membaca dan memahami{" "}
            <a href="#">Syarat & Ketentuan</a> serta{" "}
            <a href="#">Kebijakan Privasi</a> kami sebelum melanjutkan
            pembayaran. Setelah pembayaran berhasil, transaksi dianggap final
            dan tidak dapat dikembalikan.
          </p>
          <h4>Waktu Tersisa:</h4>
          <h2 id="timer">{formatTime(timeLeft)}</h2> {/* Timer display */}
          <br />
          <div className="va-detail">
            <h4>Kode Virtual Account:</h4>
            <h1 className="virtual-account-number">1234567891000001</h1>
          </div>
          <p className="bila">
            Bila sudah melakukan pembayaran harap refresh halaman web
          </p>
        </div>
        <div className="virtual-account-section">
          <button type="button" className="copy-btn" onClick={handleCopyClick}>
            BAYAR
          </button>
        </div>
      </main>

      {/* Popup */}
      {showPopup && (
        <div id="secondPopup" className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">Pembayaran Berhasil!</div>
            <div className="popup-title">
              <img
                src="assets/images/iconbayar.png"
                alt="Pembayaran Berhasil"
                className="popup-image"
              />
            </div>
            <div className="popup-button-container">
              <button className="copy-btn" onClick={handleRedirect}>
                Mulai Sesi
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="footer-separator"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Va;
