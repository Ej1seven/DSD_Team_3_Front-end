import Image from 'next/image';

import { FunctionComponent } from 'react';

const LandingPage: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[982px] overflow-hidden text-center text-xl text-base-black font-poppins">
      <img
        className="absolute top-[246.11px] left-[0px] w-[675.84px] h-[735.89px]"
        alt=""
        src="/decore.svg"
      />
      <nav className="flex justify-between h-16 text-[#14213D] w-3/4 mx-auto">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-mini font-semibold font-poppins  text-center inline-block">
          Login
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent]  text-mini font-semibold font-poppins text-base-black text-left inline-block">{`About `}</button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-mini font-semibold font-poppins text-base-black text-left inline-block">
          Events
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent]   text-mini font-semibold font-poppins text-base-black text-left inline-block">{`Contact `}</button>
        <div className="absolute top-[38px] left-[181px] rounded-[10px] bg-orange w-[72px] h-0.5" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent]  text-mini font-semibold font-poppins text-base-black text-left inline-block">
          Account
        </button>
        <div className="absolute top-[14px] left-[955px] bg-orange w-px h-[19px]" />
        <img
          className="absolute top-[0px] left-[0px] w-16 h-16 object-cover"
          alt=""
          src="/logodesign-1@2x.png"
        />
      </nav>
      <section className="absolute top-[681px] left-[75px] w-[589.74px] flex flex-col items-start justify-start text-left text-[24px] text-text-gray-900 font-lead-lead-1">
        <h3 className="m-0 relative text-[inherit] leading-[64px] font-extrabold font-inherit inline-block w-[574px] h-[109px] shrink-0">{`Build a larger crowd with {{Company Name}}`}</h3>
        <p className="m-0 relative text-lg leading-[32px] inline-block w-[589.74px] mt-[-81px]">
          <span className="block">&nbsp;</span>
          <span className="block">{`Promoting your event can present challenges, as traditional methods such as distributing flyers or leveraging social media alone may not yield the desired results. However, with {{Company Name}}, you gain the ability to effectively expand your reach to a wider audience, ensuring a remarkable and unforgettable experience for all attendees.`}</span>
          <span className="block">&nbsp;</span>
        </p>
      </section>
      <div className="absolute top-[728px] left-[1195px] w-[230px] h-[262px]">
        <h4 className="m-0 absolute top-[117.02px] left-[35.77px] text-[inherit] font-bold font-inherit inline-block w-[143.83px] h-[31.35px]">
          Engage
        </h4>
        <p className="m-0 absolute top-[calc(50%_+_23px)] left-[0px] text-sm font-light inline-block w-[230px] h-[108px]">
          Stay connected to your attendees through event updates, personalized
          notifications and email.
        </p>
        <div className="absolute top-[0px] left-[55.29px] w-[103.77px] h-[104.48px] overflow-hidden flex flex-col py-0 pr-[0.6165373921394348px] pl-0 box-border items-center justify-end">
          <img
            className="relative w-[102.74px] h-[104.48px]"
            alt=""
            src="/vector.svg"
          />
          <img
            className="relative w-[53px] h-[65px] object-cover mt-[-84px]"
            alt=""
            src="/engagement-1@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[728px] left-[946px] w-[230px] h-[233px]">
        <h4 className="m-0 absolute top-[122.25px] left-[8.04px] text-[inherit] font-bold font-inherit inline-block w-[213.7px] h-[31.35px]">
          Host
        </h4>
        <p className="m-0 absolute top-[158px] left-[0px] text-sm font-light inline-block w-[230px] h-[75px]">
          <span className="block">
            Create and manage an in-person or digital event with ease
          </span>
        </p>
        <div className="absolute top-[0px] left-[58.38px] w-[103.77px] h-[104.48px] overflow-hidden flex flex-col py-0 pr-[0.6165373921394348px] pl-0 box-border items-center justify-end">
          <img
            className="relative w-[102.74px] h-[104.48px]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="relative w-[66px] h-[66px] object-cover mt-[-85px]"
            alt=""
            src="/event-1@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[728px] left-[677px] w-[230px] h-[233.23px]">
        <h4 className="m-0 absolute top-[122.25px] left-[1.41px] text-[inherit] font-bold font-inherit inline-block w-[228.08px] h-[31.35px]">
          Discover
        </h4>
        <p className="m-0 absolute top-[158px] left-[0px] text-sm font-light inline-block w-[230px] h-[75.23px]">
          Find events for all the things you love
        </p>
        <div className="absolute top-[0px] left-[64.08px] w-[102.36px] flex flex-col items-center justify-center">
          <div className="w-[102.36px] h-[104.48px] flex flex-col items-center justify-end">
            <img
              className="relative w-[102.36px] h-[104.48px]"
              alt=""
              src="/vector2.svg"
            />
            <img
              className="relative w-[65px] h-[62px] object-cover mt-[-83px]"
              alt=""
              src="/productivity-1@2x.png"
            />
          </div>
        </div>
      </div>
      <section className="absolute top-[198px] left-[112px] w-[1215px] h-[504px] text-left text-[16px] text-gray font-lead-lead-1">
        <img
          className="absolute top-[0px] left-[663px] w-[552px] h-[504px] object-cover"
          alt=""
          src="/group-6@2x.png"
        />
        <button className="cursor-pointer p-3 bg-[transparent] absolute top-[419px] left-[184px] rounded-lg box-border w-40 flex flex-row items-center justify-center border-[1px] border-solid border-base-black">
          <div className="relative text-sm leading-[24px] font-poppins text-base-black text-left">
            View Events
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-3 bg-orange absolute top-[419px] left-[0px] rounded-lg shadow-[0px_0px_64px_rgba(20,_33,_61,_0.3)] w-40 flex flex-row box-border items-center justify-center">
          <div className="relative text-sm leading-[24px] font-poppins text-base-black text-left">
            Create an Account
          </div>
        </button>
        <h5 className="m-0 absolute top-[267px] left-[1px] text-[inherit] tracking-[0.05em] leading-[28px] font-normal font-inherit inline-block w-[448px] h-28">{`Hosting events has never been easier. {{Company Name}} is a event management platform that empowers you to effortlessly post your events or discover new ones.`}</h5>
        <h2 className="m-0 absolute top-[36px] left-[0px] text-[48px] leading-[77.5px] font-bold font-poppins text-text-title inline-block w-[608px]">
          Experience a premium event hosting platform designed for all crowds.
        </h2>
      </section>
    </div>
  );
};

export default LandingPage;
