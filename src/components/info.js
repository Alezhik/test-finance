import React from 'react';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Info({ setSuccessAdd }) {
	const classes = useStyles();

	return (
		<div>
			<Paper className={classes.root}>
				<Typography variant="h5" component="h3">
					This is a sheet of paper.
				</Typography>
				<Typography component="p">
					Paper can be used to build surface or other elements for your application.
				</Typography>
				<NavLink to="/add" >
					<Fab
						variant="extended"
						aria-label="Delete"
						className={classes.fab}
					>
						<AddIcon className={classes.extendedIcon} />
						Add new transaction
					</Fab>
				</NavLink>
			</Paper>
		</div>
	);
}