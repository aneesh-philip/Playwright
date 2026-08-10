//test function to test google webpage
//import test function from playwright
import test from "@playwright/test";

test("firsttest",async ({browser})=>{//arrow function(async function)-no returns//browser->fixture
//async- to wait till the action to complete
//playwright fixture-inbuilt reserved functions 
    const context = await browser.newContext()//await- to wait till the action to complete(tom complete the sync))
    const page = await context.newPage()
    await page.goto("https://www.google.com")
})
test.only("secondtest",async ({browser})=>{//test.only - will execute only test
    const context2 = await browser.newContext()
    const page2 = await context2.newPage()
    await page2.goto("https://www.amazon.com")
})

test.only("thirdtest",async ({browser})=>{//test.skip - will skip the test

    const context3 = await browser.newContext()
    const page3 = await context3.newPage()
    await page3.goto("https://www.ebay.com")
}  )
     