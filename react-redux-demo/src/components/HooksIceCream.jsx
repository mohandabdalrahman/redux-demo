import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'
const HooksIceCream = () => {
  const { numOfIceCream } = useSelector(state => state.iceCream)
  console.log('🚀 ~ file: HooksIceCream.jsx ~ line 5 ~ HooksIceCream ~ numOfIceCream', numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
      <h2> number of iceCream {numOfIceCream} </h2>
      <button onClick={() => dispatch(buyIceCream())}> buy iceCream</button>
    </div>
  )
}



export default HooksIceCream
