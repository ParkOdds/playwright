import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://twitter.com/');
    await page.getByTestId('loginButton').click();
    await page.getByLabel('Phone, email, or username').click();
    await page.getByLabel('Phone, email, or username').fill('berretasanstos@gmail.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByTestId('ocfEnterTextTextInput').fill('@pwtester12345');
    await page.getByTestId('ocfEnterTextNextButton').click();
    await page.getByLabel('Password', { exact: true }).fill('Abcd123456');
    await page.getByTestId('LoginForm_Login_Button').click();
    await page.getByTestId('tweetTextarea_0').locator('div').nth(2).click();
    await page.getByTestId('tweetTextarea_0').fill('Hello World!');
    await page.getByTestId('tweetButtonInline').click();
    await page.getByTestId('SideNav_AccountSwitcher_Button').click();
    await page.getByTestId('AccountSwitcher_AddAccount_Button').press('Escape');
    await page.getByTestId('AppTabBar_Profile_Link').click();
    await page.locator('article > div > div > div > div > .css-1dbjc4n').first().click();
    await page.getByText('Hello World!').click();
  });