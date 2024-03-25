import React, { useState } from 'react'
import SingleBirthday from './SingleBirthday'
import { bdays } from './data'

const Birthday = () => {
  const [mydata, setmydata] = useState(bdays);

  

  const removePerson = (id) =>{
    const newData = mydata.filter((person)=>{
      return person.id !== id;

    })
    setmydata(newData);
  }

  const handleclick = () => {
    if(mydata.length > 0){
      setmydata([]) ;
    }else{
      setmydata(bdays);
    }
  }
  return (
    <>
    <div className="col-lg-6 mx-auto shadow p-5">
        <h1 className="display-4 text-center">
            {mydata.length} Birthdays Today
        </h1>
        {mydata.map((item) =>{
         return <SingleBirthday key={item.id} {...item} remove = {removePerson}/>
        })}
        <button onClick={handleclick} className={`btn d-block mx-auto ${mydata.length == 0 ? 'btn-success' : 'btn-danger'} `}>
          {mydata.length == 0 ? 'Refresh All' : 'Remove All'}
        </button>
      
    </div>
    
    </>
  )
}

export default Birthday