Feature: a short description of a software Feature
As a user
I want to update the password
So I can achieve the new password


Scenario: User updates password in corrent format
Given user has signed up
And User has logged in
When User navigates to the account settings and updates the password with a valid new password
Then User should receive a success message confirming the password update


Scenario: User attempts to update password with weak credentials
Given User is logged in
When User tries to update the password with a weak or easily guessable password
Then User should receive an error message prompting to use a stronger password

Scenario: User attempts to enter the unvalid format
Given user logged in
When User tries to update the password
Then User should receive an error message with enter with valid format



