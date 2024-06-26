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

export function Promotion() {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Navigation, Pagination]}
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
            <div className="mb-2">Promotions</div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-semibold text-primary">View All</p>
            <SwiperNavButtons />
          </div>
        </div>
        <SwiperSlide className="rounded cursor-pointer">
          <div className=" w-full h-full rounded">
            <img
              src="https://images.ctfassets.net/im9yudtc78wp/4zdc0jSxmNMil1ueSvF1Bw/d965756e56f8db92ebb7cba58c660587/640x350-promo__2_.jpg?fm=avif"
              alt=""
              className="object-cover rounded "
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded cursor-pointer">
          <div className=" w-full h-full rounded">
            <img
              src="https://images.ctfassets.net/im9yudtc78wp/1WgRpLkr9UxAUm09sgu4jN/dd7ea0ecbf14853f66a5bada04c450f8/640x350-Promo__46_.jpg?fm=avif"
              alt=""
              className="object-cover rounded "
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer">
          <div className=" w-full h-full rounded">
            <img
              src="https://images.ctfassets.net/im9yudtc78wp/4zxC6UtKVnt3KkuCC6hKwq/6a32de9ac299109fb227af8dbd9f5a08/640x350-Promo__44_.jpg?fm=avif"
              alt=""
              className="object-cover rounded "
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer">
          <div className=" w-full h-full rounded">
            <img
              src="https://images.ctfassets.net/im9yudtc78wp/449u7cmJrgygWV3PNAhHg7/f76ed2dc0f83b6d0d1164bec336e23e7/640x350-promo.png?fm=avif"
              alt=""
              className="object-cover rounded "
            />
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer">
          <div className=" w-full h-full rounded">
            <img
              src="https://images.ctfassets.net/im9yudtc78wp/4oLJyq2MsYpghSWt0htgAs/d56b849801b2d68067a32969007edc86/640x350-Promo__49_.jpg?fm=avif"
              alt=""
              className="object-cover rounded "
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
