module.exports = {
    'navigate to component' : function(browser) {
        browser.url('http://localhost:8080/')
        .waitForElementVisible('body', 1000)
        .assert.title('tp3-resto')
        .end();
    }
}