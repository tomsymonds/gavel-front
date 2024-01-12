const pluralize = (string, array) => {
    return `${string}${array.length > 1 ? "s" : ""}`
}

export default pluralize