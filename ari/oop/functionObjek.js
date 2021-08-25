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
Animal.prototype.drink = function(){
    return "water"
}
function Owner(nameAnimal){
    this.nameOwn = ''
    Animal.call(this,nameAnimal)
}

// const tony = new Owner("cesi")
const cat = new Animal("cat")
cat.name = "veron"
cat.setGender("betina")
console.log(cat.getGender());
console.log(cat.drink());