import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SignInSty } from '../../component';

function SignIn(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    return ( 
    <SignInSty.Container>
      <SignInSty.Form >
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