import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import 'react-day-picker/dist/style.css';

function App() {
  return (
    <div className=' mx-auto'>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
