Feature:  Subtraction is handled properly
    A calculator should be able to minus numbers together and return the correct result.

    Scenario: Subtraction 
        Given a is 100
        Given b is 99
        When b is subtracted from a
        Then I should get 1
