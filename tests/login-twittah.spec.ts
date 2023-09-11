import test from "@playwright/test";
import { LoginPage } from "../pom/login.page";
import { invalidUsers, validUsers } from "../fixtures/users";

let loginPage: LoginPage;

test.beforeEach(async({ page}) => {
    loginPage = new LoginPage(page);

    await loginPage.visit();
});

test('Login successfully', async ({page}) => {
    await loginPage.loginWith(validUsers.credential);
})

for (const invalidUser of invalidUsers) {
test(`Login Unsuccessfully: ${invalidUser.credential.login}`, async ({page}) => {
    await loginPage.loginWith(invalidUser.credential);

    await loginPage.shouldBeDisplayed();
    await loginPage.shouldContainErrorMessage(invalidUser.errorMessage);
})
}