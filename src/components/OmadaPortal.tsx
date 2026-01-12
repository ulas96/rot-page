import { useState, useEffect } from 'react';
import './OmadaPortal.css';

export default function OmadaPortal() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsAnimated(true), 100);
  }, []);

  return (
    <div className="omada-container">
      {/* Background Image */}
      <div className="background-layer" />

      {/* Logo Section */}
      <div className={`logo-section ${isAnimated ? 'slide-in' : ''}`}>
        <div className="logo-container">
          <img
            src="/logo.png"
            alt="rotpfau"
            className="logo-image"
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className={`cards-container ${mounted ? 'fade-in' : ''}`}>
        <div className="info-card">
          <h2 className="card-title">Masa Kullanımı</h2>
          <p className="card-text">
            Masalarımız tüm misafirlerimizin kullanımına açıktır.
          </p>
          <p className="card-text">
            Kişisel eşyalarla uzun süreli yer tutmak ve masa kullanımını engellemekten kaçınmanızı rica ederiz.
          </p>
          <p className="card-text">
            Anlayışınız için teşekkür ederiz.
          </p>
        </div>

        <div className="info-card">
          <h2 className="card-title">Dışarıdan Yiyecek & İçecek</h2>
          <p className="card-text">
            Mekanımıza dışarıdan yiyecek ve içecek getirilmemektedir.
          </p>
          <p className="card-text">
            Size en iyi deneyimi sunabilmek için bu konuda anlayışınızı rica ederiz.
          </p>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="copyright-section">
        <p className="copyright-text">rotpfau all rights reserved.</p>
      </div>
    </div>
  );
}
