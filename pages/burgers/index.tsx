export const getStaticProps = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();

    return {
        props: {
            burgers: data
        }
    }
}

type Burger = {
    name: string;
    image: string;
    desc: string;
    price: number;
    id: string;
}

const Burgers = (props: Burger[]) => {
    console.log('props >>> ', props)

    return (<>
        <h1>Our Burgers</h1>

    </>)
}

export default Burgers
