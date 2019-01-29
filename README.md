# badbank
Bad Bank HW

Assignment used to test the integration of Express and Lowdb to produce a JavaScript three-tier application.

To install:
1) Clone the source code from git: git clone https://github.com/MarkKensington/badbank.git
2) cd badbank and run: npm init
3) load the node modules using: npm install
4) Run the server using: node index.js
5) Open the browser and enter the url: localhost:3000

Please Note:
1) There is functionality whereby the HTML navbar does not allow the selection of all menu items (other than "Create Account"
   and "Login") until the user has successfully logged in. You need to create an account and login to select the other menu items.

2) The source code version includes an additional menu item called "Reset Db" which if selected you are asked to enter "reset" and
   this will then clear the db.json of ALL records. The deployed version does not include this functionality. The deployed version
   of the changed files can be found in the "deployed" sub-directory.