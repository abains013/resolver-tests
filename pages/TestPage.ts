import { Page, Locator, expect } from '@playwright/test';


export class TestPage {
    private page: Page;
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private errorMessage: Locator;
    private listGroupElements: Locator;
    private dropdownMenuButton: Locator;
    private enabledButton: Locator;
    private disabledButton: Locator;
    private div5Button: Locator;
    private alertMessage: Locator;
    private div6Table: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.locator('#inputEmail');  // Capture the selector for the email input
        this.passwordInput = page.locator('#inputPassword');  // Capture the selector for the password input
        this.loginButton = page.locator('button[type="submit"]');  // Capture the selector for the login button
        this.errorMessage = page.locator('.error-message');  // Capture the selector for the error message
        this.listGroupElements = page.locator('.list-group .list-group-item');  // Capture the selector for list group elements
        this.dropdownMenuButton = page.locator('#dropdownMenuButton');
        this.enabledButton = page.locator('#test-4-div .btn-primary');
        this.disabledButton = page.locator('#test-4-div .btn-secondary');
        this.div5Button = page.locator('#test5-button');
        this.alertMessage = page.locator('#test5-alert');
        this.div6Table = page.locator('#test-6-div .table')
    }

    //Method to validate page is loaded
    async waitForPageLoaded(): Promise<void> {
        const pageTitle = await this.page.title();
        expect(pageTitle).toBe('Home');
    }

    // Method to navigate to the login page
    async navigateTo(): Promise<void> {
        await this.page.goto('file://C:/Users/git/resolver/QE-index.html');  // Replace with your actual login URL
    }

    // Method to enter email
    async enterEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    // Method to enter password
    async enterPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    // Method to click the login button
    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }

    // Method to check if email input is visible
    async isEmailInputVisible(): Promise<void> {
        await expect(this.emailInput).toBeVisible();
    }

    // Method to check if password input is visible
    async isPasswordInputVisible(): Promise<void> {
        await expect(this.passwordInput).toBeVisible();
    }

    // Method to check if login button is visible
    async isLoginButtonVisible(): Promise<void> {
        await expect(this.loginButton).toBeVisible();
    }

    // Method to get the error message
    async getErrorMessage(): Promise<string | null> {
        // There is no error message generated in this case
        return await this.errorMessage.textContent();
    }

    // Method to validate length of a list
    async validateLengthOfList(): Promise<void> {
        // Assert that there are exactly 3 items in the list group
        await expect(this.listGroupElements).toHaveCount(3);
    }

    // Method to validate values of a list
    async validateListItemValue(position: number, value: string): Promise<void> {
        const listItem = this.listGroupElements.nth(position); // nth(1) gives the second item (index starts at 0)
        await expect(listItem).toContainText(value);
    }

    // Method to validate badge value of a list
    async validateListItemBadge(position: number, value: string): Promise<void> {
        const listItem = this.listGroupElements.nth(position); // nth(1) gives the second item (index starts at 0)
        const badge = listItem.locator('.badge');
        await expect(badge).toContainText(value);
    }

    async validateDropDownDefaultValue() {
        // Assert that the button text is "Option 1"
        await expect(this.dropdownMenuButton).toHaveText('Option 1');
    }

    async selectOptionDropDown(option: string) {
        // Locate the dropdown button and click it to open the dropdown menu
        await this.dropdownMenuButton.click();

        // Select option from the dropdown
        const option3 = this.page.locator(`text=${option}`);
        await option3.click();

        // Assert that the dropdown button text has updated to option
        await expect(this.dropdownMenuButton).toHaveText(option);
    }

    async validateButtonIsEnabled() {
        // Assert that the button is enabled (i.e., not disabled)
        await expect(this.enabledButton).toBeEnabled();
    }

    async validateButtonIsDisabled(divToTest: string) {
        let buttonLocator: any;
        switch (divToTest) {
            case "div4":
                buttonLocator = this.disabledButton;
                break;
            case "div5":
                buttonLocator = this.div5Button;
                break;
            default:
                console.log("Valid div id not provided");
        }
        // Assert that the button is disabled
        await expect(buttonLocator).toBeDisabled();
    }

    async validateButtonIsDisplayed() {
        // Wait for the button to be displayed (visible)
        await this.div5Button.waitFor({ state: 'visible' });
    }

    async clickOnDiv5Button() {
        await this.div5Button.click();
    }

    async validateSuccessMessageDisplayed() {
        await expect(this.alertMessage).toBeVisible();
        expect((await this.alertMessage.innerText()).trim()).toBe('You clicked a button!');
    }

    // Method to get the value of any cell in the table
    async findCellValueFromTable(row: number, column: number): Promise<string | null> {

        // Locate the specific row and cell based on indices (starting from 0)
        const cell = this.div6Table.locator('tbody tr').nth(row).locator('td').nth(column);

        // Return the text content of the cell
        return await cell.textContent();
    }
}
