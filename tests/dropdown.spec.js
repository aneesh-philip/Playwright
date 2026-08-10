import {test, expect } from "@playwright/test";

test ("dropdown",async({page})=>{
    page.goto("https://selenium.qabible.in/")
    const inputform = page.getByRole('link',{name:"Input Form"})//getbyRole-special method
    await inputform.click()
    const selectInput = page.getByRole('link',{name:"Select Input"})
    await selectInput.click()
    const parentselect = page.locator('.card-body').first()
    const childlocator = await parentselect.locator('.form-control')//locator chaining
    await childlocator.selectOption('Red')//used for dropdown
    const colour = await childlocator.inputValue()
    console.log(colour)

    const selectedColour = page.locator('#message-one')
    const colormessage = await selectedColour.textContent()//textcontent- used to get the text details from a field
    console.log(colormessage)

    //assertion
    expect(colormessage).toContain(colour)//to assert a specific word is present in the sentence
    //toHaveText (colour)-to match the exact word
    await page.pause()
})