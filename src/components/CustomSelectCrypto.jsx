import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import USAFlag from '../assets/flags/USAFlag.png'
import { components } from 'react-select';
import style from '../styles/Home.module.css'

const animatedComponents = makeAnimated();

const options = [
    { value: 'USD', label: <div className={style.optionLabel}><img src={USAFlag} alt="BTC" className={style.optionImage} /> USD</div> },
    { value: 'GBP', label: <div><img src="path-to-flag/gb.png" alt="ETH" /> GBP</div> },
    // Add more options as needed
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: '5px',
        padding: '5px',
        borderColor: '#ccc',
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: '5px',
    }),
    option: (provided, state) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: state.isSelected ? '#e6f2ff' : state.isFocused ? '#f2f2f2' : '#fff',
    }),
    input: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
    }),
 
};

const CustomSelectCrypto = ({ value, onChange }) => {
    return (
        <Select
            components={animatedComponents}
            styles={customStyles}
            options={options}
            value={value}
            onChange={onChange}
            isSearchable
        />
    );
};

export default CustomSelectCrypto;