import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) =>{

    if(props.clist.length!==0){
    return(
        <div className="ui cards pr-5 centered">
            {   
                props.clist.map((contact) =>{
                    return <ContactCard key={contact.id} content={contact} del={props.del}/>
                    }
                )
            }
        </div>
    );
    }
    else{
        return(<p className="ui cards pr-5 centered">Such empty....</p>)
    }
}

export default ContactList;