import { FieldValues, useForm } from 'react-hook-form';
// import { z } from 'zod';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';

// interface IData {
// 	description: string;
// 	amount: number;
// 	category: string;
// }

const schema = z.object({
	Description: z
		.string()
		.min(3, { message: 'Description should be at least 3 characters.' }),
	Amount: z.number({ invalid_type_error: 'Amount is required!' }),
	Category: z.string({ invalid_type_error: 'Category is required.' }),
	// Total: z.number(),
	// .min(18, { message: 'Age must be at least 18.' }),
});

type IFormData = z.infer<typeof schema>;
const Form = () => {
	let Total = 0;
	const [data, setData] = useState<IFormData[]>([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormData>({ resolver: zodResolver(schema) });

	// const onSubmit = (data: FieldValues) => console.log(data);
	const onSubmit = (values: IFormData) => {
		schema.parse(values);
		setData([...data, values]);
	};

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
					<p className="text-danger">{errors.Description.message}</p>
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
					<p className="text-danger">{errors.Amount.message}</p>
				)}
			</div>

			<div className="mb-3">
				<label htmlFor="category">Category</label>
				<select
					className="form-control"
					id="category"
					{...register('Category')}
				>
					<option defaultChecked></option>
					<option>Groceries</option>
					<option>Utilities</option>
					<option>Entertainment</option>
				</select>
				{errors.Category && (
					<p className="text-danger">{errors.Category.message}</p>
				)}
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
			<br />
			<br />
			<div className="mb-3">
				<label htmlFor="AllCategory"></label>
				<select
					className="custom-select"
					id="AllCategory"
					// {...register('AllCategory')}
				>
					<option defaultChecked>All categories</option>
					<option>Groceries</option>
					<option>Utilities</option>
					<option>Entertainment</option>
				</select>
			</div>

			<table className="table table-bordered">
				<thead>
					<tr>
						{/* <th scope="col">#</th> */}
						<th scope="col">Description</th>
						<th scope="col">Amount</th>
						<th scope="col">Category</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							{/* <th scope="row">1</th> */}
							<td>{item.Description}</td>
							<td>{`$${item.Amount}.00`}</td>
							<td>{item.Category}</td>
							<td>Total {`$${(Total = Total + item.Amount)}`}</td>
						</tr>
					))}
					{/* <td>Total</td> */}
				</tbody>
			</table>
		</form>
	);
};

export default Form;
