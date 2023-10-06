import { RAWDATA } from "../../app/shared/STOCK_SYMBOLS_COMPANIES";
import {dataConverter} from "../../utils/dataConverter";

export const symbolAndCompanyList = dataConverter(RAWDATA);

const apiKey = process.env.REACT_APP_API_KEY;

const getDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear()
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

        if (dd < 10) {
            dd = '0' + dd;
        } 
        if (mm < 10) {
            mm = '0' + mm;
        }  

    const compiledDate = `${yyyy}-${mm}-${dd}`;
    return compiledDate
}

const compiledDate = getDate();

export const fetchData = async (searchTerm) => {
    const response = await fetch(`https://api.polygon.io/v1/open-close/${searchTerm}/${compiledDate}?adjusted=true&apiKey=${apiKey}`);
    if(!response.ok){
        return Promise.reject(`Unable to fetch, status: ${response.status}.`)
    }
    const data = await response.json
    return data;
}