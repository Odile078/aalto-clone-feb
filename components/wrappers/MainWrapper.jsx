const MainWrapper = ({ children, className = "" }) => {
  return (
    <div className={`px-4 mx-auto max-w-7xl lg:px-20 ${className}`}>
      {children}
    </div>
  );
};

export default MainWrapper;
