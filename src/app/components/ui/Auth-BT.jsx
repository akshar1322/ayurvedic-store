import React from 'react';

const AuthBT = ({ text = "Sign up" }) => {
  return (
    <div>
      <button className="group flex items-center gap-2 rounded-full bg-[#645bff] px-6 py-3 font-bold text-white transition-colors duration-200 hover:bg-[#111]">
        {text}
        <div className="flex items-center justify-center">
          <div className="h-[2px] w-[10px] bg-[#645bff] transition-colors duration-200 group-hover:bg-white">
            <div className="absolute top-0 right-0 h-[2px] w-[2px] rotate-[-45deg] border-b-2 border-r-2 border-white transition-all duration-200 group-hover:right-[-3px]" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default AuthBT;
