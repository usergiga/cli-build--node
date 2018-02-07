
const fs = require('fs');
const path = require('path');

module.exports = {
    
    getCurrentDir : () => {
        return path.basename( process.cwd() );
    },

    dirExists : ( filePath ) => {
        try {
            fs.statSync( filePath ).isDirectory();
        } catch (error) {
            return false;
        }
    }
};