interface Person {
    firstName: string;
    lastName: string;
    age: string;
}

function greeter(person: Person) {
    return "Hello," + person.firstName + " " + person.lastName + " " + person.age;
}

let user = { firstName: "Jack", lastName: "Rose", age: "18" };

document.body.innerHTML = greeter(user);