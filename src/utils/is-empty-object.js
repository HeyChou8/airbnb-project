export function isEmptyO(obj) {
    //!! 将其他类型转为布尔类型
    return !!Object.keys(obj).length
}