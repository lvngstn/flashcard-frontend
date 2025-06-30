import { Link } from 'react-router-dom'
import Button from './Button'

function PageLink({ children, to, variant = "primary", ...props }) {
    return (
        <Link to={to}><Button children={children} variant={variant} {...props} /></Link>
    );
}
export default PageLink;