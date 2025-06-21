import { cart, lightCart } from '../assets/IconsSvg';

export const ProductCard = (props) => {
  return (
    <div
      id={props.id}
      className="z-20 ml-3 inline-flex h-[470px] sm:h-[770px] w-[322px] sm:w-[560px] items-end justify-center rounded-2xl bg-gray-700 bg-cover bg-center p-2"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="m-1 flex w-full justify-between rounded-xl bg-[#FEFFF4] px-3 py-2 sm:p-4">
        <div className="flex flex-col justify-between">
          <span className="text-[14px] sm:text-[15px]  leading-[100%] tracking-[-5%]">
            {props.name}
          </span>
          <span className="text-[12px] leading-[100%] tracking-[-5%] text-[#2D3B3680] uppercase">
            From ${props.price}
          </span>
        </div>

        <div className={`flex h-[50px] hover:scale-105 cursor-pointer sm:h-[80px] w-[50px] sm:w-[80px] items-center justify-center rounded-md ${ props.currIndex % 3 === Math.abs(props.id % 3) ? 'bg-[#2D3B36]' : 'bg-[#2D3B361A]'} `}>
           {  props.currIndex % 3 === Math.abs(props.id % 3) ? lightCart : cart }
        </div>
      </div>
    </div>
  );
};
