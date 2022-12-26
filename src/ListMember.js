import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useEffect, useState } from "react";
// import { useDemoData } from '@mui/x-data-grid-generator';

export default function SearchBook() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "membname",
      headerName: "Book name",
      width: 150,
      //   editable: true,
    },
    {
      field: "profession",
      headerName: "First Author",
      width: 150,
      //   editable: true,
    },
    {
      field: "address",
      headerName: "Second Author",
      width: 150,
      // editable: true,
    },

    {
      field: "age",
      headerName: "Book Edition",
      type: "number",
      width: 110,
      //   editable: true,
    },
    {
      field: "bookissued1",
      headerName: "Book Issued 1",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "bookissued2",
      headerName: "Book Issued 2",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },

    {
      field: "joineddate",
      headerName: "Published year",
      type: "date",
      width: 110,
      // editable: true,
    },
  ];

  const [memberlist, setmemberlist] = useState([]);

  const getmembers = () => {
    fetch(`https://apimocha.com/librarybook/members`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => {
        console.log(res);
        setmemberlist(res);
      });
  };

  useEffect(() => {
    getmembers();
  }, []);

  // const data=[
  //     {membname:"book1",
  //     book1author:"bautor1",
  //     book2author:"bautor2",
  //     edition:"5"
  // }
  // ]

  return (
    <div className="App-header">
      <h1>List of Members in the Library</h1>
      {/* {memberlist===null? <p>Loading</p>:<Displaytable memberlist={memberlist} columns={columns} />  } */}

      {Displaytable(memberlist, columns)}
    </div>
  );
}
function Displaytable(memberlist, columns) {
  return (
    <Box sx={{ height: 400, width: "100%" }} className="eachcell">
      <DataGrid
        rows={memberlist}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
