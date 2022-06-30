import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import error from './assets/svg/error404.svg'


const Unknown = () => {
  return (
      <>
          <div id="layoutError">
            <div id="layoutError_content">
                <main>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="text-center mt-4">
                                    <img className="mb-4 img-error" src={error} alt="error"/>
                                    <p className="lead">This requested URL was not found</p>
                                    <NavLink to="/">
                                        
                                        <FaArrowCircleLeft/> Return to Home
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
      </>
  )
}

export default Unknown