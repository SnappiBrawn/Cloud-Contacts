import React, {useState, useEffect} from 'react';
import {db} from '../firebase';
import {query, collection, onSnapshot, doc, deleteDoc, setDoc} from 'firebase/firestore'
import './App.css';
import Header from './Header';
import ContactAdd from './ContactAdd';
import ContactList from './ContactList';
import Search from './Search';
import Help from './Help';


const App = () =>{
  let CBook;
  const [Clist, setClist] = useState(
    {preview: CBook,
    base: CBook});
  const [ModalClose,setModalClose] = useState(true);

  const handleAdd = (contact) =>{
    contact.preventDefault();
    if(contact.target.mob.disabled && contact.target.email.disabled){
      alert("Please select atleast one contact type.");
      document.getElementById("should_mail").focus();
      return;
    }
    if(contact.target.name.value==="" || (contact.target.email.value==="" && contact.target.mob.value==="")){
      alert("Please fill in all fields!");
      document.getElementById("name").focus();
      return;
    }

    for(var i=0; i<Clist.base.length; i++){
      if(contact.target.name.value === Clist.base[i].name){ 
        alert("Contact for "+contact.target.name.value+" already exists.");
        document.getElementById("name").focus();
        return;
      }
    }
    var indx=(Math.random()*1e16).toString(36);
    
    var entry = {
      name: contact.target.name.value,
      email: contact.target.email.value,
      mob: contact.target.mob.value,
      id: indx,}

    var CBook = [...Clist.base,entry];
    setDoc(doc(db,'contacts',indx),entry);
    setClist({base:CBook,preview:CBook});
  }

  const handleDel = async (contact) =>{
    var CBook = Clist.base.filter(c => c.id !== contact.target.id);
    await deleteDoc(doc(db, 'contacts', contact.target.id))
    setClist({base:CBook,preview:CBook});

  }

  const find = () =>{
    var testArr = Clist.base;
    if(document.getElementById("mail_filter").checked && !(document.getElementById("mob_filter").checked)){
      testArr = Clist.base.filter(c => c.email !== "");
    }
    if(document.getElementById("mob_filter").checked && !(document.getElementById("mail_filter").checked)){
      testArr = Clist.base.filter(c => c.mob !== "");
    }
    if(document.getElementById("search_key").value !==""){
      const newArr = testArr.filter(c => c.name.includes(document.getElementById("search_key").value) || c.email.includes(document.getElementById("search_key").value) || c.mob.includes(document.getElementById("search_key").value));
      setClist({base:Clist.base,preview:newArr});
    }
    else{
      setClist({base:Clist.base,preview:Clist.base});
    }
  }

  const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType })
    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
  }

  const imp = () =>{
    var input = document.createElement('input');  // create an click on an input element of type file
    input.type = 'file';
    input.click();
    input.onchange = file => { 
      const fileReader = new FileReader();      //file reader object that reads it as plaintext
      fileReader.readAsText(file.target.files[0], "UTF-8");
      fileReader.onload = content => {
        CBook=JSON.parse(content.target.result).contacts;   //JSON.parse allows conversion of plaintext to proper JSON array
        setClist({preview: CBook,         
          base: CBook});
      };
    }
  }

  const exp = () =>{
    downloadFile({
      data: JSON.stringify({contacts: Clist.base}),
      fileName: 'contacts.json',
      fileType: 'text/json',
    })
  }

  const closeModal = () =>{
    setModalClose(!ModalClose);
  }

  useEffect(()=>{ 
    const q = query(collection(db, "contacts"));        //query the db for collection called "contacts"
    onSnapshot(q, (snap)=>{                             //process the query's output, a snapshot of the whole collection, using the ()=>
      let newArr = [];
      snap.forEach((contact)=>{                         //for each element in "snap", fetch their data() and id.
        newArr.push({...contact.data(),id : contact.id});
      })
      setClist({base:newArr,preview:newArr});
    });
  },[]);

  return(
    <div>
      {ModalClose && <Help closeMe={closeModal}/>}
      <Header import={imp} export={exp}/>
      <div className='ui grid two column'>
        <div className='column'>
          <ContactAdd act={handleAdd} style={{position: "sticky"}}/>
        </div>
        <div className='ui column '>
          <div className='ui raised relaxed segment'>
            <Search query={find}/>
            {Clist.base && <ContactList clist={Clist.preview} del={handleDel}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;