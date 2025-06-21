import { useEffect, useMemo, useRef } from 'react';
import { ProductCard } from './ProductCard';
import PinkCream from '../assets/PinkCream.jpg';
import WhiteCream from '../assets/WhiteCream.jpg';
import WhiteCream3 from '../assets/WhiteCream3.jpg';
import { leftArrow, rightArrow } from '../assets/IconsSvg';

const ImageSlider = ({currIndex, setCurrIndex}) => {
  const sliderRef = useRef(null);

  const creamArr = useMemo(
    () => [
      {
        image: PinkCream,
        name: 'ALYA SKIN CLEANSER.',
        price: '29.99',
      },
      {
        image: WhiteCream,
        name: 'RITUAL OF SAKURA.',
        price: '27.99',
      },
      {
        image: WhiteCream3,
        name: 'THE BODY LOTION.',
        price: '19.99',
      },
    ],
    []
  );

  useEffect(() => {
    if (currIndex === 0) return;
    let id = ((currIndex + creamArr.length) % creamArr.length) + 1;

    document
      .getElementById(String(id))
      ?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
  }, [currIndex, creamArr]);

  return (
    <div className="flex flex-col items-center gap-10">
      <div
        ref={sliderRef}
        className="h-full w-full overflow-x-scroll lg:flex scroll-smooth whitespace-nowrap"
        style={{ scrollbarWidth: 'none' }}
      >
        {creamArr.map((value, index) => (
          <ProductCard
            key={index}
            id={index + 1}
            image={value.image}
            name={value.name}
            price={value.price}
            currIndex={currIndex}
          />
        ))}
      </div>

      <div className="flex  w-full items-center justify-center gap-8 lg:hidden">
        <span
          onClick={() => {
            setCurrIndex((prev) => prev - 1);
          }}
          className="cursor-pointer hover:scale-110 active:scale-105"
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
  );
};

export default ImageSlider;
