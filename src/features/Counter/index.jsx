import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import styles from './styles.module.css';
CounterFeature.propTypes = {};

function CounterFeature(props) {
   const dispatch = useDispatch();
   const count = useSelector((state) => state.counter);
   const handleIncrease = () => {
      const action = increase();
      dispatch(action);
   };
   const handleDecrease = () => {
      const action = decrease();
      console.log(action);
      dispatch(action);
   };
   return (
      <div className={styles.counter}>
         Counter: {count}
         <Stack spacing={2} direction="row">
            <Button variant="contained" color="success" onClick={handleIncrease}>
               increase
            </Button>
            <Button variant="outlined" onClick={handleDecrease}>
               decrease
            </Button>
         </Stack>
      </div>
   );
}

export default CounterFeature;
