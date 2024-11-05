import React from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent () {
    const [firstName, setFirstName] = React.useState("John");
  const [lastName, setLastName] = React.useState("Henry");

  function handleFirstNameChange(event){
    setFirstName(event.target.value)
    console.log(event.target.value);
  }

  function handleLastNameChange(event){
    setLastName(event.target.value)
    console.log(event.target.value)
  }

  return(
   <>
   <Form
   firstName = {firstName}
   lastName = {lastName}
   handleFirstNameChange = {handleFirstNameChange}
   handleLastNameChange = {handleLastNameChange}
   />
   <DisplayData 
   firstName={firstName}
   lastName={lastName}/>
   </>
  );
}

export default ParentComponent;