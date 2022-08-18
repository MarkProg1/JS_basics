/*
 * Babel - транспиляция кода.
 * import, export
 */

// code for default import, export
import qwe from "./js/validate-password";

console.log(qwe);
//именнованый импорт, экспорт
import { fetchAllUsers as x } from "./js/api-service";
x();

// code for babel
const sum = (a, b) => a + b;
sum(2, 3);

class Hero {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}
