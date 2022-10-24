import Link from 'next/link'

function NavLink({ linkName }) {
    return (<div className='mr-5 text-white'>
        <Link href={`/${linkName}`}>{linkName}</Link>
    </div>)
}

export default NavLink