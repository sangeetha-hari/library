import React, {useEffect, useState}from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { DataGridPro } from '@mui/x-data-grid-pro';
// import { useDemoData } from '@mui/x-data-grid-generator';
import {API} from './global';
export default function SearchBook(){

    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'bookname',
          headerName: 'Book name',
          width: 150,
        //   editable: true,
        },
        {
          field: 'author1name',
          headerName: 'First Author',
          width: 150,
        //   editable: true,
        },
        {
            field: 'author2name',
            headerName: 'Second Author',
            width: 150,
            // editable: true,
          },
        
        {
          field: 'bookedition',
          headerName: 'Book Edition',
          type: 'number',
          width: 110,
        //   editable: true,
        },
        {
          field: 'publication',
          headerName: 'Publication',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        {
            field: 'pyear',
            headerName: 'Published year',
            type: 'date',
            width: 110,
            // editable: true,
          },
          {
            field: "bookcount",
            headerName: "Books count",
            type: "number",
            width: 110,
            //   editable: true,
          },
          {
            field: "issuedcount",
            headerName: "Issued count",
            type: "number",
            width: 110,
            //   editable: true,
          }
      ];

      //boolist holds the data of all books in array

      const [booklist,setbooklist]=useState([]);

      const getbooks=()=>{
          fetch(`https://apimocha.com/librarybook/booklist`,{
              method: "GET"
          }).then((data)=>data.json())
          .then((res)=>{
              console.log(res);
              setbooklist(res);
          })
      }
      
      useEffect(()=>{getbooks()},[])

    return(
        <div className="App-header">
           <h1>List of Books Available in libary</h1>
            <Box sx={{ height: 400, width: '100%' }} className="eachcell">
      <DataGrid 
        rows={booklist}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    


   

        </div>
    )
}



