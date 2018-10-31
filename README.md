# web-calculator
Simple calculator that solves basic operator written in JavaScript using web browser.

Written in JavaScript, jQuery, HTML, CSS
10/19/2018

 * @preserve
 * Calculator
 * version : 1.0.0
 * author : Symsey Cruz
 * license :

 * Credits to Adam Draper
 * I did some modification inside my main file
 * jQuery that formats my number from input to thousands
 * unfortunately it round up my decimal values so
 * I made a new algorithm before I pass it here.


 * Credits Vadim Sikora
 * This plugin is superb although I had a hard time tweaking it from the start
 * jQuery that formats my number fontsize to fit inside my textview
 * This works only on keyup events so I had to call textview keyup function
 * every time I'm clicking the mouse when using screen buttons

-------------------------------------------------------------------------------------------

 Accomplished version 1.0
 10/27/2018

 * Computes basic Mathematic operation
 * Starting to compute once operator is pressed. not MDAS oriented.
 * Web application
 * Modern and minimalist design.
 * Automatic format inputs into thousands.
 * Up to Trillion value or more than 20 digits.
 * Automatic resizing fonts to fit inside the textbox
 * Can be used with both keyboard and on-screen buttons
 * It shows the mathematical expressions.
 * It resets for a certain amount of backspace and zero pressed.
 * Input doesn't accept any keyboard buttons except from the same buttons onscreen.

 -------------------------------------------------------------------------------------------

 Bugs and Revisions version 1.1
 10/28/2018

 * Bug: When input is decimals from 0.001 and so, it resets the calculator.
      - Sol: Remove the reset counter from zero button.
      - Rev: Reset now only works at backspace.
 * Bug: When pressing enter key or equals, It concatenate the history text and doesn't do
   computation anymore.
      - Sol: Put a condition when pressing enter or equals that set to once,
             to avoid spamming it multiple times.
 * Bug: When using keyboard or on-screen buttons, calculator doesn't know if the command is coming
        from keys or clicks.
      - Sol: Set parameter inside the function insert(), true if from clicks and false if from keys.
      - Sol: Calling textview.keyup function every input, only if its true.
