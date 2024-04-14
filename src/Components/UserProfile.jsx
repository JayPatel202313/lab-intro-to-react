import React from 'react'
import img1 from '../profile.png'

const UserProfile = () => {
    return (
        <div className="UserProfile">
            <img src={img1} className="profileImg" />
            <h4>Jordan Walke  <h5>React Creator <h6>Lorem Ipsem</h6>  </h5> </h4> 
        </div>
    )
}

export default UserProfile
