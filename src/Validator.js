import React, { useEffect, useState } from "react";
import Rule from "./Rule";
import EnterPassword from "./EnterPassword"
 
const Validator = () => {
    const [password, setPassword] = useState("");
    const [rules, setRules] = useState([
        {
            name: 1,
            rule: "password must be at least 5 characters long",
            isValid: password => password.length >= 5,
            isDisplayed: false,
            satisfied: false, 
            wasValid: false,
        },    
        {
            name: 2,
            rule: "password must contain a number",
            isValid: password => /\d/.test(password),
            isDisplayed: false,
            satisfied: false,
            wasValid: false,
        }
        // ... add more rules here ...
    ]);

    useEffect(() => {
        // First update all 'satisfied' and 'wasValid' properties
        const updatedRules = rules.map((rule, index) => {
            const isRuleValid = rule.isValid(password);
            return {
                ...rule,
                satisfied: isRuleValid,
                wasValid: isRuleValid || rule.wasValid,
            };
        });
    
        // Then update 'isDisplayed' properties
        setRules(updatedRules.map((rule, index) => {
            const shouldRuleBeDisplayed = index === 0 || (updatedRules[index - 1] && updatedRules[index - 1].wasValid);
            return {
                ...rule,
                isDisplayed: shouldRuleBeDisplayed,
            };
        }));
    }, [password]);
    

    return (
        <div className="flex flex-col h-screen pt-10 items-center">
            <EnterPassword className="block w-full" setPassword={setPassword} />
            {rules.slice().reverse()
            .map((r, i) => (
                <Rule name={r.name} rule={r.rule} hidden={!r.isDisplayed} satisfied={r.satisfied}/>
            ))}
        </div>
    )
}


export default Validator;  // setRules(rules.map((rule, index) => {
    //     const shouldRuleBeDisplayed = index === 0 || (rules[index - 1] && rules[index - 1].isDisplayed && rules[index -1].wasValid);
    //     return { ...rule, isDisplayed: shouldRuleBeDisplayed};
    // }));