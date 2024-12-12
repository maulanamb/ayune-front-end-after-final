import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";

const ProdukSunscreen = () => {
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
        {/* Section Sunscreen */}
        <section>
          <div className='flex justify-center px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Sunscreen</p>
          </div>
          <div className=''></div>
          <div className='grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white'>
          <Link to={'/Produk/Sunscreen/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/ss/azarinesun.png" alt="AZARINE" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>AZARINE</p>
                  <p>Hydracool Ceraspray Sunscreen.</p>
                  <p>Rp65.000 - Rp71.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Sunscreen/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/ss/bioresun.png" alt="BIORE" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>BIORE</p>
                  <p>UV Fresh & Bright Instant Cover...</p>
                  <p>Rp38.000 - Rp41.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Sunscreen/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/ss/eminasun.png" alt="EMINA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>EMINA</p>
                  <p>Skin Buddy Sun Protection...</p>
                  <p>Rp38.000 - Rp42.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Sunscreen/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/ss/truesun.png" alt="TRUE TO SKIN" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>TRUE TO SKIN</p>
                  <p>Sunfriends Soothing Sunscreen</p>
                  <p>Rp78.000 - Rp83.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Sunscreen/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/ss/wardahsun.png" alt="WARDAH" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>WARDAH</p>
                  <p>UV Shield Aqua Fresh Essence...</p>
                  <p>Rp61.000 - Rp66.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/ss/npuresun.png" alt="NPURE" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>NPURE</p>
                  <p>AcnCica Beat The Sun Spraye...</p>
                  <p>Rp62.000 - Rp80.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/ss/cetaphilsun.png" alt="CETAPHIL" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>CETAPHIL</p>
                  <p>UVA/UVB Defense Spf50++</p>
                  <p>Rp240.000 - Rp265.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/ss/skinsun.png" alt="SKIN AQUA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SKIN AQUA</p>
                  <p>UV Moisture Milk SPF50 PA ++</p>
                  <p>Rp68.000 - Rp71.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/ss/laboresun.png" alt="LABORE" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>LABORE</p>
                  <p>Sensitive Skin Care Biome Protect</p>
                  <p>Rp59.000 - Rp66.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/ss/amaterasun.png" alt="AMATERASUN" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>AMATERASUN</p>
                  <p>Physical Sunscreen SPF 50+...</p>
                  <p>Rp79.000 - Rp99.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/ss/subella.png" alt="SUNBELLA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SUNBELLA</p>
                  <p>Micellar Water Rose Cleanse</p>
                  <p>Rp37.000 - Rp38.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/ss/dermasun.png" alt="DERMALUZ" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>DERMALUZ</p>
                  <p>MicellAir Pearl Bright</p>
                  <p>Rp64.000 - Rp72.000</p>
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

export default ProdukSunscreen