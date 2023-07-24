import { test, expect } from '@playwright/test';
import {UploadPage} from "../tests/upload.page"


test.beforeEach(async({page, baseURL}) => {

  const upload = new UploadPage(page);
  await page.goto('http://localhost:8000/admin/browse');
  await upload.enterUserName('admin')
  await upload.enterPassword('admin')
  await upload.clickSignInbtn()

})

test.afterEach(async({page}) => {

  await page.close()

})

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(' Papermerge | Documents ')
});

test('upload a new documnent', async ({ page }) => {
  const upload = new UploadPage(page);
  const fileChooserPromise = page.waitForEvent('filechooser');
  await upload.clickUploadbtn();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('test2.png');
});

test('search for an existing documnent', async ({ page }) => {
  const upload = new UploadPage(page);
  await upload.enterSearchText('test2')
  await expect(page.getByText('test2.png').first()).toBeVisible()
});

test('upload api - check the status code should be 200', async ({ request, page }) => {
    
  const responsePromise = page.waitForResponse(resp =>
    resp.url().includes("upload") &&
    resp.status() === 200 &&
    resp.request().method() === "POST"
  );
  const upload = new UploadPage(page);
  const fileChooserPromise = page.waitForEvent('filechooser');
  await upload.clickUploadbtn();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('test2.png');
  const resp = await responsePromise;
  console.log("Response URL:", resp.url());
  console.log("Response status:", resp.status());
  console.log("Response body:", resp.statusText());
  
  })
  