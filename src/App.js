import Pages from './components/home/pages/Pages'
import './style/main.scss'
import {Provider} from 'react-redux'
import store from './controller/store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Pages />
      </Provider>
    </div>
  )
}

export default App
