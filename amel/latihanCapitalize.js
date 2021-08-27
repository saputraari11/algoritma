var teks = "halo semuanya !";

function changeCase(str) {
    return str.replace(/\w\S*/g, 
        function(a){
            return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
        });
}

console.log(changeCase(teks));