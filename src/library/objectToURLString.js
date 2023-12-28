/**
 * Converts a plain object into an encoded URL params string
 * @param {*} object 
 * @returns 
 */
const objToURLString = (object) => {
    if(!object) return ""
    const values = Object.keys(object).map((key) => {
        let urlString
        if(typeof object[key] === 'object') {
            urlString = objToURLString(object[key])
        } else {
            urlString = encodeURIComponent(key) + "=" + encodeURIComponent(object[key])
        }
        return urlString
    })
    return values.join("&");
}

export default objToURLString

