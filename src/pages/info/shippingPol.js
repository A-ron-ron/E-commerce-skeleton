import React, { useContext, useState } from 'react';
import { AboutSty } from '../../component';
import {Context} from '../../Context'

function ShippingPol () {

    const {ShippingPol, userData} = useContext(Context)
    const [EditM, setEditM] = useState(false)
    const [title, setTitle] = useState('Shipping Policy and Retuirns Policy')
    const [body, setBody] = useState('')

    const Submition = () => {

    }


    return (
        <div>
            {userData.isAdmin?
            <AboutSty.Button onClick={()=> setEditM(prevData => !prevData)}>
                {EditM? "Return to User View" : "Edit Data"}
            </AboutSty.Button>
            :
            <></>
            }
        {EditM?
            <>
            <AboutSty.Title>Editing Shipping Policy and Returns Data</AboutSty.Title>
            <AboutSty.Form onSubmit={Submition}>
                <AboutSty.List>

                    <AboutSty.LI>
                        <AboutSty.Label htmlFor="title">
                            Title
                        </AboutSty.Label>
                        <AboutSty.Input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}>
                        </AboutSty.Input>
                    </AboutSty.LI>
                    
                    <AboutSty.LI>
                        <AboutSty.Label htmlFor="body">
                            Body
                        </AboutSty.Label>
                        <AboutSty.Input type="text" name="body" id="body" value={body} onChange={(e) => setBody(e.target.value)}>
                        </AboutSty.Input>
                    </AboutSty.LI>

                    <AboutSty.LI>
                        <AboutSty.Button type="submit">
                            Submit
                        </AboutSty.Button>
                    </AboutSty.LI>

                </AboutSty.List>
            </AboutSty.Form>
            </>

            :

            <>
            {ShippingPol[0]?
            <>
                <AboutSty.Title>{ShippingPol[0].Title}</AboutSty.Title>
                <AboutSty.Text>{ShippingPol[0].Body}</AboutSty.Text>
            </>

            :

            <>
                <AboutSty.Title>Shipping Policy and Returns default</AboutSty.Title>
                <AboutSty.Text>This is the default Shipping Policy and Returns text if the DB one has failed to load</AboutSty.Text>
            </>
            }
            </>
        }

        </div>
    )
}

export default ShippingPol;