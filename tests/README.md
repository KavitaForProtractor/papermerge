Table of Contents
Installation
Execution
Folder Structure
Contributing
License
Installation
To run the test cases, you need to have Node.js and npm (Node Package Manager) installed on your system. If you don't have Node.js installed, you can download it from the official website: https://nodejs.org/

Clone this repository to your local machine using the following command:


git clone https://github.com/KavitaForProtractor/papermerge.git


Navigate to the project folder:

cd tests
Install the required dependencies using npm:

npm install
The installation process is now complete. You can proceed to execute the test cases.

Execution
To execute the test cases, run the following command in the project folder:

npx playwright test

This command will run the Playwright test cases defined in the tests folder using the specified test runner configuration.

Folder Structure
The project has the following folder structure:

go

tests/
  ├── tests/
  │   ├── upload.page.ts
  │   ├── upload.spec.ts
  │   └── ...
  ├── package.json
  └── README.md
tests/: This folder contains individual test case files written in Typescript using Playwright.

package.json: This file contains the project's metadata and dependencies. It also includes the test script to run the test cases.

Contributing
Contributions are welcome! If you find any issues or have ideas for improvements, please feel free to open an issue or submit a pull request.

Fork the repository to your GitHub account.
Create a new branch from the main branch: git checkout -b my-feature-branch
Make your changes and commit them: git commit -m "Description of changes"
Push the changes to your fork: git push origin my-feature-branch
Open a pull request to the original repository.
License
MIT License