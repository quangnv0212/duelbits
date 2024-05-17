"use client";
import { NavbarIcon } from "./icons/navbar-icon";
import { IconLogo } from "./icons/logo-icon";
import { useRouter } from "next/navigation";
import { Modal } from "antd";
import { useState } from "react";
import Authen from "./authen";

export interface IHeaderProps {
  setCollapsed: any;
  collapsed: boolean;
}

export function HeaderComponent(props: IHeaderProps) {
  const { setCollapsed, collapsed } = props;
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [activeLabel, setActiveLabel] = useState("Login");

  return (
    <div className="">
      <Modal
        closable={false}
        width={768}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        className="bg-[#1c2b38]"
        styles={{
          body: {
            backgroundColor: "#1c2b38",
            padding: 0,
          },
        }}
        // bodyStyle={{
        //   backgroundColor: "red",
        // }}
      >
        <Authen
          activeLabel={activeLabel}
          setActiveLabel={setActiveLabel}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
      <div className="bg-[#213241] h-[68px] p-4 items-center justify-between flex gap-2 text-white">
        <div className="flex gap-2 items-center">
          <div
            onClick={() => setCollapsed(!collapsed)}
            className="hover:bg-[#4b5b67] cursor-pointer inline p-2 rounded-lg"
          >
            <NavbarIcon />
          </div>
          <IconLogo />
        </div>
        <div className="">
          <button className="flex gap-2 items-center cursor-pointer bg-[#33c16c] rounded text-sm p-3 font-semibold">
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="#FBFBFB"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.39655 12C1 12 0.668103 11.8843 0.400862 11.653C0.133621 11.4216 0 11.1343 0 10.791V1.20896C0 0.865672 0.133621 0.578358 0.400862 0.347015C0.668103 0.115671 1 0 1.39655 0H16.6034C17 0 17.3319 0.115671 17.5991 0.347015C17.8664 0.578358 18 0.865672 18 1.20896V10.791C18 11.1343 17.8664 11.4216 17.5991 11.653C17.3319 11.8843 17 12 16.6034 12H1.39655ZM0.568965 4.90298H17.431V3.42537H0.568965V4.90298Z"
                fill="inherit"
              ></path>
            </svg>
            <span>Buy Crypto</span>
          </button>
        </div>
        <div className="flex text-xs">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setActiveLabel("Login");
            }}
            className="uppercase font-bold p-2 hover:bg-[#4b5b67] rounded "
          >
            login
          </button>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setActiveLabel("Register");
            }}
            className="uppercase font-bold p-2 hover:bg-[#4b5b67] rounded bg-[#8120c1] "
          >
            register
          </button>
        </div>
      </div>
    </div>
  );
}
