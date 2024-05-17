"use client";
// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export function TopEventsMobileAndTablet() {
  const swiper = useSwiper();
  const data = [
    {
      date: "Sat, May 18",
      time: "7:00 PM",
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
      date: "Sat, May 18",
      time: "7:00 PM",
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
      date: "Sat, May 18",
      time: "7:00 PM",
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
      date: "Sat, May 18",
      time: "7:00 PM",
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
      date: "Sat, May 18",
      time: "7:00 PM",
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
        style={{
          zIndex: 0,
        }}
        modules={[Navigation, Pagination]}
      >
        <div className="flex gap-2 text-white font-bold text-base p-2 items-center justify-between ">
          <div className="flex gap-2 items-center">
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#47C87A"
                d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm1 4.2a.5.5 0 01.3-.5l2.8-1.2a.5.5 0 01.4 0 10.5 10.5 0 013 2.3.5.5 0 01.2.4l-.3 3.1a.5.5 0 01-.2.4l-2 1a.5.5 0 01-.5 0l-3.5-2.5a.5.5 0 01-.2-.4zm-8.6.5a10.5 10.5 0 013.1-2.2.5.5 0 01.4 0l2.8 1.2a.5.5 0 01.3.5v2.6a.5.5 0 01-.2.4L7.4 9.6a.5.5 0 01-.5 0l-2-1a.5.5 0 01-.3-.3L4.3 5a.5.5 0 01.1-.4zm3.4 11.8l-1.2 1.3a.5.5 0 01-.4.1L3 17.2a.5.5 0 01-.3-.2 10.4 10.4 0 01-1.2-3.6.5.5 0 01.1-.4l2-2.2a.5.5 0 01.6-.1l2 1.1a.5.5 0 01.3.3l1.3 4a.5.5 0 01-.1.4zm8 3l-1.6 2.6a.5.5 0 01-.3.2 10.5 10.5 0 01-3.8 0 .5.5 0 01-.3-.2l-1.5-2.6a.5.5 0 010-.6l1.1-1.2a.5.5 0 01.4-.2h4.4a.5.5 0 01.4.2l1.1 1.2a.5.5 0 010 .6zm5.4-2.5a.5.5 0 01-.3.2l-3 .7a.5.5 0 01-.5-.1l-1.2-1.3a.5.5 0 010-.5l1.2-4a.5.5 0 01.3-.2l2-1.1a.5.5 0 01.7 0l1.9 2.3a.5.5 0 01.1.4 10.4 10.4 0 01-1.2 3.6z"
              ></path>
            </svg>
            <div className="text-sm">Top Events</div>
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
                <p>{item.date}</p> | <p>{item.time}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 items-center justify-center">
                <div className="flex flex-col items-center">
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
              <div className="grid grid-cols-3 text-xs text-white gap-2">
                <div className="flex gap-2 justify-center bg-[#24384A] py-2 rounded">
                  <p
                    style={{
                      color: "rgb(165, 195, 222)",
                    }}
                  >
                    1 -
                  </p>
                  <p>{item.firstTeam.totalScore}</p>
                </div>
                <div className="flex gap-2 text-xs justify-center bg-[#24384A] py-2 rounded">
                  <p
                    style={{
                      color: "rgb(165, 195, 222)",
                    }}
                  >
                    x
                  </p>
                  <p>3.55</p>
                </div>
                <div className="flex gap-2 justify-center bg-[#24384A] py-2 rounded">
                  <p
                    style={{
                      color: "rgb(165, 195, 222)",
                    }}
                  >
                    2 -
                  </p>
                  <p>{item.secondTeam.totalScore}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
