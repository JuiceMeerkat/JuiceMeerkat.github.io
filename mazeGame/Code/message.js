import { insertToTable } from './Supabase/supabase.js';
import { getUsername } from './Supabase/utilities.js';
import { showMessage } from './Supabase/supabase.js';


let messageRef = document.getElementById('chatter');

messageRef.addEventListener('change', (event) => sendMessage(event))


console.log('bbbbbbbbbbbnnnnnnnnnnnn')
console.log(messageRef);

// console.log(username);

const grabData = (event) => {
    let value = event.target.value;

    return value;
}

export const sendMessage = (event) => {

    console.log('entered sendMessage function')


    let value = grabData(event);

    let username = getUsername();

    messageRef.value = '';

    insertToTable('messages', {
        'content': value,
        'sent_by': username
    })

    showMessage(value, username);
}