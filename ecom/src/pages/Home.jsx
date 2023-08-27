import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
import axios from 'axios';
import image from "../assets/hello.gif"



function Home() {
    const [items,setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setItems(response.data); // Directly set the items state to response.data
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };
        fetchItems();
    }, []);
    
  return (
    <div>
        <Navbar />
        <section className="main-home">
            <div className="main-text">
                <h5>Embrace Sustainability:<p><h1>Explore Resale Gems</h1></p><p> <button className="main-btn" >Shop Now</button></p></h5>
                
               
                <img src={image} className="svg-image" alt="SVG" />
                
            </div>
        </section>
        <section>
            
        <div className="row row-cols-1 row-cols-md-3 g-4">
  {items.map((curElem, index) => (
    <div className="col" key={index}>
      <div className="card h-100">
        <img src={curElem.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{curElem.title}</h5>
          <h3 className="card-title">{curElem.price}</h3>
          <p className="card-text">{curElem.description}</p>
          <button className="main-btn" >Add to Cart</button>
        </div>
      </div>
    </div>
  ))}
</div>

</section>
        
    </div>
  )
}

export default Home