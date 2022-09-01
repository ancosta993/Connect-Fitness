import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselComp = ({items}) => {
   return(
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3000}>
         {items.map(item => <div style={{width:"100%", height:'20rem'}} key={item.id}>
               <img src={item.image} alt={`item_${item.id}`} style={{width:"100%", height:"100%", objectFit:'cover'}} />
         </div>)}
      </Carousel>
      
   )
}

export default CarouselComp;