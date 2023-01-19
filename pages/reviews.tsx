import Head from "next/head";

type JsonPlaceholderReview = {
    postId: number; id: number; name: string; email: string; body: string;
}

type ReviewsPageProps = {
    reviews: JsonPlaceholderReview[]
}

const amountOfReviews = 20;

const ReviewsPage = ({reviews}: ReviewsPageProps) => {
    const amountOfSymbolsPerReview = 90;

    return (<>
        <Head>
            <title>Fat burgers | Testimonials</title>
            <meta name="title" content="Fat burgers"/>
        </Head>
        <h1>Testimonials</h1>
        <div className='reviews'>
            {!!reviews.length && reviews.slice(0, amountOfReviews).map(review => {
                return (<div key={review.id} className='review'>
                    {review.id}{' '}
                    {`${review.body.slice(0, amountOfSymbolsPerReview)}...`}
                </div>)
            })}
        </div>
    </>)
}

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json();

    return {
        props: {
            reviews: data.slice(0, amountOfReviews)
        }
    }
}

export default ReviewsPage
