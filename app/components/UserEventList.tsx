const UserEventList = () => {
  return (
    <div className="rounded-md bg-[#14213D] w-full h-[700px] bg-opacity-10 flex flex-col items-center justify-start mt-12">
      <div className="text-left text-black text-2xl ml-4 mt-4 font-bold w-full">
        Your next events
      </div>
      <div className="w-[90%] mt-4 h-[200px] bg-white rounded-md flex justify-center items-center p-2">
        <p className="text-center">
          You are not currently attending or hosting any events.
        </p>
      </div>
    </div>
  );
};

export default UserEventList;
