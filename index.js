function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string === "Let's have dinner together!") {
        return "I would love to!";
    } else if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } 
}

console.log(shout("This is a shout"));
console.log(whisper("This is a whisper"));
logShout("I'm shouting");
logWhisper("I'm whispering");
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
console.log(sayHiToHeadphonedRoommate("do you want to go to dinner?"));
console.log(sayHiToHeadphonedRoommate("ARE YOU HUNGRY?"));
