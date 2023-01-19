import Link from 'next/link'
import {useEffect} from "react";
import {useRouter} from "next/router";

const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            router.push('/')
        }, 3000)

        return () => clearTimeout(redirectTimeout)
    }, [router])

    return (<div className='not-found'>
        <h1>Ohh...</h1>
        <h2>There is no such page</h2>
        <p>Go to <Link href='/'>main page</Link> in 3 seconds...</p>
    </div>)
}

export default NotFoundPage
