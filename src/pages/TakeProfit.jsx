import React, { useState } from "react";
import style from "../styles/TakeProfit.module.css";

const TakeProfitCalculator = () => {
	const [amount, setAmount] = useState("");
	const [percentageIncrease, setPercentageIncrease] = useState("");
	const [tp1, setTp1] = useState("");
	const [tp2, setTp2] = useState("");
	const [tp3, setTp3] = useState("");
	const [profits, setProfits] = useState({});

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};

	const handlePercentageIncreaseChange = (e) => {
		setPercentageIncrease(e.target.value);
	};

	const handleTp1Change = (e) => {
		setTp1(e.target.value);
	};

	const handleTp2Change = (e) => {
		setTp2(e.target.value);
	};

	const handleTp3Change = (e) => {
		setTp3(e.target.value);
	};

	const calculateProfit = () => {
		const initialAmount = parseFloat(amount);
		const increasePercentage = parseFloat(percentageIncrease);
		const tp1Percentage = parseFloat(tp1);
		const tp2Percentage = parseFloat(tp2);
		const tp3Percentage = parseFloat(tp3);

		if (
			initialAmount &&
			increasePercentage &&
			tp1Percentage &&
			tp2Percentage &&
			tp3Percentage
		) {
			const increase = initialAmount * (increasePercentage / 100);

			// Calculate TP1
			const tp1Profit = increase * (tp1Percentage / 100);
			const remainingAfterTp1 = initialAmount + increase - tp1Profit;

			// Calculate TP2
			const tp2Increase = remainingAfterTp1 * (increasePercentage / 100);
			const tp2Profit = tp2Increase * (tp2Percentage / 100);
			const remainingAfterTp2 = remainingAfterTp1 + tp2Increase - tp2Profit;

			// Calculate TP3
			const tp3Increase = remainingAfterTp2 * (increasePercentage / 100);
			const tp3Profit = tp3Increase * (tp3Percentage / 100);

			setProfits({
				tp1: tp1Profit,
				tp2: tp2Profit,
				tp3: tp3Profit,
			});
		} else {
			setProfits({});
		}
	};

	return (
		<div className="contentWrapper">
			<h1 className={style.title}>Take Profit Calculator</h1>
			<form className={style.takeProfitForm}>
				<div className={style.inputGroup}>
					<label htmlFor="amount">Amount:</label>
					<input
						type="number"
						id="amount"
						value={amount}
						onChange={handleAmountChange}
						placeholder="Enter amount in your base currency"
					/>
				</div>
				<div className={style.inputGroup}>
					<label htmlFor="percentageIncrease">Percentage Increase (%)</label>
					<input
						type="number"
						id="percentageIncrease"
						value={percentageIncrease}
						onChange={handlePercentageIncreaseChange}
						placeholder="Enter percentage increase"
					/>
				</div>
				<div className={style.inputGroup}>
					<label htmlFor="tp1">TP1 Percentage (%)</label>
					<input
						type="number"
						id="tp1"
						value={tp1}
						onChange={handleTp1Change}
						placeholder="Enter TP1 percentage"
					/>
				</div>
				<div className={style.inputGroup}>
					<label htmlFor="tp2">TP2 Percentage (%)</label>
					<input
						type="number"
						id="tp2"
						value={tp2}
						onChange={handleTp2Change}
						placeholder="Enter TP2 percentage"
					/>
				</div>
				<div className={style.inputGroup}>
					<label htmlFor="tp3">TP3 Percentage (%)</label>
					<input
						type="number"
						id="tp3"
						value={tp3}
						onChange={handleTp3Change}
						placeholder="Enter TP3 percentage"
					/>
				</div>
				<button
					type="button"
					className={style.submitButton}
					onClick={calculateProfit}
				>
					Calculate Profit
				</button>
			</form>
			{Object.keys(profits).length > 0 && (
				<div className={style.result}>
                    <h2>Potential Profits</h2>
					<div className={style.row}>
						

						<div className={style.Phases}>
							<div>
								<h2>Take-Profit</h2>
							</div>
							<div>
								<p>TP1:</p>
								<p>TP2:</p>
								<p>TP3:</p>
							</div>
						</div>

						<div className={style.Phases}>
							<div>
								<h2>profit in crypto</h2>
							</div>

							<div>
								<p>{profits.tp1.toFixed(8)}</p>
								<p>{profits.tp2.toFixed(8)}</p>
								<p>{profits.tp3.toFixed(8)}</p>
							</div>
						</div>

						<div className={style.Phases}>
							<div>
								<h2>Profit in money</h2>
							</div>

							<div>
								<p>20 USD</p>
                                <p>Comming soon...</p>
                                <p>Values aren't right</p>
							</div>
						</div>

						
					</div>
                    <div>
							<p>
								Total profit:{" "}
								{Object.values(profits)
									.reduce((a, b) => a + b, 0)
									.toFixed(8)} 

                                    or
                                    20 USD
							</p>
						</div>
				</div>
			)}
		</div>
	);
};

export default TakeProfitCalculator;
