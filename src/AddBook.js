import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import  * as Yup from 'yup';

export default function AddBook() {
  

  const formik = useFormik({
    initialValues: {
      bookname: "",
      author1name: "",
      author2name: "",
      bookedition: "",
      publication: "",
      pyear: "",
      
    },
    validationSchema:Yup.object({
        bookname:Yup.string().max(40,"Maximum of 40 character").required("This fiels is required"),
        author1name: Yup.string().max(15).min(4).required(),
        author2name:Yup.string().max(15).min(4),
        bookedition:Yup.number(2).required("Book Edition year is required"),
        publication:Yup.string().required("Published is required"),
        pyear:Yup.date().required("Published year is required"),


    }),
    onSubmit: (values) => {
      console.log(values);
      uploadbook(values);
    },
  });

  function uploadbook(newbook){
    fetch(`https://apimocha.com/librarybook/books`,{
      method:"POST",
      body: JSON.stringify(newbook),
                  headers:{"Content-Type":"application/json"}
      // to be continuued
    }).then((data)=>data.json())
    .then((res)=>{console.log(res); console.log("sucessful in adding the data")})
   }
  

  return (
    <div className="App-header">
       <h1>Add new book in Library list</h1> 
      <form onSubmit={formik.handleSubmit} className="formstyle">
        <div>
          <TextField
            fullWidth
            margin="dense"
            required
            id="bookname"
            name="bookname"
            type="text"
            label="Enter Book name"
            onChange={formik.handleChange}
            value={formik.values.bookname}
          />
          {formik.errors.bookname? <p className="errorstyle">{formik.errors.bookname}</p>: null}
        </div>
        <div>
          <TextField
            fullWidth
            margin="dense"
            required
            id="author1name"
            name="author1name"
            type="text"
            label=" Enter First Author Name"
            onChange={formik.handleChange}
            value={formik.values.author1name}
          />
           {formik.errors.author1name? <p className="errorstyle">{formik.errors.author1name}</p>: null}
        </div>
        <div>
          <TextField
            fullWidth
            margin="dense"
            id="author2name"
            name="author2name"
            type="text"
            label="Enter Second Author Name"
            onChange={formik.handleChange}
            value={formik.values.author2name}
          />
           {formik.errors.author2name? <p className="errorstyle">{formik.errors.author2name}</p>: null}
        </div>
        <div>
          <TextField
            fullWidth="true"
            required
            margin="dense"
            id="bookedition"
            name="bookedition"
            type="text"
            label="Enter Book Edition"
            onChange={formik.handleChange}
            value={formik.values.bookedition}
          />
           {formik.errors.bookedition? <p className="errorstyle">{formik.errors.bookedition}</p>: null}
        </div>
        <div>
          <TextField
            fullWidth
            margin="dense"
            id="publication"
            name="publication"
            type="text"
            label="Enter Publication"
            onChange={formik.handleChange}
            value={formik.values.publication}
          />
           {formik.errors.publication? <p className="errorstyle">{formik.errors.publication}</p>: null}
        </div>
        <div>
          <TextField
            fullWidth
            margin="dense"
            id="pyear"
            name="pyear"
            type="date"
            label="Enter Published Year"
            onChange={formik.handleChange}
            value={formik.values.pyear}
          />
           {formik.errors.pyear? <p className="errorstyle">{formik.errors.pyear}</p>: null}
        </div>

       
        <Button type="submit" color="info" variant="contained" fullWidth
        >submit</Button>
      </form>
    </div>
  );
}
