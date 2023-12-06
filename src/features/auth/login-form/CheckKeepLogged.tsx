import { useState, ChangeEvent } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { FunctionComponent } from "react";


const CheckKeepLogged: FunctionComponent = () =>  {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'Checkbox' }}
    />
  );
};

export default CheckKeepLogged;