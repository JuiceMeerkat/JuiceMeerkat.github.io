import { updateTable } from './Supabase/supabase.js';
import { setUsername } from './Supabase/utilities.js';



// inputBoxRef = document.getElementById('usernameBox');

let submitButtonRef = document.getElementById('submitButton');

// inputBoxRef.addEventListener('change', logIt);
// submitButtonRef.addEventListener('click', findUsernames);

// let username = inputBoxRef.value;

let username;


// let theScript = 'username.js';
console.log('theScript : ', theScript);
console.log('yaaa mate les go louie')



// oldUsername = 

function findUsernames(event) {
    let oldUsername = username;
    // let newUsername = event.target.value;

    // console.log('before')
    let [random, newUsername] = grabData(event);
    // window.alert('after');
    

    console.log('***********find usernames**************')
    console.log('oldUsername : ', oldUsername);
    console.log('newUsername : ', newUsername);    
    console.log('***********find usernames**************')


    username = newUsername;
    
    console.log('username : ', username);
    console.log('oldUsername 1: ', oldUsername);



    return [oldUsername, newUsername];

}


let cField = 'sent_by';


let fieldRef = document.getElementById('field');
let fieldAnswerRef = document.getElementById('fieldAnswer');

const grabData = (event) => {

  console.log('fieldRef.value : ', fieldRef.value);
  console.log('fieldAnswerRef.value : ', fieldAnswerRef.value);

  return [fieldRef.value, fieldAnswerRef.value]

}



const handleSubmit = (event) => {

  event.preventDefault();
  console.log('yaaaaaaaaaaaaaaaaaaaa');

  // fieldAnswer
//   let [fieldRefV, fieldAnswerRefV] = grabData(event);

  let [oldUsername, newUsername] = findUsernames(event);
  console.log('oldUsername : ', oldUsername);

    setUsername(newUsername);

  console.log('----------')
  console.log('oldUsername : ', oldUsername);
  console.log('newUsername : ', newUsername);   
  console.log('----------')

  // Find old username and new one
  // findUsernames(event);

//   fieldRef.value = '';
//   fieldAnswerRef.value = '';

    fieldRef.value = oldUsername;
    // fieldAnswerRef.value

  console.log('in ', theScript, ' cField : ', cField);
  updateTable('messages', 'sent_by', oldUsername, cField, newUsername);
}



submitButtonRef.addEventListener('click', (event) => handleSubmit(event));

window.handleSubmit = handleSubmit;

