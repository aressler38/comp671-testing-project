Feature: Division is handled properly
    A calculator should be able to divide and return the correct result.

    Scenario Outline: Division with regular numbers
        Given a is <a>
        Given b is <b>
        When a is divided by b
        Then the result of division should be <total>

      Examples:
        |   a    |  b    |   total             |
        | '100'  | '-5'  |   '-20'             |
        | '20'   | '0'   | 'invalid expression'|
