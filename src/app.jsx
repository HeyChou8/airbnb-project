import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import useRemoveStorage from './hooks/useRemoveStorage'
import useScrollTop from './hooks/useScrollTop'
import routes from './router'
const App = memo(() => {
  useScrollTop()
  useRemoveStorage()
  return (
    <div className='app'>
        <AppHeader/>
        <div className="page">
          {useRoutes(routes)}
        </div>
        <AppFooter/>
    </div>
  )
})

export default App

