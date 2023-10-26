import { useState } from "react";

import { sample } from "./data";
import "./App.css";

function App() {
	const [search1, setSearch1] = useState("");
	const [search2, setSearch2] = useState("");
	const [sampleList, setSampleList] = useState(sample);

	function handleSearch(value) {
		let temp = sample.filter((item) => {
			return item.name.toLowerCase().includes(value);
		});

		setSampleList(temp);
	}

	return (
		<div className="App">
			<h1>Debouncing example</h1>
			<h2 className="calls">
				Scrolling Calls without debouncing of 2 seconds: {}
			</h2>
			<br />
			<br />
			<br />
			<h2 className="calls">
				Scrolling Calls with debouncing of 2 seconds: {}
			</h2>
			<br />
			<br />
			<p>
				Debouncing is a programming practice used to ensure that time-consuming
				tasks do not fire so often, that it stalls the performance of the web
				page. In other words, it limits the rate at which a function gets
				invoked. I have made this website to show the effects of debouncing when
				used in a search bar
			</p>
			<br />
			<input
				onChange={(e) => handleSearch(e.target.value)}
				placeholder="Enter a name to search"
			/>
			<br />
			<h2>Data</h2>
			<br />
			{sampleList &&
				sampleList.map((data, index) => {
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
	);
}

export default App;
