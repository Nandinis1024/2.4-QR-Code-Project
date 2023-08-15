import inquirer from 'inquirer';

// An array of options for the user to select from
const options = ['Option 1', 'Option 2', 'Option 3'];

inquirer
  .prompt([
    {
      type: 'list',
      name: 'selectedOption',
      message: 'Select an option:',
      choices: options,
    },
  ])
  .then((answers) => {
    // The user's selected option will be available in the 'selectedOption' property of the 'answers' object
    console.log('Selected option:', answers.selectedOption);
  })
  .catch((error) => {
    console.error(error);
  });
