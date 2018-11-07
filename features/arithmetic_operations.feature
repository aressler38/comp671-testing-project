Feature: Arithmetic Operations are handled properly
    A calculator should be able to solve the expression and return the correct result.

    Scenario Outline: Arithmetic Identity
	Given a is <a>
        When arithmatic expression is <a>
        Then the result of arithmetic expression should be <total>

    Examples:
        |        a          | total                   |
	| '(2+5)*(7-2)/4'   | '8.75'                  |
	| '(6^6)^6'	    | '1.0314424798490537e+28'|
	|'(2*2)+5/2-(6^6)'  | '-46649.5'              |
