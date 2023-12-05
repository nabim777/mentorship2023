Feature: a short description of a software Feature
As a user
I want to do this
So I can achieve that


Scenario: Name of the Scenario
Given [Preconditions or initail context of the system]
When [Event or action]
Then [Expected output]


Scenario: User Login with correct username and password 
Given  User Login
When User Login with correct user and password
Then User should  be able to see their profile  correcly


Scenario: 
Given  User Login
When User Login with correct user and password
Then User should Login correcly


Scenario: User Login with incorrect username or password
Given User Login
When User attempts to login with an incorrect username or password
Then User should receive an error message indicating invalid credentials

Scenario: User Login with empty username or password
Given User Login
When User attempts to login with an empty username or password
Then User should receive an error message indicating please fill out the form properly

Scenario: User Login with locked account
Given User's account is locked
When User attempts to log in with correct username and password
Then User should receive a message stating the account is locked and instructions to unlock it

Scenario: User Login without providing credentials
Given User Login page
When User tries to log in without entering any username or password
Then User should receive an error prompting to enter both username and password

Scenario: User Login with expired password
Given User's password has expired
When User attempts to log in with correct username and expired password
Then User should be prompted to reset the password before accessing the account



