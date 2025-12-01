export const ExamTypes = () => {
  return (
    <div className="bg-[#4A3AFF] relative px-6 md:px-20 py-10 md:py-20 flex flex-col md:h-[720px] justify-center items-center">
      <div className="absolute w-[370px] h-auto bg-[#FEF1E2] flex flex-col justify-center items-center px-10 py-6 rounded-lg top-20 right-10">
        <div>
          <img src="mathteacher.png" />
        </div>
        <div className="font-bold text-[40px] font-heading">NSI Exam</div>
      </div>
      <div className="absolute w-[370px] h-auto bg-[#102F2E] flex flex-col justify-center items-center px-10 py-6 rounded-lg top-50">
        <div>
          <img src="onlineteacher.png" />
        </div>
        <div className="font-bold text-[40px] text-white font-heading">Bank Exam</div>
      </div>
      <div className="absolute w-[370px] h-auto bg-[#DBEDF5] flex flex-col justify-center items-center px-10 py-6 rounded-lg top-90 left-10">
        <div>
          <img src="grading.png" />
        </div>
        <div className="font-bold text-[40px] font-heading">Primary Exam</div>
      </div>
    </div>
  );
};
