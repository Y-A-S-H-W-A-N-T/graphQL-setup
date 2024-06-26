import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_BOOK, GET_BOOK } from '../components/queries';

function Add() {


    const { data, loading, error } = useQuery(GET_BOOK,{ variables: { bookId: "667091b7eeb2ec68c8726939" } })

    const FIND = ()=>{
        console.log(data)
    }

  return (
      <div>
        <button onClick={FIND}>FIND USER</button>
      </div>
  );
}

export default Add;
