import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMdArrowDropright } from 'react-icons/io';
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";
import { Link } from 'react-router-dom';

const Produk = () => {
  return (
    <div className="profile-page">
      {/* header */}
      <Header />

      <div className='space-y-[30px] bg-white'>
        {/* Section Search Produk */}
        <section className='bg-[#E3F2ED] py-[5px]'>
          <div className='flex gap-[89px] px-[120px]'>
            <p className='text-[#4A4A4A] text-[40px] font-bold'>PRODUK</p>
            <div className='flex gap-2 items-center bg-white px-[21px] py-[16px] w-full'>
              <CiSearch className='font-bold text-3xl'/>
              <input type="text" name="" id="" className='outline-none   w-full rounded' placeholder='Telusuri produk perawatan kulit Anda...'/>
            </div>
          </div>
        </section>
        {/* Section Pembersih */}
        <section>
          <div className='flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Pembersih </p>
            <Link to={'/Produk/Pembersih'} className='flex items-center font-bold text-[13px]'>Selengkapnya <IoMdArrowDropright className='text-3xl'/></Link>
          </div>
        </section>
        <section>
          <div className='grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white'>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/senkapem.png" alt="SENKA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SENKA</p>
                  <p>Miraculous Retinol Toner</p>
                  <p>Rp169.000 - Rp175.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/pembersih1.png" alt="CETAPHIL" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>CETAPHIL</p>
                  <p>Acne Essence Toner</p>
                  <p>Rp83.000 - Rp90.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/eminapem.png" alt="EMINA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>EMINA</p>
                  <p>Hydrate Glow Face Toner</p>
                  <p>Rp57.000 - Rp65.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/skintificpem.png" alt="SKINTIFIC" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SKINTIFIC</p>
                  <p>Hydrate Glow Face Toner</p>
                  <p>Rp57.000 - Rp65.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pembersih/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/breeyleepem.png" alt="BREYLEE" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>BREYLEE</p>
                  <p>Hydrate Glow Face Toner</p>
                  <p>Rp57.000 - Rp65.000</p>
                </div>
              </Link>
          </div>
        </section>
        {/* Section Toner */}
        <section>
          <div className='flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Toner </p>
            <Link to={'/Produk/Toner'} className='flex items-center font-bold text-[13px]'>Selengkapnya <IoMdArrowDropright className='text-3xl'/></Link>
          </div>
        </section>
        <section>
          <div className='grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white'>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/avotoner.png" alt="AVOSKIN" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>AVOSKIN</p>
                  <p>Miraculous Retinol Toner</p>
                  <p>Rp169.000 - Rp175.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/scarlettoner.png" alt="SCARLETT WHITENING" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SCARLETT WHITENING</p>
                  <p>Acne Essence Toner</p>
                  <p>Rp83.000 - Rp90.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/dermatoner.png" alt="DERMALUZ" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>DERMALUZ</p>
                  <p>Hydrate Glow Face Toner</p>
                  <p>Rp57.000 - Rp65.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/bnbtoner.png" alt="BARENBLISS" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>BARENBLISS</p>
                  <p>Glow Bottle! Lavabiome</p>
                  <p>Rp16.900 - Rp.20.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Toner/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/pondstoner.png" alt="PONDS" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>PONDS</p>
                  <p>White Beauty Toner 150ml</p>
                  <p>Rp33.000 - Rp40.000</p>
                </div>
              </Link>
          </div>
        </section>
        {/* Section Pelembap */}
        <section>
          <div className='flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Pelembap </p>
            <Link to={'/Produk/Pelembap'} className='flex items-center font-bold text-[13px]'>Selengkapnya <IoMdArrowDropright className='text-3xl'/></Link>
          </div>
        </section>
        <section>
          <div className='grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white'>
              <Link to={'/Produk/Pelembap/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/youpel.png" alt="Y.O.U" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>Y.O.U</p>
                  <p>Acneplus Multi Action Cream</p>
                  <p>Rp45.000 - Rp56.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pelembap/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/halepel.png" alt="HALE" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>HALE</p>
                  <p>Fountain Of Youth</p>
                  <p>Rp139.000 - Rp145.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pelembap/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/cetaphilpem.png" alt="CETAPHIL" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>CETAPHIL</p>
                  <p>Moisturising Cream</p>
                  <p>Rp360.000 - Rp375.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pelembap/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/gorjespel.png" alt="GORJES" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>GORJES</p>
                  <p>Magnificent Ace Moisturizer</p>
                  <p>Rp240.000 - Rp244.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Pelembap/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/studiopel.png" alt="STUDIO TROPIK" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>STUDIO TROPIK</p>
                  <p>Rich Skin Barrier Cream</p>
                  <p>Rp199.000 - Rp219.000</p>
                </div>
              </Link>
          </div>
        </section>
        {/* Section Serum */}
        <section>
          <div className='flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Serum </p>
            <Link to={'/Produk/Serum'} className='flex items-center font-bold text-[13px]'>Selengkapnya <IoMdArrowDropright className='text-3xl'/></Link>
          </div>
        </section>
        <section>
          <div className='grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white'>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/g2gser.png" alt="GLAD2GLOW" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>GLAD2GLOW</p>
                  <p>Yuja Symwhite 377 Dark Spot...</p>
                  <p>Rp49.000 - Rp55.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/niveaser.png" alt="NIVEA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>NIVEA</p>
                  <p>Luminous 630 Spotclear Intensive</p>
                  <p>Rp335.000 - Rp350.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/somethincser.png" alt="SOMETHINC" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SOMETHINC</p>
                  <p>Calm Down! Skinpair Barrier</p>
                  <p>Rp139.000 - Rp145.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/firstlabser.png" alt="FIRSTLAB" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>FIRSTLAB</p>
                  <p>Probiotic Barrier Ampoule</p>
                  <p>Rp283.000 - Rp300.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Serum/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/jarkeenser.png" alt="JARKEEN" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>JARKEEN</p>
                  <p>Vit C Booster Serum</p>
                  <p>Rp150.000 - Rp177.000</p>
                </div>
              </Link>
          </div>
        </section>
        {/* Section Sunscreen */}
        <section>
          <div className='flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Sunscreen </p>
            <Link to={'/Produk/Sunscreen'} className='flex items-center font-bold text-[13px]'>Selengkapnya <IoMdArrowDropright className='text-3xl'/></Link>
          </div>
        </section>
        <section>
          <div className='grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white'>
              <Link to={'/Produk/Sunscreen/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/azariness.png" alt="AZARINE" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>AZARINE</p>
                  <p>Hydracool Ceraspray Sunscreen.</p>
                  <p>Rp65.000 - Rp71.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Sunscreen/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/bioress.png" alt="BIORE" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>BIORE</p>
                  <p>UV Fresh & Bright Instant Cover...</p>
                  <p>Rp38.000 - Rp41.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Sunscreen/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/eminass.png" alt="EMINA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>EMINA</p>
                  <p>Skin Buddy Sun Protection...</p>
                  <p>Rp38.000 - Rp42.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Sunscreen/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/truess.png" alt="TRUE TO SKIN" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>TRUE TO SKIN</p>
                  <p>Sunfriends Soothing Sunscreen</p>
                  <p>Rp78.000 - Rp83.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Sunscreen/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/wardahss.png" alt="WARDAH" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>WARDAH</p>
                  <p>UV Shield Aqua Fresh Essence...</p>
                  <p>Rp61.000 - Rp66.000</p>
                </div>
              </Link>
          </div>
        </section>
        {/* Section Masker */}
        <section>
          <div className='flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]'>
            <p className='text-[#4A4A4A] text-[24px] font-bold'>Masker </p>
            <Link to={'/Produk/Masker'} className='flex items-center font-bold text-[13px]'>Selengkapnya <IoMdArrowDropright className='text-3xl'/></Link>
          </div>
        </section>
        <section>
          <div className='grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white'>
              <Link to={'/Produk/Masker/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/skintificmask.png" alt="SKINTIFIC" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SKINTIFIC</p>
                  <p>Niacinamide Bright Boost Clay.</p>
                  <p>Rp110.000 - Rp118.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Masker/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/hadalabomask.png" alt="HADA LABO" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>HADA LABO</p>
                  <p>Gokujyun Alpha Ultimate</p>
                  <p>Rp95.000 - Rp103.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Masker/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/banobagimask.png" alt="BANOBAGI" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>BANOBAGI</p>
                  <p>Vita Genic Jelly Mask Relaxing</p>
                  <p>Rp14.000 - Rp20.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Masker/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/senkamask.png" alt="SENKA" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>SENKA</p>
                  <p>Perfect Aqua Bouncy Mask</p>
                  <p>Rp31.000 - Rp33.000</p>
                </div>
              </Link>
              <Link to={'/Produk/Masker/Deskripsi'} className='space-y-[16px] '>
                <div className='flex justify-center'>
                  <img className=' h-[261px] w-[261px] object-contain' src="assets/images/lacocomask.png" alt="LACOCO" />
                </div>
                <div className='text-[#4A4A4A] text-[12px]'>
                  <p className='text-[#147A63] font-extrabold'>LACOCO</p>
                  <p>Watermelon Glow Sheet Mask</p>
                  <p>Rp150.000 - Rp156.000</p>
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

export default Produk