import { AceRewards } from "@/components/ace-rewards";
import { CryptoPricesMobileAndTablet } from "@/components/crypto-mobile-and-tablet";
import { CryptoPrices } from "@/components/crypto-prices";
import { FestivalFootball } from "@/components/festival-football";
import { FestivalFootballMobileAndTablet } from "@/components/festival-football-mobile-and-tablet";
import { FirstBanner } from "@/components/first-banner";
import { FirstBannerMobile } from "@/components/first-banner-mobile";
import { Info } from "@/components/info";
import { LiveEvents } from "@/components/live-event";
import { LiveEventsMobileAndTablet } from "@/components/live-event-mobile-and-tablet";
import { OriginalGame } from "@/components/original-game";
import { OriginalGameMobileAndTablet } from "@/components/original-game-mobile-and-tablet";
import { Promotion } from "@/components/promotion";
import { PromotionMobileAndTablet } from "@/components/promotion-mobile-and-tablet";
import { Recommended } from "@/components/recommend";
import { RecommendedMobileAndTablet } from "@/components/recommend-mobile-and-tablet";
import { SecondBanner } from "@/components/second-banner";
import { TableData } from "@/components/table-data";
import { TopEvents } from "@/components/top-event";
import { Win } from "@/components/win";
import { WinMobileAndTablet } from "@/components/win-mobile-and-tablet";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="desktop">
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
        </div>
        <div className="tablet">
          <FirstBannerMobile />
          <SecondBanner />
          <FestivalFootballMobileAndTablet />
          <PromotionMobileAndTablet />
          <RecommendedMobileAndTablet />
          <OriginalGameMobileAndTablet />
          <WinMobileAndTablet />
          <CryptoPricesMobileAndTablet />
          <LiveEventsMobileAndTablet />
          <div className="h-20"></div>
        </div>
        <div className="mobile bg-[#203241]">
          <FirstBannerMobile />
          <SecondBanner />
          <FestivalFootballMobileAndTablet />
          <PromotionMobileAndTablet />
          <RecommendedMobileAndTablet />
          <OriginalGameMobileAndTablet />
          <WinMobileAndTablet />
          <CryptoPricesMobileAndTablet />
          <LiveEventsMobileAndTablet />
          <div className="h-20"></div>
        </div>

        {/* <Info /> */}
      </div>
    </>
  );
}
