import { useState, useEffect } from 'react';

import AboutCity from './AboutCity'

function ApiRequest(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  const [condition, setCondition] = useState("");
  console.log(props.city);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+props.city , {
      method: 'GET',
      headers: {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "" //API Key
      }

      }).then(response => {
    
        return (
        response.json()
        );
      
    }).then(datas => {
      setData(datas);
      setCondition(datas.current.condition)
      setIsLoading(false);
      
     
      

    })
  }, []);     
console.log(data);
console.log(condition)

  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  else if (isLoading === false) {
      return (
    <AboutCity data={data} condition={condition} />
    )
  }

}

export default ApiRequest;