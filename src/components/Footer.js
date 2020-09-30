import React from 'react'
import save from "../images/save.svg"

function Footer() {
    return (
        <>
           <div className="footer">
                <div className="columnwise">
                    <h2>Total Premium</h2>
                    <h1 className="pricinginfo"><i class="fa fa-inr"></i> 5,495 <span>Per year</span></h1>
                </div>
                <div className="rowwise">
                    <img src={save} alt="save" />
                    <button>Continue</button>
                </div>
           </div>
        </>
    )
}

export default Footer
