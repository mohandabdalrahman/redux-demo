import { buyCake } from '../redux/cake/cakeActions'
import { connect } from 'react-redux'
const Cake = ({ numOfCakes: { numOfCakes }, buyCake }) => {
  return (
    <div>
      <h2> number of cakes {numOfCakes} </h2>
      <button onClick={() => buyCake()}> buy cake</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  numOfCakes: state.cake
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  buyCake: () => dispatch(buyCake())
})

export default connect(mapStateToProps, mapDispatchToProps)(Cake)
