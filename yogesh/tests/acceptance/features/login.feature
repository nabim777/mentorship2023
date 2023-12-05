Feature: Login
As a user
I want to login into the application
So I can manage my files

Scenario: user entered correct credentials
Given user has already created an account
When user enters correct username and password
Then user should be navigated to homescreen


Scenario: user entered wrong credentials
Given user has already created an account
When user has entered wrong password
Then user should be able to see a warning message
And user should be able to know the password is incorrect


Scenario: user submits the empty login form
Given user has already created an account
When user clicked the submit button
Then user should be able to see a warning message


Scenario: user entered wrong credentials
Given user has already created an account
When user has entered wrong password
Then user should be able to see a warning message


Scenario: user logs in without creating an account
Given user has not created an account
When user enters username and password
Then user should be able to see a warning message
And user should be able to know the user doesnt exists