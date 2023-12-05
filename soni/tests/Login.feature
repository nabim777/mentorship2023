Feature: Login
As a user
I want to do Login
So I can manage my profile


Scenario: user logins with correct username and password
Given user has already signed up
When user logins with correct attributes
Then user should be able to see his personal profile


Scenario: user logins with correct username but with incorrect password
Given user has already signed up
When user logins with correct username and with incorrect password
Then user should not be able to see his profile

Scenario: user 