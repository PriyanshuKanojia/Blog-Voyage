import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    //let name="Eren";
    const[name, setName] = useState('Eren');
    const[age, setAge] = useState('16');
    

    const handleClick = () =>{
        setName('Mikasa');
        setAge('17');
    }

    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
        <h2>Homepage</h2>
        <p>{name} is {age} years old.</p>
        <button onClick={() => handleClick()}>Click me</button>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title='All Blogs!'/>}
        {blogs && <BlogList blogs={blogs.filter((blog) => blog.author==='mario' )} title="Mario's Blogs" />}
        </div>
     );
}
 
export default Home;