"use client";
// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="text-white flex gap-2">
      <button
        style={{
          transform: "rotate(270deg)",
        }}
        className="rounded-md p-2 bg-[#273B4D]"
        onClick={() => swiper.slidePrev()}
      >
        <svg
          width={8}
          height={8}
          viewBox="0 0 24 13"
          fill="#FFFFFF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.8336 10.6423C23.0059 10.8073 23.1022 11.0282 23.1022 11.2581C23.1022 11.488 23.0059 11.7089 22.8336 11.8739C22.7487 11.9549 22.6472 12.0193 22.5351 12.0633C22.4229 12.1072 22.3024 12.1299 22.1807 12.1299C22.059 12.1299 21.9386 12.1072 21.8265 12.0633C21.7144 12.0193 21.6129 11.9549 21.528 11.8739L11.7026 2.60652L2.2173 11.8711C2.13286 11.9518 2.03187 12.0159 1.92027 12.0597C1.80866 12.1035 1.68873 12.1261 1.56757 12.1261C1.4464 12.1261 1.32647 12.1035 1.21487 12.0597C1.10326 12.0159 1.00221 11.9518 0.917765 11.8711C0.742735 11.7074 0.644531 11.486 0.644531 11.2553C0.644531 11.0245 0.742735 10.8032 0.917765 10.6394L11.7026 0.284193L22.8336 10.6423Z"
            fill="#FFFFFF"
          />
        </svg>
      </button>
      <button
        style={{
          transform: "rotate(90deg)",
        }}
        className="rounded-md p-2 bg-[#273B4D]"
        onClick={() => swiper.slideNext()}
      >
        <svg
          width={8}
          height={8}
          viewBox="0 0 24 13"
          fill="#FFFFFF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.8336 10.6423C23.0059 10.8073 23.1022 11.0282 23.1022 11.2581C23.1022 11.488 23.0059 11.7089 22.8336 11.8739C22.7487 11.9549 22.6472 12.0193 22.5351 12.0633C22.4229 12.1072 22.3024 12.1299 22.1807 12.1299C22.059 12.1299 21.9386 12.1072 21.8265 12.0633C21.7144 12.0193 21.6129 11.9549 21.528 11.8739L11.7026 2.60652L2.2173 11.8711C2.13286 11.9518 2.03187 12.0159 1.92027 12.0597C1.80866 12.1035 1.68873 12.1261 1.56757 12.1261C1.4464 12.1261 1.32647 12.1035 1.21487 12.0597C1.10326 12.0159 1.00221 11.9518 0.917765 11.8711C0.742735 11.7074 0.644531 11.486 0.644531 11.2553C0.644531 11.0245 0.742735 10.8032 0.917765 10.6394L11.7026 0.284193L22.8336 10.6423Z"
            fill="#FFFFFF"
          />
        </svg>
      </button>
    </div>
  );
};

