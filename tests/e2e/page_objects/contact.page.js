class ContactPage {
    constructor() {
        this.contactLink  = element(by.css('[data-gtm-category="header-contact-cta"]'))
        this.userFirstName  = element(by.xpath("//*[@id='_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name']"));
        this.userLastName =  element(by.xpath("//*[@id='_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name']"));
        this.userEmail =  element(by.css('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email'));
        this.userPhone =  element(by.id('_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone'));
        this.userComment =  element(by.id('_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment'));
    }

    //Opens up the epam page
    async open() {
        await browser.get('https://www.epam.com/about/who-we-are/contact');
    }

    //fill the user first name on contact page
    async fillUserFirstName(firstName){
        await browser.driver.sleep(1000);
        await this.userFirstName.sendKeys(firstName);
    }

    //fill the user last name on contact page
    async fillUserLastName(lastName){
        await this.userLastName.sendKeys(lastName);
    }

    //fill the user email on contact page
    async fillUserEmail(email){
        await this.userEmail.sendKeys(email);
    }

    //fill the user phone on contact page
    async fillUserPhone(userPhone){
        await this.userPhone.sendKeys(userPhone);
    }

    //fill the user feedback comment on contact page
    async fillUserComment(userComment){
        await this.userComment.sendKeys(userComment);
    }

    //Accept cookies
    async acceptCookies(){
        await element(by.css('span.button__content')).click();
    }

    //select first element from how did you hear about us list
    async selectFirstOptionOnHowDidYouHearList(){
        await element.all(by.css('span.select2-selection__rendered')).last().click();
        await element.all(by.css('li.select2-results__option')).first().click();
    }

    //fill the new input added from list response
    async fillAutoAddedInput(userComment){
        await element(by.id('id-07e96799-2272-3660-8629-ab94f9d94b1d')).sendKeys(userComment);
    }

    //click processing personal info checkbox
    async clickFirstCheckbox(){
        await element.all(by.css('div.checkbox-ui')).first().click();
    }

    //click submit button
    async clickSubmitButton(){
        await element(by.css("[type='submit']")).click();
    }

    //switch to Iframe
    async switchToIframe(){
        //switch to iframe
        await browser.switchTo().frame(element(by.xpath("//iframe[@title='recaptcha challenge']")).getWebElement());
        await browser.driver.sleep(2000);

    }

    //get the captcha submitButton
    async getCaptcha(){
        //getting captcha button
       return await element(by.css("button.rc-button-default.goog-inline-block")).isPresent();
    }

}
export default new ContactPage();