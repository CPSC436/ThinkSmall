import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const tags = [
  { label: 'Near me' },
  { label: 'Urgent', color: 'primary' },
  { label: 'Call for designers', color: 'primary' },
  { label: 'Call for developers', color: 'primary' },
  { label: 'call for translators', color: 'secondary' },
];

export default function Chips() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
          {tags.map(({ label, color }, i) => (
              <Chip key={i} label={label} clickable color={color} />
      ))}
      </div>
  );
}
