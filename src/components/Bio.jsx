import React, { useState } from 'react'
import profileIcon from '../assets/profileIcon.png'

const Bio = () => {

    const [userDetails, setUserDetails] = useState({
       name: 'Toussaint Saraza',
       about: 'Building newdv.io - Learn to code and conect with the best minds.'
    });

    const [editFormIsOpen, setEditFormIsOpen] = useState(false)

    const updateUserDetails = (event) => {
      event.preventDefault()
      setUserDetails({
        name: event.target.nameOfUser.value,
        about: event.target.aboutUser.value,
      })
    }
  
    const editForm = (
      <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
        <input type="text" id="" name="nameOfUser" placeholder="Your name" />
        <input type="text" id="" name="aboutUser"placeholder="About you" />
        <br />
        <button type="button" className="cancel-button" onClick={() => setEditFormIsOpen(false)}>Cancel</button>
        <button type="submit">Save</button>
      </form>
    )

  return (
    <section className="bio">
      <div className="profile-photo" role="button" title="click to edit photo" >
      <img src={profileIcon} alt='profile'/>
      </div>
      <div className="profile-info">
        <p className="name">{userDetails.name}</p>
        <p className="about">{userDetails.about}</p>
        
        {editFormIsOpen ? editForm : <button onClick={() => setEditFormIsOpen(true)}>Edit</button> }
      </div>
    </section>
  )
}

export default Bio