import { test, Page } from '@playwright/test';
import { TestPage } from '../pages/TestPage';  // Import the TestPage object

test.describe('Test Div 4 Page Tests', () => {
    let testPage: TestPage;

    // Setup before each test
    test.beforeEach(async ({ page }: { page: Page }) => {
        testPage = new TestPage(page);
        await testPage.navigateTo(); // Navigate to the login page before each test
        await testPage.waitForPageLoaded();
    });

    // Test case 1: validate button is enabled
    test('validate button is enabled', async () => {
        await testPage.validateButtonIsEnabled();
    });

    // Test case 2: validate button is enabled
    test('validate button is disabled', async ({ }) => {
        await testPage.validateButtonIsDisabled("div4");
    });

});
