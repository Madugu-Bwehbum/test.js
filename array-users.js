const users = [
    { name: "Madugu", age: 15 },
    { name: "Bwebum", age: 25 },
    { name: "Wumi", age: 40 },
    { name: "Patience", age: 70 },
    { name: "Jane", age: 12 }
];

    const userGroups = {
            minors: [],
            adults: [],
            seniors: []
};

    for (let user of users) {

         if (user.age < 18) {
        userGroups.minors.push(user);
        }

        else if (user.age >= 18 && user.age < 65) {
        userGroups.adults.push(user);
        }

    else {
        userGroups.seniors.push(user);
    }
}

console.log(userGroups);