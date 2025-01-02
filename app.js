function importQuestionsToForm() {
  // Get the active spreadsheet and the first sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var data = sheet.getDataRange().getValues(); // Get all data

  // Shuffle the data array excluding the header row
  data = shuffleArray(data.slice(1));

  // Create a new Google Form and enable it as a quiz
  var form = FormApp.create('My Quiz Form');
  form.setIsQuiz(true); // Set the form as a quiz

  // Add a section for user details
  var section = form.addSectionHeaderItem();
  section.setTitle("Please enter your details");

  // Add fields for full name, roll number, and email
  form.addTextItem().setTitle("Full Name").setRequired(true);
  form.addTextItem().setTitle("Roll Number").setRequired(true);
  form.addTextItem().setTitle("Email Address").setRequired(true);

  // Loop through each row in the shuffled data array
  for (var i = 0; i < data.length; i++) {
    var question = (i + 1) + '. ' + data[i][0]; // Prepend question number
    var options = data[i].slice(1, 5); // Get options from columns 2 to 5
    var correctAnswer = data[i][5]; // Column 6: Correct answer text

    // Create a multiple-choice question
    var mcq = form.addMultipleChoiceItem();
    mcq.setTitle(question).setPoints(2); // Set points for each question

    // Prepare the choice options with correct answer
    var choices = options.map(function(option) {
      return mcq.createChoice(option, option === correctAnswer);
    });

    // Set the choices to the multiple-choice question
    mcq.setChoices(choices);
  }

  Logger.log('Form URL: ' + form.getEditUrl()); // Log the form URL to view it
}

// Function to shuffle an array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
