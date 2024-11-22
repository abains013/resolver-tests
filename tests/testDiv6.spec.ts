import { test, Page } from '@playwright/test';
import { TestPage } from '../pages/TestPage';  // Import the TestPage object

test.describe('Test Div 6 Page Tests', () => {
    let testPage: TestPage;

    // Setup before each test
    test.beforeEach(async ({ page }: { page: Page }) => {
        testPage = new TestPage(page);
        await testPage.navigateTo(); // Navigate to the login page before each test
        await testPage.waitForPageLoaded();
    });

    // Test case 1: validate button is displayed and then click it
    test('validate value of cell at 2,2 is "Ventosanzap"', async () => {
        // Wait for button to be displayed
        const cellValue = await testPage.findCellValueFromTable(2, 2);
        // Assert that the value of the cell at (2, 2) is "Ventosanzap"
        if (cellValue === 'Ventosanzap') {
            console.log('Assertion passed: The value of the cell at (2, 2) is "Ventosanzap".');
        } else {
            console.error(`Assertion failed: The value of the cell at (2, 2) is "${cellValue}", but expected "Ventosanzap".`);
        }
    });

});
