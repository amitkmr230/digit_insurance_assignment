import React from 'react'

function Details() {
    return (
        <>
            <div className="details">
                <h1>Your Details</h1>
                <form>
                    <div class="material-textfield">
                        <input placeholder=" " type="text" />
                        <label>Full Name</label>
                    </div>
                    <div class="material-textfield">
                        <input placeholder=" " type="text" />
                        <label>Mobile Number</label>
                    </div>
                    <div class="material-textfield">
                        <input placeholder=" " type="text" />
                        <label>Enter email address</label>
                    </div>
                </form>
            </div>            
        </>
    )
}

export default Details
