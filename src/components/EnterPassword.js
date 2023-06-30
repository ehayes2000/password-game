import React, { useState } from "react";
const EnterPassword = ({ setPassword }) => (
    <div className="w-1/3 mx-auto pt-16">
        <div className="mb-3">
                Please choose a password
        </div>
        <input className="w-full h-12 px-4 py-2 
            text-lg rounded-lg font-semibold font-mono text-gray-800
            bg-white-300 shadow-md border border-slate-400
            focus:outline-none focus:border focus:border-slate-600"
            type="text" onChange={(e) => setPassword(e.target.value)} />
    </div>

)


export default EnterPassword; 