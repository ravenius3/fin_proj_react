import { RAWDATA } from "../../app/shared/STOCK_SYMBOLS_COMPANIES";
import dataConverter from "../../utils/dataConverter";

export const symbolAndCompanyList = dataConverter(RAWDATA);

export const selectStockBySymbolLetter = (input) => {
    const filteredList = symbolAndCompanyList.reduce((acc, cur) => {
        if(cur.symbol.startsWith(input)) {
            return [...acc, cur];
        } else {
            return acc;
        }
    } ,[])

    return filteredList;
}