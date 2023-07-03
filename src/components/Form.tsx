import { useRef, useState } from 'react';

const Form = () => {
	// const nameRef = useRef<HTMLInputElement>(null);
	// const ageRef = useRef<HTMLInputElement>(null);
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);
	// to save the values on server, we make an Object:
	const person = { name: '', age: 0 };

	const handleChangeName = (e: any) => {
		setName(e.target.value);
		// console.log(person);
	};
	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// console.log(nameRef.current?.value);
		// // ODER SO
		// if (nameRef.current !== null) {
		// 	// console.log(nameRef.current.value);
		// 	person.name = nameRef.current.value;
		// }
		// // console.log(ageRef.current?.value);
		// // ODER SO
		// if (ageRef.current !== null) {
		// 	// console.log(ageRef.current.value);
		// 	// person.age = Number(ageRef.current.value);
		// 	// ODER SO
		// 	person.age = parseInt(ageRef.current.value);
		// }
		person.name = name;
		console.log(person);
		// console.log('Submitted!');
	};
	return (
		// <div>Form</div>
		<form onSubmit={handleFormSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					// ref={nameRef}
					id="name"
					type="text"
					className="form-control"
					value={name}
					onChange={handleChangeName}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					// ref={ageRef}
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
