exports.Homepage=class Homepage{
    
    constructor(page){

        this.page=page;
        this.productlist="//div[@id='tbodyid']//div//h4/a";
        this.addTocartbtn="//a[normalize-space()='Add to cart']";
        this.cart='#cartur';
    }
      
    async addProductToCart(productName){

       await this.page.waitForLoadState('domcontentloaded');
       await this.page.waitForSelector(this.productlist, { state: 'visible', timeout: 10000 });

       //New fix using Gpt --For check
       const product = this.page.locator(this.productlist, { hasText: productName });
        await product.waitFor({ state: 'visible' });
        await product.click();

        // const productlist= await this.page.$$(this.productlist);
        // let clicked =false;
        // for (const product of productlist){

        //     if(productName== await product.textContent()){
        //         await product.click()
        //         clicked=true;
        //         break;
        //     }
        // }
        //await this.page.waitForSelector(this.addTocartbtn);

       await this.page.once('dialog', async dialog=>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }
        })
     await this.page.waitForSelector(this.addTocartbtn);
    await this.page.locator(this.addTocartbtn).scrollIntoViewIfNeeded();

      await this.page.locator(this.addTocartbtn).click();

    }



   async gotocart(){
    await this.page.locator(this.cart).click();
    
   } 
}