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

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormData>({ resolver: zodResolver(schema) });

	const onSubmit = (data: FieldValues) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					placeholder="Enter you name here!"
					id="name"
					type="text"
					className="form-control"
					{...register('name')}
				/>
				{errors.name && (
					<p className="text-danger">{errors.name.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input
					placeholder="Enter your age here!"
					id="age"
					type="number"
					className="form-control"
					{...register('age', { valueAsNumber: true })}
				/>

				{errors.age && (
					<p className="text-danger">{errors.age.message}</p>
				)}
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};

export default Form;
