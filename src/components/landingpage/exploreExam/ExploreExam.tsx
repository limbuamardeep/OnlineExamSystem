export const ExploreExam = () => {
  return (
    <div className="px-6 md:px-20 py-10 md:py-20">
      <div className="flex flex-row justify-between items-center">
        <div className="font-bold text-4xl font-heading">Explore our Exams</div>
        <div className="text-[14px] border font-bold px-5 py-2 rounded">
          Explore All
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 mt-10 gap-5 ">
          <div className="bg-[#FFF2E6] px-10 py-10">
            <div>
              <img src="Oval.svg" className="w-[78px] h-[74px]" />
            </div>
            <div className="font-bold text-[24px] pt-4">Math</div>
            <div className="pt-2 text-[16px] text-[#333333]">
              Sky was cloudless and of a deep dark blue spectacle before us was
              indeed{" "}
            </div>
          </div>
          <div className="bg-[#FFF2E6] px-10 py-10">
            <div>
              <img src="exploreexam2.svg" className="w-[78px] h-[74px]" />
            </div>
            <div className="font-bold text-[24px] pt-4">English</div>
            <div className="pt-2 text-[16px] text-[#333333]">
              Even the all-powerful Pointing has no control about the blind
              texts.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-[#FFF2E6] px-10 py-10">
            <div>
              <img src="exploreexam2.svg" className="w-[78px] h-[74px]" />
            </div>
            <div className="font-bold text-[24px] pt-4">Science</div>
            <div className="pt-2 text-[16px] text-[#333333]">
              Unorthographic life One day however a small line of blind text.
            </div>
          </div>
          <div className="bg-[#FFF2E6] px-10 py-10">
            <div>
              <img
                src="Physics.svg"
                className="w-[78px] h-[74px] object-fill"
              />
            </div>
            <div className="font-bold text-[24px] pt-4">Physics</div>
            <div className="pt-2 text-[16px] text-[#333333]">
              However a small line of blind text by the name.
            </div>
          </div>
          <div className="bg-[#FFF2E6] px-10 py-10">
            <div>
              <img src="GK.svg" className="w-[78px] h-[74px]" />
            </div>
            <div className="font-bold text-[24px] pt-4">General Knowledge</div>
            <div className="pt-2 text-[16px] text-[#333333]">
              Text by the name of Lorem Ipsum decided to leave for the far World
              of Grammar.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
