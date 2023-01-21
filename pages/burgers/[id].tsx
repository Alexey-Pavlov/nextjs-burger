import {Burger} from "@/pages/burgers/index";
import styles from '../../styles/Burgers.module.css'
import Image from "next/image";

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data: Burger[] = await res.json();

    const paths = data.map(burger => {
        return {
            params: {id: burger.id}
        }
    })

    return {
        paths, fallback: false
    }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
    const id = context.params.id;

    const res = await fetch(`http://localhost:5000/items/${id}`);
    const data: Burger[] = await res.json();

    return {
        props: {
            burger: data
        }
    }
}

const Details = ({burger}: { burger: Burger }) => {
    console.log('burger: ', burger)
    return (<div className={styles.singleBurger}>
        <h1>{burger.name}</h1>
        <div className={styles.imageContainer}>
            <Image src={`${burger.image}`} alt={`${burger.name}`}
                   fill/>
        </div>
        <div>
            <p>{burger.desc}</p>
        </div>
    </div>)
}

export default Details
