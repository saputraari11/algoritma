// defination field and method within constructor metod
class A{
    constructor(){
        this.age = 10
        this.callAge = function(){
            return this.age
        }
    }
}
const a = new A()
console.log(`umur class A is ${a.age}`);
console.log(`class A call age with ${a.callAge()}`);
//  defination field and method without include constructor function
class B{
    age = 20
    callAge(){
        return this.age
    }
}
const b = new B()

console.log(`umur class B is ${b.age}`);
console.log(`class B call age with ${b.callAge()}`);
//  defination field and method with static and have to call with its class
class C{
    static age = 30
    static callAge(){
        return this.age
    }
}
console.log(`umur class C is ${C.age}`);
console.log(`class C call age with ${C.callAge()}`);
