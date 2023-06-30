import React, { useEffect, useState } from "react";
import Rule from "./Rule";
import EnterPassword from "./EnterPassword"
 
const Validator = () => {
    const [password, setPassword] = useState("");
    const [rules, setRules] = useState([
        {
            name: 1,
            rule: "Password must be at least 5 characters long",
            isValid: password => password.length >= 5,
            isDisplayed: false,
            satisfied: false, 
            wasValid: false,
        },    
        {
            name: 2,
            rule: "Password must contain a number",
            isValid: password => /\d/.test(password),
            isDisplayed: false,
            satisfied: false,
            wasValid: false,
        },
        {
            name: 2,
            rule: "Password must be lenth 10",
            isValid: password => password.length === 10,
            isDisplayed: false,
            satisfied: false,
            wasValid: false,
        },

        // ... add more rules here ...
    ]);

    useEffect(() => {
        // First update all 'satisfied' and 'wasValid' properties
        let updatedRules = rules.map((rule, index) => {
            const isRuleValid = rule.isValid(password);
            return {
                ...rule,
                satisfied: isRuleValid,
                wasValid: isRuleValid || rule.wasValid,
            };
        });
        
        // Then update 'isDisplayed' properties
        setRules(updatedRules.map((rule, index) => {
            let shouldRuleBeDisplayed = updatedRules[index - 1] && updatedRules[index - 1].wasValid;
            if (password.length > 0 && index == 0) {
                return {
                    ...rule, 
                    isDisplayed: true, 
                }
            }
            return {
                ...rule,
                isDisplayed: shouldRuleBeDisplayed,
            };
        }));
    }, [password]);
    

    return (
        
        <div className="flex flex-col h-screen pt-10 items-center">
            <h1 className="text-4xl flex items-center font-serif">
            <span className="text-6xl inline-block relative" style={{top: '0.2em'}}>*</span> The Password Game
            </h1>
            <EnterPassword className="block" setPassword={setPassword} />
          
         
            {rules.slice().reverse()
            .map((r, i) => (
                <Rule name={r.name} rule={r.rule} hidden={!r.isDisplayed} satisfied={r.satisfied}/>
            ))}
        </div>
    )
}


export default Validator; 