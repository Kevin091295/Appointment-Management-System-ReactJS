import React, { useState } from "react";

const AppointmentForm = ({ addAppointment }) => {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validation
		if (!name || !date) {
			setError("Both name and date are required!");
			return;
		}

		// Clear error and proceed
		setError("");
		addAppointment({ name, date });
		setName("");
		setDate("");
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				{error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
				<div className="row">
					<div className="col-25">
						<label htmlFor="fname">Full Name</label>
					</div>
					<div className="col-75">
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your name.."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="appointment-date">Appointment Date: </label>
					</div>
					<div className="col-75">
						<input
							id="appointment-date"
							name="date"
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<input type="submit" value="Add Appointment" />
				</div>
			</form>
		</div>
	);
};

export default AppointmentForm;
