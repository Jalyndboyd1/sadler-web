import Link from 'next/link'

function NavLink({ linkName }) {
    return (<div className='mr-5'>
        <Link href={`/${linkName}`}>{linkName}</Link>
    </div>)
}

export default NavLink