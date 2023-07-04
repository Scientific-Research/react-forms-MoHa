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
					className="custom-select form-control"
					id="category"
					{...register('Category')}
					defaultChecked
				>
					<option></option>
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
				<label htmlFor="category"></label>
				<select
					className="custom-select"
					id="category"
					{...register('Category')}
				>
					<option defaultChecked>All categories</option>
					<option>Groceries</option>
					<option>Utilities</option>
					<option>Entertainment</option>
				</select>
				{errors.Category && (
					<p className="text-danger">{errors.Category.message}</p>
				)}
			</div>

			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td colSpan="2">Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</form>
	);
};

export default Form;
