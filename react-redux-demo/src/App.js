import './App.css';
import Cake from './components/Cake'
import HooksIceCream from './components/HooksIceCream'
import { Provider } from 'react-redux'
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cake />
        <HooksIceCream />
      </div>
    </Provider>
  );
}

export default App;
