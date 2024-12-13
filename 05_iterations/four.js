const coding = ["js", "cpp", "java", "python", "ruby"]

coding.forEach( function (item) {
    // console.log(item);
})

coding.forEach( (item) => {
    // console.log(item);
})

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})