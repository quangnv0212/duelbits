"use client";
// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export function AceRewardsMobileAndTablet() {
  const swiper = useSwiper();
  const data = [
    {
      claimable: true,
      title: "Instant Bits",
      img: (
        <svg
          width="33"
          height="37"
          viewBox="0 0 33 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5394_57386)">
            <path
              d="M4.75413 4.492H2.97755C1.33599 4.492 0 5.83997 0 7.49624V33.7672C0 35.4235 1.33599 36.7714 2.97755 36.7714H3.01841L25.8439 34.4591C29.923 34.0468 33 30.6142 33 26.4771V7.49624C33 5.83997 31.664 4.492 30.0224 4.492H28.308V6.53725C28.308 7.70059 27.3647 8.65241 26.2117 8.65241H26.0376C24.8846 8.65241 23.9412 7.70059 23.9412 6.53725V4.492H9.11919V6.53725C9.11919 7.70059 8.17583 8.65241 7.02283 8.65241H6.84872C5.69572 8.65241 4.75236 7.70059 4.75236 6.53725V4.492H4.75413ZM30.3262 12.8809V25.622C30.3262 28.0527 28.8925 30.1499 26.7926 31.0713C25.6698 31.2756 24.4333 30.8974 23.6712 30.0298C23.1009 29.3809 22.6798 28.4399 21.8324 28.3C21.4593 28.2391 21.0827 28.3556 20.722 28.4721C15.4616 30.1732 10.2029 31.8743 4.94245 33.5754L3.92802 33.6776C3.23338 33.6596 2.67376 33.0842 2.67376 32.3798V12.8809H30.3262Z"
              fill="#527491"
            ></path>
            <path
              d="M9.11879 2.11515C9.11879 0.95182 8.17543 0 7.02242 0H6.84832C5.69532 0 4.75195 0.95182 4.75195 2.11515V4.41314H9.11701V2.11515H9.11879Z"
              fill="#527491"
            ></path>
            <path
              d="M28.3082 2.11515C28.3082 0.95182 27.3649 0 26.2119 0H26.0378C24.8848 0 23.9414 0.95182 23.9414 2.11515V4.41314H28.3065V2.11515H28.3082Z"
              fill="#527491"
            ></path>
            <g clip-path="url(#clip1_5394_57386)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.1839 22.4668L16.6533 21.2466L19.6124 15.4216C19.6739 15.2228 19.464 15.068 19.3368 15.2021L12.0936 21.9692C11.9787 22.0634 12.0198 22.2078 12.1372 22.2453L15.6678 23.4656L12.7087 29.2906C12.6082 29.4768 12.8571 29.6442 12.9843 29.5101L20.2664 22.7555C20.3424 22.6488 20.301 22.5043 20.1839 22.4668Z"
                fill="white"
              ></path>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_5394_57386">
              <rect width="33" height="36.7714" fill="white"></rect>
            </clipPath>
            <clipPath id="clip1_5394_57386">
              <rect
                width="8.26845"
                height="14.2819"
                fill="white"
                transform="translate(11.8984 15.2922) rotate(-1.06839)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      ),
      claimIn: "00:18:31:00",
    },
    {
      claimable: false,
      title: "Instant Bits",
      img: (
        <svg
          width="33"
          height="37"
          viewBox="0 0 33 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5394_57386)">
            <path
              d="M4.75413 4.492H2.97755C1.33599 4.492 0 5.83997 0 7.49624V33.7672C0 35.4235 1.33599 36.7714 2.97755 36.7714H3.01841L25.8439 34.4591C29.923 34.0468 33 30.6142 33 26.4771V7.49624C33 5.83997 31.664 4.492 30.0224 4.492H28.308V6.53725C28.308 7.70059 27.3647 8.65241 26.2117 8.65241H26.0376C24.8846 8.65241 23.9412 7.70059 23.9412 6.53725V4.492H9.11919V6.53725C9.11919 7.70059 8.17583 8.65241 7.02283 8.65241H6.84872C5.69572 8.65241 4.75236 7.70059 4.75236 6.53725V4.492H4.75413ZM30.3262 12.8809V25.622C30.3262 28.0527 28.8925 30.1499 26.7926 31.0713C25.6698 31.2756 24.4333 30.8974 23.6712 30.0298C23.1009 29.3809 22.6798 28.4399 21.8324 28.3C21.4593 28.2391 21.0827 28.3556 20.722 28.4721C15.4616 30.1732 10.2029 31.8743 4.94245 33.5754L3.92802 33.6776C3.23338 33.6596 2.67376 33.0842 2.67376 32.3798V12.8809H30.3262Z"
              fill="#527491"
            ></path>
            <path
              d="M9.11879 2.11515C9.11879 0.95182 8.17543 0 7.02242 0H6.84832C5.69532 0 4.75195 0.95182 4.75195 2.11515V4.41314H9.11701V2.11515H9.11879Z"
              fill="#527491"
            ></path>
            <path
              d="M28.3082 2.11515C28.3082 0.95182 27.3649 0 26.2119 0H26.0378C24.8848 0 23.9414 0.95182 23.9414 2.11515V4.41314H28.3065V2.11515H28.3082Z"
              fill="#527491"
            ></path>
            <g clip-path="url(#clip1_5394_57386)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.1839 22.4668L16.6533 21.2466L19.6124 15.4216C19.6739 15.2228 19.464 15.068 19.3368 15.2021L12.0936 21.9692C11.9787 22.0634 12.0198 22.2078 12.1372 22.2453L15.6678 23.4656L12.7087 29.2906C12.6082 29.4768 12.8571 29.6442 12.9843 29.5101L20.2664 22.7555C20.3424 22.6488 20.301 22.5043 20.1839 22.4668Z"
                fill="white"
              ></path>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_5394_57386">
              <rect width="33" height="36.7714" fill="white"></rect>
            </clipPath>
            <clipPath id="clip1_5394_57386">
              <rect
                width="8.26845"
                height="14.2819"
                fill="white"
                transform="translate(11.8984 15.2922) rotate(-1.06839)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      ),
      claimIn: "00:18:31:00",
    },
    {
      claimable: true,
      title: "Instant Bits",
      img: (
        <svg
          width="33"
          height="37"
          viewBox="0 0 33 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5394_57386)">
            <path
              d="M4.75413 4.492H2.97755C1.33599 4.492 0 5.83997 0 7.49624V33.7672C0 35.4235 1.33599 36.7714 2.97755 36.7714H3.01841L25.8439 34.4591C29.923 34.0468 33 30.6142 33 26.4771V7.49624C33 5.83997 31.664 4.492 30.0224 4.492H28.308V6.53725C28.308 7.70059 27.3647 8.65241 26.2117 8.65241H26.0376C24.8846 8.65241 23.9412 7.70059 23.9412 6.53725V4.492H9.11919V6.53725C9.11919 7.70059 8.17583 8.65241 7.02283 8.65241H6.84872C5.69572 8.65241 4.75236 7.70059 4.75236 6.53725V4.492H4.75413ZM30.3262 12.8809V25.622C30.3262 28.0527 28.8925 30.1499 26.7926 31.0713C25.6698 31.2756 24.4333 30.8974 23.6712 30.0298C23.1009 29.3809 22.6798 28.4399 21.8324 28.3C21.4593 28.2391 21.0827 28.3556 20.722 28.4721C15.4616 30.1732 10.2029 31.8743 4.94245 33.5754L3.92802 33.6776C3.23338 33.6596 2.67376 33.0842 2.67376 32.3798V12.8809H30.3262Z"
              fill="#527491"
            ></path>
            <path
              d="M9.11879 2.11515C9.11879 0.95182 8.17543 0 7.02242 0H6.84832C5.69532 0 4.75195 0.95182 4.75195 2.11515V4.41314H9.11701V2.11515H9.11879Z"
              fill="#527491"
            ></path>
            <path
              d="M28.3082 2.11515C28.3082 0.95182 27.3649 0 26.2119 0H26.0378C24.8848 0 23.9414 0.95182 23.9414 2.11515V4.41314H28.3065V2.11515H28.3082Z"
              fill="#527491"
            ></path>
            <g clip-path="url(#clip1_5394_57386)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.1839 22.4668L16.6533 21.2466L19.6124 15.4216C19.6739 15.2228 19.464 15.068 19.3368 15.2021L12.0936 21.9692C11.9787 22.0634 12.0198 22.2078 12.1372 22.2453L15.6678 23.4656L12.7087 29.2906C12.6082 29.4768 12.8571 29.6442 12.9843 29.5101L20.2664 22.7555C20.3424 22.6488 20.301 22.5043 20.1839 22.4668Z"
                fill="white"
              ></path>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_5394_57386">
              <rect width="33" height="36.7714" fill="white"></rect>
            </clipPath>
            <clipPath id="clip1_5394_57386">
              <rect
                width="8.26845"
                height="14.2819"
                fill="white"
                transform="translate(11.8984 15.2922) rotate(-1.06839)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      ),
      claimIn: "00:18:31:00",
    },
    {
      claimable: false,
      title: "Instant Bits",
      img: (
        <svg
          width="33"
          height="37"
          viewBox="0 0 33 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5394_57386)">
            <path
              d="M4.75413 4.492H2.97755C1.33599 4.492 0 5.83997 0 7.49624V33.7672C0 35.4235 1.33599 36.7714 2.97755 36.7714H3.01841L25.8439 34.4591C29.923 34.0468 33 30.6142 33 26.4771V7.49624C33 5.83997 31.664 4.492 30.0224 4.492H28.308V6.53725C28.308 7.70059 27.3647 8.65241 26.2117 8.65241H26.0376C24.8846 8.65241 23.9412 7.70059 23.9412 6.53725V4.492H9.11919V6.53725C9.11919 7.70059 8.17583 8.65241 7.02283 8.65241H6.84872C5.69572 8.65241 4.75236 7.70059 4.75236 6.53725V4.492H4.75413ZM30.3262 12.8809V25.622C30.3262 28.0527 28.8925 30.1499 26.7926 31.0713C25.6698 31.2756 24.4333 30.8974 23.6712 30.0298C23.1009 29.3809 22.6798 28.4399 21.8324 28.3C21.4593 28.2391 21.0827 28.3556 20.722 28.4721C15.4616 30.1732 10.2029 31.8743 4.94245 33.5754L3.92802 33.6776C3.23338 33.6596 2.67376 33.0842 2.67376 32.3798V12.8809H30.3262Z"
              fill="#527491"
            ></path>
            <path
              d="M9.11879 2.11515C9.11879 0.95182 8.17543 0 7.02242 0H6.84832C5.69532 0 4.75195 0.95182 4.75195 2.11515V4.41314H9.11701V2.11515H9.11879Z"
              fill="#527491"
            ></path>
            <path
              d="M28.3082 2.11515C28.3082 0.95182 27.3649 0 26.2119 0H26.0378C24.8848 0 23.9414 0.95182 23.9414 2.11515V4.41314H28.3065V2.11515H28.3082Z"
              fill="#527491"
            ></path>
            <g clip-path="url(#clip1_5394_57386)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.1839 22.4668L16.6533 21.2466L19.6124 15.4216C19.6739 15.2228 19.464 15.068 19.3368 15.2021L12.0936 21.9692C11.9787 22.0634 12.0198 22.2078 12.1372 22.2453L15.6678 23.4656L12.7087 29.2906C12.6082 29.4768 12.8571 29.6442 12.9843 29.5101L20.2664 22.7555C20.3424 22.6488 20.301 22.5043 20.1839 22.4668Z"
                fill="white"
              ></path>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_5394_57386">
              <rect width="33" height="36.7714" fill="white"></rect>
            </clipPath>
            <clipPath id="clip1_5394_57386">
              <rect
                width="8.26845"
                height="14.2819"
                fill="white"
                transform="translate(11.8984 15.2922) rotate(-1.06839)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      ),
      claimIn: "00:18:31:00",
    },
    {
      claimable: true,
      title: "Instant Bits",
      img: (
        <svg
          width="33"
          height="37"
          viewBox="0 0 33 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5394_57386)">
            <path
              d="M4.75413 4.492H2.97755C1.33599 4.492 0 5.83997 0 7.49624V33.7672C0 35.4235 1.33599 36.7714 2.97755 36.7714H3.01841L25.8439 34.4591C29.923 34.0468 33 30.6142 33 26.4771V7.49624C33 5.83997 31.664 4.492 30.0224 4.492H28.308V6.53725C28.308 7.70059 27.3647 8.65241 26.2117 8.65241H26.0376C24.8846 8.65241 23.9412 7.70059 23.9412 6.53725V4.492H9.11919V6.53725C9.11919 7.70059 8.17583 8.65241 7.02283 8.65241H6.84872C5.69572 8.65241 4.75236 7.70059 4.75236 6.53725V4.492H4.75413ZM30.3262 12.8809V25.622C30.3262 28.0527 28.8925 30.1499 26.7926 31.0713C25.6698 31.2756 24.4333 30.8974 23.6712 30.0298C23.1009 29.3809 22.6798 28.4399 21.8324 28.3C21.4593 28.2391 21.0827 28.3556 20.722 28.4721C15.4616 30.1732 10.2029 31.8743 4.94245 33.5754L3.92802 33.6776C3.23338 33.6596 2.67376 33.0842 2.67376 32.3798V12.8809H30.3262Z"
              fill="#527491"
            ></path>
            <path
              d="M9.11879 2.11515C9.11879 0.95182 8.17543 0 7.02242 0H6.84832C5.69532 0 4.75195 0.95182 4.75195 2.11515V4.41314H9.11701V2.11515H9.11879Z"
              fill="#527491"
            ></path>
            <path
              d="M28.3082 2.11515C28.3082 0.95182 27.3649 0 26.2119 0H26.0378C24.8848 0 23.9414 0.95182 23.9414 2.11515V4.41314H28.3065V2.11515H28.3082Z"
              fill="#527491"
            ></path>
            <g clip-path="url(#clip1_5394_57386)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.1839 22.4668L16.6533 21.2466L19.6124 15.4216C19.6739 15.2228 19.464 15.068 19.3368 15.2021L12.0936 21.9692C11.9787 22.0634 12.0198 22.2078 12.1372 22.2453L15.6678 23.4656L12.7087 29.2906C12.6082 29.4768 12.8571 29.6442 12.9843 29.5101L20.2664 22.7555C20.3424 22.6488 20.301 22.5043 20.1839 22.4668Z"
                fill="white"
              ></path>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_5394_57386">
              <rect width="33" height="36.7714" fill="white"></rect>
            </clipPath>
            <clipPath id="clip1_5394_57386">
              <rect
                width="8.26845"
                height="14.2819"
                fill="white"
                transform="translate(11.8984 15.2922) rotate(-1.06839)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      ),
      claimIn: "00:18:31:00",
    },
    {
      claimable: false,
      title: "Instant Bits",
      img: (
        <svg
          width="33"
          height="37"
          viewBox="0 0 33 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_5394_57386)">
            <path
              d="M4.75413 4.492H2.97755C1.33599 4.492 0 5.83997 0 7.49624V33.7672C0 35.4235 1.33599 36.7714 2.97755 36.7714H3.01841L25.8439 34.4591C29.923 34.0468 33 30.6142 33 26.4771V7.49624C33 5.83997 31.664 4.492 30.0224 4.492H28.308V6.53725C28.308 7.70059 27.3647 8.65241 26.2117 8.65241H26.0376C24.8846 8.65241 23.9412 7.70059 23.9412 6.53725V4.492H9.11919V6.53725C9.11919 7.70059 8.17583 8.65241 7.02283 8.65241H6.84872C5.69572 8.65241 4.75236 7.70059 4.75236 6.53725V4.492H4.75413ZM30.3262 12.8809V25.622C30.3262 28.0527 28.8925 30.1499 26.7926 31.0713C25.6698 31.2756 24.4333 30.8974 23.6712 30.0298C23.1009 29.3809 22.6798 28.4399 21.8324 28.3C21.4593 28.2391 21.0827 28.3556 20.722 28.4721C15.4616 30.1732 10.2029 31.8743 4.94245 33.5754L3.92802 33.6776C3.23338 33.6596 2.67376 33.0842 2.67376 32.3798V12.8809H30.3262Z"
              fill="#527491"
            ></path>
            <path
              d="M9.11879 2.11515C9.11879 0.95182 8.17543 0 7.02242 0H6.84832C5.69532 0 4.75195 0.95182 4.75195 2.11515V4.41314H9.11701V2.11515H9.11879Z"
              fill="#527491"
            ></path>
            <path
              d="M28.3082 2.11515C28.3082 0.95182 27.3649 0 26.2119 0H26.0378C24.8848 0 23.9414 0.95182 23.9414 2.11515V4.41314H28.3065V2.11515H28.3082Z"
              fill="#527491"
            ></path>
            <g clip-path="url(#clip1_5394_57386)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.1839 22.4668L16.6533 21.2466L19.6124 15.4216C19.6739 15.2228 19.464 15.068 19.3368 15.2021L12.0936 21.9692C11.9787 22.0634 12.0198 22.2078 12.1372 22.2453L15.6678 23.4656L12.7087 29.2906C12.6082 29.4768 12.8571 29.6442 12.9843 29.5101L20.2664 22.7555C20.3424 22.6488 20.301 22.5043 20.1839 22.4668Z"
                fill="white"
              ></path>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_5394_57386">
              <rect width="33" height="36.7714" fill="white"></rect>
            </clipPath>
            <clipPath id="clip1_5394_57386">
              <rect
                width="8.26845"
                height="14.2819"
                fill="white"
                transform="translate(11.8984 15.2922) rotate(-1.06839)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      ),
      claimIn: "00:18:31:00",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        modules={[Navigation, Pagination]}
        style={{
          zIndex: 0,
          width: "100%",
        }}
      >
        <div className="flex gap-2 text-white font-bold text-base p-2 items-center justify-between ">
          <div className="flex gap-2 items-center text-primary">
            <svg
              width={17}
              height={16}
              viewBox="0 0 17 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M16.6614 6.02843C16.6087 5.876 16.513 5.74212 16.3858 5.64301C16.2586 5.54391 16.1054 5.48384 15.9447 5.47009L11.203 4.77843L9.07802 0.470092C9.00979 0.329199 8.90324 0.210377 8.7706 0.127236C8.63795 0.0440958 8.48457 0 8.32802 0C8.17148 0 8.0181 0.0440958 7.88545 0.127236C7.7528 0.210377 7.64626 0.329199 7.57802 0.470092L5.45302 4.77009L0.711358 5.47009C0.557127 5.49201 0.412128 5.55673 0.292817 5.65689C0.173505 5.75705 0.0846581 5.88865 0.0363582 6.03676C-0.00785437 6.18149 -0.0118219 6.33552 0.0248813 6.48234C0.0615845 6.62915 0.137573 6.7632 0.244691 6.87009L3.68636 10.2034L2.85302 14.9368C2.82327 15.093 2.83885 15.2545 2.89792 15.4021C2.95698 15.5498 3.05707 15.6775 3.18636 15.7701C3.31237 15.8602 3.461 15.9134 3.61556 15.9237C3.77013 15.934 3.9245 15.901 4.06136 15.8284L8.32802 13.6034L12.578 15.8368C12.695 15.9027 12.8271 15.9372 12.9614 15.9368C13.1379 15.9374 13.31 15.8819 13.453 15.7784C13.5823 15.6858 13.6824 15.5581 13.7415 15.4105C13.8005 15.2628 13.8161 15.1013 13.7864 14.9451L12.953 10.2118L16.3947 6.87843C16.515 6.77649 16.6039 6.64251 16.6511 6.49205C16.6983 6.34159 16.7019 6.18082 16.6614 6.02843ZM11.5364 9.36176C11.4386 9.45629 11.3655 9.57329 11.3234 9.70257C11.2813 9.83185 11.2714 9.96947 11.2947 10.1034L11.8947 13.5951L8.76136 11.9284C8.64079 11.8642 8.50629 11.8306 8.36969 11.8306C8.23309 11.8306 8.09859 11.8642 7.97802 11.9284L4.84469 13.5951L5.44469 10.1034C5.46797 9.96947 5.45812 9.83185 5.416 9.70257C5.37387 9.57329 5.30076 9.45629 5.20302 9.36176L2.70302 6.86176L6.21136 6.35343C6.34636 6.33465 6.47469 6.28304 6.58511 6.20314C6.69552 6.12323 6.78466 6.01746 6.84469 5.89509L8.32802 2.72009L9.89469 5.90343C9.95473 6.02579 10.0439 6.13156 10.1543 6.21147C10.2647 6.29138 10.393 6.34298 10.528 6.36176L14.0364 6.87009L11.5364 9.36176Z" />
            </svg>

            <div className="text-white text-sm">Ace Rewards</div>
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
            <div className="rounded bg-[#314B61] flex flex-col gap-1 p-2 items-start">
              <div className="flex gap-3 items-center">
                {item.img}
                <p className="text-white text-[10px]">Instant Bits</p>
              </div>
              {item.claimable ? (
                <button className="flex gap-1 mt-2 mb-1 items-center text-xs text-white bg-primary w-full py-1 justify-center rounded-md">
                  Claim
                  <svg
                    width={15}
                    height={6}
                    viewBox="0 0 15 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="styles_infiniteIcon__2AMhA"
                  >
                    <path
                      d="M14.0026 1.83228C13.8437 1.475 13.6162 1.15427 13.3269 0.878862C13.0376 0.60345 12.7001 0.387097 12.3244 0.236234C11.9352 0.0795244 11.522 0.000292369 11.0963 0.000292369C10.6705 0.000292369 10.1823 0.149401 9.61021 0.455804C9.19489 0.678296 8.73438 0.984992 8.24158 1.368C7.78876 1.72001 5.78039 3.56515 5.35953 3.89173C4.91316 4.23789 4.50245 4.51213 4.13908 4.70627C3.63 4.97817 3.32289 5.03547 3.15504 5.03547C1.97516 5.03547 1.0154 4.1227 1.0154 3.00058C1.0154 1.87847 1.97486 0.965403 3.15473 0.965403C3.32258 0.965403 3.62969 1.02241 4.13878 1.29461C4.50214 1.48874 4.91286 1.76299 5.35923 2.10915C5.611 2.30445 5.84587 2.50122 6.04846 2.67781L6.38877 2.33632C6.40353 2.32141 6.53818 2.18692 6.75614 1.98489C6.53879 1.79485 6.28486 1.58172 6.00942 1.3677C5.51663 0.984699 5.05611 0.678004 4.64079 0.455511C4.06838 0.149108 3.58235 0 3.15473 0C2.72711 0 2.31578 0.079232 1.92659 0.235942C1.55093 0.387097 1.21338 0.60345 0.9241 0.878569C0.634819 1.15369 0.407022 1.475 0.248087 1.83228C0.0833104 2.20242 0 2.59536 0 3C0 3.40464 0.0833104 3.79788 0.248087 4.16801C0.407022 4.52529 0.634512 4.84631 0.923793 5.12143C1.21307 5.39655 1.55062 5.6132 1.92628 5.76406C2.31548 5.92077 2.72865 6 3.15442 6C3.5802 6 4.06838 5.85089 4.64048 5.54449C5.05581 5.322 5.51632 5.01501 6.00911 4.6323C6.46194 4.28028 8.4703 2.43514 8.89116 2.10857C9.33753 1.7624 9.74824 1.48816 10.1116 1.29403C10.6207 1.02212 10.9278 0.964818 11.0957 0.964818C12.2755 0.964818 13.2353 1.87759 13.2353 2.99971C13.2353 4.12182 12.2755 5.0346 11.0957 5.0346C10.9278 5.0346 10.6207 4.97759 10.1116 4.70539C9.74824 4.51126 9.33753 4.23701 8.89116 3.89085C8.63938 3.69555 8.40452 3.49878 8.20193 3.32219L7.86161 3.66368C7.84686 3.67859 7.7119 3.81337 7.49425 4.01511C7.71129 4.20515 7.96552 4.41828 8.24097 4.6323C8.73376 5.0153 9.19427 5.322 9.6096 5.54449C10.182 5.85089 10.668 6 11.0957 6C11.5233 6 11.9346 5.92077 12.3238 5.76406C12.6995 5.6129 13.037 5.39655 13.3263 5.12143C13.6159 4.84602 13.8434 4.52529 14.002 4.16801C14.1668 3.79788 14.2501 3.40493 14.2501 3C14.2501 2.59507 14.1668 2.20242 14.002 1.83199L14.0026 1.83228Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                  coins
                </button>
              ) : (
                <>
                  <div className="flex justify-center flex-col w-full">
                    <div className="text-[#527491] font-semibold text-[10px] flex gap-[2px] items-center justify-center w-full">
                      <p>Not yet available</p>
                      <svg
                        width={15}
                        height={6}
                        viewBox="0 0 15 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="styles_infiniteIcon__2AMhA"
                      >
                        <path
                          d="M14.0026 1.83228C13.8437 1.475 13.6162 1.15427 13.3269 0.878862C13.0376 0.60345 12.7001 0.387097 12.3244 0.236234C11.9352 0.0795244 11.522 0.000292369 11.0963 0.000292369C10.6705 0.000292369 10.1823 0.149401 9.61021 0.455804C9.19489 0.678296 8.73438 0.984992 8.24158 1.368C7.78876 1.72001 5.78039 3.56515 5.35953 3.89173C4.91316 4.23789 4.50245 4.51213 4.13908 4.70627C3.63 4.97817 3.32289 5.03547 3.15504 5.03547C1.97516 5.03547 1.0154 4.1227 1.0154 3.00058C1.0154 1.87847 1.97486 0.965403 3.15473 0.965403C3.32258 0.965403 3.62969 1.02241 4.13878 1.29461C4.50214 1.48874 4.91286 1.76299 5.35923 2.10915C5.611 2.30445 5.84587 2.50122 6.04846 2.67781L6.38877 2.33632C6.40353 2.32141 6.53818 2.18692 6.75614 1.98489C6.53879 1.79485 6.28486 1.58172 6.00942 1.3677C5.51663 0.984699 5.05611 0.678004 4.64079 0.455511C4.06838 0.149108 3.58235 0 3.15473 0C2.72711 0 2.31578 0.079232 1.92659 0.235942C1.55093 0.387097 1.21338 0.60345 0.9241 0.878569C0.634819 1.15369 0.407022 1.475 0.248087 1.83228C0.0833104 2.20242 0 2.59536 0 3C0 3.40464 0.0833104 3.79788 0.248087 4.16801C0.407022 4.52529 0.634512 4.84631 0.923793 5.12143C1.21307 5.39655 1.55062 5.6132 1.92628 5.76406C2.31548 5.92077 2.72865 6 3.15442 6C3.5802 6 4.06838 5.85089 4.64048 5.54449C5.05581 5.322 5.51632 5.01501 6.00911 4.6323C6.46194 4.28028 8.4703 2.43514 8.89116 2.10857C9.33753 1.7624 9.74824 1.48816 10.1116 1.29403C10.6207 1.02212 10.9278 0.964818 11.0957 0.964818C12.2755 0.964818 13.2353 1.87759 13.2353 2.99971C13.2353 4.12182 12.2755 5.0346 11.0957 5.0346C10.9278 5.0346 10.6207 4.97759 10.1116 4.70539C9.74824 4.51126 9.33753 4.23701 8.89116 3.89085C8.63938 3.69555 8.40452 3.49878 8.20193 3.32219L7.86161 3.66368C7.84686 3.67859 7.7119 3.81337 7.49425 4.01511C7.71129 4.20515 7.96552 4.41828 8.24097 4.6323C8.73376 5.0153 9.19427 5.322 9.6096 5.54449C10.182 5.85089 10.668 6 11.0957 6C11.5233 6 11.9346 5.92077 12.3238 5.76406C12.6995 5.6129 13.037 5.39655 13.3263 5.12143C13.6159 4.84602 13.8434 4.52529 14.002 4.16801C14.1668 3.79788 14.2501 3.40493 14.2501 3C14.2501 2.59507 14.1668 2.20242 14.002 1.83199L14.0026 1.83228Z"
                          fill="#527491"
                        />
                      </svg>
                      <p>coins</p>
                    </div>
                    <p className="text-white text-[9px]">
                      Claim in 00:18:38:20
                    </p>
                  </div>

                  <div className="w-full bg-[#293F52] rounded-full h-1">
                    <div
                      className="bg-primary h-1 rounded-full"
                      style={{ width: "45%" }}
                    />
                  </div>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}