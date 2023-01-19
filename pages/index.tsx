import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (<>
        <div className={styles.container}>
            <h1 className={`${styles.title} font-effect-fire-animation`}>Main</h1>
            <p className={styles.text}>What is the perfect burger? Fresh lettuce, soft buns, juicy meat. You can argue
                about other components of the filling, because this is a matter of taste.</p>
            <p className={styles.text}>There are a couple of other factors that affect appetite: prices, quality of
                service, the right atmosphere of the establishment.</p>
            <Link href='/burgers' className={styles.btn}>All burgers</Link>
        </div>
    </>)
}
