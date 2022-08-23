import b from "./b";
const a = 5 + b;

class User {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }
}

new User("Mango").showName();

export default a;
