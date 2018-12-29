module.exports = {
    'navigate to component' : function(browser) {
        browser.url('http://localhost:8080/')
        .waitForElementVisible('body', 1000)
        .assert.title('tp3-resto')
        .end();
    },

    /*
    'should show Menu Tab': function(browser) {
        browser
        .url('http://localhost:8080/')
        .waitForElementVisible('body', 1000)
        .assert.cssProperty(".el-dialog__wrapper", 'display', 'none')
        .elements('css selector', 'td.el-table_1_column_3 > div > button', function(res) {
            console.log(res.value[0])
            
            browser.click(res.value[0].ELEMENT)
        })
        .click("table > tbody > tr:nth-child(1) > td.el-table_1_column_3 > div > button", function(result) {
            console.log(result)
        })
        .assert.cssProperty(".el-dialog__wrapper", 'display', 'block')
        .end()
    } */
}