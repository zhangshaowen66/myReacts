import reducers from './reducers'
import configStore from './configStore.js'
const store = configStore(reducers)
export default store