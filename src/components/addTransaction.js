import React from 'react';
import clsx from 'clsx';
// import {BrowserRouter as Route, Redirect} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const currencies = [
	{
		value: '+',
		label: 'bedit',
	},
	{
		value: '-',
		label: 'credit',
	},
];

const requiredFields = ['category', 'amount', 'description', 'type','fromTo'];

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		minWidth: 200,
		width: 'calc(25% - 16px)',
	},
	dense: {
		marginTop: theme.spacing(2),
		width: '100%',
	},
	menu: {
		width: 200
	},
	button: {
		margin: theme.spacing(1),
	},
}));

export default function AddTransaction({ successAdd, add }) {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		category: '',
		amount: '',
		description: '',
		type: '+',
		fromTo: '',
		categoryError: false,
		amountError: false,
		descriptionError: false,
		typeError: false,
		fromToError: false,
		success: false
	});

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	};
	
	const handleSubmit = () => event => {
		event.preventDefault();
		requiredFields.forEach(field => validate(field));
		const { category, amount, description, type, fromTo } = values;
		add({category, amount: Math.abs(parseInt(amount, 10)), description, type, fromTo});
	};

	const validate = name => () => {
		if (values[`${name}`]) {
			setValues({ ...values, [`${name}Error`]: false });
		} else {
			setValues({ ...values, [`${name}Error`]: true });
		}
		if (values.amount < 0) {
			setValues({ ...values, type: '-' });
		} else {
			setValues({ ...values, type: '+' });
		}
	}

	const defualtPropsTextField = {
		className: classes.textField,
		margin: "normal",
		variant: "outlined",
		required: true

	}
	
	return (
		<form className={classes.container} onSubmit={handleSubmit()}>
			<div className={classes.dense}>
				<TextField
					id="outlined-select-type"
					select
					label="Type"
					value={values.type}
					onChange={handleChange('type')}
					onBlur={validate('type')}
					SelectProps={{
						MenuProps: {
							className: classes.menu,
						},
					}}
					helperText="Please select your trasaction type"
					error={values.typeError}
					{...defualtPropsTextField}
				>
					{currencies.map(option => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
				<TextField
					id="outlined-number"
					label="Amount"
					value={values.amount}
					onChange={handleChange('amount')}
					onBlur={validate('amount')}
					type="number"
					InputLabelProps={{
						shrink: true,
					}}
					error={values.amountError}
					{...defualtPropsTextField}
				/>
				<TextField
					id="outlined-name"
					label="Category"
					value={values.category}
					onChange={handleChange('category')}
					onBlur={validate('category')}
					error={values.categoryError}
					{...defualtPropsTextField}
				/>
				<TextField
					id="outlined-name"
					label="From/to"
					value={values.fromTo}
					onChange={handleChange('fromTo')}
					onBlur={validate('fromTo')}
					error={values.fromToError}
					{...defualtPropsTextField}
				/>
			</div>
			<TextField
				id="outlined-dense-multiline"
				label="description"
				className={clsx(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				multiline
				rowsMax="4"
				required
				error={values.descriptionError}
				onBlur={validate('description')}
				onChange={handleChange('description')}
			/>
			<Button 
				variant="outlined" 
				className={classes.button}
				type="submit"
			>
				Create transactions
			</Button>
		</form>
	);
};
