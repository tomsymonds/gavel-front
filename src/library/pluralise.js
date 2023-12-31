const pluralize = (string, array) => {
    return `${string}${array.length > 2 ? "s" : ""}`
}

export default pluralize