import React, { useState } from 'react';
import web from '../src/images/img-1.jpg';
import { NavLink } from 'react-router-dom';
import Common from './Common';


const Home = ()=>{
return(
  <>
 <Common
   name="Grow Your Buisness with"
   imgsrc={web}
   visit="/service"
   btnname="Get Started"
 />
  </>
);
};

export default Home;
