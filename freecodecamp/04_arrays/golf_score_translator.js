// In the game of Golf, each hole has a par, meaning the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

// In this lab, you will write a function that converts the par and strokes to their nickname.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should create a function named golfScore.
// 2. golfScore should take two numeric arguments, which are the par for the course and the amount of strokes made.
// 3. golfScore should return a string.
// 4. golfScore should return "Hole-in-one!" if strokes is 1.
// 5. golfScore should return "Eagle" if strokes is less than or equal to par minus 2.
// 6. golfScore should return "Birdie" if strokes is equal to par minus 1.
// 7. golfScore should return "Par" if strokes is equal to par.
// 8. golfScore should return "Bogey" if strokes is equal to par plus 1.
// 9. golfScore should return "Double Bogey" if strokes is equal to par plus 2.
// 10. golfScore should return "Go Home!" if strokes is greater than or equal to par plus 3.



// Tests

// 1. You should create a function named golfScore.
// 2. golfScore should take two parameters.
// 3. golfScore should return a string
// 4. golfScore(1, 1) should return the string Hole-in-one!
// 5. golfScore(3, 1) should return the string Hole-in-one!
// 6. golfScore(4, 1) should return the string Hole-in-one!
// 7. golfScore(5, 1) should return the string Hole-in-one!
// 8. golfScore(4, 2) should return the string Eagle
// 9. golfScore(5, 2) should return the string Eagle
// 10. golfScore(3, 2) should return the string Birdie
// 11. golfScore(4, 3) should return the string Birdie
// 12. golfScore(5, 4) should return the string Birdie
// 13. golfScore(3, 3) should return the string Par
// 14. golfScore(4, 4) should return the string Par
// 15. golfScore(5, 5) should return the string Par
// 16. golfScore(3, 4) should return the string Bogey
// 17. golfScore(4, 5) should return the string Bogey
// 18. golfScore(5, 6) should return the string Bogey
// 19. golfScore(3, 5) should return the string Double Bogey
// 20. golfScore(4, 6) should return the string Double Bogey
// 21. golfScore(5, 7) should return the string Double Bogey
// 22. golfScore(3, 7) should return the string Go Home!
// 23. golfScore(4, 8) should return the string Go Home!
// 24. golfScore(5, 9) should return the string Go Home!