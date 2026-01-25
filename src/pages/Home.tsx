import NavBar from '../components/NavBar';


//react router
import {
 BrowserRouter as Router,
 Routes,
 Route,Link,
 createBrowserRouter,RouterProvider
} from "react-router-dom";

import App from  './App';
import App2 from  './App2';


export default function Home() {
  return (
    <div>
    <NavBar />    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/app" element={<App />} />
      <Route path="/app2" element={<App2 />} />
    </Routes>
      <h1>Welcome to Recipe AI</h1>
    </div>
  );
}
