import Image from "next/image";

export function FooterComponent() {
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
    {
      title: "Social",
      children: ["Twitter", "Facebook", "Instagram", "Telegram"],
    },
  ];
  return (
    <div className="grid grid-cols-4 bg-[#203241] text-white p-4 justify-center">
      {data.map((item) => (
        <div key={item.title}>
          <p className="text-base font-semibold pb-5">{item.title}</p>
          <div className="flex flex-col">
            {item.children.map((child) => (
              <p key={child} className="text-slate-300">
                {child}
              </p>
            ))}
          </div>
        </div>
      ))}
      <div>
        <p className="text-base font-semibold pb-5">License</p>
        <div className="flex flex-col">
          <p className="text-slate-300">
            <Image
              src="https://licensing.gaming-curacao.com/images/gc-logo.png"
              width={150}
              height={150}
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  );
}
