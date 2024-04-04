import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';

const ListOfAllPosts = () => {
    const {listOfAllPosts} = useSelector((state)=> state.posts);
    return ( 
        <div>
        <h1 className="my-3 text-center">List Posts</h1>
        <div className="row items-content-center">
        {listOfAllPosts.map((item, i)=>{
            return (
                <div className="col-3 mb-5" key={i}>
                        <Card key={i} style={{ width: '18rem', height: '20rem' }}>
                        <Card.Body>
                            <Card.Title style={{ textTransform: 'capitalize' }}>{item.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">category</Card.Subtitle>
                            <Card.Text>
                                {item.body}
                            </Card.Text>
                            <Card.Link href="#">Read</Card.Link>
                        </Card.Body>
                        </Card>
                </div>
            )
        })}
        </div>
    </div>
     );
}
 
export default ListOfAllPosts;