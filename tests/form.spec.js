import {test, expect } from "@playwright/test";

test ("dropdown",async({page})=>{
    page.goto("https://selenium.qabible.in/")
    const inputform = page.getByRole('link',{name:"Input Form"})//getbyRole-special method
    await inputform.click()
    const selectInput = page.getByRole('link',{name:"Form Submit"}).first()
    await selectInput.click()
    await page.getByPlaceholder('First name').fill("Aneesh")
    await page.locator('#validationCustom02').fill("Philip")
    await page.locator("input[type='text'][placeholder='Username']").fill('Anphi')//CHECKING WITH 2 
    await page.locator('input.form-control#validationCustom03').fill("Cochin")
                        //tag.class#id
    await page.getByPlaceholder('State').fill("Kerala") 
    await page.locator('#validationCustom05').fill("682314")
    const checkbox = page.locator("[type = 'checkbox']")
    await checkbox.check()
    await page.getByRole("button",{name:'Submit form'}).click()
    const message = page.locator(".my-2")
    const messagecheck = await message.textContent()
    console.log(messagecheck)
    expect('Form has been submitted successfully!').toBe(messagecheck)

    const visibleText=await message.isVisible()//returns true or false
    console.log(visibleText)
    await expect(messagecheck).toBeTruthy()//assertion, to check if the message is displayed
    await expect(message).toBeVisible()//assertion, to check for the locator
    //await expect(message).not.toBeVisible()//opposite of .tobeVisible
    await page.pause()
})