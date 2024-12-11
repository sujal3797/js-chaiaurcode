let a = 300

if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);

function one(){
    const username = "sujal"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if(true) {
    const username = "sujal"
    if (username === "sujal") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website)
}

// console.log(username)

// ++++++++++++++++++++++ interesting ++++++++++++++++++++++

console.log(addone(5)) //exectues just as fine
function addone(num) {
    return num+1;
}

console.log(addTwo(5)) //gives error
const addTwo = function(num) {
    return num+2
}