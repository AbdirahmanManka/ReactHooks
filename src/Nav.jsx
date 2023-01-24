import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="nav">
     
      <ul>
         <CustomLink to="/Usecontext">Click here to see use context</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}