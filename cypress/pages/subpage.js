class subpage {
    elements = {
    
     mainlogo:()=> cy.get('#jawwy-logo-web'),
     signinbutton:()=>cy.get('#signin'),
     currentcountry:()=>cy.get('.head-links > .country-current'),
     translationbutton:()=>cy.get('#translation-btn'),
      maincontainer:()=>cy.get('#main > .container'),
      price:()=>cy.get(':nth-child(2) > :nth-child(3) > .plan-names'),
      lite:()=>cy.get('#name-لايت'),
      premium:()=>cy.get('#name-الأساسية'),
      premium2:()=>cy.get('#name-بريميوم'),
      currency:()=>cy.get('#currency-لايت > i'),
      bahrain:()=> cy.get('#bh'),
      kuwait:()=>cy.get('#kw'),
      countrytitle:()=> cy.get('[id="country-name"]')

    };
    

    visitHomePage() {
      cy.visit("https://subscribe.stctv.com/sa-ar") 
    }
  
    checkurl() {
      cy.url().should('contain', 'https://subscribe.stctv.com/sa-ar')
    .then(() => {
                // we are trying to return something
                // from the .within callback,
                // but it won't have any effect
              cy.log('check url valid ')
              })
  }
    getmainlogo() {
      return cy.get('#jawwy-logo-web')
    }
    getsigninbutton() {
      return cy.get('#signin')
    }
    
  
    getcurrentcountry () {
      return cy.get('.head-links > .country-current')
    }
    gettranslationbutton () {
      return cy.get('#translation-btn')
    }
    getmaincontainer () {
      return cy.get('#main > .container')
    }
    getprice () {
      return cy.get(':nth-child(2) > :nth-child(3) > .plan-names')
    }
    getlite () {
      return cy.get('#name-لايت')
    }
    getpremium () {
      return cy.get('#name-الأساسية')
    }
    getpremium2 () {
      return cy.get('#name-بريميوم')
    }
    getcurrency () {
      return cy.get('#currency-لايت > i')
    }
    getbahrain () {
      return cy.get('#bh')
    }
    getkuwait () {
      return cy.get('#kw')
    }
    getcountrytitle () {
      return cy.get('[id="country-name"]')
    }
    maillogoappear() {
      return this.getmainlogo().should('be.visible') .then(() => {
        
        cy.log('check logo appear ')
        })
    }
    signinbuttonappear() {
      return this.getsigninbutton().should('be.visible') .then(() => {
        
        cy.log('check signin button appear  ')
        })
    }
    currentcountryappear() {
      return this.getcurrentcountry().should('be.visible') .then(() => {
        
        cy.log('check current country appear  ')
        })
    }
    translationbuttonappear() {
      return this.gettranslationbutton().should('be.visible') .then(() => {
        
        cy.log('check change language appear ')
        })
    }
    maincontainerappear() {
      return this.getmaincontainer().should('be.visible') .then(() => {
        
        cy.log('main container appear  ')
        })
    }
    priceappear() {
      return this.getprice().should('be.visible') 
    }
    checkreyal() {
      return this.getprice().invoke('text').then((text) => {
        expect(text.trim()).contains( 'ريال' )
    
    })
    }
    liteappear() {
      return this.getlite().should('be.visible').then(() => {
        
        cy.log('lite menu appear ')
    })
    }
    premiumappear() {
      return this.getpremium().should('be.visible').then(() => {
        
        cy.log(' الاساسية  ')
})
  }
    premium2appear() {
      return this.getpremium2().should('be.visible').then(() => {
        
        cy.log(' premium  menu appear  ')
        })
    }
    clickcountry() {
      return this.getcurrentcountry().click({force:true})
    }
    clickbahrain() {
      return this.getbahrain().click({force:true})
    }
    countrytitleappear() {
      return this.getcountrytitle().should('be.visible')
    }
    checkbahraintext() {
      return this.getcountrytitle().invoke('text').then((text) => {
        expect(text.trim()).contains( 'البحرين')
    
    })

    }

    checkbahraindinar() {
      return this.getprice().invoke('text').then((text) => {
        expect(text.trim()).contains( 'دينار' )
    
    })
    }
    clickkuwait() {
      return this.getkuwait().click({force:true})
    }
    checkkuwaittext() {
      return this.getcountrytitle().invoke('text').then((text) => {
        expect(text.trim()).contains( 'الكويت')
    
    })

    }
    checkkuwaitdinar() {
      return this.getprice().invoke('text').then((text) => {
        expect(text.trim()).contains( '1.2 دينار كويتي/شهر2.5 دينار كويتي/شهر4.8 دينار كويتي/شهر')
    
    })
    }
  }
  
  
  module.exports = new subpage();