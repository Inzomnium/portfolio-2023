import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Raiz from './routes/root';
import ErrorPage from './errorMsj';
import About from './routes/aboutme';
import MyWork from './routes/mywork';
import ContactForm from './routes/contact';
import ClientH from './routes/client-handling';
import { AnimatePresence } from 'framer-motion';
import UxConsulting from './routes/UX-consulting';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Raiz/> ,
    errorElement: <ErrorPage />,
    
  },
  {
    path:"/about" ,
    element: <About/>,
  },
  {
    path:"/mywork",
    element: <MyWork />
  },
  {
    path:"/client",
    element: <ClientH />
  },
  {
    path:"/UX-consulting",
    element: <UxConsulting />
  },
  {
    path:"/contact",
    element: <ContactForm />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AnimatePresence>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AnimatePresence>
);



//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
 // <React.StrictMode>
 //   <App />
 // </React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
