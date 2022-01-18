const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ["--ignore-certificate-errors", "--no-sandbox"],
  });

  // YOUR CODE STARTS
  const page = await browser.newPage();
  await page.goto("https://www.netflix.com/login");
  await page.fill("text=Email or phone number", "testingforQa");
  await page.fill("text=Password", "testingforQa");
  await page.keyboard.press("Enter", { delay: 3000 });
  await expect(page).toHaveURL("https://www.netflix.com/Browse");
  // YOUR CODE ENDS
})();
