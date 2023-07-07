import { useEffect, useState } from 'react';
import styled from 'styled-components'
import SearchResult from './components/SearchResult/SearchResult';


export const BACKND_URL = "http://localhost:9000"



const App = () => {

  const[searchData, setSearchData] = useState(null);

  const[filterBtn , setFilterBtn] = useState("all");

  const [loading,setLoading] = useState(false)
  
  const [data,setData] = useState(null);
  
  const [error,setError] = useState(null)

 

  useEffect(()=>{
    const fetchFoodData = async() => {
      setLoading(true);
      try {
        const response = await fetch(BACKND_URL);
        const jsonData = await response.json();
       // console.log(jsonData);
        
        setData(jsonData);
        setSearchData(jsonData);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data", error);
      }
    }
    fetchFoodData()
    
  },[])

  // search functionality:
  const searchFood = (e) => {
    const searchedFood = e.target.value;

    if(searchedFood == ""){
      setSearchData(null);
    }
    const filter = data?.filter(
      (food)=> food.name.toLowerCase().includes(searchedFood.toLowerCase())
      );
      setSearchData(filter);
  
  }

  // Btn filter functionality:
  const filterFood = (type) => {
    if(type == "all"){
      setSearchData(data);
      setFilterBtn("all");
      return;
    }
    const filter = data?.filter(
      (food)=> food.type.toLowerCase().includes(type.toLowerCase())
      );

      setSearchData(filter);
      setFilterBtn(type);
  }

  // fetchFoodData();

  // console.log(data);

  // const dummyData = [{
  //   name: "Boilded Egg",
  //   price: 10,
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //   image: "/images/egg.png",
  //   type: "breakfast"
  //   }
  // ]

  if(error){
    return (
      <div>{error}</div>
    )
  }
  if(loading){
    return (
      <div>Loading...</div>
    )
  }

  const filterButtons = [
    {
      name: 'All',
      type: 'all',
    },
    {
      name: 'Chocolate',
      type: 'chocolate',
    },
    {
      name: 'Butter',
      type: 'butter',
    },
    {
      name: 'Creamy',
      type: 'creamy',
    }
  ]

  return (
    <>
  <Container>
    <TopContainer>
      <div className="logo">
        <img className='fdb_logo' src="images/fds_blck-logo.png" alt="logo" />
      </div>
      <div className='search'>
        <input type="text" placeholder='Search😋...' onChange={searchFood} />
      </div>
    </TopContainer>

    <FilterContainer>
      {/* <Button onClick={()=>filterFood("all")}>All</Button>
      <Button onClick={()=>filterFood("Breakfast")}>Breakfast</Button>
      <Button onClick={()=>filterFood("Lunch")}>Lunch</Button>
      <Button onClick={()=>filterFood("Dinner")}>Dinner</Button> */}
      {
        filterButtons.map((value)=> (
          <Button isSelected={filterBtn == value.type} key={value.name} onClick={()=> filterFood(value.type)}>{value.name}</Button>
        ))
      }
    </FilterContainer>

  </Container>
  <SearchResult data={searchData} />
  </>
)};

export default App;

export const Container = styled.div`
 max-width: 1200px;
 margin: 0 auto;
 `
 const TopContainer = styled.section`
  height: 140px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .fdb_logo{
    height: 60px;
    width: 150px;
    cursor: pointer;
  }

  .search input{
    background-color: transparent;
    border: 2px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
    &::placeholder{
      color: #e7e0e0;
    }
  }

  @media(0 < width < 600px){
    flex-direction: column;
    /* height: 180px; */
  }

 `

 const FilterContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
 `
 export const Button = styled.button`
  background-color: ${(props) => (props.isSelected ? "#750000" : "red" ) };
  outline:1px solid ${(props) => (props.isSelected ? "white" : "#750000" ) };
  border-radius: 5px;
  box-shadow: none;
  border: none;
  padding: 6px 12px;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #750000;
  }
 `

