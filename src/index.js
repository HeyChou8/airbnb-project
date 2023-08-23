import ReactDOM from 'react-dom/client'
import App from '@/app'
import 'normalize.css'
import './assets/css/index.css'
import theme from './assets/theme'
import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './store'
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    // 如果进行路由懒加载则需要用Suspense进行包裹
    <Suspense fallback={<div className="loading-overlay">
    <div className="loading-spinner"></div>
  </div>}>
        <Provider store={store}>
          {/* 提供主题，可自定义主题 */}
        <ThemeProvider theme={theme}>
        <HashRouter>
          <App/>
        </HashRouter>
    </ThemeProvider>
        </Provider>
    </Suspense>
)   