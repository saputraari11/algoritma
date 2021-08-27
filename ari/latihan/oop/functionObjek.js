function Animal(name){
    this.nameAnimal = name
    this.name = ""
    this.leg = 0
    this.voice = ""
    this.weight = 0 
    this.food = ""
    this.gender = Boolean

    this.setGender = function(gender){
        if(gender === ("jantan"||"male")){
            this.gender = true
        }
        else{
            this.gender = false
        }
    }
    this.getGender=function(){
        if(this.gender){
            return `${this.nameAnimal+this.name} is male`
        }
        else{
            return `${this.nameAnimal+' '+this.name} is female`
        }
    }

}
function Owner(){
    this.nameOwn = ''

    //inherit with Object.call(this)
    Animal.call(this,"cat")
    this.callThis = function(){
        return this
    }

    this.callName=function(){
        return 'user'+this.nameOwn
    }
}

const ari = new Owner()
const devi = new Owner()
//@Overriding
ari.callName=function(){
    return this.nameOwn
}
ari.nameOwn = "ari"
// const tony = new Owner("cesi")
const cat = new Animal("cat")
cat.name = "veron"
cat.setGender("betina")
console.log(cat.getGender());
console.log(ari.callThis());
console.log(ari.callName());
console.log(devi)