import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link
} from 'react-router-dom'

import HomePage from './views/HomePage'
import ListCourse from './views/ListCourse'

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/login" render={() => <Login />} /> */}
        {/* <Route path="/login">
          <Login />
        </Route> */}
        {/* <Route path="/404">
          <Redirect to="/login" />
        </Route> */}
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/listcourse">
          <ListCourse />
        </Route>
        {/* <PrivateRoute path="/">
          <HomePage />
        </PrivateRoute> */}
      </Switch>
    </Router>
  )
}

//login->logout, tải lại trang home vẫn đc
//mong muốn: chỉ khi login mới can vào trang home
// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest} //path
//       render={() =>
//         localStorage.todoApp_accessToken ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               // state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   )
// }

export default App
