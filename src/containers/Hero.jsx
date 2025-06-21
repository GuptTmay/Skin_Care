import { bag, heart, account } from '../assets/IconsSvg.jsx';
import AvocadoGirl from '../assets/AvocadoGirl.png';
import WhiteCream2 from '../assets/WhiteCream2.jpg';

const Hero = () => {
  const svg = [bag, heart, account];

  return (
    <div className="w-full bg-[#EFF5E1]">
      {/* Navbar  */}
      <nav className="flex w-full items-center justify-between gap-4 px-6 py-8 sm:p-10 lg:px-18 lg:py-14">
        <div>
          <h1 className="text-primary text-[20px] font-[800] sm:text-[25px] lg:text-[30px]">
            SKINCARE
          </h1>
        </div>

        <div className="">
          <ul className="hidden text-lg font-semibold sm:flex sm:gap-6 lg:gap-10">
            <li className="text-primary hover:text-secondary cursor-pointer text-[12px] font-[400] lg:text-[20px]">
              All Products
            </li>
            <li className="text-primary hover:text-secondary cursor-pointer text-[12px] font-[400] lg:text-[20px]">
              Serum
            </li>
            <li className="text-primary hover:text-secondary cursor-pointer text-[12px] font-[400] lg:text-[20px]">
              Sunscreen
            </li>
            <li className="text-primary hover:text-secondary cursor-pointer text-[12px] font-[400] lg:text-[20px]">
              Bundle
            </li>
          </ul>
        </div>

        <div>
          <ul className="text-secondary flex gap-5">
            {svg.map((icon, index) => (
              <div className="flex" key={index}>
                <li className="active:scale-110 hover:bg-slate-200 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#F8FEE5]">
                  {icon}
                </li>
                {index === 0 && (
                  <span className="ml-2 hidden self-center lg:block">
                    Cart (1)
                  </span>
                )}
              </div>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Mobile Section */}
      <div className="flex w-full flex-col items-center overflow-hidden sm:hidden">
        <div className="text-primary mt-15 flex flex-col text-[75px] leading-[60px] font-[900] tracking-[-5%] uppercase">
          <span>Glowwww</span>
          <span>Naturally</span>
        </div>

        <p className="text-primary p-10 text-[16px] font-[400] tracking-[-5%]">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>

        <div className="flex w-full flex-col items-center -space-y-11">
          <div className="relative flex items-center justify-center">
            <img src={AvocadoGirl} alt="AvocadoGirl" />
            {/* <ImageBar img={WhiteCream2} imgStyles='' alt="White Cream" title="While giving you an invigorating cleansing experience." /> */}
            <div className="absolute mb-7 flex w-max items-center justify-between self-end rounded-full bg-[#F8FEE5] p-2">
              <img
                src={WhiteCream2}
                className={`h-[60px] w-[60px] rounded-full border-2 border-dotted p-1`}
                alt="White Cream"
              />
              <div className="text-primary m-[8px] w-[220px] text-[14px] font-[400]">
                While giving you an invigorating cleansing experience.
              </div>
            </div>
          </div>
          <h2 className="text-primary text-[85px] font-[800] uppercase">
            skincare
          </h2>
          <img src={WhiteCream2} alt="White Cream" />
        </div>
      </div>

      {/* Hero Tablet Section */}
      <div className="-mt-10 hidden w-full flex-col items-center sm:flex lg:hidden">
        <div className="relative flex h-[570px] w-full items-center justify-evenly overflow-hidden">
          <h1 className="text-primary absolute bottom-0 flex flex-col text-center text-[135px] leading-[110px] font-[800] tracking-[-3%] uppercase">
            <span>Glowwww</span>
            <span>Naturally</span>
          </h1>
          <p className="text-primary -mt-5 w-3xs indent-[74px] text-[14px] font-[400]">
            Transform your skincare routine with premium products that restore,
            protect, and enhance your natural glow every day.
          </p>
          <img src={WhiteCream2} alt="White Cream" className="h-[332px]" />
        </div>

        <div className="relative mt-20 flex h-[460px] w-full items-center justify-center gap-50 overflow-hidden">
          <h2 className="text-primary absolute bottom-0 text-[170px] leading-28 font-[800] tracking-[-5%] uppercase">
            skincare
          </h2>
          <div className="relative flex items-center justify-center">
            <img src={AvocadoGirl} alt="Avocado Girl" className="h-[380px]" />
            <div className="absolute mb-7 flex w-max items-center justify-between self-end rounded-full bg-[#F8FEE5] p-2">
              <img
                src={WhiteCream2}
                className={`h-[60px] w-[60px] rounded-full border-2 border-dotted p-1`}
                alt="White Cream"
              />
              <div className="text-primary m-[8px] w-[220px] text-[14px] font-[400]">
                While giving you an invigorating cleansing experience.
              </div>
            </div>
          </div>
          <button className="bg-primary hover:bg-secondary -mt-10 w-max rounded-full px-6 py-3 text-[16px] font-[400] text-[#EFF5E1]">
            Shop Now
          </button>
        </div>
      </div>

      {/* Hero Desktop Section */}
      <div className="relative mt-12 hidden flex-col items-center lg:flex">
        <h2 className="text-primary absolute bottom-0 text-[19vw] leading-50 font-[800] uppercase">
          skincare
        </h2>

        <div className="flex w-full items-center justify-around">
          <p className="text-primary w-sm indent-[105px] text-[20px] font-[400]">
            Transform your skincare routine with premium products that restore,
            protect, and enhance your natural glow every day.
          </p>

          <div className="-ml-20 flex items-center">
            <h1 className="text-primary flex flex-col text-start text-[100px] leading-[90px] font-[700] tracking-[-3%] uppercase">
              <span>Glow</span>
              <span>Natur-</span>
              <span>ally</span>
            </h1>
          </div>

          <img
            src={WhiteCream2}
            className="h-[220px] w-[220px] rounded-2xl"
            alt="White Cream"
          />
        </div>

        <div className="relative z-10 mt-24 mb-4 flex w-full items-center justify-center">
          <div className="absolute left-6 -mt-20 flex w-xs items-center justify-center">
            <div className="bg-primary hover:bg-secondary rounded-full px-6 py-3 text-[20px] font-[400] text-[#EFF5E1]">
              Shop Now
            </div>
          </div>

          <div className="relative flex items-end justify-center">
            <img
              src={AvocadoGirl}
              alt="Avocado Girl"
              className="w-[610px] rounded-2xl object-cover"
            />

            <div className="absolute bottom-4 flex items-center gap-3 rounded-full bg-[#F8FEE5] p-3 shadow-md">
              <img
                src={WhiteCream2}
                alt="White Cream"
                className="h-[60px] w-[60px] rounded-full border-2 border-dotted p-1"
              />

              <p className="text-primary max-w-[220px] text-sm font-[400]">
                While giving you an invigorating cleansing experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
