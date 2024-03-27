export const Loader = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center my-[4rem]">
      <div className="w-[50px] h-[50px] border-dashed border-4 border-orange800 rounded-[50%] animate-spin"></div>
      <h1 className="text-[20px] leading-[24px] font-bold mt-6">{text}</h1>
    </div>
  );
};

export default Loader;
