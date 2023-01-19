import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
    return (<>
        <div>
            <Header/>
            <h1>Main</h1>
            <Link href='/burgers'>All burgers</Link>
            <Footer/>
        </div>
    </>)
}
