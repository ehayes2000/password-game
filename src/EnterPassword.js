import React, { useState } from "react";
const EnterPassword = ( {setPassword} ) => {
    return (
        <div>
            <input  className="bg-gray-300" type="text" onChange = {(e) => setPassword(e.target.value)} />
        </div>
    )
}

export default EnterPassword;