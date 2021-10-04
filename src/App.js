import { useState } from 'react'

import { Redirect, Route, Switch } from 'react-router-dom'

import { CartContext } from './core/context/CartContext'

import Header from './core/components/Header'
import Footer from './core/components/Footer'
import Content from './core/components/Content'

import List from './pages/list/List'

function App() {
  const [count, setCount] = useState(0)
  const value = { count, setCount }

  return (
    <CartContext.Provider value={value}>
      <Header />
      <Content>
        <Switch>
          <Redirect from="/" to="/phones" exact />
          <Route exact path="/phones">
            <List />
          </Route>
        </Switch>
      </Content>
      <Footer />
    </CartContext.Provider>
  )
}

export default App
