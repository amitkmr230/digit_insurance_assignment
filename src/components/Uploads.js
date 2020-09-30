import React from 'react'
import check from "../images/check.svg"
import edit from "../images/edit_grey.svg"
import preview from "../images/preview.svg"
import upload from "../images/upload.svg"
import arrow from "../images/arrow-right.svg"

function Uploads() {
    return (
        <>
        <div className="uploads">
            <h1>Uploads</h1>
            <div className="pancard">
                <div style={{"display": "flex", "gap":"2rem", "alignItems":"center", "color": "#444444"}}>
                    <img src={check} alt="checkmark" />
                    <h1>Company PAN card</h1>
                </div>
                <div style={{"display": "flex", "gap":"2rem"}}>
                    <img src={edit} alt="edit" />
                    <img src={preview} alt="preview" />
                </div> 
            </div>
            <div className="pancard">
                <div style={{"display": "flex", "gap":"5rem", "alignItems":"center", "color": "#999999"}}>
                    <img src={upload} alt="checkmark" />
                    <h1>Upload Company address proof</h1>
                </div>                
            </div>
        </div>
        <div className="costbreakup">
            <h3>View Cost Break Up</h3>
            <img src={arrow} alt="uparrow" />
        </div>
        </>
    )
}

export default Uploads
