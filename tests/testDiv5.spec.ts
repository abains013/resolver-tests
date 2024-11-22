import { test, Page } from '@playwright/test';
import { TestPage } from '../pages/TestPage';  // Import the TestPage object

test.describe('Test Div 5 Page Tests', () => {
    let testPage: TestPage;

    // Setup before each test
    test.beforeEach(async ({ page }: { page: Page }) => {
        testPage = new TestPage(page);
        await testPage.navigateTo(); // Navigate to the login page before each test
        await testPage.waitForPageLoaded();
    });

    // Test case 1: validate button is displayed and then click it
    test('validate button when clicked gives success message, and then gets disabled', async () => {
        // Wait for button to be displayed
        await testPage.validateButtonIsDisplayed();
        // Click on the button
        await testPage.clickOnDiv5Button();
        // Validate success message is displayed
        await testPage.validateSuccessMessageDisplayed();
        // Validate button is disabled
        await testPage.validateButtonIsDisabled("div5");
    });

});
