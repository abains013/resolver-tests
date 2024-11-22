import { test, Page } from '@playwright/test';
import { TestPage } from '../pages/TestPage';  // Import the TestPage object
import { Constants } from '../utils/Constants';

test.describe('Test Div 2 Page Tests', () => {
    let testPage: TestPage;

    // Setup before each test
    test.beforeEach(async ({ page }: { page: Page }) => {
        testPage = new TestPage(page);
        await testPage.navigateTo(); // Navigate to the login page before each test
        await testPage.waitForPageLoaded();
    });

    // Test case 1: validate length of the list items
    test('validate length of the list items', async () => {
        await testPage.validateLengthOfList();
    });

    // Test case 2: validate text of the elements
    test('validate text of the elements', async ({ }) => {
        // Loop through the values to check the text of all list items
        for (let i = 0; i < Constants.LIST_ITEMS.length; i++) {
            await testPage.validateListItemValue(i, Constants.LIST_ITEMS[i].TEXT);
        }
    });

    // Test case 3: validate badge of the elements
    test('validate badge of the elements', async ({ }) => {
        // Loop through the values to check the badge of all list items
        for (let i = 0; i < Constants.LIST_ITEMS.length; i++) {
            await testPage.validateListItemValue(i, Constants.LIST_ITEMS[i].BADGE);
        }
    });

});
