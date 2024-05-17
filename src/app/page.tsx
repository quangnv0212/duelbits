import { AceRewards } from "@/components/ace-rewards";
import { CryptoPrices } from "@/components/crypto-prices";
import { FestivalFootball } from "@/components/festival-football";
import { FirstBanner } from "@/components/first-banner";
import { Info } from "@/components/info";
import { LiveEvents } from "@/components/live-event";
import { OriginalGame } from "@/components/original-game";
import { Promotion } from "@/components/promotion";
import { Recommended } from "@/components/recommend";
import { SecondBanner } from "@/components/second-banner";
import { TableData } from "@/components/table-data";
import { TopEvents } from "@/components/top-event";
import { Win } from "@/components/win";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <FirstBanner />
        <SecondBanner />
        <FestivalFootball />
        <Promotion />
        <Recommended />
        <OriginalGame />
        <Win />
        <CryptoPrices />
        <LiveEvents />
        <TopEvents />
        <AceRewards />
        <TableData />
        {/* <Info /> */}
      </div>
    </>
  );
}
