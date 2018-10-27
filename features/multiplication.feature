Feature: Multiplication is handled properly
    A calculator should be able to multiply numbers together and return the correct result.

    Scenario: Multiplication Identity
        Given a is 1
        Given b is 90
        When a is multiplied to b
        Then I should get 90
