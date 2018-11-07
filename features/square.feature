Feature: Square of any number is handled properly
    A calculator should be able to calculate square of any number and return the correct result.

    Scenario Outline: Square the numbers
        Given a is <a>
        When I do square of a
        Then the result of square should be <total>

    Examples:
        |  a     |  total     |
        | '5.5'  |  '30.25'   |
        | '9'    |  '81'      |
