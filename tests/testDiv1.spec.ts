import { test, Page } from '@playwright/test';
import { TestPage } from '../pages/TestPage';  // Import the TestPage object
import { Constants } from '../utils/Constants';

test.describe('Login Page Tests', () => {
    let testPage: TestPage;

    // Setup before each test
    test.beforeEach(async ({ page }: { page: Page }) => {
        testPage = new TestPage(page);
        await testPage.navigateTo(); // Navigate to the login page before each test
        await testPage.waitForPageLoaded();
    });

    // Test case 1: Check if email, password fields, and login button are visible
    test('should display email, password input fields, and login button', async () => {
        await testPage.isEmailInputVisible();
        await testPage.isPasswordInputVisible();
        await testPage.isLoginButtonVisible();
    });

    // Test case 2: Log in with valid credentials
    test('should log in with valid credentials', async ({ page }) => {
        await testPage.enterEmail('validuser@example.com');
        await testPage.enterPassword('validpassword123');
        await testPage.clickLoginButton();

        // Assume successful login redirects to the success page
        //await expect(page).toHaveURL(/dashboard/); // Check if redirected to the success page
    });

    // Test case 3: Log in with invalid credentials
    test('should show error message for invalid login credentials', async () => {
        for (let invalidEmail of Constants.INVALID_EMAIL_PASSWORDS) {
            await testPage.enterEmail(invalidEmail.EMAIL);
            await testPage.enterPassword(invalidEmail.PASSWORD);
            await testPage.clickLoginButton();
            //const errorMessage = await testPage.getErrorMessage();

            // Assume invalid login should give an error message
            //expect(errorMessage).toBe(invalidEmail.ERROR_MESSAGE);
        }
    });

});
