import { useRef } from 'react';

const Form = () => {
	const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// console.log(nameRef.current?.value);
		// ODER SO
		if (nameRef.current !== null) {
			console.log(nameRef.current.value);
		}
		// console.log(ageRef.current?.value);
		// ODER SO
		if (ageRef.current !== null) {
			console.log(ageRef.current.value);
		}
		console.log('Submitted!');
	};
	return (
		// <div>Form</div>
		<form onSubmit={handleFormSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					ref={nameRef}
					id="name"
					type="text"
					className="form-control"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					ref={ageRef}
					id="age"
					type="number"
					className="form-control"
				/>
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};

export default Form;
