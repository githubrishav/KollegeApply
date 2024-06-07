import React from "react";
import Navbar from "./Components/Navbar";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Routes/Home";
import University from "./Routes/University";
import Colleges from "./Routes/Colleges"
import Exams from "./Routes/Exams"
import Courses from "./Routes/Courses"
import News from "./Routes/News"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <>
          <Navbar /> <Home />
        </>
      ,
    },
    {
      path: "/university",
      element: <> <Navbar /> <University /> </>
      
    },
    {
      path:"/colleges",
      element: <> <Navbar/> <Colleges/> </>
    },

    {
      path:"/exams",
      element: <><Navbar/><Exams/></>

    },

    {
      path: "/courses",
      element: <><Navbar/><Courses/></>
    },

    {
      path: "news",
      element: <><Navbar/> <News/></>
    }

    
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
