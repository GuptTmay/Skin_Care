import { useEffect, useRef, useState } from 'react';
import Loading from './containers/Loading';
import './App.css';
import Hero from './containers/Hero';
import InfoBar from './components/InfoBar';
import FaceGirl from './assets/FaceGirl.png';
import ImageSlider from './components/ImageSlider';
import { leftArrow, rightArrow, award, headphone } from './assets/IconsSvg';
import LeafGirl from './assets/LeafGirl.png';
import PopupBar from './components/PopupBar';
import { faq } from './lib/data';
import WhiteCream3 from './assets/WhiteCream3.jpg';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const containerRef = useRef(null);
  const [colors, setColors] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [openPanel, setOpenPanel] = useState(null);

  const paragraph = `Experience the ultimate in skincare with our expertly formulated
    products, crafted to nourish, protect, and rejuvenate your skin.
    Combining the finest natural ingredients with advanced science,
    our collection ensures every skin type can achieve a radiant,
    healthy glow. Embrace your beauty with confidence every day.
    Experience the ultimate in skincare with our expertly formulated
    products, crafted to nourish, protect, and rejuvenate your skin.`;

  const words = paragraph.split(/\s+/);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = containerRef.current?.querySelectorAll('.word');
      if (!elements) return;

      const newColors = Array.from(elements).map((el) => {
        const rect = el.getBoundingClientRect();
        const midpoint = window.innerHeight * 0.5;
        return rect.top < midpoint ? '#2D3B36' : '#2D3B364D';
      });
      setColors(newColors);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Loading isLoading={isLoading} />
      <div className="flex w-full flex-col items-center">
        <header className="w-full">
          <Hero />
        </header>

        <main className="z-0 w-full bg-[#FEFFF4]">
          {/* Animated Text  */}
          <section className="flex flex-col items-center">
            <button className="bg-primary hover:bg-secondary mt-12 block w-[200px] rounded-full px-6 py-3 text-[16px] font-[400] text-[#EFF5E1] sm:hidden">
              Shop Now
            </button>
            <div className="text-primary mt-10 p-8 text-start text-[20px] leading-[30px] font-normal sm:p-12 sm:text-[31px] sm:leading-[46px] lg:text-[56px] lg:leading-[78px]">
              <p ref={containerRef} className="flex flex-wrap">
                {words.map((word, i) => (
                  <span
                    key={i}
                    className="word mr-2 block lg:mr-4"
                    style={{ color: colors[i] || '#888888' }}
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </section>

          {/* Why our products  */}
          <section className="flex flex-col items-center lg:flex-row lg:gap-10 lg:p-12">
            <div className="flex w-full flex-col items-center gap-8 p-7 sm:p-10 lg:flex-1 lg:gap-10 lg:p-0">
              <div className="flex w-full items-center justify-start">
                <div className="border-primary flex items-center justify-between rounded-full border-2 px-2 py-1">
                  <div className="bg-primary ml-3 h-5 w-5 rounded-full"></div>
                  <span className="p-2 text-[16px] font-normal sm:text-[20px] lg:ml-2 lg:p-3">
                    Why Our Products
                  </span>
                </div>
              </div>

              <InfoBar
                title="YOUR SKIN DESERVES THE BEST CARE."
                para="Discover a curated collection of skincare products designed to
        rejuvenate, protect, and pamper your skin. Explore our rage crafted with
        love backed by science, and inspired by nature."
              />

              <div className="flex w-full justify-start gap-5">
                <div className="self-start">
                  <h2 className="bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-[34px] tracking-[-2%] text-transparent sm:text-[60px]">
                    01
                  </h2>
                </div>
                <InfoBar
                  title="Bio Ingredients"
                  para="Get naturally beautiful and transform
                        with our bio ingredients creams for
                        healthy, radiant skin."
                />
              </div>

              <div className="flex w-full justify-start gap-5">
                <div className="self-start">
                  <h2 className="bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-[34px] tracking-[-2%] text-transparent sm:text-[60px]">
                    02
                  </h2>
                </div>
                <InfoBar
                  title="Everything Natural"
                  para="Pure ingredients for pure skin.
                        The Perfect solution for your skin <br /> care needs."
                />
              </div>

              <div className="flex w-full justify-start gap-5">
                <div className="self-start">
                  <h2 className="bg-gradient-to-b from-[#293330] to-[#FEFFF4] bg-clip-text text-[34px] tracking-[-2%] text-transparent sm:text-[60px]">
                    03
                  </h2>
                </div>
                <InfoBar
                  title="All Handmade"
                  para="Made with love and care.
                        Just for you. Give your skin
                        the tender loving care it deserves."
                />
              </div>
            </div>

            <div className="flex flex-col items-center lg:flex-1">
              <div className="relative flex items-end justify-center">
                <img
                  src={FaceGirl}
                  alt="Girl Face with facepack"
                  className="h-full rounded-2xl object-cover lg:mt-10"
                />

                <div className="absolute bottom-4 flex items-center gap-3 rounded-full bg-[#F8FEE5] p-3 shadow-md">
                  <span className="h-[60px] w-[90px] rounded-full border-2 border-dotted p-1 sm:h-[80px] sm:w-[80px]">
                    <div className="bg-primary flex h-full w-full items-center justify-center rounded-full">
                      <div className="sm:scale-150">{award}</div>
                    </div>
                  </span>

                  <p className="text-primary max-w-[220px] text-sm font-[400] sm:text-[20px]">
                    Best Skin Care ProductAward Wining.
                  </p>
                </div>
              </div>
              <div className="text-primary flex w-full items-center justify-between px-6 py-2 text-[16px] uppercase sm:px-9 sm:py-4 sm:text-[20px]">
                <span className="decoration-secondary cursor-pointer hover:underline">
                  Since 2001
                </span>
                <span className="decoration-secondary cursor-pointer hover:underline">
                  Learn more
                </span>
              </div>
            </div>
          </section>

          {/* Our best Products */}
          <section className="mt-20 flex flex-col items-center gap-10 p-8">
            <div className="flex w-full flex-col items-start gap-15 lg:flex-row lg:items-center lg:justify-between">
              <div className="border-primary flex flex-1/4 items-center justify-between rounded-full border-2 px-2 py-1">
                <div className="bg-primary ml-3 h-5 w-5 rounded-full"></div>
                <span className="p-2 text-[16px] font-normal sm:text-[20px] lg:ml-2 lg:p-3">
                  Best Selling Products
                </span>
              </div>

              <h1 className="text-primary flex-1/2 text-[34px] leading-[100%] font-normal tracking-[-5%] sm:text-[50px] lg:text-center lg:text-[60px] lg:tracking-[-2%]">
                Skincare That Brings Out Your Natural Radiance
              </h1>

              <div className="hidden flex-1/4 lg:block">
                <div className="flex w-full items-center justify-center gap-8">
                  <span
                    className="cursor-pointer hover:scale-110 active:scale-105"
                    onClick={() => {
                      setCurrIndex((prev) => prev - 1);
                    }}
                  >
                    {leftArrow}
                  </span>

                  <span
                    onClick={() => {
                      setCurrIndex((prev) => prev + 1);
                    }}
                    className="cursor-pointer hover:scale-110 active:scale-105"
                  >
                    {rightArrow}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full">
              <ImageSlider currIndex={currIndex} setCurrIndex={setCurrIndex} />
            </div>
          </section>

          {/* Leaf Girl Photo  */}
          <section
            className="m-6 hidden aspect-3/2 items-end justify-center rounded-4xl bg-cover bg-center lg:flex"
            style={{ backgroundImage: `url(${LeafGirl})` }}
          >
            <div className="flex flex-col items-center justify-center gap-10 bg-transparent p-10">
              <h1 className="w-4xl flex-1/2 text-center text-[5vw] leading-[100%] font-normal tracking-[-2%] text-[#FEFFF4]">
                Feel Beautiful Inside and Out with Every Product.
              </h1>

              <div className="text-primary hover:bg-primary cursor-pointer rounded-full bg-[#FEFFF4] px-4 py-3 hover:text-slate-50">
                Shop Now
              </div>
            </div>
          </section>

          {/* More Products */}
          <section className="mt-8 flex flex-col items-center p-8 lg:mt-20">
            <div className="flex w-full flex-col gap-10 sm:gap-14 lg:items-center">
              <h1 className="text-primary w-2xs text-start text-[34px] leading-[100%] sm:w-xl sm:text-[50px] sm:tracking-[-2%] lg:text-center">
                Feel Beautiful Inside and Out with Every Product.
              </h1>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary border-primary hover:bg-secondary cursor-pointer rounded-full border-1 px-5 py-3 text-[#FEFFF4]">
                  NEW ARRIVAL
                </div>
                <div className="text-primary border-primary hover:bg-secondary cursor-pointer rounded-full border-1 bg-[#FEFFF4] px-5 py-3 hover:text-[#FEFFF4]">
                  CLEANSING
                </div>
                <div className="text-primary border-primary hover:bg-secondary cursor-pointer rounded-full border-1 bg-[#FEFFF4] px-5 py-3 hover:text-[#FEFFF4]">
                  ACNE FIGHTER
                </div>
                <div className="text-primary border-primary hover:bg-secondary cursor-pointer rounded-full border-1 bg-[#FEFFF4] px-5 py-3 hover:text-[#FEFFF4]">
                  ANTI AGGING
                </div>
              </div>

              <div className="w-full">
                <ImageSlider
                  currIndex={currIndex}
                  setCurrIndex={setCurrIndex}
                />
              </div>
            </div>
          </section>

          {/* Faq */}
          <section className="mt-8 flex flex-col items-center gap-15 lg:mt-20 lg:flex-row-reverse lg:gap-8">
            <div className="flex w-full flex-col gap-8 p-8 sm:gap-12 lg:flex-1">
              <div className="border-primary flex w-max flex-1/4 items-center justify-between rounded-full border-2 px-2 py-1">
                <div className="bg-primary ml-3 h-5 w-5 rounded-full"></div>
                <span className="ml-2 p-2 text-[16px] font-normal sm:text-[20px] lg:ml-2 lg:p-3">
                  Frequently Asked Question
                </span>
              </div>

              <h1 className="text-primary flex-1/2 text-[34px] leading-[100%] font-normal tracking-[-2%] sm:w-md sm:text-[50px] lg:w-lg lg:text-[55px]">
                Answers to Your Skincare Questions, All in One Place.
              </h1>
              <ul className="flex flex-col gap-3 lg:gap-4">
                {faq.map((value, index) => (
                  <PopupBar
                    key={index}
                    index={index}
                    ques={value.ques}
                    ans={value.ans}
                    openPanel={openPanel}
                    setOpenPanel={setOpenPanel}
                  />
                ))}
              </ul>
            </div>

            <div
              className="flex aspect-[3/4] w-full items-end justify-center bg-cover bg-center sm:hidden lg:m-8 lg:flex lg:flex-1 lg:rounded-4xl"
              style={{ backgroundImage: `url(${WhiteCream3})` }}
            >
              <div className="mb-4 flex items-center gap-3 rounded-full bg-[#F8FEE5] px-4 py-2 shadow-md lg:mb-8">
                <span className="h-[60px] w-[90px] rounded-full border-2 border-dotted p-1 sm:h-[80px] sm:w-[80px]">
                  <div className="bg-primary flex h-full w-full items-center justify-center rounded-full">
                    <div className="sm:scale-150">{headphone}</div>
                  </div>
                </span>

                <p className="text-primary max-w-[220px] text-sm font-[400] sm:text-[20px]">
                  24/7 We’re Here <br /> to Help You
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-primary mt-[5vh] flex w-full flex-col items-center justify-between overflow-hidden lg:pt-[10vh]">
          <div className="flex w-full flex-col items-center gap-[12vh] p-10 text-[#EFF5E1] lg:h-[50vh] lg:flex-row">
            <div className="flex w-full flex-col gap-[10vh] lg:h-full lg:justify-between">
              <h1 className="text-[34px] leading-[100%] font-normal tracking-[-2%] sm:w-md sm:text-[50px] lg:w-lg lg:text-[55px]">
                Join The Skincare Community Now.
              </h1>
              <ul className="flex w-full justify-between text-[14px] leading-[100%] font-normal tracking-[-5%] sm:text-[20px]">
                <span className="cursor-pointer hover:scale-110">Facebook</span>
                <span className="cursor-pointer hover:scale-110">
                  Instagram
                </span>
                <span className="cursor-pointer hover:scale-110">YouTube</span>
              </ul>
            </div>

            <div className="flex w-full flex-col gap-[10vh] lg:h-full lg:justify-between">
              <div className="text-end sm:text-start">
                <h3 className="w-full">Get In Touch</h3>
                <h1 className="text-[34px] leading-[100%] font-normal tracking-[-2%] sm:w-md sm:text-[50px] lg:w-lg lg:text-[55px]">
                  contact.skincare.com
                </h1>
              </div>

              <ul className="flex w-full justify-between text-[14px] leading-[100%] font-normal tracking-[5%] sm:text-[20px]">
                <span className="cursor-pointer hover:scale-110">
                  Terms of Service
                </span>
                <span className="cursor-pointer hover:scale-110">
                  Privacy Policy
                </span>
                <span className="cursor-pointer hover:scale-110">
                  Cookies Policy
                </span>
              </ul>
            </div>
          </div>

          {/* <div className='overflow-hidden'> */}
          <h2 className="translate-y-1/3 text-[20vw] font-[800] text-[#35433E] uppercase lg:leading-[80%]">
            skincare
          </h2>
          {/* </div> */}
        </footer>
      </div>
    </div>
  );
}

export default App;
