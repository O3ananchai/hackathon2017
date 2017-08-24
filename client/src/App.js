import React, { PureComponent } from 'react'
import { ConnectedRouter as Router } from 'connected-react-router'
import { Route, Switch, Redirect } from 'react-router-dom'

import NoMatch from './components/NoMatch'
import Layout from './components/layout'
import SearchRoom from './pages/searchRoom'
import { history } from './store'

class App extends PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/signin" component={() => <div>Sign In</div>} />
          <Route path="/signup" component={() => <div>Sign Up</div>} />
          <Layout>
            <Switch>
              <Route
                path="/"
                exact
                component={() => <Redirect to="/search-room" />}
              />
              <Route path="/search-room" component={SearchRoom} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Switch>
      </Router>
    )
  }
}

export default App
