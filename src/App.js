import React,{useEffect,useContext} from "react";
import Heading from './Components/Heading'
import Body from './Components/Body'
import { AppContext } from "./Context/AppContext";
import '../src/App.css';
import Pagination from "./Components/Pagination";

export default function App() {
  const {fetchBlogPost ,page} =  useContext(AppContext);
  useEffect(() => {
  fetchBlogPost(page);
  console.log(page);
  }, []);
  return <div>
      <div>
        <Heading></Heading>
        <Body></Body>
        <Pagination></Pagination>
      </div>
    </div>;
}
