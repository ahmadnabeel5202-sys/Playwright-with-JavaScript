exports.Cartpage= class Cartpage{

    constructor(page){
        this.page=page;
         this.cartRows = "//tbody[@id='tbodyid']/tr";
        this.noOfproducts='//tbody[@id="tbodyid"]/tr/td[2]'
    }



    async CheckProductInCart(productName) {
          await this.page.locator(this.cartRows).first().waitFor({
            timeout: 3000
        });

        const productsInCart=await this.page.$$(this.noOfproducts);
         const productNames = [];
        for (const product of productsInCart) {

           const text =(await product.textContent()).trim();
           productNames.push(text);
           console.log(text);
       
          



            if(text.includes(productName)){
                return true;
               
            }
        }
         console.log('Products in cart:', productNames);
          console.log('Total products in cart:', productNames.length);

        return productNames;   //  IMPORTANT
    
        
    }
}