import {test,expect} from "@playwright/test";

test("radio",async({page})=>{
  await page.goto("https://selenium.qabible.in/")
  await page.locator(".nav-link").nth(1).click()
  const radiolink = page.locator("[href='radio-button-demo.php']") //href- link
  await radiolink.click()
  const radiobutton = page.getByRole("radio", {name:'Male'}).first() //getbyrole- method to select the radio button
  await radiobutton.click()
  const value = await radiobutton.isChecked()//ischecked returns True or False
  await expect (value).toBe(true)
  await page.pause()
})
