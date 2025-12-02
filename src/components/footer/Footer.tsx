export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center px-6 md:px-20 py-10 md:py-20">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row gap-3 justify-center items-baseline ">
          <div>
            <img src="footer.svg" />
          </div>
          <div className="font-bold text-2xl">Online Exam</div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col">
            <div className="font-bold">Mobile App</div>
            <div className="mt-4">
              <div>Feature</div>
              <div>Live Share</div>
              <div>Video Record</div>
            </div>
          </div>
          <div>
            <div className="font-bold">Community</div>
            <div className="mt-4">
              <div>Featured artists</div>
              <div>The portal</div>
              <div>Live Events</div>
            </div>
          </div>
          <div>
            <div className="font-bold">Company</div>
            <div className="mt-4">
              <div>About Us</div>
              <div>Contact Us</div>
              <div>History</div>
            </div>
          </div>
          <div className="pl-15 w-45">
            <button className="bg-[#18A0FB] rounded-md text-white px-6 py-2 w-full h-auto">
              Signup
            </button>
            <button className="border border-blue-400 px-6 py-2 rounded-md flex justify-center mt-4 h-auto w-full">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-200 mt-15 justify-center items-center"></div>
      <div className="flex flex-row justify-between mt-4 w-full">
        <div>© Online Exam, Inc. 2026. We love our users!</div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <div className="text-gray-600 font-medium">Follow us: </div>
          <div className="w-8 h-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
            <img src="facebook.webp" className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
            <img src="instagram.jfif" className="w-full h-full object-cover" />
          </div>
          <div className="w-6 h-6 rounded-full overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
            <img src="xlogo.jfif" className="w-full h-full object-cover" />
          </div>
          <div className="w-7 h-7 rounded-full overflow-hidden hover:opacity-80 transition-opacity cursor-pointer">
            <img src="linkedin.png" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
