import Image from "next/image";
import * as React from "react";

export interface ISecondBannerProps {}

export function SecondBanner(props: ISecondBannerProps) {
  return (
    <div>
      <Image
        src="https://images.ctfassets.net/im9yudtc78wp/4fTE71gMjOUkGVE66ThuTZ/c2aa2f55405dd089aff2728ce8395fa0/2200x280-EN-dektop.jpg?fm=avif"
        alt=""
        width={2000}
        height={2000}
      />
    </div>
  );
}
