import React from 'react'
import info from '../images/info-icon.svg'

function PlanDetails() {
    return (
        <>
            <div className="detailPlan">
               <h1>Select your plan & fill up your details</h1> 
               <div className="tag">Recommended</div>
               <div className="cardContainer">
               <div className="card active">
                <h1>
                    Comprehensive Cover <span>with Pre-inspection</span> <img src={info} alt="info" />
                </h1>
                <p>Share 7 images of your car and get 25% off</p>
                <h1 className="pricing"><i class="fa fa-inr"></i> 5,495 <span>25% off</span></h1>
               </div>
               <div className="card">
                <h1>
                    Comprehensive Cover <span>with Pre-inspection</span> <img src={info} alt="info" />
                </h1>
                <p>Share 7 images of your car and get 25% off</p>
                <h1 className="pricing"><i class="fa fa-inr"></i> 5,495 <span>25% off</span></h1>
               </div>
               <div className="card">
                <h1>
                    Comprehensive Cover <span>with Pre-inspection</span> <img src={info} alt="info" />
                </h1>
                <p>Share 7 images of your car and get 25% off</p>
                <h1 className="pricing"><i class="fa fa-inr"></i> 5,495 <span>25% off</span></h1>
               </div>
               </div>
            </div>
            
        </>
    )
}

export default PlanDetails
