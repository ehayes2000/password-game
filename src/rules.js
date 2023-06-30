
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
        if (password.toLowerCase().includes(i)){
            return true;
        }
    }
    return false;
}

export const hasNumeral = (password) => {
    const digits = ["I", "V", "X", "L", "C", "D", "M"];
    for (let i of digits) { 
        if (password.includes(i)){
            return true
        }
    }
    return false;
}


export const hasSponsor = (password) => {
    const sponsors = ["nestle", "coke", "lockheed"];
    for (let i of sponsors) {
        if (password.toLowerCase().includes(i)){
            return true;
        }
        return false;
    }
}

export const hasSponsorContents = <div></div>;

