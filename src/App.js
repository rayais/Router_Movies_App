import './App.css';
import MovieList from './components/MovieList';
import Nave from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import data1 from './components/Data'
import { Route, Routes } from 'react-router-dom';
import FilterName from './components/FilterName';
import { useState } from 'react';
import FilterRate from './components/FilterRate';
import Description from './components/Description';


function App() {
  const [sho,setSho]=useState(false)
  console.log(sho)
  const [data,setData]=useState(data1)
 
 
  return (<>
    
    <Nave setSho={setSho}setData={setData} data={data}/>
    <Routes>
      <Route path='/NameFilter' element={<FilterName movies={data}/>}/>
      <Route path='/Rankrank' element={<FilterRate movies={data}/>}/>
      <Route path='/' element={
        sho?
          (<div className="App" style={{filter:"blur(4px)"}}>
          <MovieList movies={data}/>
          </div>)
        :
          (<div className="App">            
            <MovieList movies={data}/>
          </div>)}/>
          <Route path=":title" element={<Description/>}>
          </Route>

    </Routes>
    </>
  );
}

export default App;
