import React from 'react'

const SingleBirthday = ({name, img, age, remove,id}) => {
  return (
    <div className="d-flex my-3 align-items-center justify-content-between">
        <div className="d-flex gap-2">
            <img style={{borderRadius: '50%'}} height={75} width={75} src={img} />
            <div className="info">
                <h4>
                    {name}
                </h4>
                <p className="text-secondary">
                    {age} years
                </p>
            </div>
        </div>

        <button onClick={()=> remove(id)} className="btn btn-danger">Remove</button>
        
    </div>
  )
}

export default SingleBirthday