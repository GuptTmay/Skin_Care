import React from 'react';

const InfoBar = (props) => {
  return (
    <div className="flex flex-col gap-4 text-start">
      <h1 className="text-primary text-[34px] font-normal tracking-[-5%] sm:text-[55px]">
        {props.title}
      </h1>
      <p
        className="text-[16px] leading-[22px] tracking-[-3%] max-w-sm text-[#525349] sm:text-[18px] sm:leading-[24px] sm:tracking-[-2%]"
        dangerouslySetInnerHTML={{ __html: props.para }}
      ></p>
    </div>
  );
};

export default InfoBar;
