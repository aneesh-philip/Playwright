//test function

import {test,expect} from "@playwright/test";//import test and expect (for assertion)
//css selector(href,id,class)
test("locator",async({page})=>{
    await page.goto("https://selenium.qabible.in/")
    //await page.locator("[href='simple-form-demo.php']").click()//using href
    await page.locator(".nav-link").nth(1).click()//using class-'.'; if class is the attribute(Error: strict mode violation-if the attribute is not unique)
    await page.locator("#single-input-field").fill("Hello")//using ID-'#';.fill- enter value in a textbox
    await page.pause()//to debug(to pause the test step)

})
//<a class="nav-link" href="simple-form-demo.php">Input Form</a>
//a- attributes (class=value, href=value)
//nth-using index eg: 1st element in the page-nth(0)
//.first-first element in the page
//.last-last element in the page


//xpath
test.only("checkbox",async({page})=>{
  await page.goto("https://selenium.qabible.in/")
  await page.locator(".nav-link").nth(1).click()
  await page.locator("//a[@href='check-box-demo.php']").click()//xpath
                     //attribute[@tagname=value]
  //await page.locator(".form-check-label").first().click()//.first-click on the first element
  const checkbox = page.locator(".form-check-label").first()// .check- click on the checkbox#
  //to check the checkbox
  await checkbox.check()
  const isCheck = await (checkbox).isChecked()//ischecked- returns true or false(not an assertion)
  console.log(isCheck)//to print true or false value of assertion
  await expect(isCheck).toBeTruthy()//assertion on the value
  await expect(checkbox).toBeChecked()//assertion for a checkbox
  //to uncheck the checkbox
  await checkbox.uncheck()
  const unCheck = await (checkbox).isChecked()
  console.log(unCheck)//to print true or false value of assertion
  await expect(unCheck).toBeFalsy
  await expect(checkbox).not.toBeChecked//opposite assertion to check checkbox is unchecked

  await page.pause()//to debug(to pause the test step)

})


//


