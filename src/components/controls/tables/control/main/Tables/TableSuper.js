import React from 'react'


function TableSuper({element}) {
  return (
      <>
          <tr key={element.id}>
                        <td>{element.first_name }</td>
                        <td>{element.last_name }</td>
                        <td>{element.email }</td>
                        <td>{new Date (element.created_at).toDateString() }</td>

            </tr>
      </>
  )
}

export default TableSuper