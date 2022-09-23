import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
   const dispatch = useDispatch();

   const handleSubmit = async (value) => {};
   return (
      <div>
         <RegisterForm onSubmit={handleSubmit} />
      </div>
   );
}

export default Register;
