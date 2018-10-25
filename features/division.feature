Feature: Division is handled properly
    A calculator should be able to divide and return the correct result.

    Scenario: Division with regular numbers
        Given a is 20
        Given b is 4
        When a is divided by b
        Then the result should be 5
