const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a, b)
    }, 1000)
}

add(5, 6, (a, b) => {
    console.log(a + b)
})
