import productAPI from 'api/productAPI';
import Header from 'components/Header';
import AlbumFeature from 'features/Album';
import Album from 'features/Album/components/Album';
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import CounterFeature from './features/Counter';
import Pagination from './features/Pagination';
import TodoFeature from './features/Todo';
const Title = styled.h2`
   background-color: coral;
   text-align: center;
   color: ${(prop) => prop.color || 'red'};
`;
function App() {
   const [pagination, setPagination] = useState({
      page: 1,
      limit: 10,
      totalRows: 1,
   });
   useEffect(() => {
      const fechProduct = async () => {
         const productList = await productAPI.getProDuctsHot();
         console.log(productList);
      };
      fechProduct();
   }, []);
   const handlePageChane = (newPage) => {
      console.log(newPage);
      setPagination({
         ...pagination,
         page: newPage,
      });
   };
   return (
      <div className="App">
         <Header />
         <Title color="blue">Hello word</Title>
         <Routes>
            <Route from="/home" to="/" exact />
            <Route path="/" element={<CounterFeature />} exact />
            <Route path="/todos" element={<TodoFeature />} />
            <Route path="/album" element={<AlbumFeature />} />
            <Route
               path="/page"
               element={<Pagination pagination={pagination} onPageChane={handlePageChane} />}
            />
         </Routes>
         {/* <Pagination pagination={pagination} onPageChane={handlePageChane} /> */}
      </div>
   );
}

export default App;
