import React from 'react'
import Template from '../Components/Template'
import signupImg from "../assets/signup.png"

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>

        <Template
          title="Join the million learning to code with StudyNotion for free"
          desc1="Build Skills for today, tomorrow, and beyond"
          desc2="Education to future-proof your carrer"
          image={signupImg}
          formtype="signup"
          setIsLoggedIn={setIsLoggedIn}
        />

    </div>
  )
}

export default Signup