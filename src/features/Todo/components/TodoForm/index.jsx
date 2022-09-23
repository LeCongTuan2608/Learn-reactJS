import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'features/form-control/InputField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
// import InputField from '../../../forSm-control/InputField';
import * as yup from 'yup';
TodoForm.propTypes = {
   onSubmit: PropTypes.func,
};

function TodoForm(props) {
   const schema = yup.object().shape({
      title: yup.string().required('may chua nhap kia'),
   });
   const form = useForm({
      defaultValues: {
         title: '',
      },
      resolver: yupResolver(schema),
   });
   const handleSub = (value) => {
      console.log('value', value);
      props.setTest(value);
   };
   return (
      <form onSubmit={form.handleSubmit(handleSub)}>
         <InputField name="title" label="Todo" form={form} />
      </form>
   );
}

export default TodoForm;
