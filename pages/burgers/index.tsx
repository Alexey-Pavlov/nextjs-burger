import Link from "next/link";
import styles from '../../styles/Burgers.module.css'
import Image from "next/image";


export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3001/items');
    console.log('res: ', res)
    const data = await res.json().catch(err => {
        console.log('Type send failed', err);
    });

    return {
        props: {
            burgers: data
        }
    }
}

export type Burger = {
    name: string; image: string; desc: string; price: number; id: string;
}

const Burgers = ({burgers}: { burgers: Burger[] }) => {

    return (<>
        <h1>Our Burgers</h1>
        {burgers.map(burger => {
            return (<Link href={`/burgers/${burger.id}`} key={burger.id} className={styles.burgerCard}>
                <div className={styles.imageContainer}>
                    <Image src={`${burger.image}`} alt={`${burger.name}`}
                           fill/>
                </div>
                <div>
                    <h3>{burger.name}</h3>
                    <p>{burger.desc}</p>
                </div>
            </Link>)
        })}
    </>)
}

export default Burgers
