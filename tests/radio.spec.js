import test from "@playwright/test";

test("radio",async({page})=>{
  await page.goto("https://selenium.qabible.in/")
  await page.locator(".nav-link").nth(1).click()
  const radiolink = page.locator("[href='radio-button-demo.php']")//href- link
  await radiolink.click()
  const radiobutton = page.getByRole("radio", {name:'Male'})//getbyrole- method to select the radio button
  await radiobutton.first().click()
  await page.pause()
})
