export const searchFunction = (arr, keyword) => { //without export EXAMPLE WITH DEFAULT
    return arr.filter((trip) => {
        return trip.description.includes(keyword)
    })
}

// export default searchFunction EXAMPLE WITH DEFAULT