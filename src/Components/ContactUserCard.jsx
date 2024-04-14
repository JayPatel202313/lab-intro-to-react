import React from 'react'
import img1 from '../profile.png'

const ContactUserCard = () => {
    return (
        <div className="ContactUserCard">
            <img src={img1} className="profileImg" />
            <h5>Jordan Walke <h6>React Creator <p>Loren Ipsem</p></h6></h5>
        </div>
    )
}

export default ContactUserCard
