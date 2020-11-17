class LandingPage {
    constructor() {
        this.contactLink = element(by.css('[data-gtm-category="header-contact-cta"]'))
    }

    //Opens up the epam page
    async open() {
        await browser.get('https://www.epam.com/');
    }

    //Clicks the contact header button
    async clickContactLink(){
        await this.contactLink.click();
    }

}
export default new LandingPage();