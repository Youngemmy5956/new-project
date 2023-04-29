import React from 'react'

export default function Child({firstName, lastName}) {
  return (
    <div> 
    <p>This is the child component</p>
    {firstName}  {lastName}
    </div>
  )
};



