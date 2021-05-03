const inputs = process.argv.slice(2);

const results = inputs.map((value) => {
    return numberToPhonetic(value);
})
console.log(results.join(","));


function numberToPhonetic(value) {
    let phoneticVersion = "";

    for (const digit of value) {
        const phoneticDigit = mutateDigit(digit);
        phoneticVersion = phoneticVersion.concat(phoneticDigit);
    }
    return phoneticVersion;
}

function mutateDigit(digit) {
    switch (digit) {
        case '0':
            return 'Zero';
        case '1':
            return 'One';
        case '2':
            return 'Two';
        case '3':
            return 'Three';
        case '4':
            return 'Four';
        case '5':
            return 'Five';
        case '6':
            return 'Six';
        case '7':
            return 'Seven';
        case '8':
            return 'Eight';
        default:
            return 'Nine';
    }
}