export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end -2
    if (url.charAt(start) === '/') {
        start++
    }
    return +url.slice(start,end) 
}

export function removeChildern(container) {
    while (container.firstChild) {
        container.removeChildern(container.firstChild)
    }
}