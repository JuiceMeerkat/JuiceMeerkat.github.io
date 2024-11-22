
// Initialize the Supabase client
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

//Import supabase credentials from the config file
import { SUPABASE_URL, SUPABASE_KEY } from './config.js'; 


let theScript = 'supabase.js';
console.log('theScript : ', theScript);


console.log('supabase.js , SUPABASE_URL : ', SUPABASE_URL);
console.log('supabase.js , SUPABASE_KEY : ', SUPABASE_KEY);

// Create the client
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log('supabase.js, supabase : ', supabase);

/**
 * Listen to changes in a specified table
 * @param {string} tableName - The table to listen to (e.g., 'messages')
 * @param {Function} callback - The function to handle incoming changes
 */



// export async function fetchMessages() {
//     const { data, error } = await supabase.from('messages').select();
//     if (error) {
//         console.error('Error fetching messages:', error);
//         return [];
//     }
//     return data;
// }



/**
 * Fetch and log all data from a specified table
 * @param {string} tableName - The name of the table to fetch data from
 */


export const logTableData = async (tableName) => {
    console.log('beginning logTableData...');
    try {
      const { data, error } = await supabase
        .from(tableName) // Specify the table
        .select('*'); // Select all columns
  
      if (error) {
        console.error('Error fetching data:', error);
        return;
      }
  
      console.log(`Data from ${tableName}:`, data);
    } catch (err) {
      console.error('Error:', err);
    }
  };


export const listenToChanges = (tableName, callback) => {
  supabase
    .channel(`realtime:${tableName}`)
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: tableName },
      callback // Pass the incoming payload to the provided callback
    )
    .subscribe();
};


// .eq basically is WHERE in sql, so it takes a field and a 'answer' to that field a record, so that singles out the record
// then the .update (which strangely comes before the .eq even though that doesn't make intuitive sense) updates the value from a specificed column/field (first param) and changes it to the second param

export const updateTable = async (tableName, field, fieldAnswer, cField, cFieldAnswer) => {
  console.log('updating ', cField);

  let setClause;
  setClause = { [cField] : cFieldAnswer};

  const { data, error } = await supabase
  .from('messages')
  .update(setClause)
  .eq(field, fieldAnswer);

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log('dataaa : ', data); 
  }
}


export const insertToTable = async (tableName, insertRow) => {

  try {
    // You don't actually have to enter something for everything, I haven't entered something for the uuid or date_created fields in my table
    const { error } = await supabase
    .from(tableName)
    .insert([insertRow])
    .select(); // This just returns the just sent message to the console i think

  } catch (error) {

    console.log('There was an error ');
    console.log('Error : ', error);
  }

}


// Callback to handle changes in the 'messages' table
const handleMessagesChange = (payload) => {
  console.log('Change received in messages table:', payload);
  if (allowAlerts) {
    window.alert('Change received in messages table:', payload);
  }

  // Update the game logic or UI based on the change
  if (payload.eventType === 'INSERT') {
    const newMessage = payload.new; // The new row data
    console.log('New message inserted:', newMessage);
  }
};

export const showMessage = (content, sender) => {
  let newMessage = document.createElement('div');
  // console.log(newMessage);
  console.log('content : ', content);
  console.log('sender : ', sender);
  newMessage.classList.add('message');
  newMessage.innerHTML = `
  <p class="messageContent">${content}</p>
  <p class="messageSender"> - ${sender}</p>
  `

  let messagesBoxMessagesRef = document.getElementById('messagesBoxMessages');
  let messagesBox = document.getElementById('messagesBox');

  console.log('messagesBoxMessagesRef : ', messagesBoxMessagesRef);
  console.log(newMessage)
  messagesBoxMessagesRef.appendChild(newMessage);

  // Auto scroll to  most recent message
  messagesBox.scrollTop = messagesBox.scrollHeight;

  // return messagesBoxMessagesRef;

}

window.showMessage = showMessage;