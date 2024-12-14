const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = mynums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums)

const newNums = []

mynums.forEach( (num) => {
    if(num > 5) {
        newNums.push(num);
    }
})

console.log(newNums);


const books = [
    {"title": "To Kill a Mockingbird", "genre": "Fiction", "publish": 1960, "edition": "1st"},
    {"title": "1984", "genre": "Dystopian", "publish": 1949, "edition": "1st"},
    {"title": "The Great Gatsby", "genre": "Classic", "publish": 1925, "edition": "1st"},
    {"title": "Pride and Prejudice", "genre": "Romance", "publish": 1813, "edition": "1st"},
    {"title": "The Hobbit", "genre": "Fantasy", "publish": 1937, "edition": "1st"},
    {"title": "Harry Potter", "genre": "Fantasy", "publish": 1997, "edition": "1st"},
    {"title": "The Catcher in the Rye", "genre": "Fiction", "publish": 1951, "edition": "1st"},
    {"title": "Moby-Dick", "genre": "Adventure", "publish": 1851, "edition": "1st"},
    {"title": "The Fellowship of the Ring", "genre": "Fantasy", "publish": 1954, "edition": "1st"},
    {"title": "The Alchemist", "genre": "Philosophical", "publish": 1988, "edition": "1st"}
]

let userBooks = books.filter( (bk) => bk.genre === "Fiction")
userBooks = books.filter( (bk) => {return bk.publish>1950})

console.log(userBooks);
