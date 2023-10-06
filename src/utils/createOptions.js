export const createOptions = (array) => {
    let options = [];
    for (const item in array) {
        options.push({value: item.symbol, label: item.company})
    }
    return options;
}
