# Lab 4 part 2 answers

1) It will print 3. This is because the `i` variable was declared as a `var` which makes it accessible from outside the `for` loop.

2) It will print 150. This is because `discountedPrice` is not an array but a single variable and at the final iteration it was set to `300 * (1-0.5)` which is just 150. It is also declared as a `var` which makes it accessible from outside the `for` loop.

3) It will print 150. In the last iteration of the `for` loop, the value of `finalPrice` is set to `Math.round(150 * 100) / 100` which is equal to 150 and since the variable is declared using the var keyword, it can be accessed in the entire function body.

4) The function will return `[50, 100, 150]`. It basically took the original array, devided every element of it by half (or multiplied by 0.5) and then pushed it into the `discounted` array and then finally returned the `discounted` array.

5) It will cause an error because the variable `i` was initialized using the `let` keyword and it is outside of the scope of the print statement.

6) Same thing. Will throw an error because the keyword `let` was used to initialize `discountedPrice` within the `for` loop.

7) It will print 150. Although the `let` keyword was used for the `finalPrice` variable, it was declared within the same scope as the print statement and it only had its value changed within the `for` loop.

8) The function will return `[50, 100, 150]`. It basically took the original array, devided every element of it by half (or multiplied by 0.5) and then pushed it into the `discounted` array and then finally returned the `discounted` array. Although the `discounted` variable was initialized using the `let` keyword, it was declared within the same scope as the print statement and only had stuff added to it within the `for` loop.

9) It will cause an error because the variable `i` was initialized using the `let` keyword and it is outside of the scope of the print statement.

10) It will print 3 becasue in line 4, the value of `prices.length` was assigned to `length` and it is accessible everywhere in the code. 

11) It will return `[50, 100, 150]`. The function multiplies by 0.5 (at least in this example) for every element in the array and adds the new discounted value to the `discounted` array and then returns the array at the end. The code does not throw an erro and the reason is because when we are pushing to a `const` array, we can not have the variable point to some other element, but we can modify the array it's pointing to.

12) Notations: 

    a. `student.name`

    b. `student['Grad Year']`

    c. `student.greeting()`

    d. `student['Favorite Teacher'].name`

    e. `student.courseLoad[0]`

13) Arithmic:

    a. `'3' + 2 = 32` 2 is string 2

    b. `'3' - 2 = 1` 3 is int 3

    c. `3 + null = 3` null is 0

    d. `'3' + null = 3null` 3 is string 3 and null is string 'null'

    e. `true + 3 = 4` true is int 1

    f. `false + null = 0` both are 0

    g. `'3' + undefined = 3undefined` undefined becomes string 

    h. `'3' - undefined = NaN` undefined is not a number therefore the result is not a number

14) Comparison:

    a. `'2' > 1 = true` '2' becomes int 2

    b. `'2' < '12' = false` letter arrangements 

    c. `2 == '2' = true` '2' becomes int and this is regular equality

    d. `2 === '2' = false` string and int are not equal

    e. `true == 2 = false` true is actually = 1

    f. `true === Boolean(2) = true` I guess `Boolean(2)` is equal to true?

15) `==` is a simple equality whereas `===` means strictly equal. The `==` compares two variables after performing type conversion (if necessary) but `===` compares them without type conversion.

16) [JSFile](part2-question16.js)

17) The function returns `[2,4,6]`. `modifyArray` takes an array and a callback function, then it iterates through the array, passes that element of the array to the callback function, and the pushes the result into `newArr`.

18) [JSFile](part2-question18.js)

19) It prints 1 4 3 2 all in new line (for each) and 2 was printed around a second or so later than others.

