import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";

const ProdukSerum = () => {
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
        {/* Section Serum */}
        <section>
          <div className='flex justify-center px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Serum</p>
          </div>
          <div className=''></div>
          <div className='grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white'>
          <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/serum/g2gserum.png" alt="GLAD2GLOW" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>GLAD2GLOW</p>
                  <p>Yuja Symwhite 377 Dark Spot...</p>
                  <p>Rp49.000 - Rp55.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/serum/niveaserum.png" alt="NIVEA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>NIVEA</p>
                  <p>Luminous 630 Spotclear Intensive</p>
                  <p>Rp335.000 - Rp350.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/serum/somethincserum.png" alt="SOMETHINC" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SOMETHINC</p>
                  <p>Calm Down! Skinpair Barrier</p>
                  <p>Rp139.000 - Rp145.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/serum/firstserum.png" alt="FIRSTLAB" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>FIRSTLAB</p>
                  <p>Probiotic Barrier Ampoule</p>
                  <p>Rp283.000 - Rp300.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/serum/jarkeenserum.png" alt="JARKEEN" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>JARKEEN</p>
                  <p>Vit C Booster Serum</p>
                  <p>Rp150.000 - Rp177.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/serum/skintificserum.png" alt="SKINTIFIC" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SKINTIFIC</p>
                  <p>Retinol Skin Renewal Serum</p>
                  <p>Rp129.000 - Rp154.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/serum/skintificserum2.png" alt="SKINTIFIC" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SKINTIFIC</p>
                  <p>Lactic Acid Skin Renewal ...</p>
                  <p>Rp129.000 - Rp154.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/serum/wardahserum.png" alt="WARDAH" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>WARDAH</p>
                  <p>Lightening Facial Serum</p>
                  <p>Rp55.000 - Rp60.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/serum/somethincserum2.png" alt="SOMETHINC" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SOMETHINC</p>
                  <p>BioSpicule Renewal Serume</p>
                  <p>Rp75.000 - Rp80.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/serum/theoriginoteserum.png" alt="THE ORIGINOTE" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>THE ORIGINOTE</p>
                  <p>TXA 377 Dark Spot Serum</p>
                  <p>Rp41.000 - Rp46.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/serum/naturserum.png" alt="NATUR" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>NATUR</p>
                  <p>Miracle Brightening Face Serum</p>
                  <p>Rp170.000 - Rp180.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/serum/youserum.png" alt="YOU BEAUTY" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>YOU BEAUTY</p>
                  <p>AcnePlus Fine Pore Oil Control...</p>
                  <p>Rp65.000 - Rp76.000</p>
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

export default ProdukSerum