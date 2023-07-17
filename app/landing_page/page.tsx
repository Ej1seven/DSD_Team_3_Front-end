import Image from 'next/image';

import { FunctionComponent } from 'react';

const LandingPage: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[982px] overflow-hidden text-center text-xl text-base-black font-poppins">
      <img
        className="absolute bottom-[-10rem] left-[-10rem] min-w-[675.84px] min-h-[735.89px]"
        alt=""
        src="/decore.svg"
      />
      <nav className="lg:flex lg:justify-between h-16 text-[#14213D] lg:w-3/4 mx-auto">
        <button className="hover:underline decoration-[#fca311] underline-offset-4 decoration-2 cursor-pointer [border:none] p-4 bg-[transparent] text-sm font-semibold font-poppins  text-center inline-block">
          Login
        </button>
        <div className="w-[350px] flex items-center justify-between">
          <div>
            <button className="hover:underline decoration-[#fca311] underline-offset-4 decoration-2 cursor-pointer [border:none] p-4 bg-[transparent]  text-sm font-semibold font-poppins text-base-black text-left inline-block">
              About
            </button>
          </div>
          <div>
            <button className="hover:underline decoration-[#fca311] underline-offset-4 decoration-2 cursor-pointer [border:none] p-4 bg-[transparent] text-sm font-semibold font-poppins text-base-black text-left inline-block">
              Events
            </button>
          </div>
          <div>
            <button className="hover:underline decoration-[#fca311] underline-offset-4 decoration-2 cursor-pointer [border:none] p-4 bg-[transparent]   text-sm font-semibold font-poppins text-base-black text-left inline-block">
              Contact
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between w-[125px]">
          <div className=" bg-[#fca311] w-px h-[19px] w-[2px]" />
          <button className="hover:underline decoration-[#fca311] underline-offset-4 decoration-2 cursor-pointer [border:none] p-4 bg-[transparent]  text-sm font-semibold font-poppins text-base-black text-left inline-block">
            Account
          </button>
        </div>

        <img
          className="absolute top-[12px] left-[12px] w-16 h-16 object-cover"
          alt=""
          src="/logodesign-1@2x.png"
        />
      </nav>
      <div className="w-full flex items-center justify-center mx-auto mt-4">
        <section className="flex text-left text-[16px] text-black font-lead-lead-1 w-5/6 max-w-[1100px] lg:px-4 m-auto">
          <div className="w-1/2 h-85 flex flex-col place-content-between">
            <div className="m-0 text-[40px] leading-[67.5px] font-bold font-poppins text-text-title inline-block w-[608px]">
              Experience a premium event hosting platform designed for all
              crowds.
            </div>
            <div className="m-0 text-[inherit] tracking-[0.05em] leading-[28px] font-normal font-inherit inline-block w-[448px] h-28">
              Hosting events has never been easier. Company Name is a event
              management platform that empowers you to effortlessly post your
              events or discover new ones.
            </div>
            <div className="flex lg:mt-4 flex-2">
              <div className="lg:mr-4 ">
                <button className="bg-[#fca311] cursor-pointer [border:none] p-3 bg-orange rounded-lg shadow-[0px_0px_64px_rgba(20,_33,_61,_0.3)] w-40 flex flex-row box-border items-center justify-center">
                  <div className="relative text-sm leading-[24px] font-poppins text-base-black text-left">
                    Create an Account
                  </div>
                </button>
              </div>
              <div>
                <button className="border-black cursor-pointer p-3 bg-[transparent] rounded-lg box-border w-40 flex flex-row items-center justify-center border-[1px] border-solid border-base-black">
                  <div className="relative text-sm leading-[24px] font-poppins text-base-black text-left">
                    View Events
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <div className="">
              <img
                className="w-[30rem]  max-w-[552px] h-85 max-h-[504px] object-cover"
                alt=""
                src="/group-6@2x.png"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="w-full  max-w-[1200px] mx-auto px-4 flex mt-4">
        <div className="w-1/2">
          {' '}
          <div className="w-[589.74px] flex flex-col items-start justify-start text-left text-[24px] text-black font-lead-lead-1">
            <h3 className="m-0 relative text-[inherit] leading-[64px] font-extrabold font-inherit inline-block w-[574px] h-[109px] shrink-0">{`Build a larger crowd with {{Company Name}}`}</h3>
            <p className="m-0 relative text-[inherit] text-sm leading-[32px] inline-block w-[589.74px] mt-[-81px]">
              <span className="block">&nbsp;</span>
              <span className="block">
                Promoting your event can present challenges, as traditional
                methods such as distributing flyers or leveraging social media
                alone may not yield the desired results. However, with Company
                Name, you gain the ability to effectively expand your reach to a
                wider audience, ensuring a remarkable and unforgettable
                experience for all attendees.
              </span>
              <span className="block">&nbsp;</span>
            </p>
          </div>
        </div>
        <div className="w-1/2 flex text-black ">
          <div className="w-1/3 text-center flex-col flex items-center">
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
            <h4 className="m-0 text-[inherit] font-bold font-inherit inline-block">
              Discover
            </h4>
            <p className="m-0 text-sm font-light inline-block ">
              Find events for all the things you love
            </p>
          </div>
          <div className="w-1/3 text-center flex-col flex items-center">
            <div className="w-[103.77px] h-[104.48px] overflow-hidden flex flex-col box-border items-center justify-center">
              <div className="absolute w-[100px] h-[100px] bg-[#14213D] rounded-full flex justify-center items-center" />
              <div>
                <img
                  className="relative w-[53px] h-[65px] object-cover "
                  alt=""
                  src="/event-1@2x.png"
                />
              </div>
            </div>
            <h4 className="m-0 text-[inherit] font-bold font-inherit inline-block ">
              Host
            </h4>
            <p className="m-0 text-sm font-light inline-block ">
              Create and manage an in-person or digital event with ease
            </p>
          </div>
          <div className="w-1/3 text-center flex-col flex items-center">
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
            <h4 className="m-0 text-[inherit] font-bold font-inherit inline-block">
              Engage
            </h4>
            <p className="m-0 text-sm font-light inline-block">
              Stay connected to your attendees through event updates,
              personalized notifications and email.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
