import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_BOOKS, GET_BOOK, REMOVE_BOOK } from './queries';
import REM from '../files/remove';
import Add from '../files/add';
import Find from '../files/find'
import Show from '../files/show'

function Test() {

  return (
      <div>
        <Show/>
      </div>
  );
}

export default Test;
