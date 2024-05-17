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

export function TopEvents() {
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
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation, Pagination]}
      >
        <div className="flex gap-2 text-white font-bold text-base py-2 items-center justify-between ">
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
            <div className="">Top Events</div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-semibold text-primary">View All</p>
            <SwiperNavButtons />
          </div>
        </div>

        {data.map((item, index) => (
          <SwiperSlide key={index} className="rounded cursor-pointer">
            <div className="rounded bg-[#314B61] flex flex-col gap-3 p-2 justify-center">
              <div className="flex gap-2 text-white text-xs items-center">
                <p>{item.date}</p> | <p>{item.time}</p>
              </div>

              <div className="grid grid-cols-3 gap-2 items-center justify-center">
                <div className="flex flex-col items-center">
                  {item.firstTeam.icon}
                  <p className="text-white text-xs">{item.firstTeam.name}</p>
                </div>
                <p className="text-base text-white">
                  {item.firstTeam.score} : {item.secondTeam.score}
                </p>
                <div className="flex flex-col items-center">
                  {item.secondTeam.icon}
                  <p className="text-white text-xs">{item.secondTeam.name}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 text-sm text-white gap-2">
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
                <div className="flex gap-2 justify-center bg-[#24384A] py-2 rounded">
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
