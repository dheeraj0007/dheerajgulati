import React from "react";

const NotFound = () => {
  return (
    <div className="p-4 flex justify-center flex-col items-center h-[90vh] uppercase">
      <p className="text-sm font-semibold">oops! page not found</p>
      <h1 className="text-[160px] md:text-[200px] font-bold leading-44">404</h1>
      <p className="text-sm font-semibold px-10 text-center">
        we are sorry, but the page you requested was not found
      </p>
    </div>
  );
};

export default NotFound;
