Feature: Addition is handled properly
    A calculator should be able to add numbers together and return the correct result.

    Scenario: Additive Identity
        Given a is zero
        Given b is 99
        When a is added to b
        Then I should get 99
