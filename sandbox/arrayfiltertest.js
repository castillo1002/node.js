const title = "The Shinning"

let arr =
    [
        {
            title: "The Shinning",
            body: "It was a great movie"
        },
        {
            title: "Groceries",
            body: "Dont forget groceries"
        }
    ]

console.log(arr.filter(cur => cur.title === title))
