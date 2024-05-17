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

export function RecommendedMobileAndTablet() {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        modules={[Navigation, Pagination]}
        style={{
          zIndex: 0,
        }}
      >
        <div className="flex gap-2 text-white font-bold text-base p-2 items-center justify-between ">
          <div className="flex gap-2">
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="#33C16C"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.65625 14.9959C2.65625 15.5543 3.10795 16.006 3.66649 16.006L7.47611 16.0061L7.4903 8.08124H2.65639L2.65625 14.9959Z"
                fill="inherit"
              />
              <path
                d="M8.1875 16.0061H12.0575C12.6159 16.0061 13.0678 15.5544 13.0678 14.996V8.08105H8.20176L8.1875 16.0061Z"
                fill="inherit"
              />
              <path
                d="M13.6027 3.79191H9.87134C10.5242 3.52253 11.1492 3.22028 11.4059 2.96372C12.0829 2.28672 12.0829 1.18561 11.4059 0.508614C11.078 0.180693 10.6421 0 10.178 0C9.71431 0 9.27829 0.180679 8.95036 0.508614C8.58246 0.876231 8.15804 2.01845 7.86316 2.92441C7.56812 2.01842 7.14385 0.876371 6.77596 0.508614C6.44803 0.180693 6.01218 0 5.54832 0C5.08463 0 4.64861 0.180679 4.32068 0.508614C3.64368 1.18561 3.64368 2.28672 4.32068 2.96372C4.57737 3.22041 5.20222 3.52267 5.85508 3.79191H2.12406C1.50519 3.79191 1 4.29696 1 4.91597V6.24621C1 6.86522 1.50505 7.37027 2.12406 7.37027H7.49526L7.50113 4.40219C7.60866 4.43849 7.69545 4.46701 7.75304 4.48584C7.7892 4.49771 7.82632 4.50317 7.86316 4.50317C7.90001 4.50317 7.93713 4.49757 7.97329 4.48584C8.02828 4.46782 8.11152 4.44039 8.21251 4.40642L8.20664 7.37027H13.6026C14.2215 7.37027 14.7267 6.86522 14.7267 6.24621V4.91597C14.7267 4.29711 14.2216 3.79191 13.6027 3.79191ZM9.45352 1.01146C9.64703 0.817956 9.90439 0.711381 10.1781 0.711381C10.4522 0.711381 10.7097 0.81796 10.903 1.01146C11.3025 1.41091 11.3025 2.06114 10.903 2.46069C10.6199 2.74385 9.40098 3.23432 8.39961 3.58898C8.73108 2.52005 9.18508 1.28042 9.45352 1.01146ZM4.82398 1.01146C5.01749 0.817956 5.27485 0.711381 5.5486 0.711381C5.82234 0.711381 6.07971 0.81796 6.27321 1.01146C6.54177 1.28002 6.99538 2.51966 7.32712 3.58884C6.32603 3.23456 5.10713 2.74373 4.82398 2.46055C4.4244 2.06125 4.4244 1.41101 4.82398 1.01146Z"
                fill="inherit"
              />
            </svg>
            <div className="text-sm">Recommended</div>
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
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded text-sm">
            <img
              src="https://media.duelbits.com/games/pragmaticexternal/SweetBonanza.webp"
              alt=""
              className="object-cover rounded"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary  ">96.5%</p>
              <p className="text-primary text-sm">RTP</p>
              <svg
                width={16}
                height={16}
                viewBox="0 0 11 11"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                role="button"
                className="styles_likeButton__3QAgV"
              >
                <path
                  d="M10.2007 4.95004C9.34266 6.60004 7.04732 8.84404 5.74932 10.0394C5.60977 10.1654 5.39754 10.1654 5.25799 10.0394C3.95266 8.84404 1.65732 6.60004 0.799322 4.95004C-1.08535 1.32004 3.66666 -1.09996 5.49999 2.53004C7.33332 -1.09996 12.0853 1.32004 10.2007 4.95004Z"
                  fill="#324850"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded text-sm">
            <img
              src="	https://media.duelbits.com/games/evolution/crazytime.webp"
              alt=""
              className="object-cover rounded"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary  ">96.5%</p>
              <p className="text-primary text-sm">RTP</p>
              <svg
                width={16}
                height={16}
                viewBox="0 0 11 11"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                role="button"
                className="styles_likeButton__3QAgV"
              >
                <path
                  d="M10.2007 4.95004C9.34266 6.60004 7.04732 8.84404 5.74932 10.0394C5.60977 10.1654 5.39754 10.1654 5.25799 10.0394C3.95266 8.84404 1.65732 6.60004 0.799322 4.95004C-1.08535 1.32004 3.66666 -1.09996 5.49999 2.53004C7.33332 -1.09996 12.0853 1.32004 10.2007 4.95004Z"
                  fill="#324850"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded text-sm">
            <img
              src="	https://media.duelbits.com/games/pragmaticexternal/GatesofOlympus1000.webp"
              alt=""
              className="object-cover rounded"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary  ">96.5%</p>
              <p className="text-primary text-sm">RTP</p>
              <svg
                width={16}
                height={16}
                viewBox="0 0 11 11"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                role="button"
                className="styles_likeButton__3QAgV"
              >
                <path
                  d="M10.2007 4.95004C9.34266 6.60004 7.04732 8.84404 5.74932 10.0394C5.60977 10.1654 5.39754 10.1654 5.25799 10.0394C3.95266 8.84404 1.65732 6.60004 0.799322 4.95004C-1.08535 1.32004 3.66666 -1.09996 5.49999 2.53004C7.33332 -1.09996 12.0853 1.32004 10.2007 4.95004Z"
                  fill="#324850"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded text-sm">
            <img
              src="https://media.duelbits.com/games/hacksaw/WantedDeadoraWild.webp"
              alt=""
              className="object-cover rounded"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary  ">96.5%</p>
              <p className="text-primary text-sm">RTP</p>
              <svg
                width={16}
                height={16}
                viewBox="0 0 11 11"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                role="button"
                className="styles_likeButton__3QAgV"
              >
                <path
                  d="M10.2007 4.95004C9.34266 6.60004 7.04732 8.84404 5.74932 10.0394C5.60977 10.1654 5.39754 10.1654 5.25799 10.0394C3.95266 8.84404 1.65732 6.60004 0.799322 4.95004C-1.08535 1.32004 3.66666 -1.09996 5.49999 2.53004C7.33332 -1.09996 12.0853 1.32004 10.2007 4.95004Z"
                  fill="#324850"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded text-sm">
            <img
              src="https://media.duelbits.com/games/pragmaticexternal/GatesOfOlympus1.webp"
              alt=""
              className="object-cover rounded"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary  ">96.5%</p>
              <p className="text-primary text-sm">RTP</p>
              <svg
                width={16}
                height={16}
                viewBox="0 0 11 11"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                role="button"
                className="styles_likeButton__3QAgV"
              >
                <path
                  d="M10.2007 4.95004C9.34266 6.60004 7.04732 8.84404 5.74932 10.0394C5.60977 10.1654 5.39754 10.1654 5.25799 10.0394C3.95266 8.84404 1.65732 6.60004 0.799322 4.95004C-1.08535 1.32004 3.66666 -1.09996 5.49999 2.53004C7.33332 -1.09996 12.0853 1.32004 10.2007 4.95004Z"
                  fill="#324850"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded text-sm">
            <img
              src="	https://media.duelbits.com/games/evolution/DuelbitsFirstPersonBlackjack.webp"
              alt=""
              className="object-cover rounded"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary  ">96.5%</p>
              <p className="text-primary text-sm">RTP</p>
              <svg
                width={16}
                height={16}
                viewBox="0 0 11 11"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                role="button"
                className="styles_likeButton__3QAgV"
              >
                <path
                  d="M10.2007 4.95004C9.34266 6.60004 7.04732 8.84404 5.74932 10.0394C5.60977 10.1654 5.39754 10.1654 5.25799 10.0394C3.95266 8.84404 1.65732 6.60004 0.799322 4.95004C-1.08535 1.32004 3.66666 -1.09996 5.49999 2.53004C7.33332 -1.09996 12.0853 1.32004 10.2007 4.95004Z"
                  fill="#324850"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded text-sm">
            <img
              src="	https://media.duelbits.com/games/evolution/DuelbitsBlackjack.webp"
              alt=""
              className="object-cover rounded"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary  ">96.5%</p>
              <p className="text-primary text-sm">RTP</p>
              <svg
                width={16}
                height={16}
                viewBox="0 0 11 11"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                role="button"
                className="styles_likeButton__3QAgV"
              >
                <path
                  d="M10.2007 4.95004C9.34266 6.60004 7.04732 8.84404 5.74932 10.0394C5.60977 10.1654 5.39754 10.1654 5.25799 10.0394C3.95266 8.84404 1.65732 6.60004 0.799322 4.95004C-1.08535 1.32004 3.66666 -1.09996 5.49999 2.53004C7.33332 -1.09996 12.0853 1.32004 10.2007 4.95004Z"
                  fill="#324850"
                />
              </svg>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
