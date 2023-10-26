import { useState, useEffect } from "react";

import { sample } from "./data";
import useDebounce from "./useDebounce";
import "./App.css";

function App() {
	const [search1, setSearch1] = useState("");
	const [search2, setSearch2] = useState("");
	const [sampleList1, setSampleList1] = useState(sample);
	const [sampleList2, setSampleList2] = useState(sample);

	const debouncedValue = useDebounce(search2, 1500);

	function handleSearch1(value) {
		let temp = sample.filter((item) => {
			return item.name.toLowerCase().includes(value);
		});

		setSampleList1(temp);
	}

	function handleSearch2(value) {
		let temp = sample.filter((item) => {
			return item.name.toLowerCase().includes(value);
		});

		setSampleList2(temp);
	}

	useEffect(() => {
		handleSearch1(search1);
	}, [search1]);

	useEffect(() => {
		handleSearch2(debouncedValue);
	}, [debouncedValue]);

	return (
		<div className="App">
			<h1>Debouncing example</h1>
			<br />
			<br />
			<p>
				Debouncing is a programming practice used to ensure that time-consuming
				tasks do not fire so often, that it stalls the performance of the web
				page. In other words, it limits the rate at which a function gets
				invoked. I have made this website to show the effects of debouncing when
				used in a search bar. You can see and compare both the list and the
				effectsof debouncing when applied. The time between each debounced call
				is 1.5 seconds just to make it more clearer
			</p>
			<br />
			<input
				onChange={(e) => {
					setSearch1(e.target.value);
					setSearch2(e.target.value);
				}}
				placeholder="Enter a name to search"
			/>
			<br />
			<h2>Data</h2>
			<br />
			<div className="container">
				<div className="nondebounced">
					<h3>Search List Without Debouncing</h3>
					<h4>Value for this list:{search1}</h4>
					{sampleList1 &&
						sampleList1.map((data, index) => {
							return (
								<div id={index}>
									<p>{data.name}</p>
									<p>{data.email}</p>
									<p>{data.company}</p>
									<p>{data.phone}</p>
									<br />
								</div>
							);
						})}
				</div>
				<div className="debounced">
					<h3>Search List With Debouncing</h3>
					<h4>Value for this list:{debouncedValue}</h4>
					{sampleList2 &&
						sampleList2.map((data, index) => {
							return (
								<div id={index}>
									<p>{data.name}</p>
									<p>{data.email}</p>
									<p>{data.company}</p>
									<p>{data.phone}</p>
									<br />
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default App;
