import Image from "next/image";

export function FooterMobileComponent() {
  const data = [
    {
      title: "About",
      children: [
        "Support",
        "Terms of Services",
        "Privacy Policy",
        "Promotion & Bonus Terms",
      ],
    },
    {
      title: "Platform",
      children: [
        "Fairness",
        "P2P Policy",
        "Affiliates",
        "Referal Code",
        "Promotions",
      ],
    },
  ];
  return (
    <div className="grid grid-cols-3 bg-[#203241] text-white pb-20 px-3 pt-0 justify-center">
      {data.map((item) => (
        <div key={item.title}>
          <p className="text-xs font-semibold pb-3">{item.title}</p>
          <div className="flex flex-col">
            {item.children.map((child) => (
              <p key={child} className="text-slate-300 text-xs">
                {child}
              </p>
            ))}
          </div>
        </div>
      ))}
      <div>
        <p className="text-xs font-semibold pb-3">License</p>
        <div className="flex flex-col">
          <p className="text-slate-300">
            <Image
              src="https://licensing.gaming-curacao.com/images/gc-logo.png"
              width={70}
              height={70}
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
}
