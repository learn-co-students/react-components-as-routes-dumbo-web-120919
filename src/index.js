import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About'
import Login from './Login'
import Navbar from './NavBar'

//Step 1. Import react-router functions step 4. add navlink to importer
import { BrowserRouter as Router, Route} from 'react-router-dom';

// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };

//Step 4. NavLink: How to find links

/** basic styling for navlink*/
// const link ={
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

/** add navbar component**/
// const Navbar = () =>
//   <div>
//     <NavLink to="/" exact /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//     style={link} /* add styling to Navlink */
//     activeStyle={{ background: 'darkblue' }} /* add prop for activeStyle */
//     >Home</NavLink>
//     <NavLink to="/about" exact style={link} activeStyle={{ background: 'darkblue' }}>About</NavLink>
//     <NavLink to="/login" exact style={link} activeStyle={{ background: 'darkblue' }}>Login</NavLink>
//   </div>;


//Step 3. adding ABOUT and LOGIN
// const About = () => {
//   return (
//     <div>
//       <h1>This is about component!</h1>
//     </div>
//   );
// };

// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login"/>
//       </form>
//     </div>
//   )
  

// }

//Step 2. Changed to have router coordinate what is displayed
ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home}/> {/** this is for the function above*/} 
      {/* <Route path="/" render={() => <h1>Home!</h1>} /> */}
      {/* using render prop to write inline code directly in route*/}
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login}/>
    </div>
  </Router>),
  document.getElementById('root')
);
// exact path means it the url has to be such in order for it to render
