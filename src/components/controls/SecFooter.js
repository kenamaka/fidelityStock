import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


function SecFooter() {
  return (
      <>
          <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-dark mt-auto">
                    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; All Rights Reserved 2022</div>
                            <div>
                               &middot;
                                <NavLink to="/">Fidelity Stock</NavLink>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        
      </>
  )
}

export default SecFooter