import React, { useState } from "react";
const EnterPassword = ( {setPassword} ) => {
    return (
        <div>
                    
            <input  className="w-full h-12 px-4 py-2 
            text-lg rounded-lg font-semibold font-mono text-gray-800
            bg-gray-300 shadow-md
            focus:outline-none focus:border focus:border-slate-500"  type="text" onChange = {(e) => setPassword(e.target.value)} />
        </div>
    )
}

export default EnterPassword; 