import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik, Form, Formik, Field } from "formik";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import  * as Yup from 'yup';

export default function AddMember() {
  

  const formik = useFormik({
    initialValues: {
      membname: "",
      profession: "",
      address: "",
      age: "",
      bookissued: "",
      joineddate: "0-0-2000",
    },
    validationSchema:Yup.object({
        membname:Yup.string().max(40, "Maximum of 40 character").required("This fiels is required"),
        profession: Yup.string(). max(15).min(4).required(),
        address:Yup.string().max(15).min(4),
        age:Yup.number(2).required("Book Edition year is required"),
        bookissued:Yup.string().required("Published is required"),
        joineddate:Yup.date().required("Published year is required")
    }),
    onSubmit: (values) => {
      console.log(values);
      uploadmembers(values);
    },
  });

 function uploadmembers(newmember){
  fetch(`https://apimocha.com/librarybook/members`,{
    method:"POST",
    body: JSON.stringify(newmember),
                headers:{"Content-Type":"application/json"}
    // to be continuued
  }).then((data)=>data.json())
  .then((res)=>{console.log(res); console.log("sucessful in adding the data")})
 }

  return (
    <div className="App-header">
       <h1>Join a  New Member to Library </h1> 
      <form onSubmit={formik.handleSubmit} className="formstyle">
        <div>
          <TextField
            fullWidth
            margin="dense"
            required
            id="membname"
            name="membname"
            type="text"
            label="Enter Member name"
            onChange={formik.handleChange}
            value={formik.values.membname}
          />
          {formik.errors.membname? <p className="errorstyle">{formik.errors.membname}</p>: null}
        </div>
        <div>
          <TextField
            fullWidth
            margin="dense"
            required
            id="profession"
            name="profession"
            type="text"
            label=" Enter member profession"
            onChange={formik.handleChange}
            value={formik.values.profession}
          />
           {formik.errors.profession? <p className="errorstyle">{formik.errors.profession}</p>: null}
        </div>
        <div>
          <TextField
            fullWidth
            margin="dense"
            id="address"
            name="address"
            type="text"
            label="Enter Address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
           {formik.errors.address? <p className="errorstyle">{formik.errors.address}</p>: null}
        </div>
        <div>
          <TextField
            fullWidth="true"
            required
            margin="dense"
            id="age"
            name="age"
            type="number"
            label="Enter Age"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
           {formik.errors.age? <p className="errorstyle">{formik.errors.age}</p>: null}
        </div>
        <div>
          <TextField
            fullWidth
            margin="dense"
            id="bookissued"
            name="bookissued"
            type="text"
            label="Enter bookissued"
            onChange={formik.handleChange}
            value={formik.values.bookissued}
          />
           {formik.errors.bookissued? <p className="errorstyle">{formik.errors.bookissued}</p>: null}
        </div>
        <div>
          <TextField
            fullWidth
            margin="dense"
            id="joineddate"
            name="joineddate"
            type="date"
            label="Enter Join Date"
            onChange={formik.handleChange}
            value={formik.values.joineddate}
          />
           {formik.errors.joineddate? <p className="errorstyle">{formik.errors.joineddate}</p>: null}
        </div>

       
        <Button type="submit" color="info" variant="contained" fullWidth
        >submit</Button>
      </form>
    </div>
  );
}
