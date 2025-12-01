export const Hero = () => {
  return (
    <div className="flex flex-row justify-around items-center px-6 md:px-20 py-10 md:py-20 bg-[#F5F5FF]">
      <div className="flex flex-col">
        <div className="text-[30px] md:text-[70px] font-bold font-heading">
          Take Online
          <br /> Exam.
        </div>
        <div className="font-medium text-[28px] md:text-[30px]  pt-10">
          NUMBER OF ACTIVE USERS RIGHT NOW <br />{" "}
          <div className="text-[#4A3AFF] text-center">200+</div>
        </div>
      </div>
      <div className="w-[390px] h-[390px]">
        <img src="Bitmap.png" className="w-auto h-auto" />
      </div>
    </div>
  );
};
