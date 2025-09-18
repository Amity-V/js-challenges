// Create a function, tipCalculator(), that has two parameters — a string representing
// the quality of the service received and a number representing the total cost.

// Return the tip amount, as a number, based on the following quality index:

// - 'bad' should return a 5% tip
// - 'ok' should return a 15% tip
// - 'good' should return a 20% tip
// - 'excellent' should return a 30% tip
// - any other quality inputs should default to an 18% tip

// Write your function here:

const tipCalculator = (quality, total) => {
    let tip;

    switch (quality) {
        case "bad":
            tip = total * 0.05;
            break;
        case "ok":
            tip = total * 0.15;
            break;
        case "good":
            tip = total * 0.2;
            break;
        case "excellent":
            tip = total * 0.3;
            break;
        default:
            tip = total * 0.18;
            break;
    }

    return tip;
};

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20
