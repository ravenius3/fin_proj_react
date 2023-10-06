import { useEffect, useState } from 'react';
import { symbolAndCompanyList } from '../components/companies/companySlice';
import { listReducer } from '../utils/listReducer';
import CompanyCardList from '../features/CompanyCardList';
import Header from '../features/Header';
import { Container } from 'reactstrap'


const SearchField = () => {
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('')
    const [companyData, setCompanyData] = useState([]);

    const setFocus = (e) => {
        e.preventDefault();
        setOptions(symbolAndCompanyList);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value.toUpperCase());
        setOptions(listReducer(symbolAndCompanyList, value));
    }

    return (
        <Container>
            <div className='search-bar-dropdown'>
                <Header />
                <h3>Search Stock Symbols</h3>
                <input type="text" className="form-control" placeholder="Search for stock symbols..." onKeyUp={handleChange} onFocus={setFocus}/>
                    <ul className="list-group">
                        {options.map((option, index) => {
                            if(index < 15) {
                                return (
                                    <button 
                                        type="button" 
                                        className="list-group-item list-group-item-action active btn-outline-light" 
                                        key={index}
                                        onClick={() => {
                                            setCompanyData([...companyData, option.symbol]);
                                            setOptions([]);
                                            setValue('');
                                            }}>
                                        {option.symbol} | {option.company}
                                    </button>
                            )}
                        })}
                    </ul>
                <CompanyCardList companyData={companyData}/>
            </div>
        </Container>
    )
};

export default SearchField;