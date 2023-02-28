const MainWrapper = ({ children, className = "" }) => {
  return (
    <div className={`px-[1.6rem] mx-auto max-w-[154rem] lg:px-20 ${className}`}>
      {children}
    </div>
  );
};

export default MainWrapper;
