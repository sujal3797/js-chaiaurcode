const myNums = [1,2,3]

// const myTotal = myNums.reduce( (acc, currVal) => {
//     console.log(`acc: ${acc} and currval: ${currVal}`);
//     return acc + currVal;
// }, 0);

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 299
    },
    {
        itemName: "mobile dev",
        price: 5999
    },
    {
        itemName: "web dev",
        price: 2999
    }
]

const total = shoppingCart.reduce( (acc, currObj) => (acc+currObj['price']), 0);
console.log(total);
