import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {  
        padding: '10px 0', 
        width: '140px',
        color: '#fff', 
        fontWeight: 'bold',
      },
    },
  }),
);

type ButtonProps = {
  children: React.ReactNode
}

function ButtonAdd( {children}: ButtonProps ) {
  const classes = useStyles();

  return (
    <>
      <Button className={classes.root} variant="contained" type='submit' color="primary">
        {children}
      </Button>
    </>
  );
}

export default ButtonAdd;