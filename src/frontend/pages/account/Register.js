import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SignInSty } from '../../component';
import { Context } from '../../context'

function Register(props) {

  const { setUserData, userData } = useContext(Context)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [name, setName] = useState('');
    const [submitTrue, setSubmitTrue] = useState(false)

    const submit = (e) => {
      e.preventDefault()
      if (email && password && passwordConf && name){
        if (password === passwordConf){
            setUserData({
              _id: Math.random(),
              isAdmin: "false",
              name: name,
              email: email,
              password: password,
              cart: [],
              faveList: [],
              orderHist: []
            })
        }
      }
    }


    return ( 
    <SignInSty.Container>
      <SignInSty.Form onSubmit={(e) => submit(e)}>
        <SignInSty.List>
          
          <SignInSty.LI>
            <SignInSty.Title>
              Register an account
            </SignInSty.Title>
          </SignInSty.LI>

          <SignInSty.LI>
            <SignInSty.Label htmlFor="name">
              Name
            </SignInSty.Label>
            <SignInSty.Input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}>
            </SignInSty.Input>
          </SignInSty.LI>

          <SignInSty.LI>
            <SignInSty.Label htmlFor="email">
              Email
            </SignInSty.Label>
            <SignInSty.Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}>
            </SignInSty.Input>
          </SignInSty.LI>
          
          <SignInSty.LI>
            <SignInSty.Label htmlFor="password">
              Password
            </SignInSty.Label>
            <SignInSty.Input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}>
            </SignInSty.Input>
          </SignInSty.LI>
                    
          <SignInSty.LI>
            <SignInSty.Label htmlFor="passwordConf">
              Confirm Password
            </SignInSty.Label>
            <SignInSty.Input type="password" id="passwordConf" name="passwordConf" value={passwordConf} onChange={(e) => setPasswordConf(e.target.value)}>
            </SignInSty.Input>
          </SignInSty.LI>
          
          
          <SignInSty.LI>
            <SignInSty.Button type="submit">
              Sign Up
            </SignInSty.Button>
          </SignInSty.LI>
          
          {submitTrue?          
          <p>Submission succesful</p>
          :
          <p>Please fill all fields and make sure your passwrod and confirmation match</p>
          }

          <SignInSty.LI>
            Already have an Account?
          </SignInSty.LI>
          
          <SignInSty.LI>
            <Link to={'/signin/'}>
              Sign in!
            </Link>
          </SignInSty.LI>
        
        </SignInSty.List>
      </SignInSty.Form>
    </SignInSty.Container>
    )  
}

export default Register;