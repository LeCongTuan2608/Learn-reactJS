import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
PassWordField.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,

   label: PropTypes.string,
   disabled: PropTypes.bool,
};

function PassWordField(props) {
   const { form, name, label, disabled } = props;
   const [showPassword, setShowPassWord] = useState(false);
   const {
      formState: { errors },
   } = form;
   const toggleShowPassWord = () => {
      setShowPassWord((x) => !x);
   };

   return (
      <FormControl
         error={form.formState.errors && errors[name]}
         fullWidth
         margin="normal"
         variant="outlined">
         <InputLabel htmlFor={name}>{label}</InputLabel>
         <Controller
            name={name}
            control={form.control}
            render={({ field: { onChange } }) => (
               <OutlinedInput
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  onChange={onChange}
                  label={label}
                  disabled={disabled}
                  id={name}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                     <InputAdornment position="end">
                        <IconButton
                           aria-label="toggle password visibility"
                           onClick={toggleShowPassWord}
                           edge="end">
                           {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                     </InputAdornment>
                  }
               />
            )}
         />
         <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
   );
}

export default PassWordField;
