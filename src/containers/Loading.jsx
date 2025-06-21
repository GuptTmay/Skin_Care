import "./Loading.css";

const Loading = ({ isLoading }) => {
  return (
    <div className={`absolute bg-[#BDC3AF] z-20 w-[100%] flex flex-col justify-center items-center h-screen ${!isLoading && "loader-hidden"}`}>
        <h1 className="text-6xl font-semibold text-primary">Skin Care</h1>
      <div className="hourglassBackground">
        <div className="hourglassContainer">
          <div className="hourglassCurves"></div>
          <div className="hourglassCapTop"></div>
          <div className="hourglassGlassTop"></div>
          <div className="hourglassSand"></div>
          <div className="hourglassSandStream"></div>
          <div className="hourglassCapBottom"></div>
          <div className="hourglassGlass"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
