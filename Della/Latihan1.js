function callAge(a){

    function age(){
        return `my old is ${a}`
    }
    return age
}
const myOld = callAge(10)

console.log(myOld());