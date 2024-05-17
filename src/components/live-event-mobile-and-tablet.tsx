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

export function LiveEventsMobileAndTablet() {
  const swiper = useSwiper();
  const data = [
    {
      name: "8th inning top",
      firstTeam: {
        name: "Utah Valley W.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="styled__HomeTeam-sc-1e4do3e-2 iqNXQy"
          >
            <linearGradient
              id="team_h"
              gradientUnits="userSpaceOnUse"
              x1={12}
              y1={-15}
              x2={12}
              y2="-37.5"
              gradientTransform="matrix(1 0 0 -1 0 -12)"
            >
              <stop offset={0} style={{ stopColor: "rgb(65, 213, 233)" }} />
              <stop
                offset={1}
                style={{ stopColor: "rgb(65, 213, 233)", stopOpacity: "0.3" }}
              />
            </linearGradient>
            <path
              d="M4 6.1c.1 0 4.9 0 8-3.1 1.5 1.5 3.5 2.3 5.1 2.7 1.6.4 2.8.4 2.9.4.3 6-2.6 11.9-8 14.9-5.3-3.1-8.3-8.8-8-14.9z"
              style={{ fill: "#FFFFFF" }}
            />
          </svg>
        ),
        score: 16,
        totalScore: 2.75,
      },
      secondTeam: {
        name: "G. Canyon Atelopes",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="styled__HomeTeam-sc-1e4do3e-2 iqNXQy"
          >
            <linearGradient
              id="team_h"
              gradientUnits="userSpaceOnUse"
              x1={12}
              y1={-15}
              x2={12}
              y2="-37.5"
              gradientTransform="matrix(1 0 0 -1 0 -12)"
            >
              <stop offset={0} style={{ stopColor: "rgb(65, 213, 233)" }} />
              <stop
                offset={1}
                style={{ stopColor: "rgb(65, 213, 233)", stopOpacity: "0.3" }}
              />
            </linearGradient>
            <path
              d="M4 6.1c.1 0 4.9 0 8-3.1 1.5 1.5 3.5 2.3 5.1 2.7 1.6.4 2.8.4 2.9.4.3 6-2.6 11.9-8 14.9-5.3-3.1-8.3-8.8-8-14.9z"
              style={{ fill: "#FFFFFF" }}
            />
          </svg>
        ),
        score: 11,
        totalScore: 1.42,
      },
    },
    {
      name: "8th inning top",
      firstTeam: {
        name: "Utah Valley W.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="styled__HomeTeam-sc-1e4do3e-2 iqNXQy"
          >
            <linearGradient
              id="team_h"
              gradientUnits="userSpaceOnUse"
              x1={12}
              y1={-15}
              x2={12}
              y2="-37.5"
              gradientTransform="matrix(1 0 0 -1 0 -12)"
            >
              <stop offset={0} style={{ stopColor: "rgb(65, 213, 233)" }} />
              <stop
                offset={1}
                style={{ stopColor: "rgb(65, 213, 233)", stopOpacity: "0.3" }}
              />
            </linearGradient>
            <path
              d="M4 6.1c.1 0 4.9 0 8-3.1 1.5 1.5 3.5 2.3 5.1 2.7 1.6.4 2.8.4 2.9.4.3 6-2.6 11.9-8 14.9-5.3-3.1-8.3-8.8-8-14.9z"
              style={{ fill: 'url("#team_h")' }}
            />
          </svg>
        ),
        score: 16,
        totalScore: 2.75,
      },
      secondTeam: {
        name: "G. Canyon Atelopes",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="styled__HomeTeam-sc-1e4do3e-2 iqNXQy"
          >
            <linearGradient
              id="team_h"
              gradientUnits="userSpaceOnUse"
              x1={12}
              y1={-15}
              x2={12}
              y2="-37.5"
              gradientTransform="matrix(1 0 0 -1 0 -12)"
            >
              <stop offset={0} style={{ stopColor: "rgb(65, 213, 233)" }} />
              <stop
                offset={1}
                style={{ stopColor: "rgb(65, 213, 233)", stopOpacity: "0.3" }}
              />
            </linearGradient>
            <path
              d="M4 6.1c.1 0 4.9 0 8-3.1 1.5 1.5 3.5 2.3 5.1 2.7 1.6.4 2.8.4 2.9.4.3 6-2.6 11.9-8 14.9-5.3-3.1-8.3-8.8-8-14.9z"
              style={{ fill: 'url("#team_h")' }}
            />
          </svg>
        ),
        score: 11,
        totalScore: 1.42,
      },
    },
    {
      name: "8th inning top",
      firstTeam: {
        name: "Utah Valley W.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="styled__HomeTeam-sc-1e4do3e-2 iqNXQy"
          >
            <linearGradient
              id="team_h"
              gradientUnits="userSpaceOnUse"
              x1={12}
              y1={-15}
              x2={12}
              y2="-37.5"
              gradientTransform="matrix(1 0 0 -1 0 -12)"
            >
              <stop offset={0} style={{ stopColor: "rgb(65, 213, 233)" }} />
              <stop
                offset={1}
                style={{ stopColor: "rgb(65, 213, 233)", stopOpacity: "0.3" }}
              />
            </linearGradient>
            <path
              d="M4 6.1c.1 0 4.9 0 8-3.1 1.5 1.5 3.5 2.3 5.1 2.7 1.6.4 2.8.4 2.9.4.3 6-2.6 11.9-8 14.9-5.3-3.1-8.3-8.8-8-14.9z"
              style={{ fill: 'url("#team_h")' }}
            />
          </svg>
        ),
        score: 16,
        totalScore: 2.75,
      },
      secondTeam: {
        name: "G. Canyon Atelopes",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="styled__HomeTeam-sc-1e4do3e-2 iqNXQy"
          >
            <linearGradient
              id="team_h"
              gradientUnits="userSpaceOnUse"
              x1={12}
              y1={-15}
              x2={12}
              y2="-37.5"
              gradientTransform="matrix(1 0 0 -1 0 -12)"
            >
              <stop offset={0} style={{ stopColor: "rgb(65, 213, 233)" }} />
              <stop
                offset={1}
                style={{ stopColor: "rgb(65, 213, 233)", stopOpacity: "0.3" }}
              />
            </linearGradient>
            <path
              d="M4 6.1c.1 0 4.9 0 8-3.1 1.5 1.5 3.5 2.3 5.1 2.7 1.6.4 2.8.4 2.9.4.3 6-2.6 11.9-8 14.9-5.3-3.1-8.3-8.8-8-14.9z"
              style={{ fill: 'url("#team_h")' }}
            />
          </svg>
        ),
        score: 11,
        totalScore: 1.42,
      },
    },
    {
      name: "8th inning top",
      firstTeam: {
        name: "Utah Valley W.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="styled__HomeTeam-sc-1e4do3e-2 iqNXQy"
          >
            <linearGradient
              id="team_h"
              gradientUnits="userSpaceOnUse"
              x1={12}
              y1={-15}
              x2={12}
              y2="-37.5"
              gradientTransform="matrix(1 0 0 -1 0 -12)"
            >
              <stop offset={0} style={{ stopColor: "rgb(65, 213, 233)" }} />
              <stop
                offset={1}
                style={{ stopColor: "rgb(65, 213, 233)", stopOpacity: "0.3" }}
              />
            </linearGradient>
            <path
              d="M4 6.1c.1 0 4.9 0 8-3.1 1.5 1.5 3.5 2.3 5.1 2.7 1.6.4 2.8.4 2.9.4.3 6-2.6 11.9-8 14.9-5.3-3.1-8.3-8.8-8-14.9z"
              style={{ fill: 'url("#team_h")' }}
            />
          </svg>
        ),
        score: 16,
        totalScore: 2.75,
      },
      secondTeam: {
        name: "G. Canyon Atelopes",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="styled__HomeTeam-sc-1e4do3e-2 iqNXQy"
          >
            <linearGradient
              id="team_h"
              gradientUnits="userSpaceOnUse"
              x1={12}
              y1={-15}
              x2={12}
              y2="-37.5"
              gradientTransform="matrix(1 0 0 -1 0 -12)"
            >
              <stop offset={0} style={{ stopColor: "rgb(65, 213, 233)" }} />
              <stop
                offset={1}
                style={{ stopColor: "rgb(65, 213, 233)", stopOpacity: "0.3" }}
              />
            </linearGradient>
            <path
              d="M4 6.1c.1 0 4.9 0 8-3.1 1.5 1.5 3.5 2.3 5.1 2.7 1.6.4 2.8.4 2.9.4.3 6-2.6 11.9-8 14.9-5.3-3.1-8.3-8.8-8-14.9z"
              style={{ fill: 'url("#team_h")' }}
            />
          </svg>
        ),
        score: 11,
        totalScore: 1.42,
      },
    },
    {
      name: "8th inning top",
      firstTeam: {
        name: "Utah Valley W.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="styled__HomeTeam-sc-1e4do3e-2 iqNXQy"
          >
            <linearGradient
              id="team_h"
              gradientUnits="userSpaceOnUse"
              x1={12}
              y1={-15}
              x2={12}
              y2="-37.5"
              gradientTransform="matrix(1 0 0 -1 0 -12)"
            >
              <stop offset={0} style={{ stopColor: "rgb(65, 213, 233)" }} />
              <stop
                offset={1}
                style={{ stopColor: "rgb(65, 213, 233)", stopOpacity: "0.3" }}
              />
            </linearGradient>
            <path
              d="M4 6.1c.1 0 4.9 0 8-3.1 1.5 1.5 3.5 2.3 5.1 2.7 1.6.4 2.8.4 2.9.4.3 6-2.6 11.9-8 14.9-5.3-3.1-8.3-8.8-8-14.9z"
              style={{ fill: 'url("#team_h")' }}
            />
          </svg>
        ),
        score: 16,
        totalScore: 2.75,
      },
      secondTeam: {
        name: "G. Canyon Atelopes",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="styled__HomeTeam-sc-1e4do3e-2 iqNXQy"
          >
            <linearGradient
              id="team_h"
              gradientUnits="userSpaceOnUse"
              x1={12}
              y1={-15}
              x2={12}
              y2="-37.5"
              gradientTransform="matrix(1 0 0 -1 0 -12)"
            >
              <stop offset={0} style={{ stopColor: "rgb(65, 213, 233)" }} />
              <stop
                offset={1}
                style={{ stopColor: "rgb(65, 213, 233)", stopOpacity: "0.3" }}
              />
            </linearGradient>
            <path
              d="M4 6.1c.1 0 4.9 0 8-3.1 1.5 1.5 3.5 2.3 5.1 2.7 1.6.4 2.8.4 2.9.4.3 6-2.6 11.9-8 14.9-5.3-3.1-8.3-8.8-8-14.9z"
              style={{ fill: 'url("#team_h")' }}
            />
          </svg>
        ),
        score: 11,
        totalScore: 1.42,
      },
    },
    {
      name: "8th inning top",
      firstTeam: {
        name: "Utah Valley W.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="styled__HomeTeam-sc-1e4do3e-2 iqNXQy"
          >
            <linearGradient
              id="team_h"
              gradientUnits="userSpaceOnUse"
              x1={12}
              y1={-15}
              x2={12}
              y2="-37.5"
              gradientTransform="matrix(1 0 0 -1 0 -12)"
            >
              <stop offset={0} style={{ stopColor: "rgb(65, 213, 233)" }} />
              <stop
                offset={1}
                style={{ stopColor: "rgb(65, 213, 233)", stopOpacity: "0.3" }}
              />
            </linearGradient>
            <path
              d="M4 6.1c.1 0 4.9 0 8-3.1 1.5 1.5 3.5 2.3 5.1 2.7 1.6.4 2.8.4 2.9.4.3 6-2.6 11.9-8 14.9-5.3-3.1-8.3-8.8-8-14.9z"
              style={{ fill: 'url("#team_h")' }}
            />
          </svg>
        ),
        score: 16,
        totalScore: 2.75,
      },
      secondTeam: {
        name: "G. Canyon Atelopes",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="styled__HomeTeam-sc-1e4do3e-2 iqNXQy"
          >
            <linearGradient
              id="team_h"
              gradientUnits="userSpaceOnUse"
              x1={12}
              y1={-15}
              x2={12}
              y2="-37.5"
              gradientTransform="matrix(1 0 0 -1 0 -12)"
            >
              <stop offset={0} style={{ stopColor: "rgb(65, 213, 233)" }} />
              <stop
                offset={1}
                style={{ stopColor: "rgb(65, 213, 233)", stopOpacity: "0.3" }}
              />
            </linearGradient>
            <path
              d="M4 6.1c.1 0 4.9 0 8-3.1 1.5 1.5 3.5 2.3 5.1 2.7 1.6.4 2.8.4 2.9.4.3 6-2.6 11.9-8 14.9-5.3-3.1-8.3-8.8-8-14.9z"
              style={{ fill: 'url("#team_h")' }}
            />
          </svg>
        ),
        score: 11,
        totalScore: 1.42,
      },
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        modules={[Navigation, Pagination]}
      >
        <div className="flex gap-2 text-white font-bold text-base p-2 items-center justify-between ">
          <div className="flex gap-2 items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.833659 3.66602H9.50033C9.86852 3.66602 10.167 3.96449 10.167 4.33268V11.666C10.167 12.0342 9.86852 12.3327 9.50033 12.3327H0.833659C0.465469 12.3327 0.166992 12.0342 0.166992 11.666V4.33268C0.166992 3.96449 0.465469 3.66602 0.833659 3.66602Z"
                fill="#47C87A"
              ></path>
              <path
                d="M15.5152 3.99977C15.5721 4.00234 15.6273 4.01941 15.6757 4.04935C15.724 4.07927 15.764 4.12108 15.7916 4.17079C15.8193 4.2205 15.8337 4.27647 15.8337 4.33335V11.6667C15.8337 11.7235 15.8191 11.7794 15.7914 11.8291C15.7637 11.8787 15.7238 11.9204 15.6754 11.9503C15.6271 11.9802 15.5719 11.9972 15.5151 11.9997C15.4583 12.0022 15.4018 11.9901 15.351 11.9647L11.351 9.96468C11.2957 9.93697 11.2492 9.89443 11.2167 9.8418C11.1842 9.78917 11.167 9.72854 11.167 9.66668V6.33335C11.1669 6.27139 11.184 6.21061 11.2165 6.15786C11.249 6.1051 11.2956 6.06245 11.351 6.03468L15.351 4.03469C15.4019 4.00922 15.4584 3.9972 15.5152 3.99977Z"
                fill="#47C87A"
              ></path>
            </svg>
            <div className="text-sm">Live Events</div>
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
          <SwiperSlide key={index} className="rounded cursor-pointer">
            <div className="rounded bg-[#314B61] flex flex-col gap-3 p-2 justify-center">
              <div className="flex gap-2 text-white text-[10px] items-center">
                <p className="bg-[#C831E7] p-[2px] rounded">Live</p>
                <p>{item.name}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 items-center justify-center">
                <div className="flex flex-col items-center text-xs">
                  {item.firstTeam.icon}
                  <p className="text-white text-xs">{item.firstTeam.name}</p>
                </div>
                <p className="text-xs text-white">
                  {item.firstTeam.score} : {item.secondTeam.score}
                </p>
                <div className="flex flex-col items-center">
                  {item.secondTeam.icon}
                  <p className="text-white text-xs">{item.secondTeam.name}</p>
                </div>
              </div>
              <div className="grid grid-cols-2  text-white gap-2 text-xs">
                <div className="flex gap-2 justify-center bg-[#24384A] py-2 rounded">
                  <p
                    style={{
                      color: "rgb(165, 195, 222)",
                    }}
                    className="text-xs"
                  >
                    1 -
                  </p>
                  <p>{item.firstTeam.totalScore}</p>
                </div>
                <div className="flex gap-2 justify-center bg-[#24384A] py-2 rounded">
                  <p
                    style={{
                      color: "rgb(165, 195, 222)",
                    }}
                    className="text-xs"
                  >
                    2 -
                  </p>
                  <p className="text-xs">{item.secondTeam.totalScore}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
