import { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Info } from "./allStaticData";
import Diary from "./mycomponents/Diary";
import NewEventsForm from "./mycomponents/NewEventsForm";

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
							return <Diary key={index} {...data} deleteInfo={deleteInfo} />;
						})}
					</td>
				</tr>
			</tbody>
		</table>
	);
}

ReactDOM.render(<DiaryList />, document.getElementById("root"));
