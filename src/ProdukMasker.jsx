import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";
import { Link } from 'react-router-dom';

const ProdukMasker = () => {
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
        {/* Section Masker */}
        <section>
          <div className='flex justify-center px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Masker</p>
          </div>
          <div className=''></div>
          <div className='grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white'>
          <Link to={'/Produk/Masker/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/masker/skintificmasker.png" alt="SKINTIFIC" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SKINTIFIC</p>
                  <p>Niacinamide Bright Boost Clay.</p>
                  <p>Rp110.000 - Rp118.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Masker/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/masker/hadalabomasker.png" alt="HADA LABO" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>HADA LABO</p>
                  <p>Gokujyun Alpha Ultimate</p>
                  <p>Rp95.000 - Rp103.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Masker/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/masker/banobagimasker.png" alt="BANOBAGI" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>BANOBAGI</p>
                  <p>Vita Genic Jelly Mask Relaxing</p>
                  <p>Rp14.000 - Rp20.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Masker/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/masker/senkamasker.png" alt="SENKA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SENKA</p>
                  <p>Perfect Aqua Bouncy Mask</p>
                  <p>Rp31.000 - Rp33.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Masker/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/masker/lacocomasker.png" alt="LACOCO" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>LACOCO</p>
                  <p>Watermelon Glow Sheet Mask</p>
                  <p>Rp150.000 - Rp156.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/masker/eminamasker.png" alt="EMINA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>EMINA</p>
                  <p>Bright Stuff Essence Sheet Mask</p>
                  <p>Rp15.000 - Rp17.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/masker/lorealmasker.png" alt="LOREAL PARIS" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>LOREAL PARIS</p>
                  <p>Revitalift Pro</p>
                  <p>Rp38.000 - Rp40.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/masker/naturmasker.png" alt="NATUR" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>NATUR</p>
                  <p>Sleeping Mask Aloe Vera</p>
                  <p>Rp85.000 - Rp91.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/masker/g2gmasker.png" alt="GLAS2GLOW" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>GLAS2GLOW</p>
                  <p>Volcano 3D Acid Pore Clay Stick</p>
                  <p>Rp39.000 - Rp45.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/masker/voynoonmasker.png" alt="VOYNOON" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>VOYNOON</p>
                  <p>Voynoon Charcoal Star Chok...</p>
                  <p>Rp227.000 - Rp250.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/masker/wardahmasker.png" alt="WARDAH" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>WARDAH</p>
                  <p>Lightening SuperSerum Mask</p>
                  <p>Rp18.000 - Rp21.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="/assets/images/masker/theoriginotemasker.png" alt="THE ORIGINOTE" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>THE ORIGINOTE</p>
                  <p>BHA Charcoal Calay Mask</p>
                  <p>Rp32.000 - Rp39.000</p>
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

export default ProdukMasker