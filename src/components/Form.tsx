import { useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const Form = () => {
	// const form = useForm();
	const { register, handleSubmit } = useForm();

	const onSubmit = (data: FieldValues) => console.log(data);
	// console.log(register('name'));
	// const nameRef = useRef<HTMLInputElement>(null);
	// const ageRef = useRef<HTMLInputElement>(null);
	// const [name, setName] = useState('');
	// const [age, setAge] = useState('');
	// to save the values on server, we make an Object:
	// const person = { name: '', age: '' };

	// const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setName(e.target.value);
	// 	// setName({ ...name, name: e.target.value });

	// 	// console.log(person);
	// };

	// const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setAge(e.target.value);
	// };
	// const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	// console.log(nameRef.current?.value);
	// 	// // ODER SO
	// 	// if (nameRef.current !== null) {
	// 	// 	// console.log(nameRef.current.value);
	// 	// 	person.name = nameRef.current.value;
	// 	// }
	// 	// // console.log(ageRef.current?.value);
	// 	// // ODER SO
	// 	// if (ageRef.current !== null) {
	// 	// 	// console.log(ageRef.current.value);
	// 	// 	// person.age = Number(ageRef.current.value);
	// 	// 	// ODER SO
	// 	// 	person.age = parseInt(ageRef.current.value);
	// 	// }
	// 	person.name = name;
	// 	person.age = age;
	// 	console.log(`Name: ${person.name} \nAge: ${person.age}`);
	// 	// console.log('Submitted!');
	// };
	return (
		// <div>Form</div>
		// <form onSubmit={handleSubmit((data) => console.log(data))}>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					placeholder="Enter you name here!"
					// ref={nameRef}
					id="name"
					type="text"
					className="form-control"
					// value={name}
					// onChange={handleChangeName}
					{...register('name')}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					placeholder="Enter your age here!"
					// ref={ageRef}
					id="age"
					type="number"
					className="form-control"
					// value={age}
					// onChange={handleChangeAge}
					{...register('age')}
				/>
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};

export default Form;
