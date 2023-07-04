import React from 'react';

const ContactAdd = (props) =>{

    const enableMail = (e) =>{
        if(e.target.checked){
            document.getElementById("email").disabled = false;
        }
        else{
            document.getElementById("email").value = "";
            document.getElementById("email_err").style.display="none";
            document.getElementById("email").disabled = true;
        }
    }
    const enableMob = (e) =>{
        if(e.target.checked){
            document.getElementById("mob").disabled = false;
        }
        else{
            document.getElementById("mob").value = "";
            document.getElementById("mob_err").style.display="none";
            document.getElementById("mob").disabled = true;
        }
    }

    const validate = (e) =>{
        if(e.target.id==="mob"){
            if(!(e.target.value.match(/^[0-9]+$/) && e.target.value.length === 10) && e.target.value.length!==0){
                document.getElementById("mob_err").style.display="block";
                document.getElementById("Submit").disabled = true;
            }
            else{
                document.getElementById("mob_err").style.display="none";
                document.getElementById("Submit").disabled = false;
            }
        }
        else if(e.target.id==="email"){
            if (e.target.value.includes("@") && e.target.value.includes(".com") && e.target.value.indexOf("@")< e.target.value.indexOf(".com")){
                document.getElementById("email_err").style.display="none";
                document.getElementById("Submit").disabled = false;   
            }
            else{
                document.getElementById("email_err").style.display="block";
                document.getElementById("Submit").disabled = true;
            }
            
        }
    }

    return(
        <div>
            <form className="AddForm ui form" onSubmit={props.act}>
                <div className='field'>
                    <label htmlFor="name"> Name </label>
                    <input id="name" type="text" name="name"/>
                </div>
                <div className='field ui'>
                    <label htmlFor="email"> Email<span id="email_err" style={{color: "red", backgroundColor: "#ec464657", display: "none"}}>Please enter a valid email</span> </label>
                    <div className='fields Field'>
                        <input id="email" type="text" name="email" onBlur={validate}/>
                        <div className='ui toggle checkbox'>
                            <input type="checkbox" id="should_mail" name="should_mail" onChange={enableMail} defaultChecked /><label> </label>
                        </div>
                    </div>
                </div>
                <div className='field ui'>
                    <label htmlFor="mob"> Mobile <span id="mob_err" style={{color: "red", backgroundColor: "#ec464657", display: "none"}}>Please enter a valid Phone No.</span> </label>
                    <div className='fields Field'>
                        <input id="mob" type="text" name="mob" onBlur={validate}/>
                        <div className='ui toggle checkbox'>
                            <input type="checkbox" id="should_mob" name="should_mob" onChange={enableMob} defaultChecked /><label> </label>
                        </div>
                    </div>
                </div>
                <div className='field'>
                </div>
                <input className="ui button green" value="Add Contact" type="Submit" id="Submit" onClick={validate} readOnly/>
            </form>
        </div>
    );
}

export default ContactAdd;