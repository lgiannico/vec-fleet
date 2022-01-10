import React, { useState, useEffect } from "react";
import { InfoCard } from '../components/InfoCard';
import axios from "axios";
import Container from "@material-ui/core/Container";
import { Paper,MenuItem, Grid,InputLabel } from "@material-ui/core";
 


export default function Home() {

  const [articles, setArticles] = useState([]);
   
  const[isFetched,fetch]=useState(false)
 


  useEffect(() => {
    handleSubmit()
  }, []);

  const handleSubmit =(value)=>{
    axios
    .get("https://localhost:5001/api/Vehicle")
    .then((result) => {
      // result.data.articles.length>0?( setArticles( { articles: result.data.articles}),fetch(true)) :fetch(false)
     setArticles( result.data)

    })
    .catch((error) => {
      console.log("somethig was wrong");
    });
  }

 
  
  const listCardInfo = articles.map((x) => (
    <InfoCard
      patent={x.patent}
      description={x.brand}
      urlToImage={x.model}
      chasisNumber={x.chasisNumber}
      wheels={x.wheels}
      image={x.urlImage}
      disabled={x.disabled}
    />
  ));



  return (
    <div>
      <Container maxWidth="lg">
       
        <Grid item xs={6} justifyContent="space-around">
     
        
        </Grid>
         
        {articles.length > 0 &&
          listCardInfo
        }
      </Container>
    </div>
  );
}
