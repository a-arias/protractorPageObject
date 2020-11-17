const expect = global['chai'].expect;
const EC = protractor.ExpectedConditions;

import ContactPage from '../page_objects/contact.page.js';
import LandingPage from '../page_objects/landing.page.js';

describe('EPAM Contact Feature', function () {
    it('should be able to send feedback using contact form', async function () {
        await LandingPage.open();
        await LandingPage.clickContactLink();

        await ContactPage.fillUserFirstName('abram');
        await ContactPage.fillUserLastName('Arias');
        await ContactPage.fillUserEmail('abram@example.com');
        await ContactPage.fillUserPhone('7777777');
        await ContactPage.fillUserComment('I love Epam!!');
        await ContactPage.acceptCookies();
        await ContactPage.selectFirstOptionOnHowDidYouHearList();
        await ContactPage.fillAutoAddedInput('its great');
        await ContactPage.clickFirstCheckbox();
        await ContactPage.clickSubmitButton();
        await ContactPage.switchToIframe();


        expect(await ContactPage.getCaptcha()).to.equal(true);
    });
});