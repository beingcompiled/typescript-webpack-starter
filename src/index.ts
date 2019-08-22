export class C {
    private x = 10
    getX = () => this.x;
    setX = (newVal: number) => { this.x = newVal; }
}

export let x = new C();
export let y = { ...{ foo: "bar" } }

document.getElementsByTagName('h1')[0].innerHTML = "hello foo: " + y.foo;
