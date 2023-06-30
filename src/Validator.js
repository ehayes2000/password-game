import React, { useEffect, useState } from "react";
import Rule from "./Rule";
import EnterPassword from "./EnterPassword"

import { hasMonth, hasNumeral } from "./rules.js";
 
const Validator = () => {
    const [password, setPassword] = useState("");
    const [latestRule, setLatestRule] = useState(0);
    const [rules, setRules] = useState([
        {
            name: 1,
            rule: "Your password must be at least 5 characters long.",
            isValid: password => password.length >= 5,
            isDisplayed: false,
            satisfied: false,    
        },    
        {
            name: 2,
            rule: "Your password must contain a number.",
            isValid: password => /\d/.test(password),
            isDisplayed: false,
            satisfied: false,
        },
        {
            name: 3, 
            rule: "Your password must include an uppercase letter.",
            isValid: password => /[A-Z]/.test(password),
            isDisplayed: false, 
            satisfied: false,
           
        },
        {
            name: 4, 
            rule: "Your password must include an special character.",
            isValid: password => /[^A-Za-z0-9]/.test(password),
            isDisplayed: false, 
            satisfied: false,
           
        },
        {
            name: 5, 
            rule: "The digits of your password must sum to 25.",
            isValid: password => 
                password.match(/\d/g)?.reduce((acc, i) => acc + parseInt(i), 0) === 25,
            isDisplayed: false,
            satisfied: false,
        },
        {
            name: 6, 
            rule: "Your password must include a month.",
            isValid: hasMonth,
            isDisplayed: false,
            satisfied: false,
        },
        {
            name: 7, 
            rule: "Your password must include a roman numeral.",
            isValid: hasNumeral,
            isDisplayed: false,
            satisfied: false,
        }, 
        {
            name: 8, 
            rule: "Your password must include one of our sponsors.",
            isValid: hasNumeral,
            isDisplayed: false,
            satisfied: false,
        }, 
    ]);

    useEffect(() => {
        // First update all 'satisfied' and 'wasValid' properties
        let updatedRules = [...rules];
        for (let i = 0; i <= latestRule; i++ ){
            if (i >= rules.length)
                break;
            const isRuleSatisfied = rules[i].isValid(password);
            updatedRules[i].satisfied = isRuleSatisfied;
            updatedRules[i].isDisplayed = true;
            if (i === latestRule && isRuleSatisfied){
                setLatestRule(latestRule + 1);
                break;
            }
        }   
        setRules(updatedRules);
    }, [password, latestRule]);
    

    return (
        
        <div className="flex flex-col pt-10 items-center">
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