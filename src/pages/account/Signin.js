import React, { useEffect, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { SignInSty } from '../../component';
import { Context } from '../../Context'
import UsersDB from '../../Database/users'

function SignIn(props) {

        
  const { setUserData } = useContext(Context)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const FormSubmit= (e) =>{
      e.preventDefault();
        UsersDB.map(DB => {
          if(DB.email === email && DB.password === password){
            setUserData(DB)
          }
        })

        // ServerAPI.READ(`api/users`).map(DB => {
        //     if(DB.email === email && DB.password === password){
        //     setUserData(DB))  
        //     }
        // })

        // location.replace(`/`)
    }

    return ( 
    <SignInSty.Container>
      <SignInSty.Form onSubmit={(e)=>FormSubmit(e)}>
        <SignInSty.List>
          
          <SignInSty.LI>
            <SignInSty.Title>
              Sign-In
            </SignInSty.Title>
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
            <SignInSty.Button type="submit">
              Signin
            </SignInSty.Button>
          </SignInSty.LI>
          
          <SignInSty.LI>
            New to SoapShop?
          </SignInSty.LI>
          
          <SignInSty.LI>
            <Link to={'/register/'}>
              Create your account
            </Link>
          </SignInSty.LI>
        
        </SignInSty.List>
      </SignInSty.Form>
    </SignInSty.Container>
    )  
}

export default SignIn;