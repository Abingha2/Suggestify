import { useState } from "react";
import { Link } from "react-router-dom";

const CollectionIndex = (props) => {

    const [newCollection, setNewCollection] = useState({
        name: "",
        description: "",
        image: "",
        enum: ["Tv Show", "Movie", "Book", "Product", "Restaurant"]
    })

    const handleChange = (event) => {
        setNewCollection(prev => ({
            ...prev,
            [event.target.name]: event.target.value 
        })) 
    }


    const loaded = () => {
        return props.collection.map((collection) => {
            return (
                <div key={collection._id} className="collection" >
                    <h1>{}</h1>
                    <Link to={`/collection/${collection._id}`} >
                        <h1>{collection.name}</h1>
                    </Link>
                    <img src={collection.image} alt={collection.name} />
                    <h3>{collection.description}</h3>
                </div>
            )
        })
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
   
    return (
        <div>
        { props.collection ? loaded() : loading()}
        </div>   
    )
}

export default CollectionIndex