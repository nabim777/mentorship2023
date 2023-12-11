Feature: update password
As a user
I want to update password
So I can protect my files


Scenario: user entered same password on new password and confirm new password field
Given the user has already logged in
And the user has browsed to the login page
When user updates password
Then the password should be updated


Scenario: user entered different password on new password and confirm new password field
Given the user has signed up
And the user has already logged in
When user updates password
Then user should be able to know that password doesn't match


Scenario: user entered blank password on new password and confirm new password field
Given the user has signed up
And the user has already logged in
When user updates password
Then user should be able to know that password can't be blank


Scenario: user entered password which contains special characters only on new password and confirm new password field
Given the user has already logged in
When user updates password
Then the password should not be updated
And user should be able to know that password cannot be only special characters