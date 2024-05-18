"use client";
import { useState } from "react";
import { IconLogo } from "./icons/logo-icon";
import { Modal } from "antd";
import Authen from "./authen";
import { AuthenMobileAndTablet } from "./authen-mobile-and-tablet";

export interface IHeaderMobileAndTabletProps {
  setCollapsed: any;
  collapsed: boolean;
}

export function HeaderMobileAndTablet({
  setCollapsed,
  collapsed,
}: IHeaderMobileAndTabletProps) {
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
    <div className="bg-[#203241] text-white p-2 flex justify-between top-0 fixed z-50 w-full ">
      <Modal
        closable={false}
        width={350}
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
        <AuthenMobileAndTablet
          activeLabel={activeLabel}
          setActiveLabel={setActiveLabel}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
      <IconLogo />
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
  );
}
