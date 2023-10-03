const dataConverter = (string) => {
    let stockList = []
    let stockRowsArray = string.split('\n');
    let stockArray = [];

    for (const row of stockRowsArray) {
        const value = row.split(',');
        stockArray.push(value);
    }

    for (const array of stockArray) {
        let value1 = array[0];
        let value2 = array[1];
        stockList.push({symbol: value1, company: value2});
    }
    return stockList;
}

