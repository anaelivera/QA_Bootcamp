# QA_Bootcamp
QA bootcamp challenge

The automation tool used for this challenge was Testcafe.
In order to run the scripts you need to download Node.js and run the following comands in the code editor terminal:

npm init <br>
npm install dotenv<br>
npm install testcafe

Also, a .env file should be created with the following information:<br>
USER_NAME=standard_user<br>
PASSWORD=secret_sauce<br>

To run the tests, you need to be located in the folder outside POM and use the following commands:

 "testcafe chrome ./POM/tests/Login.test.js", to test login<br>
 "testcafe chrome ./POM/tests/Logout.test.js", to test logout<br>
 "testcafe chrome ./POM/tests/SortingProducts.test.js", to test sorting products feature<br>
 "testcafe chrome ./POM/tests/ShoppingCart.test.js", to test the shopping cart<br>
 "testcafe chrome ./POM/tests/Checkout.test.js", to test the checkout<br>
 
 To run them in a different browser, just change "chrome" to "firefox", "safari" or "ie".