export function CryptoPricesMobileAndTablet() {
  const swiper = useSwiper();
  const data = [
    {
      icon: "https://cdn.rawgit.com/cjdowner/cryptocurrency-icons/master/svg/color/eth.svg",
      total: "2,950.28",
      plus: true,
      percentage: "0.25%",
    },
    {
      icon: "https://cdn.rawgit.com/cjdowner/cryptocurrency-icons/master/svg/color/btc.svg",
      total: "2,950.28",
      plus: false,
      percentage: "0.25%",
    },
    {
      icon: "https://cdn.rawgit.com/cjdowner/cryptocurrency-icons/master/svg/color/eth.svg",
      total: "2,950.28",
      plus: true,
      percentage: "0.25%",
    },
    {
      icon: "https://cdn.rawgit.com/cjdowner/cryptocurrency-icons/master/svg/color/btc.svg",
      total: "2,950.28",
      plus: false,
      percentage: "0.25%",
    },
    {
      icon: "https://cdn.rawgit.com/cjdowner/cryptocurrency-icons/master/svg/color/eth.svg",
      total: "2,950.28",
      plus: true,
      percentage: "0.25%",
    },
    {
      icon: "https://cdn.rawgit.com/cjdowner/cryptocurrency-icons/master/svg/color/btc.svg",
      total: "2,950.28",
      plus: false,
      percentage: "0.25%",
    },
    {
      icon: "https://cdn.rawgit.com/cjdowner/cryptocurrency-icons/master/svg/color/eth.svg",
      total: "2,950.28",
      plus: true,
      percentage: "0.25%",
    },
    {
      icon: "https://cdn.rawgit.com/cjdowner/cryptocurrency-icons/master/svg/color/btc.svg",
      total: "2,950.28",
      plus: false,
      percentage: "0.25%",
    },
  ];
  return (
    <>
      <Swiper
        spaceBetween={10}
        modules={[Navigation, Pagination]}
        style={{
          zIndex: 0,
          width: "100%",
        }}
        slidesPerView={4}
      >
        <div className="flex gap-2 text-white font-bold text-base p-2 items-center justify-between ">
          <div className="flex gap-2 items-center">
            <svg
              width={16}
              height={16}
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.159195 7.63335C0.059195 7.53335 0.0119729 7.41668 0.0175284 7.28334C0.023084 7.15001 0.0703061 7.03334 0.159195 6.93334L4.3092 2.78335C4.36475 2.72779 4.42031 2.6889 4.47586 2.66668C4.53142 2.64446 4.59253 2.63335 4.6592 2.63335C4.72586 2.63335 4.78697 2.64446 4.84253 2.66668C4.89808 2.6889 4.95364 2.72779 5.0092 2.78335L7.44253 5.21668L11.4592 1.20001H9.84253C9.69808 1.20001 9.57864 1.15279 9.4842 1.05835C9.38975 0.963901 9.34253 0.844457 9.34253 0.700012C9.34253 0.555568 9.38975 0.436123 9.4842 0.341679C9.57864 0.247234 9.69808 0.200012 9.84253 0.200012H12.6259C12.7703 0.200012 12.8898 0.247234 12.9842 0.341679C13.0786 0.436123 13.1259 0.555568 13.1259 0.700012V3.48335C13.1259 3.61668 13.0786 3.73335 12.9842 3.83335C12.8898 3.93335 12.7759 3.98335 12.6425 3.98335C12.5092 3.98335 12.3925 3.93335 12.2925 3.83335C12.1925 3.73335 12.1425 3.61668 12.1425 3.48335V1.93335L7.77586 6.30001C7.72031 6.35557 7.66475 6.39446 7.6092 6.41668C7.55364 6.4389 7.49253 6.45001 7.42586 6.45001C7.35919 6.45001 7.29808 6.4389 7.24253 6.41668C7.18697 6.39446 7.13142 6.35557 7.07586 6.30001L4.64253 3.86668L0.859195 7.65001C0.770306 7.7389 0.656417 7.78334 0.517528 7.78334C0.37864 7.78334 0.259195 7.73335 0.159195 7.63335Z"
                fill="#47C87A"
              ></path>
            </svg>
            <div className="text-sm">Crypto Prices</div>
          </div>
          <div className="flex gap-2 items-center px-2">
            <p className="text-[8px] font-semibold text-primary flex items-center gap-1">
              View All
              <svg
                width="5"
                height="9"
                viewBox="0 0 5 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.31024 0.231958L4.68373 3.69588C5.10542 4.12887 5.10542 4.80928 4.68373 5.24227L1.31024 8.76804C1.00904 9.07732 0.527108 9.07732 0.225904 8.76804C-0.0753012 8.45876 -0.0753012 7.96392 0.225904 7.65464L3.17771 4.62371C3.23795 4.56186 3.23795 4.43814 3.17771 4.37629L0.225904 1.34536C-0.0753012 1.03608 -0.0753012 0.541237 0.225904 0.231958C0.527108 -0.0773201 1.00904 -0.0773201 1.31024 0.231958Z"
                  fill="#47C87A"
                ></path>
              </svg>
            </p>
          </div>
        </div>

        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="rounded cursor-pointer text-[10px]"
          >
            <div className="flex gap-2 items-center">
              <img className="w-4 h-4" src={item.icon} alt="" />
              <p className="text-white font-semibold text-[10px]">
                {item.total}
              </p>
              <div
                className={`flex items-center gap-1 text-[10px] ${
                  item.plus ? "text-primary" : "text-red-500"
                }`}
              >
                {item.plus ? "+" + item.percentage : "-" + item.percentage}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
