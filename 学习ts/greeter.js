function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jack", lastName: "Rose" };
document.body.innerHTML = greeter(user);
