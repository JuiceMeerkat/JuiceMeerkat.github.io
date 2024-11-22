import { listenToChanges, logTableData, updateTable, insertToTable, handleMessagesChange } from './Supabase/supabase.js';

let allowAlerts = false;

window.listenToChanges = listenToChanges;
window.logTableData = logTableData;
window.updateTable = updateTable;
window.insertToTable = insertToTable;

let theScript = 'initJS.js';
console.log('theScript : ', theScript);




let data;
// data = fetchMessages();
// console.log(data);

logTableData('messages');

// Start listening for changes
listenToChanges('messages', handleMessagesChange);

// Test out insertToTable

// insertToTable('messages', 
//   {'sent_by': 'Operator',
//     'content': 'yoooyooos'
//   }
// );




let random = Math.floor(Math.random() * (15 - 6) + 6);

// let table = 'messages';
// let field = 'id';
// let fieldAnswer = 1;
// let cField = 'sent_by';
// let cFieldAnswer = random;
// updateTable(table, field, fieldAnswer, cField, cFieldAnswer);


