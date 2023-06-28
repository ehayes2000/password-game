import React, { useState } from "react";
import Rule from "./Rule";
import EnterPassword from "./EnterPassword"

const Validator = () => {
    const [password, setPassword] = useState("");
    const rule_len = {
        isValid: (p) => p.length >=  8,
        rule: "password must be at least 8 characters long",
    }
   

    return (
        <div>
            <EnterPassword setPassword={setPassword}/>
            <Rule valid={rule_len.isValid(password)} rule={rule_len.rule}/>
            
        </div>
    )
}   

export default Validator;