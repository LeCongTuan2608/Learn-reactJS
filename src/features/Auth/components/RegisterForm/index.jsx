import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import { Avatar, Button, Typography } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import InputField from 'features/form-control/InputField';
import PassWordField from 'features/form-control/PassWordField';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import './styles.scss';
RegisterForm.propTypes = {
   onSubmit: PropTypes.func,
};

function RegisterForm(props) {
   const dispatch = useDispatch();
   const [test, setTest] = useState({
      text: '',
      clas: '',
   });
   const schema = yup.object().shape({
      email: yup.string().required('Please enter you email').email('Please enter a valid email'),
      password: yup
         .string()
         .required('Please enter you password')
         .min(6, 'Password must be at least 6 characters'),
      fullName: yup
         .string()
         .required('Please enter your full name')
         .min(5, 'Nhập nhiều hơn 5 kí tự'),
      phone: yup.string().required('Please enter your phone'),
      address: yup.string().required('Please enter your address'),
      retypePassWord: yup
         .string()
         .required('Please retype your passWord')
         .oneOf([yup.ref('password')], 'Password must match'),
   });
   const form = useForm({
      defaultValues: {
         email: '',
         password: '',
         fullName: '',
         phone: '',
         address: '',
         retypePassWord: '',
      },
      resolver: yupResolver(schema),
   });
   const handleSub = async (value) => {
      const data = new FormData();
      let user;
      data.append('email', value.email);
      data.append('password', value.password);
      data.append('fullName', value.fullName);
      data.append('phone', value.phone);
      data.append('address', value.address);
      user = await dispatch(register(data)).unwrap();
      console.log('user', user);
      setTest({
         text: user,
         clas: user === 'TẠO TÀI KHOẢN THÀNH CÔNG!' ? 'message-succsess' : 'message-error',
      });
   };
   return (
      <div className="root">
         <Avatar className="avatar">
            <LockOutlined></LockOutlined>
         </Avatar>
         <Typography className="title" component="h3" variant="h5">
            Create account
         </Typography>
         <form onSubmit={form.handleSubmit(handleSub)}>
            Todo Form
            <InputField name="email" label="Email" form={form} />
            <InputField name="fullName" label="Full Name" form={form} />
            <InputField name="phone" label="Phone" form={form} />
            <InputField name="address" label="Address" form={form} />
            <PassWordField name="password" label="Password" form={form} />
            <p className={test.clas}>{test.text}</p>
            <PassWordField name="retypePassWord" label="Retype Pass Word" form={form} />
            <Button type="submit" className="submit" variant="contained">
               Create An Account
            </Button>
         </form>
      </div>
   );
}

export default RegisterForm;
