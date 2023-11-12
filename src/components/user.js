import React from "react";

const User = ({email, name }) => {
    return (
        <div className="list">
            <h6>User Info :</h6> 
            Name :
            <span> { name }</span>
            <br/>
            Email :
            <span> { email }</span>
        </div>
    )
}
export default User