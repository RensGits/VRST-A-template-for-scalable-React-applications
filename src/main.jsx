import './scss/main.scss';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { store } from './redux/store'
import { Provider } from 'react-redux'
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
