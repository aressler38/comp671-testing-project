Feature: Multiplication is handled properly
    A calculator should be able to multiply numbers together and return the correct result.

    Scenario: Multiplication Identity
        Given a is one
        Given b is ninty
        When a is multiplied to b
        Then I should get ninty
