export class Hero {
    id: number;
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let hero = new Hero('foobar');

document.getElementsByTagName('h1')[0].innerHTML = "hello " + hero.getName();
