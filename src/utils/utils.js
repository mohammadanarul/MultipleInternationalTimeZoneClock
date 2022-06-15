export const isObjectEmpty = (obj) =>{
    return Object.keys(obj).length === 0;
}

export const objectDeepclone = (obj) =>{
    return JSON.parse(JSON.stringify(obj))
}