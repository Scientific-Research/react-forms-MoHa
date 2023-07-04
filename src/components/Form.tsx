import { useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
	Description: z
		.string()
		.min(3, { message: 'Description should be at least 3 characters.' }),
	Amount: z.number({ invalid_type_error: 'Amount is required!' }),
	Category: z.string({ invalid_type_error: 'Category is required.' }),
	// .min(18, { message: 'Age must be at least 18.' }),
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
				<label htmlFor="description" className="form-label">
					Description
				</label>
				<input
					placeholder="Enter description here!"
					id="description"
					type="text"
					className="form-control"
					{...register('Description')}
				/>
				{errors.Description && (
					<p className="text-danger">{errors.Description?.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount
				</label>
				<input
					placeholder="Enter your amount here!"
					id="amount"
					type="number"
					className="form-control"
					{...register('Amount', { valueAsNumber: true })}
				/>
				{errors.Amount && (
					<p className="text-danger">{errors.Amount?.message}</p>
				)}
			</div>
			<div className="form-group">
				<label htmlFor="category">Category</label>
				<select
					className="form-control"
					id="category"
					{...register('Category')}
				>
					<option></option>
					<option>Groceries</option>
					<option>Utilities</option>
					<option>Entertainment</option>
				</select>
				{errors.Category && (
					<p className="text-danger">{errors.Category?.message}</p>
				)}
			</div>
			<br />
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};

export default Form;
