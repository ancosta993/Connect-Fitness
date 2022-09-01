import React, {useState} from 'react';
import CarouselComp from '../CarouselComp';

// import the pictures to render in carousel
import image_1 from "../../assets/carsoul_image/carsoul-image-1.jpg";
import image_2 from "../../assets/carsoul_image/carsoul-image-2.jpg";
import image_3 from "../../assets/carsoul_image/carsoul-image-3.jpg";

const Home = () => {
   const [items, setItems] = useState([
      {id:1, image: image_1},
      {id:2, image: image_2},
      {id:3, image: image_3} 
   ])
   return(
      <CarouselComp items={items} />
   )
}

export default Home;