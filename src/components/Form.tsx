import { useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
	name: z.string().min(3, { message: 'Name must be at least 3 characters.' }),
	age: z
		.number({ invalid_type_error: 'Age field is required!' })
		.min(18, { message: 'Age must be at least 18.' }),
});

type IFormData = z.infer<typeof schema>;

// interface IFormData {
// 	name: string;
// 	age: number;
// }

const Form = () => {
	// const form = useForm();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<IFormData>({ resolver: zodResolver(schema) });
	// console.log(formState.errors);

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
					// {...register('name', { required: true, minLength: 3 })}
					{...register('name')}
				/>
				{/* {errors.name?.type === 'required' && ( */}
				{errors.name && (
					<p className="text-danger">
						{/* The name must be at least three characters! */}
						{errors.name.message}
					</p>
				)}
				{/* {errors.name?.type === 'minLength' && (
					<p className="text-danger">The name field is required!</p>
				)} */}
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
					// {...register('age', { required: true })}
					{...register('age', { valueAsNumber: true })}
				/>
				{/* {errors.age?.type === 'required' && (
					<p className="text-danger">The age field is required!</p>
				)} */}
				{errors.age && (
					<p className="text-danger">
						{/* The name must be at least three characters! */}
						{errors.age.message}
					</p>
				)}
			</div>
			<button
				disabled={!isValid}
				className="btn btn-primary"
				type="submit"
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
