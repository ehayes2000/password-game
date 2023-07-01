    import React, { useEffect, useState, useRef } from "react";
    import Rule from "./Rule";
    import CaptchaRule from "./CaptchaRule";
    import EnterPassword from "./EnterPassword"
    import { hasMonth, 
            hasNumeral, 
            hasSponsor, 
            sponsorContents,
            multiplyNumerals} from "./rules.definitions.js";
    
    const Validator = () => {
        const captchas = [
            "/ext/captchas/2b827.png", 
            "/ext/captchas/3dgmf.png",
            "/ext/captchas/8fexn.png",
            "/ext/captchas/d3c7y.png",
            "/ext/captchas/mmg38.png",
            "/ext/captchas/pe4xn.png",
            "/ext/captchas/w4nfx.png",
            "/ext/captchas/x775w.png",
            "/ext/captchas/xgcxy.png",
            "/ext/captchas/y5g87.png",
            "/ext/captchas/wmpmp.png",
        ]
        const [password, setPassword] = useState("");
        const [latestRule, setLatestRule] = useState(0);
        const [rulesActive, setRulesActive] = useState(false);
        const [captchaVal, setCaptchaVal] = useState(":)");
        const captchaValRef = React.useRef(captchaVal);
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
                rule: sponsorContents,
                isValid: hasSponsor,
                isDisplayed: false,
                satisfied: false,
            }, 
            {
                name: 9,
                rule: "The roman numerals in your password must multiply to 35.",
                isValid: multiplyNumerals,
                isDisplayed: false,
                satisfied: false,
            },
            {
                name: 10, 
                rule:
                <div className="flex flex-col items-center">
                    <p> Your password must include this CAPTCHA: </p>
                    <CaptchaRule images={captchas} setCaptcha={setCaptchaVal}/>
                </div>,
                isValid: password => password.includes(captchaValRef.current),//password => password.includes(captchaVal[0]), //password.includes(captchaVal),
                isDisplayed: false,
                satisfied: false,
            }
        ]);

        useEffect(() => {
            captchaValRef.current = captchaVal;
        }, [captchaVal])
   
        useEffect(() => {
            // First update all 'satisfied' and 'wasValid' properties
            let active = false;
            if (password.length > 0){
                setRulesActive(true);
                active = true;
            }
            if (!rulesActive && !active){
                return;
            }
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
        }, [password, latestRule, captchaVal]);
        
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