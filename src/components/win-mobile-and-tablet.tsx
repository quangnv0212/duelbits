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

export function WinMobileAndTablet() {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        modules={[Navigation, Pagination]}
        style={{
          zIndex: 0,
          width: "100%",
        }}
      >
        <div className="flex gap-2 text-white font-bold text-base p-2 items-center justify-between ">
          <div className="flex gap-2">
            <svg
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7038 16.9555L19.9661 15.1738L14.8629 20.3812L16.6005 22.1629L18.0936 20.6394L21.3749 23.9877L23.4921 21.8186L20.2108 18.4704L21.7038 16.9555Z"
                fill="#33C16C"
              ></path>
              <path
                d="M8.32556 4.15747L4.25978 0.00878906H0V4.36404L4.06577 8.51272L8.32556 4.15747Z"
                fill="#33C16C"
              ></path>
              <path
                d="M11.8093 20.8717L20.447 12.0579L11.8093 3.24414L3.18011 12.0579L11.8093 20.8717ZM13.5132 15.5352C13.353 16.3615 12.636 16.9554 11.8093 16.9554C10.8562 16.9554 10.0717 16.1636 10.0717 15.1823C10.0717 14.7003 10.2488 14.2528 10.5778 13.9171C10.9068 13.5814 11.3454 13.4006 11.8009 13.4006C12.7541 13.4006 13.5386 14.1925 13.5386 15.1737C13.547 15.3028 13.5386 15.4234 13.5132 15.5352ZM10.0801 9.32945C10.0801 8.85605 10.2573 8.40848 10.5863 8.0814C10.9152 7.74572 11.3454 7.56497 11.8093 7.56497C12.7625 7.56497 13.547 8.35684 13.547 9.33807C13.547 9.45857 13.5386 9.57907 13.5132 9.69093C13.353 10.5172 12.636 11.1111 11.8093 11.1111C10.8562 11.1111 10.0717 10.3193 10.0717 9.33807V9.32945H10.0801Z"
                fill="#33C16C"
              ></path>
              <path
                d="M15.3015 4.14869L19.5697 8.50395L23.6355 4.35527V0H19.3672L15.3015 4.14869Z"
                fill="#33C16C"
              ></path>
              <path
                d="M5.5251 20.6392L7.01815 22.1627L8.75582 20.381L3.65247 15.1738L1.9148 16.9555L3.39941 18.4703L0.134949 21.8098L2.25221 23.9787L5.5251 20.6392Z"
                fill="#33C16C"
              ></path>
            </svg>
            <div className="text-sm">Wins</div>
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
        <SwiperSlide className="rounded cursor-pointer relative text-white  ">
          <div className="bg-[#324B61] flex flex-col p-2 rounded items-center gap-2">
            <img
              src="https://media.duelbits.com/games/duelbits/roulette.webp"
              alt=""
              className="object-cover rounded"
            />
            <p className="text-[10px] font-semibold">Bobby</p>
            <div className="flex gap-2 items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6667 4.66634C14.6667 6.50729 11.6819 7.99967 8.00004 7.99967C4.31814 7.99967 1.33337 6.50729 1.33337 4.66634C1.33337 2.82539 4.31814 1.33301 8.00004 1.33301C11.6819 1.33301 14.6667 2.82539 14.6667 4.66634ZM8 12.6661C10.0031 12.6661 11.8824 12.263 13.3103 11.549C13.7433 11.3326 14.1756 11.0641 14.563 10.7432C14.6311 10.9343 14.6667 11.1312 14.6667 11.3321C14.6667 13.1731 11.6819 14.6655 8.00004 14.6655C4.31814 14.6655 1.33337 13.1731 1.33337 11.3321C1.33337 11.1312 1.36894 10.9344 1.4371 10.7432C1.82446 11.0641 2.25672 11.3326 2.68967 11.549C4.11759 12.263 5.99694 12.6661 8 12.6661ZM13.3103 8.21611C11.8824 8.93007 10.0031 9.33318 8 9.33318C5.99694 9.33318 4.11759 8.93007 2.68967 8.21611C2.25672 7.99963 1.82446 7.7312 1.4371 7.41028C1.36894 7.60144 1.33337 7.79824 1.33337 7.9992C1.33337 9.84015 4.31814 11.3325 8.00004 11.3325C11.6819 11.3325 14.6667 9.84015 14.6667 7.9992C14.6667 7.79822 14.6311 7.6014 14.563 7.41022C14.1756 7.73117 13.7433 7.99962 13.3103 8.21611Z"
                  fill="#FFCF52"
                ></path>
              </svg>
              <p className="text-[10px]">1.50</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded cursor-pointer relative text-white  ">
          <div className="bg-[#324B61] flex flex-col p-2 rounded items-center gap-2">
            <img
              src="https://media.duelbits.com/games/duelbits/roulette.webp"
              alt=""
              className="object-cover rounded"
            />
            <p className="text-[10px] font-semibold">Bobby</p>
            <div className="flex gap-2 items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6667 4.66634C14.6667 6.50729 11.6819 7.99967 8.00004 7.99967C4.31814 7.99967 1.33337 6.50729 1.33337 4.66634C1.33337 2.82539 4.31814 1.33301 8.00004 1.33301C11.6819 1.33301 14.6667 2.82539 14.6667 4.66634ZM8 12.6661C10.0031 12.6661 11.8824 12.263 13.3103 11.549C13.7433 11.3326 14.1756 11.0641 14.563 10.7432C14.6311 10.9343 14.6667 11.1312 14.6667 11.3321C14.6667 13.1731 11.6819 14.6655 8.00004 14.6655C4.31814 14.6655 1.33337 13.1731 1.33337 11.3321C1.33337 11.1312 1.36894 10.9344 1.4371 10.7432C1.82446 11.0641 2.25672 11.3326 2.68967 11.549C4.11759 12.263 5.99694 12.6661 8 12.6661ZM13.3103 8.21611C11.8824 8.93007 10.0031 9.33318 8 9.33318C5.99694 9.33318 4.11759 8.93007 2.68967 8.21611C2.25672 7.99963 1.82446 7.7312 1.4371 7.41028C1.36894 7.60144 1.33337 7.79824 1.33337 7.9992C1.33337 9.84015 4.31814 11.3325 8.00004 11.3325C11.6819 11.3325 14.6667 9.84015 14.6667 7.9992C14.6667 7.79822 14.6311 7.6014 14.563 7.41022C14.1756 7.73117 13.7433 7.99962 13.3103 8.21611Z"
                  fill="#FFCF52"
                ></path>
              </svg>
              <p className="text-[10px]">1.50</p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative text-white  ">
          <div className="bg-[#324B61] flex flex-col p-2 rounded items-center gap-2">
            <img
              src="https://media.duelbits.com/games/duelbits/roulette.webp"
              alt=""
              className="object-cover rounded"
            />
            <p className="text-[10px] font-semibold">Bobby</p>
            <div className="flex gap-2 items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6667 4.66634C14.6667 6.50729 11.6819 7.99967 8.00004 7.99967C4.31814 7.99967 1.33337 6.50729 1.33337 4.66634C1.33337 2.82539 4.31814 1.33301 8.00004 1.33301C11.6819 1.33301 14.6667 2.82539 14.6667 4.66634ZM8 12.6661C10.0031 12.6661 11.8824 12.263 13.3103 11.549C13.7433 11.3326 14.1756 11.0641 14.563 10.7432C14.6311 10.9343 14.6667 11.1312 14.6667 11.3321C14.6667 13.1731 11.6819 14.6655 8.00004 14.6655C4.31814 14.6655 1.33337 13.1731 1.33337 11.3321C1.33337 11.1312 1.36894 10.9344 1.4371 10.7432C1.82446 11.0641 2.25672 11.3326 2.68967 11.549C4.11759 12.263 5.99694 12.6661 8 12.6661ZM13.3103 8.21611C11.8824 8.93007 10.0031 9.33318 8 9.33318C5.99694 9.33318 4.11759 8.93007 2.68967 8.21611C2.25672 7.99963 1.82446 7.7312 1.4371 7.41028C1.36894 7.60144 1.33337 7.79824 1.33337 7.9992C1.33337 9.84015 4.31814 11.3325 8.00004 11.3325C11.6819 11.3325 14.6667 9.84015 14.6667 7.9992C14.6667 7.79822 14.6311 7.6014 14.563 7.41022C14.1756 7.73117 13.7433 7.99962 13.3103 8.21611Z"
                  fill="#FFCF52"
                ></path>
              </svg>
              <p className="text-[10px]">1.50</p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative text-white  ">
          <div className="bg-[#324B61] flex flex-col p-2 rounded items-center gap-2">
            <img
              src="https://media.duelbits.com/games/duelbits/roulette.webp"
              alt=""
              className="object-cover rounded"
            />
            <p className="text-[10px] font-semibold">Bobby</p>
            <div className="flex gap-2 items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6667 4.66634C14.6667 6.50729 11.6819 7.99967 8.00004 7.99967C4.31814 7.99967 1.33337 6.50729 1.33337 4.66634C1.33337 2.82539 4.31814 1.33301 8.00004 1.33301C11.6819 1.33301 14.6667 2.82539 14.6667 4.66634ZM8 12.6661C10.0031 12.6661 11.8824 12.263 13.3103 11.549C13.7433 11.3326 14.1756 11.0641 14.563 10.7432C14.6311 10.9343 14.6667 11.1312 14.6667 11.3321C14.6667 13.1731 11.6819 14.6655 8.00004 14.6655C4.31814 14.6655 1.33337 13.1731 1.33337 11.3321C1.33337 11.1312 1.36894 10.9344 1.4371 10.7432C1.82446 11.0641 2.25672 11.3326 2.68967 11.549C4.11759 12.263 5.99694 12.6661 8 12.6661ZM13.3103 8.21611C11.8824 8.93007 10.0031 9.33318 8 9.33318C5.99694 9.33318 4.11759 8.93007 2.68967 8.21611C2.25672 7.99963 1.82446 7.7312 1.4371 7.41028C1.36894 7.60144 1.33337 7.79824 1.33337 7.9992C1.33337 9.84015 4.31814 11.3325 8.00004 11.3325C11.6819 11.3325 14.6667 9.84015 14.6667 7.9992C14.6667 7.79822 14.6311 7.6014 14.563 7.41022C14.1756 7.73117 13.7433 7.99962 13.3103 8.21611Z"
                  fill="#FFCF52"
                ></path>
              </svg>
              <p className="text-[10px]">1.50</p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative text-white  ">
          <div className="bg-[#324B61] flex flex-col p-2 rounded items-center gap-2">
            <img
              src="https://media.duelbits.com/games/duelbits/roulette.webp"
              alt=""
              className="object-cover rounded"
            />
            <p className="text-[10px] font-semibold">Bobby</p>
            <div className="flex gap-2 items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6667 4.66634C14.6667 6.50729 11.6819 7.99967 8.00004 7.99967C4.31814 7.99967 1.33337 6.50729 1.33337 4.66634C1.33337 2.82539 4.31814 1.33301 8.00004 1.33301C11.6819 1.33301 14.6667 2.82539 14.6667 4.66634ZM8 12.6661C10.0031 12.6661 11.8824 12.263 13.3103 11.549C13.7433 11.3326 14.1756 11.0641 14.563 10.7432C14.6311 10.9343 14.6667 11.1312 14.6667 11.3321C14.6667 13.1731 11.6819 14.6655 8.00004 14.6655C4.31814 14.6655 1.33337 13.1731 1.33337 11.3321C1.33337 11.1312 1.36894 10.9344 1.4371 10.7432C1.82446 11.0641 2.25672 11.3326 2.68967 11.549C4.11759 12.263 5.99694 12.6661 8 12.6661ZM13.3103 8.21611C11.8824 8.93007 10.0031 9.33318 8 9.33318C5.99694 9.33318 4.11759 8.93007 2.68967 8.21611C2.25672 7.99963 1.82446 7.7312 1.4371 7.41028C1.36894 7.60144 1.33337 7.79824 1.33337 7.9992C1.33337 9.84015 4.31814 11.3325 8.00004 11.3325C11.6819 11.3325 14.6667 9.84015 14.6667 7.9992C14.6667 7.79822 14.6311 7.6014 14.563 7.41022C14.1756 7.73117 13.7433 7.99962 13.3103 8.21611Z"
                  fill="#FFCF52"
                ></path>
              </svg>
              <p className="text-[10px]">1.50</p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative text-white  ">
          <div className="bg-[#324B61] flex flex-col p-2 rounded items-center gap-2">
            <img
              src="https://media.duelbits.com/games/duelbits/roulette.webp"
              alt=""
              className="object-cover rounded"
            />
            <p className="text-[10px] font-semibold">Bobby</p>
            <div className="flex gap-2 items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6667 4.66634C14.6667 6.50729 11.6819 7.99967 8.00004 7.99967C4.31814 7.99967 1.33337 6.50729 1.33337 4.66634C1.33337 2.82539 4.31814 1.33301 8.00004 1.33301C11.6819 1.33301 14.6667 2.82539 14.6667 4.66634ZM8 12.6661C10.0031 12.6661 11.8824 12.263 13.3103 11.549C13.7433 11.3326 14.1756 11.0641 14.563 10.7432C14.6311 10.9343 14.6667 11.1312 14.6667 11.3321C14.6667 13.1731 11.6819 14.6655 8.00004 14.6655C4.31814 14.6655 1.33337 13.1731 1.33337 11.3321C1.33337 11.1312 1.36894 10.9344 1.4371 10.7432C1.82446 11.0641 2.25672 11.3326 2.68967 11.549C4.11759 12.263 5.99694 12.6661 8 12.6661ZM13.3103 8.21611C11.8824 8.93007 10.0031 9.33318 8 9.33318C5.99694 9.33318 4.11759 8.93007 2.68967 8.21611C2.25672 7.99963 1.82446 7.7312 1.4371 7.41028C1.36894 7.60144 1.33337 7.79824 1.33337 7.9992C1.33337 9.84015 4.31814 11.3325 8.00004 11.3325C11.6819 11.3325 14.6667 9.84015 14.6667 7.9992C14.6667 7.79822 14.6311 7.6014 14.563 7.41022C14.1756 7.73117 13.7433 7.99962 13.3103 8.21611Z"
                  fill="#FFCF52"
                ></path>
              </svg>
              <p className="text-[10px]">1.50</p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative text-white  ">
          <div className="bg-[#324B61] flex flex-col p-2 rounded items-center gap-2">
            <img
              src="https://media.duelbits.com/games/duelbits/roulette.webp"
              alt=""
              className="object-cover rounded"
            />
            <p className="text-[10px] font-semibold">Bobby</p>
            <div className="flex gap-2 items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.6667 4.66634C14.6667 6.50729 11.6819 7.99967 8.00004 7.99967C4.31814 7.99967 1.33337 6.50729 1.33337 4.66634C1.33337 2.82539 4.31814 1.33301 8.00004 1.33301C11.6819 1.33301 14.6667 2.82539 14.6667 4.66634ZM8 12.6661C10.0031 12.6661 11.8824 12.263 13.3103 11.549C13.7433 11.3326 14.1756 11.0641 14.563 10.7432C14.6311 10.9343 14.6667 11.1312 14.6667 11.3321C14.6667 13.1731 11.6819 14.6655 8.00004 14.6655C4.31814 14.6655 1.33337 13.1731 1.33337 11.3321C1.33337 11.1312 1.36894 10.9344 1.4371 10.7432C1.82446 11.0641 2.25672 11.3326 2.68967 11.549C4.11759 12.263 5.99694 12.6661 8 12.6661ZM13.3103 8.21611C11.8824 8.93007 10.0031 9.33318 8 9.33318C5.99694 9.33318 4.11759 8.93007 2.68967 8.21611C2.25672 7.99963 1.82446 7.7312 1.4371 7.41028C1.36894 7.60144 1.33337 7.79824 1.33337 7.9992C1.33337 9.84015 4.31814 11.3325 8.00004 11.3325C11.6819 11.3325 14.6667 9.84015 14.6667 7.9992C14.6667 7.79822 14.6311 7.6014 14.563 7.41022C14.1756 7.73117 13.7433 7.99962 13.3103 8.21611Z"
                  fill="#FFCF52"
                ></path>
              </svg>
              <p className="text-[10px]">1.50</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
