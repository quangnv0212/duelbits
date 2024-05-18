export interface IFestivalFootballProps {}

export function FestivalFootballTablet(props: IFestivalFootballProps) {
  return (
    <div>
      <div className="flex gap-2 text-white font-bold text-base items-center p-2">
        <svg
          width={16}
          height={17}
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0.362305C6.41775 0.362305 4.87104 0.831496 3.55544 1.71055C2.23985 2.5896 1.21447 3.83903 0.608967 5.30084C0.00346629 6.76265 -0.15496 8.37118 0.153721 9.92303C0.462403 11.4749 1.22433 12.9003 2.34315 14.0192C3.46197 15.138 4.88743 15.8999 6.43928 16.2086C7.99113 16.5173 9.59966 16.3588 11.0615 15.7533C12.5233 15.1478 13.7727 14.1225 14.6518 12.8069C15.5308 11.4913 16 9.94455 16 8.3623C16 6.24057 15.1571 4.20574 13.6569 2.70545C12.1566 1.20516 10.1217 0.362305 8 0.362305V0.362305ZM8.66667 3.1623C8.66095 3.09281 8.67717 3.02326 8.71305 2.96347C8.74893 2.90367 8.80266 2.85663 8.86667 2.82897L10.7333 2.02897C10.7754 2.01062 10.8208 2.00114 10.8667 2.00114C10.9126 2.00114 10.9579 2.01062 11 2.02897C11.7539 2.41488 12.4316 2.93441 13 3.5623C13.0414 3.59335 13.075 3.63361 13.0981 3.6799C13.1213 3.72619 13.1333 3.77722 13.1333 3.82897L12.9333 5.89564C12.9333 5.94739 12.9213 5.99842 12.8981 6.04471C12.875 6.09099 12.8414 6.13126 12.8 6.1623L11.4667 6.82897C11.416 6.85823 11.3585 6.87363 11.3 6.87363C11.2415 6.87363 11.184 6.85823 11.1333 6.82897L8.8 5.1623C8.75861 5.13126 8.725 5.09099 8.70186 5.04471C8.67872 4.99842 8.66667 4.94739 8.66667 4.89564V3.1623ZM2.93334 3.49564C3.52726 2.88508 4.22762 2.38805 5 2.02897C5.04206 2.01062 5.08745 2.00114 5.13334 2.00114C5.17922 2.00114 5.22462 2.01062 5.26667 2.02897L7.13334 2.82897C7.19735 2.85663 7.25108 2.90367 7.28696 2.96347C7.32284 3.02326 7.33906 3.09281 7.33334 3.1623V4.89564C7.33334 4.94739 7.32129 4.99842 7.29815 5.04471C7.275 5.09099 7.2414 5.13126 7.2 5.1623L4.93334 6.7623C4.88266 6.79156 4.82518 6.80696 4.76667 6.80696C4.70816 6.80696 4.65068 6.79156 4.6 6.7623L3.26667 6.09564C3.22071 6.079 3.17897 6.05247 3.14441 6.0179C3.10984 5.98334 3.0833 5.9416 3.06667 5.89564L2.86667 3.69564C2.85818 3.649 2.85974 3.6011 2.87124 3.55511C2.88273 3.50913 2.9039 3.46612 2.93334 3.42897V3.49564ZM5.2 11.3623L4.4 12.229C4.36285 12.2584 4.31985 12.2796 4.27386 12.2911C4.22788 12.3026 4.17997 12.3041 4.13334 12.2956L2 11.829C1.91907 11.8109 1.84777 11.7634 1.8 11.6956C1.38841 10.9515 1.11723 10.1379 1 9.29564C0.991517 9.249 0.993074 9.2011 1.00457 9.15511C1.01607 9.10913 1.03724 9.06612 1.06667 9.02897L2.4 7.5623C2.45007 7.50875 2.51639 7.4732 2.5887 7.46115C2.66101 7.4491 2.73528 7.46122 2.8 7.49564L4.13334 8.22897C4.1793 8.2456 4.22104 8.27214 4.2556 8.30671C4.29016 8.34127 4.3167 8.38301 4.33334 8.42897L5.2 11.0956C5.20849 11.1423 5.20693 11.1902 5.19544 11.2362C5.18394 11.2821 5.16277 11.3252 5.13334 11.3623H5.2ZM10.5333 13.3623L9.46667 15.0956C9.41891 15.1634 9.3476 15.2109 9.26667 15.229C8.42925 15.383 7.57075 15.383 6.73334 15.229C6.65241 15.2109 6.5811 15.1634 6.53334 15.0956L5.53334 13.3623C5.49006 13.3046 5.46667 13.2344 5.46667 13.1623C5.46667 13.0902 5.49006 13.02 5.53334 12.9623L6.26667 12.1623C6.29772 12.1209 6.33798 12.0873 6.38427 12.0642C6.43055 12.041 6.48159 12.029 6.53334 12.029H9.46667C9.51842 12.029 9.56946 12.041 9.61574 12.0642C9.66203 12.0873 9.70229 12.1209 9.73334 12.1623L10.4667 12.9623C10.5099 13.02 10.5333 13.0902 10.5333 13.1623C10.5333 13.2344 10.5099 13.3046 10.4667 13.3623H10.5333ZM14.1333 11.6956C14.0856 11.7634 14.0143 11.8109 13.9333 11.829L11.9333 12.2956C11.8769 12.3155 11.8162 12.3197 11.7575 12.308C11.6989 12.2963 11.6445 12.269 11.6 12.229L10.8 11.3623C10.7707 11.3116 10.7553 11.2541 10.7553 11.1956C10.7553 11.1371 10.7707 11.0796 10.8 11.029L11.6 8.3623C11.6478 8.29453 11.7191 8.24699 11.8 8.22897L13.1333 7.49564C13.1956 7.43456 13.2794 7.40035 13.3667 7.40035C13.4539 7.40035 13.5377 7.43456 13.6 7.49564L14.8667 9.02897C14.8961 9.06612 14.9173 9.10913 14.9288 9.15511C14.9403 9.2011 14.9418 9.249 14.9333 9.29564C14.8161 10.1379 14.5449 10.9515 14.1333 11.6956Z"
            fill="#33C16C"
          />
        </svg>
        <div className="text-sm flex items-center">
          The Festival of Football
        </div>
      </div>
      <div
        className="flex flex-col gap-5 rounded-md"
        style={{
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col gap-1">
          <div className="">
            <span className="border text-white border-white p-1 rounded font-semibold text-[10px]">
              Friday, May 3 - Friday, Jun 14
            </span>
          </div>
          <div className="text-white text-sm font-semibold flex gap-1 ">
            <span className="text-primary">Collect</span>
            $30.00
            <span className="text-primary">in Free Bets</span>+ 1x Ticket for
            $250k GTD
            <span className="text-white font-semibold">Fantasy Tournament</span>
          </div>
        </div>
        <div className="flex gap-2 ">
          <div className="w-2/3 rounded-md border border-[#527490] flex">
            <div className="grid grid-cols-3 ">
              <div className="bg-[#324B61] p-2 px-6 border-[#293f52] border-2 ">
                <img
                  src="https://duelbits.com/static/media/soccer-ball.ae41cfa2.avif"
                  alt=""
                  className="w-12 h-12"
                />
              </div>{" "}
              <div className="bg-[#324B61] p-2 px-6 border-[#293f52] border-2 ">
                <img
                  src="https://duelbits.com/static/media/soccer-ball.ae41cfa2.avif"
                  alt=""
                  className="w-12 h-12"
                />
              </div>
              <div className="bg-[#324B61] p-2 px-6 border-[#293f52] border-2 ">
                <img
                  src="https://duelbits.com/static/media/soccer-ball.ae41cfa2.avif"
                  alt=""
                  className="w-12 h-12"
                />
              </div>{" "}
              <div className="bg-[#324B61] p-2 px-6 border-[#293f52] border-2 ">
                <img
                  src="https://duelbits.com/static/media/soccer-ball.ae41cfa2.avif"
                  alt=""
                  className="w-12 h-12"
                />
              </div>
              <div className="bg-[#324B61] p-2 px-6 border-[#293f52] border-2 ">
                <img
                  src="https://duelbits.com/static/media/soccer-ball.ae41cfa2.avif"
                  alt=""
                  className="w-12 h-12"
                />
              </div>{" "}
              <div className="bg-[#324B61] p-2 px-6 border-[#293f52] border-2 ">
                <img
                  src="https://duelbits.com/static/media/soccer-ball.ae41cfa2.avif"
                  alt=""
                  className="w-12 h-12"
                />
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#324B61] flex-1">
              <img
                src="https://duelbits.com/static/media/ticket-complete.1e98f8ad.avif"
                alt=""
                className="w-20 h-20"
              />
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-center gap-2">
            <p className="text-xs text-[#87a0b5] font-semibold">
              With just 6 weeks to go before the start of the Euros, join
              Duelbits Festival of Football! Earn Free Bets and an entry into
              our $250,000 guaranteed Fantasy Tournament! Sign up and be
              rewarded for playing over the next 6 weeks!
            </p>
            <button className="block w-full border rounded py-2 hover:bg-[#4c5660] text-xs my-2 border-primary text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
