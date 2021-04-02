import { buyCake } from '../redux/cake/cakeActions'
import { useSelector, useDispatch } from 'react-redux'
const HooksCake = () => {
  const numOfCakes = useSelector(state => state.cake)
  const dispatch = useDispatch()
  return (
    <div>
      <h2> number of cakes {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}> buy cake</button>
    </div>
  )
}



export default HooksCake
