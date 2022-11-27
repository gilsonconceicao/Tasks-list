import React, {FC, InputHTMLAttributes} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '10px', 
      width: '100%',
      padding: '2px'
    },
  }),
);

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string, 
  textType: string, 
  name?: string, 
  value?: string, 
  placeholder: string, 
  onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: FC<TextInputProps> = ( {
  label, 
  textType,
  name, 
  value, 
  placeholder,
  onChange
}) => {
  const classes = useStyles();

  return (
    <>
      <TextField 
        className={classes.root}
        id="standard-basic" 
        type={textType} 
        label={label}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

export default TextInput;