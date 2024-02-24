import ReactDOM from 'react-dom/client'
import './style/index.scss'
import {BrowserRouter} from 'react-router-dom'
import RouterMain from './router/RouterMain'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "react-redux";
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <ChakraProvider>
    <BrowserRouter>
    <PersistGate loading={null} persistor={persistor}>
    <RouterMain/>
    </PersistGate>
    </BrowserRouter>
  </ChakraProvider>
  </Provider>
)
