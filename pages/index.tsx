import Link from 'next/link'

export default function Home() {
    return (<>
        <div>
            <h1>Main</h1>
            <Link href='/burgers'>All burgers</Link>
        </div>
    </>)
}
