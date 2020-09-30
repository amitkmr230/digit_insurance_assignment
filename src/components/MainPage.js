import React from 'react'
import Header from './Header'
import PlanDetails from './PlanDetails'
import ValuePicker from './ValuePicker'
import Details from './Details'
import Uploads from './Uploads'
import Footer from './Footer'

function MainPage() {
    return (
        <>
               <Header />
               <hr />
               <PlanDetails />
               <hr />
               <hr />
               <ValuePicker />
               <hr />
               <Details />
               <hr />
               <hr />
                <Uploads />
                <hr />
                <hr />
               <Footer />
        </>
    )
}

export default MainPage
