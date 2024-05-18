import Image from "next/image";
import * as React from "react";

export interface ISecondBannerProps {}

export function SecondBannerMobile(props: ISecondBannerProps) {
  return (
    <div className="">
      <Image
        src="https://images.ctfassets.net/im9yudtc78wp/16GhnfoUaGHQYQUF35WhFl/44cb3c0d8ae87b5279135f930af15fe4/EN-mobile__1_.jpg?fm=avif"
        alt=""
        width={2000}
        height={2000}
      />
    </div>
  );
}
