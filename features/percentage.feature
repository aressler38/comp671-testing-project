Feature: Percentage of any two numbers is handled properly
    A calculator should be able to calculate percentage of any two numbers and return the correct result.

    Scenario Outline: Percentage Calculation
        Given a is <a>
        And b is <b>
        When I calculate percentage of a out of b
        Then the result of percentage should be <total>

    Examples:
        |  a   |   b   |  total  |
        | '5'  |  '2.5' |  '200'   |
