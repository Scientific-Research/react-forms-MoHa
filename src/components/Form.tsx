const Form = () => {
	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log('Submitted!');
		e.preventDefault();
	};
	return (
		// <div>Form</div>
		<form onSubmit={handleFormSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input id="name" type="text" className="form-control" />
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">
					Age
				</label>
				<input id="age" type="number" className="form-control" />
			</div>
			<button className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};

export default Form;
