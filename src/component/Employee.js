import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({employee, deleteEmployee}) => {

    const navigate = useNavigate();

    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    };

  return (
    <tr key={employee.id}>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{employee.firstName}</div>
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{employee.lastName}</div>
    </td>
    <td className='text-left px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>{employee.email}</div>
    </td>
    <td className='text-right px-6 py-4 whitespace-nowrap'>
        <div className='text-sm text-gray-500'>
            <a
            onClick= {(e,id) => editEmployee(e, employee.id)}
            className='text-indigo-600 hover:text-green-400 px-4 hover:cursor-pointer'>
                Edit
            </a>
            <a 
            onClick={(e, id) => deleteEmployee(e, employee.id)}
            className='text-indigo-600 hover:text-red-400 px-4 hover:cursor-pointer'>
                Delete
                </a>
            </div>
    </td>
</tr>
  );
};

export default Employee