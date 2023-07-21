import Image from 'next/image';

import { FunctionComponent } from 'react';

const LandingPage: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-screen overflow-hidden text-center text-xl text-base-black font-poppins">
      <img
        className="absolute bottom-[-10rem] left-[-10rem] max-w-[500px] lg:max-w-full md:min-w-[675.84px] max-h-[560px] lg:max-h-full md:min-h-[735.89px] object-cover h-screen"
        alt=""
        src="/decore.svg"
      />
      <div className="w-full h-[982px] flex flex-col lg:items-center mt-4 tall:mt-0 tall:justify-center">
        <section className="flex flex-col items-center md:items-stretch md:flex-row mx-auto lg:mx-0 text-left text-[16px] text-black font-lead-lead-1 w-full md:justify-between lg:max-w-[1100px] md:px-3 lg:px-4 xl:px-2">
          <div className="md:w-1/2 h-85 flex flex-col lg:mx-0 place-content-between md:pr-6 lg:pr-2">
            <div className="m-0 md:text-[28px] lg:text-[40px] leading-[47.5px] lg:leading-[67.5px] font-bold font-poppins text-text-title inline-block max-w-[608px]">
              Experience a premium event hosting platform designed for all
              crowds.
            </div>
            <div className="m-0 text-[inherit] tracking-[0.05em] pr-4 leading-[28px] font-normal font-inherit inline-block max-w-[448px] h-28 z-10">
              Hosting events has never been easier. Company Name is a event
              management platform that empowers you to effortlessly post your
              events or discover new ones.
            </div>
            <div className="flex mt-4 flex-2 w-full">
              <div className="md:mr-2 lg:mr-4 ">
                <button className="hover:shadow-inner bg-[#fca311] cursor-pointer [border:none] p-3 rounded-lg shadow-[0px_0px_64px_rgba(20,_33,_61,_0.3)] w-40 flex flex-row box-border items-center justify-center">
                  <div className="relative text-sm leading-[24px] font-poppins text-base-black text-left">
                    Create an Account
                  </div>
                </button>
              </div>
              <div>
                <button className="hover:shadow-inner border-black cursor-pointer p-3 bg-[transparent] rounded-lg box-border w-40 flex flex-row items-center justify-center border-[1px] border-solid border-base-black">
                  <div className="relative text-sm leading-[24px] font-poppins text-base-black text-left">
                    View Events
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 md:w-1/2 flex justify-end items-center">
            <div className="">
              <img
                className="md:w-[27rem] lg:w-[30rem]  max-w-[552px] h-85 max-h-[504px] object-cover"
                alt=""
                src="/group-6@2x.png"
              />
            </div>
          </div>
        </section>
        <section className="min-h-[225px] w-full  max-w-[1200px] mx-auto px-4 flex mt-4">
          <div className="w-1/2">
            {' '}
            <div className="flex flex-col items-start justify-start text-left text-[24px] text-black font-lead-lead-1 mt-4 pr-4">
              <h3 className="m-0 relative text-[inherit] font-extrabold font-inherit">{`Build a larger crowd with {{Company Name}}`}</h3>
              <p className="mt-4 relative text-[inherit] text-sm leading-7">
                Promoting your event can present challenges, as traditional
                methods such as distributing flyers or leveraging social media
                alone may not yield the desired results. However, with Company
                Name, you gain the ability to effectively expand your reach to a
                wider audience, ensuring a remarkable and unforgettable
                experience for all attendees.
              </p>
            </div>
          </div>
          <div className="flex-1 xl:w-1/2 flex text-black ">
            <div className="h-full w-1/3 text-center flex-col flex items-center">
              <div className="w-[103.77px] h-[104.48px] overflow-hidden flex flex-col box-border items-center justify-center">
                <div className="absolute w-[100px] h-[100px] bg-[#14213D] rounded-full flex justify-center items-center" />
                <div>
                  <img
                    className="relative w-[53px] h-[65px] object-cover "
                    alt=""
                    src="/productivity-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="m-0 text-[inherit] font-bold font-inherit inline-block">
                  Discover
                </h4>
                <p className="m-0 text-sm inline-block ">
                  Find events for all the things you love
                </p>
              </div>
            </div>
            <div className="h-full w-1/3 text-center flex-col flex items-center">
              <div className="w-[103.77px] h-[104.48px] overflow-hidden flex flex-col box-border items-center justify-center">
                <div className="absolute w-[100px] h-[100px] bg-[#14213D] rounded-full flex justify-center items-center" />
                <div>
                  <img
                    className="relative w-[64px] h-[65px] object-cover "
                    alt=""
                    src="/event-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1">
                {' '}
                <h4 className="m-0 text-[inherit] font-bold font-inherit inline-block ">
                  Host
                </h4>
                <p className="m-0 text-sm inline-block ">
                  Create and manage in-person or digital events with ease
                </p>
              </div>
            </div>
            <div className="h-full w-1/3 text-center flex-col flex items-center">
              <div className="w-[103.77px] h-[104.48px] overflow-hidden flex flex-col box-border items-center justify-center">
                <div className="absolute w-[100px] h-[100px] bg-[#14213D] rounded-full flex justify-center items-center" />
                <div>
                  <img
                    className="relative w-[53px] h-[65px] object-cover "
                    alt=""
                    src="/engagement-1@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="m-0 text-[inherit] font-bold font-inherit inline-block">
                  Engage
                </h4>
                <p className="m-0 text-sm inline-block">
                  Stay connected to your attendees through event updates,
                  personalized notifications and email.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
