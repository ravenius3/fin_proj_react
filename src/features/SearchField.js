import { useState } from 'react';
import { selectStockBySymbolLetter } from '../components/companies/companySlice';
import {Formik, Form, Field, ErrorMessage } from 'formik';

const SearchField = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilterData] = useState(selectStockBySymbolLetter(searchInput));


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        setFilterData(searchInput);
    }

    return (
        <>
            <h3>Search Stock Symbols</h3>
            <input 
                type='text'
                placeholder='Search stock symbols...'
                onChange={handleChange}
            />
        </>
    )
};

export default SearchField;