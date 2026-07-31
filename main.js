
import { filterAdults, groupUsers } from "./reusableFunc.js";

let users = [
    { name: "Madugu", age: 15 },
    { name: "Bwehbum", age: 25 },
    { name: "Ibiwumi", age: 70 },
    { name: "David", age: 30 }
];

let adults = filterAdults(users);

let groupedUsers = groupUsers(users);

console.log("Adults:");
console.log(adults);

console.log("Grouped Users:");
console.log(groupedUsers);
