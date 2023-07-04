import React from "react";

const Help = (props) =>
{
    return( 
    <div>
        <div className="black_screen"></div>
        <div className = 'greet_modal ui centered grid'>
            <div className = "ui content center">
                <h2>Hello people!</h2>
                <p>Hope you're doing good. This is Cloud Contacts. A firebase powered contact manager.It lets you perform basic contact creation and deletion and is due for updates as well. These operations can be performed offline as well, but make sure you export them as they will not be saved to the cloud. Feel free to mess around and report any bugs you find.</p>
                <p>This is also my first ever react project(so please go easy on me).</p>
            </div>
            <button className="ui button success green" onClick={props.closeMe}>All the best bud!<i className="thumbs up outline icon floated right"/></button>
        </div>
    </div>
    )
}

export default Help;