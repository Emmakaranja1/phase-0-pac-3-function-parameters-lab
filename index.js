function introduction(name) {
    return `Hi, my name is ${name}.`; // Returns a string introducing the name
}
// Function that takes name and language and returns a phrase
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
// Function that takes a name and an optional language parameter
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
// Function that takes name and language, defaults to JavaScript if not provided
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
