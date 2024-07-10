import React, { useState } from "react";
import homeCSS from "../styles/Home.module.css";
import CustomSelect from "../components/customSelectMoney"; // Adjust the import path as needed
import USAFlag from "../assets/flags/USAFlag.png";
import EUFlag from "../assets/flags/EU.png";

function Home() {
	const [conversionResult, setConversionResult] = useState(null);
	const [amountValue, setAmountValue] = useState("");
	const [fromValue, setFromValue] = useState({ value: 'USD', label: <div className={homeCSS.optionLabel}><img src={USAFlag} alt="USD" className={homeCSS.optionImage} /> USD</div> });
	const [toValue, setToValue] = useState({ value: 'EUR', label: <div className={homeCSS.optionLabel}><img src={EUFlag} alt="EUR" className={homeCSS.optionImage}/> EUR</div> });

	const handleConvert = () => {
		const options = { method: "GET", headers: { accept: "application/json" } };
		fetch(
			`https://api.fastforex.io/convert?from=${fromValue.value}&to=${toValue.value}&amount=${amountValue}&api_key=8cbcb77022-f8b1c52885-sgbhkg`,
			options
		)
			.then((response) => response.json())
			.then((response) => setConversionResult(response))
			.catch((err) => console.error(err));
	};

	const handleAmountChange = (e) => {
		setAmountValue(e.target.value);
	};

	return (
		<>
			<div className="contentWrapper">
				<div>
					<h1 className={homeCSS.title}>
						Welcome to <span>RateScout</span>
					</h1>
					<p className={homeCSS.text}>
						RateScout is a simple application that allows you to compare
						interest rates from different banks. You can also see cryptocurrency
						prices and exchange rates.
					</p>
				</div>

				<div className={homeCSS.ConvertWrapper}>
					<h2 className={homeCSS.title}>Convert your money!</h2>
					<div className={homeCSS.conversion}>
                        <div>
                        <input
							id="amount"
							type="number"
							value={amountValue}
							onChange={handleAmountChange}
							placeholder="Enter amount"
						/>
						<CustomSelect value={fromValue} onChange={setFromValue} placeholder="Select currency..." />
						<label htmlFor="to">To</label>
						<CustomSelect value={toValue} onChange={setToValue} placeholder="Select currency..." />
                        </div>

                        <div className={homeCSS.bottomHalf}>
						<button className={homeCSS.convertButton} id="convertButton" onClick={handleConvert}>
							Convert
						</button>
					</div>
					</div>
                    <p>
						{conversionResult &&
							JSON.stringify(conversionResult.result[toValue.value])}
					</p>
					<p>
						{conversionResult && JSON.stringify(conversionResult.result.rate)}
					</p>
				</div>
			</div>
		</>
	);
}

export default Home;