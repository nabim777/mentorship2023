Feature: Update password
As a user
I want to do update password
So I can create a new password 


Scenario: user aims to update password with valid password
Given user has already signed up
When user wants to change password
Then the password should be updated


Scenario: user aims to update password with invalid login credentials
Given user has already signed up
When user clicks forget password
Then the password should be updated

