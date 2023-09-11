import { useState } from "react";
import React from 'react'

const useForm = ( initialForm = {} ) => {
    const [ formSate, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({...formSate, [name]: value });
    }

    const onReasetForm = () => {
        setFormState( initialForm );
    }
  return (
    <>
    ...formState,
   formState,
   onInputChange,
   onReasetForm,
    
    </>
   
  )
}

export default useForm