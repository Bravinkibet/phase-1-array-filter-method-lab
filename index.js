// Code your solution here
function findMatching(source, sought) {
    return source.filter(function(possibleMatch) {
        return possibleMatch.toLowerCase() === sought.toLowerCase();
    });
}

function fuzzyMatch(source, testString) {
    return source.filter(function(possibleMatch) {
        return possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0;
    });
}

function matchName(source, soughtName) {
    return source.filter(function(record) {
        return record.name === soughtName;
    });
}