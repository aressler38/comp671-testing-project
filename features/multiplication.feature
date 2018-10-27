Feature: Multiplication is handled properly
    A calculator should be able to multiply numbers together and return the correct result.

    Scenario: Multiplication Identity
        Given a is zero
        Given b is 99
        When a is multiplied to b
        Then I should get 0
