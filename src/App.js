import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const url = "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20";

  const [data,setData] = useState([]);
  const [particularData,setParticularData] = useState([])
  const [showData,setShowData] = useState(false);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async() => {
    const response = await fetch(url);
    const productFetchData = await response.json();
    console.log(productFetchData)
    setData(productFetchData.results);
    console.log(data)
    setParticularData(data.results[0])
    console.log(particularData + "hi")
  }

  return (
    <div className="App">
      <div className='header-div'>
        <p className='header-text'>Challenge</p>
        <div className='header-menu'>
          <p className='menu-option'>Product</p>
          <p className='menu-option'>Download</p>
          <p className='menu-option'>Pricing</p>
        </div>
      </div>
      {
        console.log(data.results)
      }
      {
        showData ?
        <div className='character-div'>
        <img className='char-img' alt='img' src={particularData.picture.large}></img>
        <div className='char-details'>
          <p className='char-name'>{particularData.name.title}. {particularData.name.first} {particularData.name.last}</p>
          <p className='char-address'><span className='street-no-span'>{particularData.location.street.number}</span>, {particularData.location.street.name}, {particularData.location.city}, {particularData.location.state},<span className='country-span'>{particularData.location.country}</span>, {particularData.location.postcode}</p>
          <p className='char-timezone'>{particularData.location.timezone.offset}-{particularData.location.timezone.description}</p>
          <p className='char-gender'>{particularData.gender}</p>
        </div>
      </div>
      :
      <p>{}</p>
      }

      <div className='data-div'>
        {
          data.map((data)=>{
            return(
              <div className='data-card' onClick={()=>{setParticularData(data); console.log(particularData.gender); setShowData(true)}}>
                <p className='data-gender'>{data.gender}</p>
                <p className='data-name'>{data.name.title}. {data.name.first} {data.name.last}</p>
                <p className='data-email'>{data.email}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
