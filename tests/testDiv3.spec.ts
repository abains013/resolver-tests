import { test, Page } from '@playwright/test';
import { TestPage } from '../pages/TestPage';  // Import the TestPage object

test.describe('Test Div 3 Page Tests', () => {
    let testPage: TestPage;

    // Setup before each test
    test.beforeEach(async ({ page }: { page: Page }) => {
        testPage = new TestPage(page);
        await testPage.navigateTo(); // Navigate to the login page before each test
        await testPage.waitForPageLoaded();
    });

    // Test case 1: validate option 1 is default
    test('validate option 1 is default', async () => {
        await testPage.validateDropDownDefaultValue();
    });

    // Test case 2: should select "Option 3" from the dropdown menu
    test('should select "Option 3" from the dropdown menu', async ({ }) => {
        await testPage.selectOptionDropDown("Option 3");
    });

});
