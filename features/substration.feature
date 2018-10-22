Feature: Subtraction is handled properly
    A calculator should be able to minus numbers together and return the correct result.

    Scenario: Additive Identity
        Given a is 100
        Given b is 99
        When a is subtracted to b
        Then I should get 1
