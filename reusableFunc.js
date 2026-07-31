
function filterAdults(users) {
    let adults = [];

    for (let user of users) {
        if (user.age >= 18) {
            adults.push(user);
        }
    }

    return adults;
}

function groupUsers(users) {
    let minors = [];
    let adults = [];
    let seniors = [];

    for (let user of users) {
        if (user.age < 18) {
            minors.push(user);
        } else if (user.age < 65) {
            adults.push(user);
        } else {
            seniors.push(user);
        }
    }

    return {
        minors: minors,
        adults: adults,
        seniors: seniors
    };
}

export { filterAdults, groupUsers };
