// Write a function, toEmoticon(), that takes in a string as a parameter and
// returns the corresponding emoticon as a string. The returned value should
// be based on the following:

// - 'shrug' should return '|_{"}_|'
// - 'smiley face' should return ':)'
// - 'frowny face' should return':('
// - 'winky face' should return ';)'
// - 'heart' should return '<3'
// - any other input should return '|_(* ~ *)_|'

const toEmoticon = (string) => {
    let emoticon;

    switch (string) {
        case "shrug":
            emoticon = '|_{"}_|';
            break;
        case "smiley face":
            emoticon = ":)";
            break;
        case "frowny face":
            emoticon = ":(";
            break;
        case "winky face":
            emoticon = ";)";
            break;
        case "heart":
            emoticon = "<3";
            break;
        default:
            emoticon = "|_(* ~ *)_|";
            break;
    }

    return emoticon;
};

// Uncomment the line below when you're ready to try out your function
console.log(toEmoticon("whatever")) // Should print  '|_(* ~ *)_|'
