export const listReducer = (array, input) => {
    let reducedArray = [];

    let re = new RegExp(`\\b${input}`);
    for (let item of array) {
        if(re.test(item.symbol)) {
            reducedArray.push(item);
        }
    }
    return reducedArray;
}
