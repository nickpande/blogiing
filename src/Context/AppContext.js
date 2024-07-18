import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'

export const AppContext  = createContext();
export default function AppContextProvider({children}){
    const[page ,setPage] = useState([1]);
    const[loding, setloding] = useState(false);
    const[totalPages , setTotalPages] = useState(null);
    const[posts , setPosts] = useState([]);
   
    
    const  fetchBlogPost = async(page)=>{
    setloding(true);
    try{
        const res = await fetch(`${baseUrl}?page=${page}`);
        const data  = await res.json();
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages)
        console.log(page);
    }
    catch{
        console.log("found an error");
        setPage(1);
        setPosts([]);
        setTotalPages(null);
    }
    setloding(false);
    }
     function handleChangePage(page){
     setPage(page);
     fetchBlogPost(page)
    }

    const value={
    posts,
    setPage,
    setPosts,
    setTotalPages,
    totalPages,
    setloding,
    loding,
    fetchBlogPost,
    handleChangePage,
    page,
    };
    return<AppContext.Provider value={value} >{children}</AppContext.Provider>

}