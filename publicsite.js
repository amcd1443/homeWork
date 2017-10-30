console.log(" Testing Public Site")

//set up libraries 
var webdriver = require('selenium-webdriver'),
	By = webdriver.By,
	until = webdriver.until;
var fs = require('fs');

var driver = new webdriver.Builder()
	.forBrowser('chrome')
	.build();


var getURLTitleWaitClickXPath = function(getURL, getTitle, getXPath) {
driver.get(getURL).catch(function (e) {	
	console.log(" " + getURL + " NOT clicked");
	});

driver.getTitle(getTitle).catch(function (e) {	
	console.log(" " + getTitle + " NOT found");	
	});

driver.findElement(By.xpath(getXPath)).click().catch(function (e) {	
	console.log(" " + getXPath + " NOT clicked");
	});
};

//create function to widen the webpage
driver.manage().window().setSize(1200,900);
driver.get('https://www.wgsn.com/en/').catch(function (e) {
	console.log("timed out")
});

getURLTitleWaitClickXPath('http://www.wgsn.com', 'WGSN | Creating Tomorrow | Trend Forecasting & Analytics', '//*[@id="menu-top-navigation-1"]/li[1]/ul/li[1]/a');

driver.quit();


// var webdriver = require('selenium-webdriver');

// var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// driver.get('http://www.google.com');
// driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
// driver.findElement(webdriver.By.name('btnG')).click();
// driver.wait(function() {
//  return driver.getTitle().then(function(title) {
//    return title === 'webdriver - Google Search';
//  });
// }, 1000);

// driver.quit();