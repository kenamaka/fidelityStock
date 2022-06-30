import React from 'react'
import {  FaPencilAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function TableUser({data}) {
  return (
      <>
          <tr key={data.user_id}>
                <td>{data.first_name}  { data.last_name}</td>
          <td>{ data.email}</td>
          <td>{ data.username}</td>
          <td>{new Date (data.created_at).toDateString() }</td>
                <td>{data.role}</td>
                <td>
                    
                  <NavLink className="text-dark" to={`/edit/${data.user_id}`}>  <FaPencilAlt   />Edit</NavLink> &nbsp;&nbsp;&nbsp;
                </td>
            </tr>
      </>
  )
}

export default TableUser