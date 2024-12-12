import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "./components/HeaderAfterLogin";
import Footer from "./components/Footer";
import "./file_css/recom.css";

const Produk = () => {
  return (
    <div>
      {/* header */}
      <Header />
      
      <div className="recom-page">
        {/* Section Rekomendasi */}
        <section className="bg-[#E3F2ED] py-[5px]">
          <div className="flex gap-[89px]">
            <p className="title">REKOMENDASI</p>
          </div>
        </section>
        <section className="bg-[#ffffff]">
          <div className="sub-title">
            <h2>Masalah Kulit</h2>
          </div>
          <div className="skin-problems">
            <div>
              Tipe Kulit: <span className="badge">Kulit Kering</span>
            </div>
            <div>
              Kondisi Kulit:{" "}
              <span className="badge">Kering, Kulit Sensitif</span>
            </div>
            <div>
              Umur: <span className="badge">23</span>
            </div>
          </div>
        </section>
      </div>
      <div>
        {/* Section Pembersih */}
        <section>
          <div className="flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]">
            <p className="text-[#4A4A4A] text-[24px] font-bold">Pembersih</p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px] py-[51px] bg-white">
            <Link
              to={"/DeskripsiProdukRecom"}
              className="space-y-[16px] "
            >
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/pembersih/cetaphilpembersih.png"
                  alt="CETAPHIL"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">CETAPHIL</p>
                <p>Hydrating Foaming Cream...</p>
                <p>Rp110.000 - Rp118.000</p>
              </div>
            </Link>
            <Link
              to={"/Produk/Pembersih/Deskripsi"}
              className="space-y-[16px] "
            >
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/pembersih/avoskinpembersih.png"
                  alt="AVOSKIN"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">AVOSKIN</p>
                <p>Natural Sublime Facial.....</p>
                <p>Rp107.000 - Rp139.000</p>
              </div>
            </Link>
            <Link
              to={"/Produk/Pembersih/Deskripsi"}
              className="space-y-[16px] "
            >
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/pembersih/hadalabopembersih.png"
                  alt="HADA LABO"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">HADA LABO</p>
                <p>Shirojyun Whitening Face Wash</p>
                <p>Rp49.000 - Rp52.000</p>
              </div>
            </Link>
            <Link
              to={"/Produk/Pembersih/Deskripsi"}
              className="space-y-[16px] "
            >
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/pembersih//niveapembersih.png"
                  alt="NIVEA"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">NIVEA</p>
                <p>MicellAir Pearl Bright</p>
                <p>Rp72.000 - Rp100.000</p>
              </div>
            </Link>
            <Link
              to={"/Produk/Pembersih/Deskripsi"}
              className="space-y-[16px] "
            >
            </Link>
          </div>
        </section>
        {/* Section Toner */}
        <section>
          <div className="flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]">
            <p className="text-[#4A4A4A] text-[24px] font-bold">Toner </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white">
            <Link to={"/Produk/Toner/Deskripsi"} className="space-y-[16px] ">
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/toner/cetaphiltonerr.png"
                  alt="CETAPHIL"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">CETAPHIL</p>
                <p>Healthy Radiance Brightness....</p>
                <p>Rp174.000 - Rp200.000</p>
              </div>
            </Link>
            <Link to={"/Produk/Toner/Deskripsi"} className="space-y-[16px] ">
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/toner/pyunkangtonerr.png"
                  alt="PYUNKANG YUL"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">PYUNKANG YUL</p>
                <p>Essence Toner</p>
                <p>Rp36.000 - Rp.80.000</p>
              </div>
            </Link>
            <Link to={"/Produk/Toner/Deskripsi"} className="space-y-[16px] ">
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/toner/somethinctonerr.png"
                  alt="SOMETHINC"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">SOMETHINC</p>
                <p>Glow Maker AHA BHA PHA.....</p>
                <p>Rp74.000 - Rp100.000</p>
              </div>
            </Link>
          </div>
        </section>
        {/* Section Pelembap */}
        <section>
          <div className="flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]">
            <p className="text-[#4A4A4A] text-[24px] font-bold">Pelembap </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white">
            <Link to={"/Produk/Pelembap/Deskripsi"} className="space-y-[16px] ">
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/pelembap/halepelembap.png"
                  alt="HALE"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">HALE</p>
                <p>All Rounder</p>
                <p>Rp110.000 - Rp130.000</p>
              </div>
            </Link>
            <Link to={"/Produk/Pelembap/Deskripsi"} className="space-y-[16px] ">
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/pelembap/eminapelembap.png"
                  alt="EMINA"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">EMINA</p>
                <p>Bright Stuff Tone Up Cream</p>
                <p>Rp20.000 - Rp27.000</p>
              </div>
            </Link>
            <Link to={"/Produk/Pelembap/Deskripsi"} className="space-y-[16px] ">
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/pelembap/cetaphilpelembap.png"
                  alt="CETAPHIL"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">CETAPHIL</p>
                <p>Moisturizing Lotion</p>
                <p>Rp160.000 - Rp190.000</p>
              </div>
            </Link>
            <Link to={"/Produk/Pelembap/Deskripsi"} className="space-y-[16px] ">
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/pelembap/bhumipelembap.png"
                  alt="GORJES"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">BHUMI</p>
                <p>G-Alpine Hydralock Moisturizer</p>
                <p>Rp183.000 - Rp220.000</p>
              </div>
            </Link>
          </div>
        </section>
        {/* Section Serum */}
        <section>
          <div className="flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]">
            <p className="text-[#4A4A4A] text-[24px] font-bold">Serum </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white">
            <Link to={"/Produk/Serum/Deskripsi"} className="space-y-[16px] ">
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/serum/wardahserum.png"
                  alt="WARDAH"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">WARDAH</p>
                <p>Lightening Facial Serum</p>
                <p>Rp55.000 - Rp60.000</p>
              </div>
            </Link>
            <Link to={"/Produk/Serum/Deskripsi"} className="space-y-[16px] ">
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/serum/naturserum.png"
                  alt="NIVEA"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">NATUR</p>
                <p>Miracle Brightening Face Serum</p>
                <p>Rp170.000 - Rp180.000</p>
              </div>
            </Link>
          </div>
        </section>
        {/* Section Sunscreen */}
        <section>
          <div className="flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]">
            <p className="text-[#4A4A4A] text-[24px] font-bold">Tabir Surya</p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white">
            <Link
              to={"/Produk/Sunscreen/Deskripsi"}
              className="space-y-[16px] "
            >
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/ss/cetaphilsun.png"
                  alt="CETAPHIL"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">CETAPHIL</p>
                <p>UVA/UVB Defense Spf50++</p>
                <p>Rp240.000 - Rp265.000</p>
              </div>
            </Link>
            <Link
              to={"/Produk/Sunscreen/Deskripsi"}
              className="space-y-[16px] "
            >
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/ss/skinsun.png"
                  alt="SKIN AQUA"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">SKIN AQUA</p>
                <p>UV Moisture Milk SPF50 PA ++</p>
                <p>Rp68.000 - Rp71.000</p>
              </div>
            </Link>
            <Link
              to={"/Produk/Sunscreen/Deskripsi"}
              className="space-y-[16px] "
            >
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/ss/laboresun.png"
                  alt="LABORE"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">LABORE</p>
                <p>Sensitive Skin Care Biome....</p>
                <p>Rp59.000 - Rp66.000</p>
              </div>
            </Link>
            <Link
              to={"/Produk/Sunscreen/Deskripsi"}
              className="space-y-[16px] "
            >
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/ss/dermasun.png"
                  alt="DERMALUZ"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">DERMALUZ</p>
                <p>Hydrating Sunscreen</p>
                <p>Rp64.000 - Rp72.000</p>
              </div>
            </Link>
          </div>
        </section>
        {/* Section Masker */}
        <section>
          <div className="flex justify-between px-[120px] py-[6px] bg-[#E3F2ED]">
            <p className="text-[#4A4A4A] text-[24px] font-bold">Masker </p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-5 gap-x-[61px] gap-y-[10px] px-[120px]   py-[51px] bg-white">
            <Link to={"/Produk/Masker/Deskripsi"} className="space-y-[16px] ">
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/masker/lorealmasker.png"
                  alt="LOREAL PARIS"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
              <p className="text-[#147A63] font-extrabold">LOREAL PARIS</p>
                <p>Revitalift Pro</p>
                <p>Rp38.000 - Rp40.000</p>
              </div>
            </Link>
            <Link to={"/Produk/Masker/Deskripsi"} className="space-y-[16px] ">
              <div className="flex justify-center">
                <img
                  className=" h-[261px] w-[261px] object-contain"
                  src="assets/images/masker/naturmasker.png"
                  alt="NATUR"
                />
              </div>
              <div className="text-[#4A4A4A] text-[12px]">
                <p className="text-[#147A63] font-extrabold">NATUR</p>
                <p>Sleeping Mask Aloe Vera</p>
                <p>Rp85.000 - Rp91.000</p>
              </div>
            </Link>
          </div>
        </section>
      </div>

      <div className="footer-separator"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Produk;