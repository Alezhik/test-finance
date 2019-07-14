import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
	},
	secondaryHeading: {
		color: theme.palette.text.secondary,
		marginLeft: 'auto',
	},
	details :{
		flexDirection: 'column',
	}
}));

const TramsactionItem = ({classes, category, type, amount, fromTo, description }) => (
	<ExpansionPanel>
		<ExpansionPanelSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="panel1a-content"
			id="panel1a-header"
		>
			<Typography className={classes.heading}>{category}</Typography>
			<Typography className={classNames(classes.heading, classes.secondaryHeading)}>
				{`${type}${amount}`}
			</Typography>
		</ExpansionPanelSummary>
		<ExpansionPanelDetails className={classes.details}>
			<Typography>
				{fromTo}
			</Typography>
			<Typography>
				{description}
			</Typography>
		</ExpansionPanelDetails>
	</ExpansionPanel>
);

export default function Transactions({ transactions }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{transactions.map(transaction => 
				<TramsactionItem classes={classes} {...transaction} key={transaction.id} />
			)}
		</div>
	);
}