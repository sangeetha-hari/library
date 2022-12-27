
import './App.css';
import Dashboard from './Dashboard';
import Home from './Home';
import AddMember from './AddMember';
import ListMember from './ListMember';
import AddBook from './AddBook';
import SearchBook from './SearchBook';
import IssueBook from './IssueBook';
import DeleteBook from './DeleteBook';




import { Route, Routes } from 'react-router-dom';
import Trial from './Trial';

function App() {
  return (
    <div className="App">
      <Dashboard/>

      
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/> 
        <Route path="/addmember" element={<AddMember/>}/> 
        <Route path="/listmember" element={<ListMember/>}/> 
        <Route path="/addbook" element={<AddBook/>}/> 
        <Route path="/searchbook" element={<SearchBook/>}/> 
        <Route path="/issuebook" element={<IssueBook/>}/> 
        <Route path="/deletebook" element={<DeleteBook/>}/> 
        <Route path="/trial" element={<Trial/>}/> 

        </Routes>
    </div>
  );
}

export default App;
