# SymphonySolutions
Symphony Solutions BV - Technical Task

## Running Automated Tests

### Locally

1. **Prerequisites:**
   - Ensure Node.js and npm are installed on your machine.

2. **Installation:**
   - Clone this repository to your local machine.
   - Open a terminal and navigate to the project directory.
   - Run `npm install` to install project dependencies.

3. **Running Tests:**
   - Once the dependencies are installed, run `npx cypress run --headless` in the terminal to execute the Cypress tests in headless mode.
   - Alternatively, to open the Cypress Test Runner for interactive test execution, run `npm run cypress:open`.

### On Continuous Integration (CI)

This project is configured to run tests automatically on a CI platform GitLab CI. Follow these steps:

1. **Push Changes:**
   - Push your changes to the repository.

2. **CI Configuration:**
   - Ensure that your CI platform is configured to install dependencies (`npm install`) and execute Cypress tests (`npx cypress run --headless`) as part of the CI/CD pipeline.

3. **View Test Results:**
   - Once the CI pipeline executes, you can view the test results and logs within the CI/CD platform interface.

## Additional Information

- Adjust the configuration settings in the `cypress.json` file as needed.
- Explore the `e2e` directory for test scripts and modify them according to your requirements.

Feel free to reach out for any questions or issues encountered while running the tests.
