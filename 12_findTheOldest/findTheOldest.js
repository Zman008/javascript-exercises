const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        let oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        let currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        if (currentAge > oldestAge) {
            return currentPerson;
        } else return oldest;
    })

    function getAge(death, birth) {
        if (!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
