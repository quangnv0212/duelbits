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

export function OriginalGame() {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        modules={[Navigation, Pagination]}
      >
        <div className="flex gap-2 text-white font-bold text-base py-2 items-center justify-between ">
          <div className="flex gap-2">
            <svg
              width="24"
              height="24"
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
            <div className="mb-2">Original Game</div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm font-semibold text-primary">View All</p>
            <SwiperNavButtons />
          </div>
        </div>
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded">
            <img
              src="https://media.duelbits.com/games/duelbits/blackjack.webp"
              alt=""
              className="object-cover rounded h-[210px] w-[157px]"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary text-xl ">96.5%</p>
              <p className="text-primary text-xl">RTP</p>
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
          <div className="w-full h-full rounded">
            <img
              src="https://media.duelbits.com/games/duelbits/blackjack.webp"
              alt=""
              className="object-cover rounded h-[210px] w-[157px]"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary text-xl ">96.5%</p>
              <p className="text-primary text-xl">RTP</p>
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
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded">
            <img
              src="https://media.duelbits.com/games/duelbits/blackjack.webp"
              alt=""
              className="object-cover rounded h-[210px] w-[157px]"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary text-xl ">96.5%</p>
              <p className="text-primary text-xl">RTP</p>
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
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded">
            <img
              src="https://media.duelbits.com/games/duelbits/blackjack.webp"
              alt=""
              className="object-cover rounded h-[210px] w-[157px]"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary text-xl ">96.5%</p>
              <p className="text-primary text-xl">RTP</p>
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
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded">
            <img
              src="https://media.duelbits.com/games/duelbits/blackjack.webp"
              alt=""
              className="object-cover rounded h-[210px] w-[157px]"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary text-xl ">96.5%</p>
              <p className="text-primary text-xl">RTP</p>
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
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded">
            <img
              src="https://media.duelbits.com/games/duelbits/blackjack.webp"
              alt=""
              className="object-cover rounded h-[210px] w-[157px]"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary text-xl ">96.5%</p>
              <p className="text-primary text-xl">RTP</p>
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
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded">
            <img
              src="https://media.duelbits.com/games/duelbits/blackjack.webp"
              alt=""
              className="object-cover rounded h-[210px] w-[157px]"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary text-xl ">96.5%</p>
              <p className="text-primary text-xl">RTP</p>
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
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded">
            <img
              src="https://media.duelbits.com/games/duelbits/blackjack.webp"
              alt=""
              className="object-cover rounded h-[210px] w-[157px]"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary text-xl ">96.5%</p>
              <p className="text-primary text-xl">RTP</p>
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
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded">
            <img
              src="https://media.duelbits.com/games/duelbits/blackjack.webp"
              alt=""
              className="object-cover rounded h-[210px] w-[157px]"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary text-xl ">96.5%</p>
              <p className="text-primary text-xl">RTP</p>
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
        </SwiperSlide>{" "}
        <SwiperSlide className="rounded cursor-pointer relative">
          <div className="w-full h-full rounded">
            <img
              src="https://media.duelbits.com/games/duelbits/blackjack.webp"
              alt=""
              className="object-cover rounded h-[210px] w-[157px]"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-200 flex flex-col font-semibold items-center justify-center text-white gap-2">
              <p>Slots</p>
              <p className="text-primary text-xl ">96.5%</p>
              <p className="text-primary text-xl">RTP</p>
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
