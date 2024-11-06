export const searchFunction = (arr, keyword) => {
    return arr.filter((trip) => {
        return trip.description.includes(keyword)
    })
}