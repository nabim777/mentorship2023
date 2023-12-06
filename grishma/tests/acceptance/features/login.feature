Feature: login
As a user
I want to do login
So I can access my profile


Scenario: user login with correct username and password
Given the user has already signed up
When user logins with correct credentials
Then user should be able to access personal profile


Scenario: user login with correct username and incorrect password
Given the user has already signed up
When user logins with incorrect credentials
Then user should not be able to access personal profile
And user should be able to know the entered password is incorrect.


Scenario: user login with incorrect username and correct password
Given the user has already signed up
When user logins with incorrect credentials
Then user should not be able to access personal profile
And user should be able to know the entered username is incorrect.


Scenario: user login with incorrect username and incorrect password
Given the user has already signed up
When user logins with incorrect credentials
Then user should not be able to access personal profile
And user should be able to know the entered password and username is incorrect.


Scenario: user login with incorrect password format
Given the user has already signed up
When user logins with incorrect credentials
Then user should not be able to access personal profile
And user should be able to know the entered password format is incorrect.