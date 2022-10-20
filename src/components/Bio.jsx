import React from 'react'
import profileIcon from '../assets/profileIcon.png'
// import profileIcon from '../assets/profileIcon.svg'

const Bio = () => {
  
    const editForm = (
      <form className="edit-bio-form">
        <input type="text" id="" placeholder="Your name" />
        <input type="text" id="" placeholder="About you" />
        <br />
        <button type="button" className="cancel-button">Cancel</button>
        <button type="button">Save</button>
      </form>
    )

  return (
    <section className="bio">
      <div className="profile-photo" role="button" title="click to edit photo" >
      <img src={profileIcon} alt='profile'/>
      </div>
      <div className="profile-info">
        <p className="name">Toussaint Saraza</p>
        <p className="about">Building newdv.io - Learn to code and conect with the best minds.</p>
        <button>Edit</button>
        {editForm}
      </div>
    </section>
  )
}

export default Bio