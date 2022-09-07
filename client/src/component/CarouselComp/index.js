import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselComp = ({items}) => {
   return(
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={3500} sx={{display:"flex",justifyContent:"center",textAlign:"center"}}>
         {items.map(item => <div style={{width:"100%", height:'30em'}} key={item.id}>
               <img src={item.image} alt={`item_${item.id}`} style={{width:"100%", height:"100%", objectFit:'cover'}} />
               <h1 style={{fontSize:'1.8rem', backgroundColor:'var(--primary)', padding:'1rem', opacity:"90%"}} className='legend'>{item.text}</h1>
         </div>)}
      </Carousel>
      
   )
}

export default CarouselComp;