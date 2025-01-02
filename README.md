# Google Sheets to Google Forms Automation

This repository hosts a Google Apps Script designed to automate the creation of Google Forms from data stored in Google Sheets. The script is perfect for educators, researchers, and anyone looking to streamline the process of quiz or survey creation based on a structured dataset.

## Features

- **Automated Google Form Creation**: Automatically generates a Google Form from a configured Google Sheets spreadsheet.
- **Quiz Configuration**: Sets up forms to function as quizzes, including point assignments and correct answers for each question.
- **Question Shuffling**: Shuffles questions to ensure a varied order, enhancing the quiz-taking experience.
- **Initial Information Collection**: Adds a section for participants to enter essential details such as full name, roll number, and email.
- **Customizable and Adaptable**: Script can be easily modified to include more fields or adapt to different form setups.

## Sheet Format

The Google Sheets used with this script needs to be structured in a specific format to ensure proper form generation. Here’s the required format:

| Question | Option1 | Option2 | Option3 | Option4 | Correct Answer |
|----------|---------|---------|---------|---------|----------------|
| What is 2+2? | 2 | 3 | 4 | 5 | 4 |
| Who wrote "Hamlet"? | Shakespeare | Dickens | Austen | Frost | Shakespeare |

- **Question**: Contains the text of the question.
- **Option1 to Option4**: Contains the possible answers to the question.
- **Correct Answer**: Must exactly match one of the options provided for that question.

Ensure no extra spaces or formatting errors in the "Correct Answer" to prevent mismatches.

## Getting Started

### Prerequisites

- Access to Google Drive with permission to create Google Sheets and Google Forms.

### Setup Instructions

1. **Prepare the Spreadsheet**:
   - Open Google Sheets and format your quiz or survey data according to the specified format above.
   - Name your sheet for easy identification.

2. **Add the Script**:
   - With the Google Sheets file open, navigate to `Extensions > Apps Script`.
   - Delete any code in the script editor and replace it with the script from this repository.
   - Save the script with a suitable name.

3. **Run the Script**:
   - Click the play/run button in the Apps Script toolbar to execute the script.
   - The first run will require authorization. Follow the prompts to authorize the script.

4. **Access the Form**:
   - Once the script has run, it will log the URL of the created form in the Apps Script's `Logs` (View > Logs).
   - Open the URL to view and share your form.

