import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  
  const subpage = require("../../pages/subpage");
  
  
Given("i navigate to the url", () => {
   subpage.visitHomePage();
   
   subpage.checkurl()

  });
  
When("user be on  home page", () =>{
  
   
subpage.maillogoappear()
subpage.signinbuttonappear()
subpage.maincontainerappear()
subpage.currentcountryappear()
subpage.translationbuttonappear()
   
  });
  
  
Then("check all type and price and currency for all countries", () => {
  
    

subpage.priceappear()
subpage.checkreyal()
subpage.liteappear()
   
subpage.premiumappear()
subpage.premium2appear()
subpage.clickcountry()
subpage.clickbahrain()
subpage.countrytitleappear()
subpage.checkbahraintext()
  
  subpage.priceappear()

   subpage.checkbahraindinar()
   subpage.liteappear()
   
subpage.premiumappear()
subpage.premium2appear()
subpage.clickcountry()
   
  
    
   subpage.clickkuwait()

   subpage.countrytitleappear()
subpage.checkkuwaittext()
subpage.priceappear()
   
   subpage.checkkuwaitdinar()
   subpage.liteappear()
   
subpage.premiumappear()
subpage.premium2appear()
   
 
  });