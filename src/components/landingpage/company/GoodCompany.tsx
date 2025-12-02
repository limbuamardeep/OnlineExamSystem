export const GoodCompany = () => {
  return (
    <div className="flex flex-col justify-center items-center px-6 md:px-20 py-10 md:py-20 bg-[#F5F5FF]">
      <div className="grid grid-cols-2 gap-5 mt-10">
        <div>
          <div className="text-[48px] leading-[72px] font-heading">
            You're in good company
          </div>
          <div className="pt-4 text-[16px] text-[#333333] text-[]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
        <div className="border border-gray-400">
          <div className="w-full">
            <img src="collab.avif" className="w-full h-full object-cover" />
          </div>
          <div className="pt-6 pb-6 px-5  text-[#333333]">
            <div className="font-bold text-[24px] pl-4">
              Sed ut perspiciatis unde omnis
            </div>
            <div className="mt-3">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
