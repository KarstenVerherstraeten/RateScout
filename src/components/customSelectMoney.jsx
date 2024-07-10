import React from 'react';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import USAFlag from '../assets/flags/USAFlag.png';
import EUFlag from '../assets/flags/EU.png';
import style from '../styles/Home.module.css';

const animatedComponents = makeAnimated();

const options = [
    { value: 'USD', label: <div className={style.optionLabel}><img src={USAFlag} alt="USD" className={style.optionImage} /> USD</div> },
    { value: 'EUR', label: <div className={style.optionLabel}><img src={EUFlag} alt="EUR" className={style.optionImage}/> EUR</div> },
    { value: 'GBP', label: <div className={style.optionLabel}><img src="path-to-flag/gb.png" alt="GBP" className={style.optionImage} /> GBP</div> },
    { value: 'INR', label: <div className={style.optionLabel}><img src="path-to-flag/in.png" alt="INR" className={style.optionImage} /> INR</div> },
    { value: 'CAD', label: <div className={style.optionLabel}><img src="path-to-flag/ca.png" alt="CAD" className={style.optionImage} /> CAD</div> },
    { value: 'AUD', label: <div className={style.optionLabel}><img src="path-to-flag/au.png" alt="AUD" className={style.optionImage} /> AUD</div> },
    { value: 'CHF', label: <div className={style.optionLabel}><img src="path-to-flag/ch.png" alt="CHF" className={style.optionImage} /> CHF</div> },
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
        paddingTop: 0,
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

const Menu = (props) => {
    return (
        <div>
            {props.selectProps.inputValue && (
                <div className={style.searchIndicator}>
                    Searching for: <strong>{props.selectProps.inputValue}</strong>
                </div>
            )}
            <components.Menu {...props} />
        </div>
    );
};

const CustomSelect = ({ value, onChange, placeholder }) => {
    return (
        <Select
            components={{ ...animatedComponents, Menu }}
            styles={customStyles}
            options={options}
            value={value}
            onChange={onChange}
            isSearchable
            placeholder={placeholder}
        />
    );
};

export default CustomSelect;