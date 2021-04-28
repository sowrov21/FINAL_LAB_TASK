import { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Info } from "./allStaticData";
import Diary from "./mycomponents/Diary";
import NewEventsForm from "./mycomponents/NewEventsForm";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./mycomponents/Pages/Home";
import About from "./mycomponents/Pages/About";
import Navbar from "./mycomponents/Layouts/Navbar";
import DataTable from "./mycomponents/Pages/AllDataTable";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function DiaryList() {
	const [list, setNewEvents] = useState(Info);
	//add new Events
	const addDiaryEvents = (newEvents) => {
		setNewEvents([...list, newEvents]);
	};

	//delete the event
	const deleteInfo = (id) => {
		setNewEvents(list.filter((data) => data.id != id));
	};

	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					<Route exact path="/add">
						<table>
							<thead></thead>
							<tbody>
								<tr>
									<td>
										{" "}
										<NewEventsForm addDiaryEvents={addDiaryEvents} />{" "}
									</td>
									<td>
										{list.map((data, index) => {
											return (
												<Diary key={index} {...data} deleteInfo={deleteInfo} />
											);
										})}
									</td>
								</tr>
							</tbody>
						</table>
					</Route>

					<Route exact path="/view">
						<DataTable />
					</Route>

					<Route exact path="/about">
						<About />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

ReactDOM.render(<DiaryList />, document.getElementById("root"));
