// import mcdans from "../ext/mcdans.png";
// import bp from "../ext/bp-edited-fr.png";
// import lockheed from "../ext/lockheed.png"; 

export const hasMonth = (password) => {
    const months = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december"
    ];
    for (let i of months) {
        if (password.toLowerCase().includes(i)) {
            return true;
        }
    }
    return false;
}

export const hasNumeral = (password) => {
    const digits = ["I", "V", "X"];
    for (let i of digits) {
        if (password.includes(i)) {
            return true
        }
    }
    return false;
}



export const hasSponsor = (password) => {
    const sponsors = ["bp", "mcdonalds", "mcdonald's", "lockheed", "lockheed martin"];
    for (let i of sponsors) {
        if (password.toLowerCase().includes(i)) {
            return true;
        }
    }
    return false;
}

export const sponsorContents = 
    <div className="flex flex-col items-center space-y-4">
        <p>Your password must include one of our sponsors.</p>
        <div className="flex items-center space-x-4">
            <img className="w-24 h-24 object-contain" src={process.env.PUBLIC_URL + "/ext/mcdans.png"} alt="mcdans" />
            <img className="w-24 h-24 object-contain" src={process.env.PUBLIC_URL + "/ext/bp-edited-fr.png"} alt="bp" />
            <img className="w-36 h-36 object-contain" src={process.env.PUBLIC_URL + "/ext/lockheed.png"} alt="lockheed" />
        </div>
    </div>;

export const multiplyNumerals = (password) => {
    const getDigits = (password) => {
        const digits = new Set(["I", "V", "X"]);
        let numerals = [];
        let numeral = "";
        for (let i of password){
            if (digits.has(i)){
                numeral += i;
            }
            else if (numeral !== "") {
                numerals.push(numeral);
                numeral = "";
            }
        }
        if (numeral !== ""){
            numerals.push(numeral);
        }
        return numerals;
    }
    const romanNumbers = getDigits(password);
    const factors = new Map([["XXXV", 35], ["I", 1], ["VII", 7],["V", 5]]);
    let numbers = [];
    for (let i of romanNumbers){
        if (factors.get(i) === undefined){
            return false;
        }
        numbers.push(factors.get(i));
    }
    return numbers.reduce((acc, e) => acc * e, 1) === 35;
}

