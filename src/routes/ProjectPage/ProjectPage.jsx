// Libraries
import {
  Outlet,
  Link
} from 'react-router-dom'

function ProjectPage() {
  return (
    <>
      <h1>Project Page</h1>
      <Link to='Project1'>Project</Link>

      <Outlet />
    </>
  )
}

export default ProjectPage;