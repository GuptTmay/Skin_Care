const ImageBar = (props) => {
  return (
    <div className="gap absolute mb-7 flex items-center w-max justify-between rounded-full p-2 self-end bg-[#F8FEE5]">
      <img src={props.img}  className={`w-[60px] h-[60px] rounded-full border-dotted border-2 p-1 ${props.imgStyles}`} alt={props.alt} />
      <div className="m-[8px] text-primary text-[14px] font-[400] w-[220px]">
        {props.title}
      </div>
    </div>
  );
};

export default ImageBar;
