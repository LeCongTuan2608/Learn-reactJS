import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

InputField.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,

   label: PropTypes.string,
   disabled: PropTypes.bool,
};

function InputField(props) {
   const { form, name, label, disabled } = props;
   const {
      formState: { errors },
   } = form;

   return (
      <Controller
         name={name}
         control={form.control}
         render={({ field: { onChange } }) => (
            <TextField
               fullWidth
               variant="outlined"
               margin="normal"
               onChange={onChange}
               label={label}
               disabled={disabled}
               error={form.formState.errors && errors[name]}
               helperText={errors[name]?.message}
            />
         )}
      />
   );
}

export default InputField;
