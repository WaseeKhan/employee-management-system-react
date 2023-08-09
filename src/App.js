
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './component/AddEmployee';
import Navbar from './component/Navbar';
import EmployeeList from './component/EmployeeList';
import EditEmployee from './component/EditEmployee';



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
        <Route index element={<EmployeeList />} />
        <Route path='/' element={<EmployeeList />} />
        <Route path='/employeeList' element={<EmployeeList />} />
        <Route path='/addEmployee' element={<AddEmployee />} />
        <Route path='/editEmployee/:id' element={<EditEmployee />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
