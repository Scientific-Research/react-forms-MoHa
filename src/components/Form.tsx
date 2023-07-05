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
		reset,
		formState: { errors },
	} = useForm<IFormData>({ resolver: zodResolver(schema) });

	// const onSubmit = (data: FieldValues) => console.log(data);
	const onSubmit = (values: IFormData) => {
		schema.parse(values);
		setData([...data, values]);
		reset();
	};

	const totalAmount = data.reduce((acc, item) => acc + item.Amount, 0);

	const handleDelete = (index: number) => {
		setData(data.filter((_, i) => i !== index));
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
					className="form-select"
					aria-label="Default select example"
					id="category"
					{...register('Category')}
				>
					<option defaultChecked>Open this select category</option>
					<option label="groceries">Groceries</option>
					<option label="utilities">Utilities</option>
					<option label="entertainment">Entertainment</option>
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
				<select className="form-select" id="AllCategory">
					<option defaultChecked>All categories</option>
					<option value="1" label="groceries">
						Groceries
					</option>
					<option value="2" label="utilities">
						Utilities
					</option>
					<option value="3" label="entertainment">
						Entertainment
					</option>
				</select>
			</div>

			<table className="table table-bordered">
				<thead>
					<tr>
						{/* <th scope="col">#</th> */}
						<th scope="col">Description</th>
						<th scope="col">Amount</th>
						<th scope="col">Category</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							{/* <th scope="row">1</th> */}
							<td>{item.Description}</td>
							<td>{`$${item.Amount}.00`}</td>
							<td>{item.Category}</td>
							<td>
								<button onClick={() => handleDelete(index)}>
									DELETE
								</button>
							</td>
							{/* <td>Total {`$${(Total = Total + item.Amount)}`}</td> */}
						</tr>
					))}
					{/* <td>Total</td> */}
				</tbody>
				<tfoot>
					<tr>
						<th>Total</th>
						<th>{`$${totalAmount}.00`}</th>
					</tr>
				</tfoot>
			</table>
		</form>
	);
};

export default Form;
