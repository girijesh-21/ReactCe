import React from 'react'

export default function Car({carName}) {
  
    if(carName === 'JCB')
    {
        throw new Error("JCB is not a Car")
    }

    return (
    <div>
      {carName}
    </div>
  )
}