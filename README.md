# BootCamp Group Project 3

## Group Members
* Chang Xiao, https://github.com/sinsinkun
* George Huo, https://github.com/siyuanhuo
* Michael Wong, https://github.com/Mwong228
* Tong Yang, https://github.com/Dragontalker

## Installation
```bash
npm install
```

## Usage
```bash
npm run dev
```

# Project 3
​
## Abstract
* E-commerce site for family business
​
## Technologies
* Bootstrap
* MongoDB
* Express
* OAuth2
​
* express-cart(?)
* idb management package for local data storage(?)
* email sender(?)
* redux(?)
​
## Pages
* -[ ] Registration
  * -[ ] Require email/password/display name
  * -[ ] Send email on registration?
​
* -[ ] Login
  * -[ ] OAuth2
  * -[ ] Accounts will track products (i.e. shopping cart)
  * -[ ] Profile page that tracks shopping cart/ongoing/delivered products (BONUS)
​
* -[ ] Sales page (display products, can add to cart, payment page mock up?)
  * -[ ] Display products
    * -[ ] Buy button
    * -[ ] Display picture/title/price/description/qty
  * -[ ] Attempting to buy product takes you to the registration (if you're not logged in)
  * -[ ] Track shopping cart while not logged in (BONUS)
​
* -[ ] Admin account (BONUS)
  * -[ ] exclusive access to a webpage that can enter new information via GUI
  * -[ ] Data display for sales/site traffic/managing ongoing sales/deliveries
  * -[ ] Send email to client when sale goes through
​
## Architecture
​
* -[ ] Database:
  * -[ ] userinfo (email, password, displayname, shoppingcart[])
  * -[ ] productinfo (title, picture, price, desc, qty)
  * -[ ] transaction (userid, productid, status) <-- statuses: BUYING, BOUGHT, SOLD, CANCELLED
​
* -[ ] Client browser (localstorage)
  * -[ ] localsave: login token (OAuth2)
​
* -[ ] Globalstore
  * -[ ] winx/y: for responsiveness purposes
  * -[ ] displayname (pull from DB)
  * -[ ] shoppingcart (pull from DB)
​
* Navbar
  * -[ ] Display username when logged in buttons: (main, logout)
  * -[ ] when not logged in buttons: (main, register, login)
​
* -[ ] Homepage/shop
  * -[ ] DISPLAY: product cards, contained in row w/ col-12 col-md-4 col-lg-3
    * -[ ] product cards btn: add to shopping cart btn (more detail btn? dropdown overlay with description?)
  * -[ ] get productinfo: titles
  * -[ ] get productinfo: pictures
  * -[ ] get productinfo: prices
  * -[ ] get productinfo: descriptions
  * -[ ] get productinfo: quantities
  * -[ ] action: BUY item
    * -[ ] set productinfo: quantity-1
    * -[ ] push transactioninfo: userid
    * -[ ] push transactioninfo: productid
    * -[ ] push transactioninfo: status "BUYING"
    * -[ ] set userinfo: shoppingcart.push(transactionid)
​
* -[ ] Register Page
  * -[ ] DISPLAY: registration form
    * -[ ] validation
  * -[ ] get userinfo: emails (must be unique)
  * -[ ] push userinfo: email
  * -[ ] push userinfo: password
  * -[ ] push userinfo: display name
  * -[ ] push userinfo: empty shopping cart
​
* -[ ] Login Page
  * -[ ] DISPLAY: login form
    * -[ ] validation
  * -[ ] OAuth authentication process
​
* -[ ] Shopping cart display (sidepanel or page)
  * -[ ] get userinfo
  * -[ ] get transactioninfo: all where userid matches && status = BUYING or BOUGHT
  * -[ ] action: PAY for item
    * -[ ] set transactioninfo: status "BOUGHT"
  * -[ ] action: CANCEL buying item
    * -[ ] set transactioninfo: status "CANCELLED"
    * -[ ] set productinfo: quantity+1
​
* -[ ] Admin Page (BONUS)
  * -[ ] get productinfo: all
  * -[ ] set productinfo: all
  * -[ ] delete productinfo: all
  * -[ ] get transactioninfo: all
  * -[ ] action: SELL item
    * -[ ] set transactioninfo: status "SOLD"
    * -[ ] set transactioninfo: status "CANCELLED"
-[ ] Collapse



 