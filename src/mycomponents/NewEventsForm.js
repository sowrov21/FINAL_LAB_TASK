import { useState } from "react";
import "./NewEventsForm.css";

export default function NewEventsForm({ addDiaryEvents }) {
	const [newEvents, setNewEvents] = useState({
		id: "",
		title: "",
		date: "",
		details: "",
	});

	const changeEvents = (e) => {
		const attar = e.target.name;
		const value = e.target.value;
		const data = { ...newEvents, [attar]: value };
		setNewEvents(data);
	};

	const formSubmit = (e) => {
		e.preventDefault();

		addDiaryEvents(newEvents);

		setNewEvents({
			id: "",
			title: "",
			date: "",
			details: "",
		});
	};

	return (
		<div className="form">
			<form onSubmit={formSubmit}>
				<table>
					<thead></thead>
					<tbody>
						<tr>
							<td>ID</td>
							<td>
								<input
									type="number"
									name="id"
									value={newEvents.id}
									onChange={changeEvents}
								/>
							</td>
						</tr>
						<tr>
							<td>Title</td>
							<td>
								<input
									type="text"
									name="title"
									value={newEvents.title}
									onChange={changeEvents}
								/>
							</td>
						</tr>
						<tr>
							<td>Date</td>
							<td>
								<input
									type="date"
									name="date"
									value={newEvents.date}
									onChange={changeEvents}
								/>
							</td>
						</tr>
						<tr>
							<td>Details</td>
							<td>
								<textarea name="details" onChange={changeEvents}>
								{newEvents.details}
								</textarea>
								{/*<input
									type="text"
									name="details"
									value={newEvents.details}
									onChange={changeEvents}
								/>*/}
							</td>
						</tr>
						<tr>
							<td></td>
							<td>
								<button type="submit">Add</button>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	);
}
