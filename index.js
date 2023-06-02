// Code your solution here
function findMatching(array, string) {
    const matchingDrivers = [];
    for (const element of array) {
        if (element.toUpperCase() === string.toUpperCase()) {
            matchingDrivers.push(element)
        }
    }
    return matchingDrivers;
}

function fuzzyMatch(array, string) {
    const fuzzyDrivers = [];
    for (const element of array) {
        if (element.startsWith(string)) {
            fuzzyDrivers.push(element);
        }
    }
    return fuzzyDrivers;
}

function matchName(array, string) {
    const matches = [];
    for (const element of array) {
        if (element.name === string ) {
            matches.push(element);
        }
    }
    return matches
}