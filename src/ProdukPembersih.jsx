import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";

const ProdukPembersih = () => {
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
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Pembersih</p>
          </div>
          <div className=''></div>
          <div className='grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white'>
            <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                    <img className='object-contain h-[261px] w-[261px]' src="/assets/images/pembersih/senkapembersih.png" alt="SENKA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                    <p className='text-[#147A63] font-extrabold'>SENKA</p>
                    <p>Senka Perfect Whip Berry</p>
                    <p>Rp72.000 - Rp80.000</p>
                </div>
            </Link>
            <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className='object-contain h-[261px] w-[261px]' src="/assets/images/pembersih/cetaphilpembersih.png" alt="CETAPHIL" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>CETAPHIL</p>
                  <p>Daily Facial Cleanserr</p>
                  <p>Rp212.000 - Rp220.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className='object-contain h-[261px] w-[261px]' src="/assets/images/pembersih/eminapembersih.png" alt="EMINA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>EMINA</p>
                  <p>Bright Stuff Face Wash 100 ml</p>
                  <p>Rp30.000 - Rp33.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className='object-contain h-[261px] w-[261px]' src="/assets/images/pembersih/skintificpembersih.png" alt="SKINTIFIC" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SKINTIFIC</p>
                  <p>3X Acid Acne Gel Cleanser</p>
                  <p>Rp110.000 - Rp115.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className='object-contain h-[261px] w-[261px]' src="/assets/images/pembersih/breyleepembersih.png" alt="BREYLEE" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>BREYLEE</p>
                  <p>Step 1 Blackhead Remover Mask</p>
                  <p>Rp72.000 - Rp80.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className='object-contain h-[261px] w-[261px]' src="/assets/images/pembersih/elvictopembersih.png" alt="ELVICTO" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>ELVICTO</p>
                  <p>Acne Fight Face Wash</p>
                  <p>Rp62.000 - Rp80.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className='object-contain h-[261px] w-[261px]' src="/assets/images/pembersih/avoskinpembersih.png" alt="AVOSKIN" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>AVOSKIN</p>
                  <p>Natural Sublime Facial Cleanser</p>
                  <p>Rp107.000 - Rp139.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className='object-contain h-[261px] w-[261px]' src="/assets/images/pembersih/hadalabopembersih.png" alt="HADA LABO" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>HADA LABO</p>
                  <p>Shirojyun Whitening Face Wash</p>
                  <p>Rp49.000 - Rp52.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className='object-contain h-[261px] w-[261px]' src="/assets/images/pembersih/niveapembersih.png" alt="NIVEA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>NIVEA</p>
                  <p>MicellAir Oil & Acne Care</p>
                  <p>Rp71.000 - Rp101.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className='object-contain h-[261px] w-[261px]' src="/assets/images/pembersih/garnierpembersih.png" alt="GARNIER" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>GARNIER</p>
                  <p>Micellar Water Salicylic Blue</p>
                  <p>Rp37.000 - Rp38.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className='object-contain h-[261px] w-[261px]' src="/assets/images/pembersih/garnierpembersih2.png" alt="GARNIER" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>GARNIER</p>
                  <p>Micellar Water Rose Cleanse</p>
                  <p>Rp37.000 - Rp38.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className='object-contain h-[261px] w-[261px]' src="/assets/images/pembersih/niveapembersih2.png" alt="NIVEA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>NIVEA</p>
                  <p>MicellAir Pearl Bright</p>
                  <p>Rp72.000 - Rp100.000</p>
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

export default ProdukPembersih