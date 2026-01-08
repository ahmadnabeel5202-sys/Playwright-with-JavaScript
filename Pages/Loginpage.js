exports.loginpage= class Loginpage{
    constructor(page){

       this.page = page;
       this.loginlink= '#login2';
       this.usernameinput= '#loginusername';
       this.passwordinput='#loginpassword';
       this.loginbutton="button[onclick='logIn()']";
    }
    async gotoLoginPage(){
        await this.page.goto('https://www.demoblaze.com/');

    }

    async login(username, password){
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.usernameinput).fill(username);
        await this.page.locator(this.passwordinput).fill(password);
        await this.page.locator(this.loginbutton).click();
        
    }
}