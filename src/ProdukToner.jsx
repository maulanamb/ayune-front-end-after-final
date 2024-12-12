import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";

const ProdukToner = () => {
  return (
    <div>
      {/* header */}
      <Header />

      <div className='space-y-[30px] bg-white'>
        {/* Section Search Produk */}
        <section className='bg-[#E3F2ED] py-[5px]'>
          <div className='flex gap-[89px] px-[120px] justify-center'>
            <p className='text-[#4A4A4A] text-[40px] font-bold'>PRODUK</p>
          </div>
        </section>
        {/* Section Toner */}
        <section>
          <div className='flex justify-center px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Toner</p>
          </div>
          <div className=''></div>
          <div className='grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white'>
            <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/toner/avoskintonerr.png" alt="AVOSKIN" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>AVOSKIN</p>
                  <p>Miraculous Retinol Toner</p>
                  <p>Rp169.000 - Rp175.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/toner/scarlettonerr.png" alt="SCARLETT WHITENING" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SCARLETT WHITENING</p>
                  <p>Acne Essence Toner</p>
                  <p>Rp83.000 - Rp90.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/toner/dermatonerr.png" alt="DERMALUZ" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>DERMALUZ</p>
                  <p>Hydrate Glow Face Toner</p>
                  <p>Rp57.000 - Rp65.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/toner/bnbtonerr.png" alt="BARENBLISS" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>BARENBLISS</p>
                  <p>Glow Bottle! Lavabiome</p>
                  <p>Rp16.900 - Rp.20.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/toner/pondstonerr.png" alt="PONDS" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>PONDS</p>
                  <p>White Beauty Toner 150ml</p>
                  <p>Rp33.000 - Rp40.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/toner/cetaphiltonerr.png" alt="CETAPHIL" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>CETAPHIL</p>
                  <p>Healthy Radiance Brightness </p>
                  <p>Rp174.000 - Rp200.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/toner/g2gtonerr.png" alt="GLAD2GLOW" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>GLAD2GLOW</p>
                  <p>Centella Ceramide Soothing</p>
                  <p>Rp48.000 - Rp54.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/toner/pyunkangtonerr.png" alt="PYUNKANG YUL" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>PYUNKANG YUL</p>
                  <p>Essence Toner</p>
                  <p>Rp36.000 - Rp.80.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/toner/theoriginotetonerr.png" alt="THE ORIGINOTE" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>THE ORIGINOTE</p>
                  <p>MicellAir Oil & Acne Care</p>
                  <p>Rp34.000 - Rp38.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/toner/kahftonerr.png" alt="KAHF" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>KAHF</p>
                  <p>All-in-One Power Toning Face</p>
                  <p>Rp75.000 - Rp80.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/toner/somethinctonerr.png" alt="SOMETHINC" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SOMETHINC</p>
                  <p>Glow Maker AHA BHA PHA </p>
                  <p>Rp74.000 - Rp100.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/toner/skintifictonerr.png" alt="SKINTIFIC" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SKINTIFIC</p>
                  <p>Pure Centella Acne Calming</p>
                  <p>Rp108.000 - Rp129.000</p>
                </div>
              </Link>
          </div>
        </section>
      </div>

      <div className="footer-separator"></div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ProdukToner