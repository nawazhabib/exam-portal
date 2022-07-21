import React from "react";

const Message = ({ error, children }) => {
    return (
        <div
            className={`w-full my-4 p-3 border  text-base text-center  
            bg-opacity-20 rounded ${
                error
                    ? " text-red-500 border-red-500 bg-red-50 "
                    : " text-green-500 border-green-50 bg-green-50 "
            }
           
           `}
        >
            {children}
        </div>
    );
};

export default Message;
