// Get the element with the ID 'countButton' and add a click event listener to it
document.getElementById('countButton').addEventListener('click', function() {
   
    // Get the value of the textarea element with the ID 'textInput'
    const textInput = document.getElementById('textInput').value;
    
    // Trim the text input to remove any leading/trailing spaces and split it by one or more space characters (using a regular expression)
    // This results in an array of words
    const words = textInput.trim().split(/\s+/);
    
    // Get the length of the words array, which is the word count
    const wordCount = words.length;
    
    // Replace all characters that are not alphanumeric (a-z, A-Z, 0-9) with an empty string
    // This effectively removes all special characters and spaces from the input text
    const characters = textInput.replace(/[^a-zA-Z0-9]/g, '');
    
    // Get the length of the characters string, which is the character count
    const charCount = characters.length;

    // Set the innerText of the element with the ID 'wordCount' to display the word count
    // If the trimmed text input is empty, display 0 as the word count
    document.getElementById('wordCount').innerText = 'Word Count: ' + (textInput.trim() === '' ? 0 : wordCount);
    
    // Set the innerText of the element with the ID 'charCount' to display the character count
    document.getElementById('charCount').innerText = 'Character Count: ' + charCount;
});
