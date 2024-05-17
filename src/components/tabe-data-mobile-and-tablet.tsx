"use client";

import { useState } from "react";

export interface ITableDataProps {}

export function TableDataMobileAndTablet(props: ITableDataProps) {
  const [activeLabel, setActiveLabel] = useState("All Bets");
  const tab = [
    {
      title: "All Bets",
    },
    {
      title: "High Rollers",
    },
    {
      title: "Lucky Wins",
    },
  ];
  return (
    <>
      <div className="flex w-full font-medium bg-[#213241]">
        {tab.map((item, index) => {
          const isActive = activeLabel === item.title;
          return (
            <div
              onClick={() => setActiveLabel(item.title)}
              key={index}
              className={`text-white font-medium p-2 ${
                isActive ? "border-b-2 border-primary" : "bg-[#213241]"
              } cursor-pointer`}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="text-white font-medium bg-[#314B61] ">
            <th className="font-medium text-left p-2">Game</th>
            <th className="font-medium text-left p-2">User</th>
            <th className="font-medium text-left p-2">Wager</th>
            <th className="font-medium text-left p-2">Multi</th>
            <th className="font-medium text-left p-2">Payout</th>
          </tr>
        </thead>
        <tbody className="text-white">
          <tr>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B]"
            >
              <div className="flex gap-2">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="#33C16C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path d="M5.51835 19.1729C5.28525 19.1729 5.09607 19.362 5.09607 19.5951C5.09607 19.8282 5.28525 20.0174 5.51835 20.0174C5.75145 20.0174 5.94063 19.8282 5.94063 19.5951C5.94063 19.362 5.75145 19.1729 5.51835 19.1729Z" />
                    <path d="M4.17178 11.4937C4.09244 11.3836 3.96495 11.3184 3.82923 11.3184H2.14011C1.90689 11.3184 1.71783 11.5075 1.71783 11.7406C1.71783 11.9738 1.90689 12.1629 2.14011 12.1629H3.24336L2.58406 14.1408C2.51028 14.362 2.62987 14.6012 2.85115 14.6749C2.89544 14.6897 2.94046 14.6967 2.98476 14.6967C3.16156 14.6967 3.32634 14.5848 3.38529 14.4078L4.22985 11.8742C4.27279 11.7454 4.25117 11.6039 4.17178 11.4937Z" />
                    <path d="M9.23916 11.4937C9.15981 11.3836 9.03233 11.3184 8.89661 11.3184H7.2075C6.97427 11.3184 6.78522 11.5075 6.78522 11.7406C6.78522 11.9738 6.97427 12.1629 7.2075 12.1629H8.31074L7.65144 14.1408C7.57766 14.362 7.69725 14.6012 7.91853 14.6749C7.96282 14.6897 8.00784 14.6967 8.05214 14.6967C8.22894 14.6967 8.39372 14.5848 8.45267 14.4078L9.29722 11.8742C9.34017 11.7454 9.31855 11.6039 9.23916 11.4937Z" />
                    <path d="M14.3065 11.4937C14.2271 11.3836 14.0997 11.3184 13.9639 11.3184H12.2748C12.0416 11.3184 11.8525 11.5075 11.8525 11.7406C11.8525 11.9738 12.0416 12.1629 12.2748 12.1629H13.3781L12.7188 14.1408C12.645 14.362 12.7646 14.6012 12.9859 14.6749C13.0302 14.6897 13.0752 14.6967 13.1195 14.6967C13.2963 14.6967 13.461 14.5848 13.52 14.4078L14.3646 11.8742C14.4075 11.7454 14.3859 11.6039 14.3065 11.4937Z" />
                    <path d="M10.5857 19.1729H7.2075C6.97427 19.1729 6.78522 19.3619 6.78522 19.5951C6.78522 19.8283 6.97427 20.0174 7.2075 20.0174H10.5857C10.819 20.0174 11.008 19.8283 11.008 19.5951C11.008 19.3619 10.819 19.1729 10.5857 19.1729Z" />
                    <path d="M19.538 7.09577C18.3738 7.09577 17.4266 8.04294 17.4266 9.20716C17.4266 9.87352 17.7452 10.4995 18.2712 10.8954V15.668H16.0754V9.92504V8.10924C16.0754 3.68515 12.4761 0.0859375 8.05205 0.0859375C3.628 0.0859375 0.0287476 3.68515 0.0287476 8.10924V9.92504V20.4398C0.0287476 21.1383 0.597051 21.7066 1.29558 21.7066H3.82926H12.2748H14.8085C15.507 21.7066 16.0754 21.1383 16.0754 20.4398V19.173H18.6935C19.8577 19.173 20.8049 18.2258 20.8049 17.0616V10.8954C21.3309 10.4995 21.6494 9.87352 21.6494 9.20716C21.6494 8.04294 20.7023 7.09577 19.538 7.09577ZM0.873306 10.3473H5.0961V15.668H0.873306V10.3473ZM11.8526 20.8621H4.25154V18.3284H11.8526V20.8621ZM15.2308 18.7507V20.4398C15.2308 20.6726 15.0414 20.8621 14.8085 20.8621H12.6971V17.9061C12.6971 17.6729 12.5081 17.4838 12.2748 17.4838H3.82926C3.59603 17.4838 3.40698 17.6729 3.40698 17.9061V20.8621H1.29558C1.06274 20.8621 0.873306 20.6726 0.873306 20.4398V16.5126H5.51838H10.5857H15.2308V18.7507ZM5.94065 15.668V10.3473H10.1634V15.668H5.94065ZM15.2308 15.668H11.008V10.3473H15.2308V15.668ZM15.2308 9.50276H0.873306V8.10924C0.873306 4.15088 4.09369 0.930496 8.05205 0.930496C12.0104 0.930496 15.2308 4.15088 15.2308 8.10924V9.50276ZM18.2712 18.3284H16.0754V16.5126H18.2712V18.3284ZM19.9603 17.0616C19.9603 17.612 19.6073 18.0814 19.1158 18.2558V16.0903V13.0077H19.9603V17.0616ZM19.9603 12.1631H19.1158V11.2756C19.2543 11.3039 19.3957 11.3186 19.538 11.3186C19.6803 11.3186 19.8218 11.3039 19.9603 11.2756V12.1631ZM20.1715 10.3046C19.9795 10.4154 19.7605 10.474 19.538 10.474C19.3156 10.474 19.0965 10.4154 18.9046 10.3046C18.5139 10.0784 18.2712 9.65791 18.2712 9.20716C18.2712 8.50863 18.8395 7.94033 19.538 7.94033C20.2366 7.94033 20.8049 8.50863 20.8049 9.20716C20.8049 9.65807 20.562 10.0787 20.1715 10.3046Z" />
                    <path d="M8.05202 1.77539C4.55935 1.77539 1.71783 4.61691 1.71783 8.10958C1.71783 8.34276 1.90689 8.53186 2.14011 8.53186H6.3629H13.9639C14.1972 8.53186 14.3862 8.34276 14.3862 8.10958C14.3862 4.61691 11.5447 1.77539 8.05202 1.77539ZM6.3629 7.6873H2.57848C2.79482 4.85685 5.16709 2.61995 8.05202 2.61995C10.9369 2.61995 13.3092 4.85689 13.5256 7.6873H6.3629Z" />
                    <path d="M8.05204 3.46387C7.81881 3.46387 7.62976 3.65296 7.62976 3.88615V5.57526C7.62976 5.80845 7.81881 5.99754 8.05204 5.99754C8.28526 5.99754 8.47432 5.80845 8.47432 5.57526V3.88615C8.47432 3.65296 8.28526 3.46387 8.05204 3.46387Z" />
                    <path d="M6.55888 6.01901L5.36468 4.8248C5.19978 4.65998 4.93239 4.65994 4.76749 4.8248C4.60259 4.9897 4.60255 5.25709 4.76749 5.42203L5.96169 6.61624C6.04416 6.69867 6.15223 6.73992 6.26029 6.73992C6.36835 6.73992 6.47645 6.69867 6.55888 6.61624C6.72378 6.45134 6.72382 6.18395 6.55888 6.01901Z" />
                    <path d="M11.3366 4.82482C11.1717 4.65996 10.9043 4.65996 10.7394 4.82482L9.54518 6.01902C9.38028 6.18393 9.38028 6.45131 9.54518 6.61626C9.62765 6.69873 9.73572 6.73994 9.84378 6.73994C9.95184 6.73994 10.0599 6.69869 10.1424 6.61626L11.3366 5.42205C11.5015 5.25715 11.5015 4.98976 11.3366 4.82482Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="21.6207"
                        height="21.6207"
                        fill="#33C16C"
                        transform="translate(0.0287476 0.0859375)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Mines
              </div>
            </td>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B]"
            >
              Malcolm
            </td>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B]"
            >
              <div className="flex gap-2">
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
                <p>
                  30<span>.00</span>
                </p>
              </div>
            </td>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B] text-primary"
            >
              50.00x
            </td>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B]"
            >
              <div className="flex gap-2">
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
                <p className="text-primary">
                  30<span>.00</span>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B]"
            >
              <div className="flex gap-2">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="#33C16C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path d="M5.51835 19.1729C5.28525 19.1729 5.09607 19.362 5.09607 19.5951C5.09607 19.8282 5.28525 20.0174 5.51835 20.0174C5.75145 20.0174 5.94063 19.8282 5.94063 19.5951C5.94063 19.362 5.75145 19.1729 5.51835 19.1729Z" />
                    <path d="M4.17178 11.4937C4.09244 11.3836 3.96495 11.3184 3.82923 11.3184H2.14011C1.90689 11.3184 1.71783 11.5075 1.71783 11.7406C1.71783 11.9738 1.90689 12.1629 2.14011 12.1629H3.24336L2.58406 14.1408C2.51028 14.362 2.62987 14.6012 2.85115 14.6749C2.89544 14.6897 2.94046 14.6967 2.98476 14.6967C3.16156 14.6967 3.32634 14.5848 3.38529 14.4078L4.22985 11.8742C4.27279 11.7454 4.25117 11.6039 4.17178 11.4937Z" />
                    <path d="M9.23916 11.4937C9.15981 11.3836 9.03233 11.3184 8.89661 11.3184H7.2075C6.97427 11.3184 6.78522 11.5075 6.78522 11.7406C6.78522 11.9738 6.97427 12.1629 7.2075 12.1629H8.31074L7.65144 14.1408C7.57766 14.362 7.69725 14.6012 7.91853 14.6749C7.96282 14.6897 8.00784 14.6967 8.05214 14.6967C8.22894 14.6967 8.39372 14.5848 8.45267 14.4078L9.29722 11.8742C9.34017 11.7454 9.31855 11.6039 9.23916 11.4937Z" />
                    <path d="M14.3065 11.4937C14.2271 11.3836 14.0997 11.3184 13.9639 11.3184H12.2748C12.0416 11.3184 11.8525 11.5075 11.8525 11.7406C11.8525 11.9738 12.0416 12.1629 12.2748 12.1629H13.3781L12.7188 14.1408C12.645 14.362 12.7646 14.6012 12.9859 14.6749C13.0302 14.6897 13.0752 14.6967 13.1195 14.6967C13.2963 14.6967 13.461 14.5848 13.52 14.4078L14.3646 11.8742C14.4075 11.7454 14.3859 11.6039 14.3065 11.4937Z" />
                    <path d="M10.5857 19.1729H7.2075C6.97427 19.1729 6.78522 19.3619 6.78522 19.5951C6.78522 19.8283 6.97427 20.0174 7.2075 20.0174H10.5857C10.819 20.0174 11.008 19.8283 11.008 19.5951C11.008 19.3619 10.819 19.1729 10.5857 19.1729Z" />
                    <path d="M19.538 7.09577C18.3738 7.09577 17.4266 8.04294 17.4266 9.20716C17.4266 9.87352 17.7452 10.4995 18.2712 10.8954V15.668H16.0754V9.92504V8.10924C16.0754 3.68515 12.4761 0.0859375 8.05205 0.0859375C3.628 0.0859375 0.0287476 3.68515 0.0287476 8.10924V9.92504V20.4398C0.0287476 21.1383 0.597051 21.7066 1.29558 21.7066H3.82926H12.2748H14.8085C15.507 21.7066 16.0754 21.1383 16.0754 20.4398V19.173H18.6935C19.8577 19.173 20.8049 18.2258 20.8049 17.0616V10.8954C21.3309 10.4995 21.6494 9.87352 21.6494 9.20716C21.6494 8.04294 20.7023 7.09577 19.538 7.09577ZM0.873306 10.3473H5.0961V15.668H0.873306V10.3473ZM11.8526 20.8621H4.25154V18.3284H11.8526V20.8621ZM15.2308 18.7507V20.4398C15.2308 20.6726 15.0414 20.8621 14.8085 20.8621H12.6971V17.9061C12.6971 17.6729 12.5081 17.4838 12.2748 17.4838H3.82926C3.59603 17.4838 3.40698 17.6729 3.40698 17.9061V20.8621H1.29558C1.06274 20.8621 0.873306 20.6726 0.873306 20.4398V16.5126H5.51838H10.5857H15.2308V18.7507ZM5.94065 15.668V10.3473H10.1634V15.668H5.94065ZM15.2308 15.668H11.008V10.3473H15.2308V15.668ZM15.2308 9.50276H0.873306V8.10924C0.873306 4.15088 4.09369 0.930496 8.05205 0.930496C12.0104 0.930496 15.2308 4.15088 15.2308 8.10924V9.50276ZM18.2712 18.3284H16.0754V16.5126H18.2712V18.3284ZM19.9603 17.0616C19.9603 17.612 19.6073 18.0814 19.1158 18.2558V16.0903V13.0077H19.9603V17.0616ZM19.9603 12.1631H19.1158V11.2756C19.2543 11.3039 19.3957 11.3186 19.538 11.3186C19.6803 11.3186 19.8218 11.3039 19.9603 11.2756V12.1631ZM20.1715 10.3046C19.9795 10.4154 19.7605 10.474 19.538 10.474C19.3156 10.474 19.0965 10.4154 18.9046 10.3046C18.5139 10.0784 18.2712 9.65791 18.2712 9.20716C18.2712 8.50863 18.8395 7.94033 19.538 7.94033C20.2366 7.94033 20.8049 8.50863 20.8049 9.20716C20.8049 9.65807 20.562 10.0787 20.1715 10.3046Z" />
                    <path d="M8.05202 1.77539C4.55935 1.77539 1.71783 4.61691 1.71783 8.10958C1.71783 8.34276 1.90689 8.53186 2.14011 8.53186H6.3629H13.9639C14.1972 8.53186 14.3862 8.34276 14.3862 8.10958C14.3862 4.61691 11.5447 1.77539 8.05202 1.77539ZM6.3629 7.6873H2.57848C2.79482 4.85685 5.16709 2.61995 8.05202 2.61995C10.9369 2.61995 13.3092 4.85689 13.5256 7.6873H6.3629Z" />
                    <path d="M8.05204 3.46387C7.81881 3.46387 7.62976 3.65296 7.62976 3.88615V5.57526C7.62976 5.80845 7.81881 5.99754 8.05204 5.99754C8.28526 5.99754 8.47432 5.80845 8.47432 5.57526V3.88615C8.47432 3.65296 8.28526 3.46387 8.05204 3.46387Z" />
                    <path d="M6.55888 6.01901L5.36468 4.8248C5.19978 4.65998 4.93239 4.65994 4.76749 4.8248C4.60259 4.9897 4.60255 5.25709 4.76749 5.42203L5.96169 6.61624C6.04416 6.69867 6.15223 6.73992 6.26029 6.73992C6.36835 6.73992 6.47645 6.69867 6.55888 6.61624C6.72378 6.45134 6.72382 6.18395 6.55888 6.01901Z" />
                    <path d="M11.3366 4.82482C11.1717 4.65996 10.9043 4.65996 10.7394 4.82482L9.54518 6.01902C9.38028 6.18393 9.38028 6.45131 9.54518 6.61626C9.62765 6.69873 9.73572 6.73994 9.84378 6.73994C9.95184 6.73994 10.0599 6.69869 10.1424 6.61626L11.3366 5.42205C11.5015 5.25715 11.5015 4.98976 11.3366 4.82482Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="21.6207"
                        height="21.6207"
                        fill="#33C16C"
                        transform="translate(0.0287476 0.0859375)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Mines
              </div>
            </td>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B]"
            >
              Malcolm
            </td>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B]"
            >
              <div className="flex gap-2">
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
                <p>
                  30<span>.00</span>
                </p>
              </div>
            </td>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B] text-primary"
            >
              50.00x
            </td>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B]"
            >
              <div className="flex gap-2">
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
                <p className="text-primary">
                  30<span>.00</span>
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B]"
            >
              <div className="flex gap-2">
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="#33C16C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path d="M5.51835 19.1729C5.28525 19.1729 5.09607 19.362 5.09607 19.5951C5.09607 19.8282 5.28525 20.0174 5.51835 20.0174C5.75145 20.0174 5.94063 19.8282 5.94063 19.5951C5.94063 19.362 5.75145 19.1729 5.51835 19.1729Z" />
                    <path d="M4.17178 11.4937C4.09244 11.3836 3.96495 11.3184 3.82923 11.3184H2.14011C1.90689 11.3184 1.71783 11.5075 1.71783 11.7406C1.71783 11.9738 1.90689 12.1629 2.14011 12.1629H3.24336L2.58406 14.1408C2.51028 14.362 2.62987 14.6012 2.85115 14.6749C2.89544 14.6897 2.94046 14.6967 2.98476 14.6967C3.16156 14.6967 3.32634 14.5848 3.38529 14.4078L4.22985 11.8742C4.27279 11.7454 4.25117 11.6039 4.17178 11.4937Z" />
                    <path d="M9.23916 11.4937C9.15981 11.3836 9.03233 11.3184 8.89661 11.3184H7.2075C6.97427 11.3184 6.78522 11.5075 6.78522 11.7406C6.78522 11.9738 6.97427 12.1629 7.2075 12.1629H8.31074L7.65144 14.1408C7.57766 14.362 7.69725 14.6012 7.91853 14.6749C7.96282 14.6897 8.00784 14.6967 8.05214 14.6967C8.22894 14.6967 8.39372 14.5848 8.45267 14.4078L9.29722 11.8742C9.34017 11.7454 9.31855 11.6039 9.23916 11.4937Z" />
                    <path d="M14.3065 11.4937C14.2271 11.3836 14.0997 11.3184 13.9639 11.3184H12.2748C12.0416 11.3184 11.8525 11.5075 11.8525 11.7406C11.8525 11.9738 12.0416 12.1629 12.2748 12.1629H13.3781L12.7188 14.1408C12.645 14.362 12.7646 14.6012 12.9859 14.6749C13.0302 14.6897 13.0752 14.6967 13.1195 14.6967C13.2963 14.6967 13.461 14.5848 13.52 14.4078L14.3646 11.8742C14.4075 11.7454 14.3859 11.6039 14.3065 11.4937Z" />
                    <path d="M10.5857 19.1729H7.2075C6.97427 19.1729 6.78522 19.3619 6.78522 19.5951C6.78522 19.8283 6.97427 20.0174 7.2075 20.0174H10.5857C10.819 20.0174 11.008 19.8283 11.008 19.5951C11.008 19.3619 10.819 19.1729 10.5857 19.1729Z" />
                    <path d="M19.538 7.09577C18.3738 7.09577 17.4266 8.04294 17.4266 9.20716C17.4266 9.87352 17.7452 10.4995 18.2712 10.8954V15.668H16.0754V9.92504V8.10924C16.0754 3.68515 12.4761 0.0859375 8.05205 0.0859375C3.628 0.0859375 0.0287476 3.68515 0.0287476 8.10924V9.92504V20.4398C0.0287476 21.1383 0.597051 21.7066 1.29558 21.7066H3.82926H12.2748H14.8085C15.507 21.7066 16.0754 21.1383 16.0754 20.4398V19.173H18.6935C19.8577 19.173 20.8049 18.2258 20.8049 17.0616V10.8954C21.3309 10.4995 21.6494 9.87352 21.6494 9.20716C21.6494 8.04294 20.7023 7.09577 19.538 7.09577ZM0.873306 10.3473H5.0961V15.668H0.873306V10.3473ZM11.8526 20.8621H4.25154V18.3284H11.8526V20.8621ZM15.2308 18.7507V20.4398C15.2308 20.6726 15.0414 20.8621 14.8085 20.8621H12.6971V17.9061C12.6971 17.6729 12.5081 17.4838 12.2748 17.4838H3.82926C3.59603 17.4838 3.40698 17.6729 3.40698 17.9061V20.8621H1.29558C1.06274 20.8621 0.873306 20.6726 0.873306 20.4398V16.5126H5.51838H10.5857H15.2308V18.7507ZM5.94065 15.668V10.3473H10.1634V15.668H5.94065ZM15.2308 15.668H11.008V10.3473H15.2308V15.668ZM15.2308 9.50276H0.873306V8.10924C0.873306 4.15088 4.09369 0.930496 8.05205 0.930496C12.0104 0.930496 15.2308 4.15088 15.2308 8.10924V9.50276ZM18.2712 18.3284H16.0754V16.5126H18.2712V18.3284ZM19.9603 17.0616C19.9603 17.612 19.6073 18.0814 19.1158 18.2558V16.0903V13.0077H19.9603V17.0616ZM19.9603 12.1631H19.1158V11.2756C19.2543 11.3039 19.3957 11.3186 19.538 11.3186C19.6803 11.3186 19.8218 11.3039 19.9603 11.2756V12.1631ZM20.1715 10.3046C19.9795 10.4154 19.7605 10.474 19.538 10.474C19.3156 10.474 19.0965 10.4154 18.9046 10.3046C18.5139 10.0784 18.2712 9.65791 18.2712 9.20716C18.2712 8.50863 18.8395 7.94033 19.538 7.94033C20.2366 7.94033 20.8049 8.50863 20.8049 9.20716C20.8049 9.65807 20.562 10.0787 20.1715 10.3046Z" />
                    <path d="M8.05202 1.77539C4.55935 1.77539 1.71783 4.61691 1.71783 8.10958C1.71783 8.34276 1.90689 8.53186 2.14011 8.53186H6.3629H13.9639C14.1972 8.53186 14.3862 8.34276 14.3862 8.10958C14.3862 4.61691 11.5447 1.77539 8.05202 1.77539ZM6.3629 7.6873H2.57848C2.79482 4.85685 5.16709 2.61995 8.05202 2.61995C10.9369 2.61995 13.3092 4.85689 13.5256 7.6873H6.3629Z" />
                    <path d="M8.05204 3.46387C7.81881 3.46387 7.62976 3.65296 7.62976 3.88615V5.57526C7.62976 5.80845 7.81881 5.99754 8.05204 5.99754C8.28526 5.99754 8.47432 5.80845 8.47432 5.57526V3.88615C8.47432 3.65296 8.28526 3.46387 8.05204 3.46387Z" />
                    <path d="M6.55888 6.01901L5.36468 4.8248C5.19978 4.65998 4.93239 4.65994 4.76749 4.8248C4.60259 4.9897 4.60255 5.25709 4.76749 5.42203L5.96169 6.61624C6.04416 6.69867 6.15223 6.73992 6.26029 6.73992C6.36835 6.73992 6.47645 6.69867 6.55888 6.61624C6.72378 6.45134 6.72382 6.18395 6.55888 6.01901Z" />
                    <path d="M11.3366 4.82482C11.1717 4.65996 10.9043 4.65996 10.7394 4.82482L9.54518 6.01902C9.38028 6.18393 9.38028 6.45131 9.54518 6.61626C9.62765 6.69873 9.73572 6.73994 9.84378 6.73994C9.95184 6.73994 10.0599 6.69869 10.1424 6.61626L11.3366 5.42205C11.5015 5.25715 11.5015 4.98976 11.3366 4.82482Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="21.6207"
                        height="21.6207"
                        fill="#33C16C"
                        transform="translate(0.0287476 0.0859375)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Mines
              </div>
            </td>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B]"
            >
              Malcolm
            </td>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B]"
            >
              <div className="flex gap-2">
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
                <p>
                  30<span>.00</span>
                </p>
              </div>
            </td>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B] text-primary"
            >
              50.00x
            </td>
            <td
              style={{
                backgroundColor: "rgb(43, 65, 84)",
              }}
              className=" p-2 border-y-4 border-x-[#2B4154] border-y-[#1E2D3B]"
            >
              <div className="flex gap-2">
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
                <p className="text-primary">
                  30<span>.00</span>
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}