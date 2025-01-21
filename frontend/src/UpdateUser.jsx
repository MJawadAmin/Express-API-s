import React from 'react'

const UpdateUser = () => {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
  <form>
  <h2>Update User</h2>
        <div className='mb-2'>
        <label htmlFor=""> Name </label>
        <input type="text" name="" id=""  placeholder='Enter Name' className='form-control'/>
        </div>
        <div className='mb-2'>
    
        <label htmlFor=""> Email </label>
        <input type="email" name="" id=""  placeholder='Enter Email' className='form-control'/>
        </div>
        <div className='mb-2'>
        <label htmlFor=""> Age </label>
        <input type="text" name="" id=""  placeholder='Enter Age' className='form-control'/>
        </div>
        <button className='btn btn-success'>Update</button>
        
  </form>
</div>
</div>
  )
}

export default UpdateUser
