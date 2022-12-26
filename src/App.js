import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import BoyIcon from '@mui/icons-material/Boy';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
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
