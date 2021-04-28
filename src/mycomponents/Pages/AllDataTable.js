import { useState, useEffect } from "react";
import axios from "axios";

const DataTable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		loadingData();
	}, []);

	const loadingData = async () => {
		const result = await axios.get("http://localhost:5050/Info");
		console.log(result);
		setData(result.data);
	};

	return (
		<div className="container">
			<h1> Here all your diary</h1>

			<table class="table">
				<thead class="thead-dark">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Title</th>
						<th scope="col">Date</th>
						<th scope="col">Details</th>
					</tr>
				</thead>
				<tbody>
					{data.map((dt, index) => (
						<tr>
							<th scope="row">1</th>
							<td>{dt.title}</td>
							<td>{dt.date}</td>
							<td>{dt.details}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DataTable;
