# resolver-tests


# Playwright and TypeScript Project

This project uses **Playwright** to automate browser interactions and **TypeScript** for writing clean, type-safe code.

### Table of Contents:
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [How to Run Tests](#how-to-run-tests)
- [Directory Structure](#directory-structure)
- [Additional Information](#additional-information)

---

## Requirements

Before getting started, make sure you have the following installed on your computer:

1. **Node.js** (version 16 or higher)
   - [Install Node.js here](https://nodejs.org/)
   
2. **Text Editor or IDE** (e.g., Visual Studio Code)
   - [Download Visual Studio Code](https://code.visualstudio.com/)

---

## Setup Instructions

### Step 1: Clone the Repository
First, download the project to your computer.

- Open a terminal or command prompt.
- Run the following command to clone the project:

```bash
git clone https://github.com/abains013/resolver-tests.git
```
### Step 2: Install Dependencies
After downloading the project, navigate to the project folder and install the required packages.

1. Open a terminal or command prompt.
2. Navigate to the project folder:

```bash
cd resolver-tests
```

3. Install the dependencies by running:

```bash
npm install
```

This will download and install all the necessary tools (like Playwright and TypeScript) for the project to work.

---

## How to Run Tests

### Step 1: Start the Tests

1. Replace the path 'file://C:/Users/git/resolver/QE-index.html' at line number 41 in TestPage.ts file with the actual location of the HTML file needed for testing. QE-index.html file is included in this project as well. 
2. In the terminal (inside the project folder), run the following command:

```bash
npm test
```

This command will run the automated tests using Playwright. Playwright will open a web browser, interact with a website (such as clicking buttons, filling out forms, or reading data from the page), and check if everything works correctly.
In the playwright.config.js file, only chrome is enabled. But feel free to uncomment any other browser to run the tests in the respective browser.

### Step 2: Check Test Results
After the tests are completed, you will see the results in the terminal. If everything works as expected, the test will pass, and you will see a success message.

---

## Directory Structure

Here is what the project directory looks like:

```
playwright-typescript-project/
│
├── node_modules/          # Folder containing all installed dependencies (do not modify)
├── tests/                 # Folder containing all test files
│   └── testDiv1.spec.ts   # Test Div 1 file
│   └── testDiv2.spec.ts   # Test Div 2 file
│   └── testDiv3.spec.ts   # Test Div 3 file
│   └── testDiv4.spec.ts   # Test Div 4 file
│   └── testDiv5.spec.ts   # Test Div 5 file
│   └── testDiv6.spec.ts   # Test Div 6 file
├── pages/                 # Folder containing the file for all the locators
│   └── TestPage.ts        # Page file for HTML file
├── utils/                 # Folder containing any utility methods needed
│   └── Constants.ts       # Class containing any static data used for testing
├── package.json           # Project configuration and dependencies
├── tsconfig.json          # TypeScript configuration file
├── README.md              # This file
└── package-lock.json      # Lock file for dependency versions (do not modify)
```

### Key files:
- **`tests/`**: Contains the actual automated test scripts.
- **`package.json`**: Defines the project and lists the required libraries and tools (such as Playwright and TypeScript).
- **`tsconfig.json`**: Configures TypeScript for the project (you don’t need to change this unless you want to adjust TypeScript settings).

---

## Additional Information

If you need further help with setting up or running the project, feel free to reach out!