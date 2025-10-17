// In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

// Having more high cards remaining in the deck favors the player. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should use let to declare a global variable named count and set it to 0.
// You should have a function called cc.
// The cc function should receive a card parameter which can either be a number or string.
// - For values between 2 to 10, the card parameter will be a number.
// - For all other values, the card parameter will be a string.
// The cc function should modify the global count variable based on certain criteria.
// The global count variable should be increased by 1 for the cards 2, 3,4, 5, or 6
// The global count variable should remain unchanged for the cards 7, 8, 9.
// The global count variable should be decreased by 1 for the cards 10, "J", "Q", "K", "A"
// The cc function should return a string with current count and the string Bet if the count is positive.
// The cc function should return a string with current count and the string Hold if the count is less than or equal to 0.
// In the function output, the current count and the player's decision (Bet or Hold) should be separated by a space. For example, -3 Hold.

let count = 0;

const cc = (card) => {
    if ([2, 3, 4, 5, 6].includes(card)) {
        count += 1;
    } else if ([10, "J", "Q", "K", "A"].includes(card)) {
        count -= 1;
    }

    const action = count > 0 ? "Bet" : "Hold";

    return `${count} ${action}`;
}

// Tests

// 1. You should use let to declare a global variable named count and set it to 0.
// 2. You should have a function named cc.
// 3. Your function should return the value of count and the text (Bet or Hold) with one space character between them.
// 4. After the cards 2, 3, 4, 5, then calling cc(6) should return the string 5 Bet.
// 5. After the cards 7, 8, then calling cc(9) should return the string 0 Hold.
// 6. After the cards 10, "J", "Q", "K", then calling cc("A") should return the string -5 Hold.
// 7. After the cards 3, 7, "Q", 8, then calling cc("A") should return the string -1 Hold.
// 8. After the cards 2, "J", 9, 2, then calling cc(7) should return the string 1 Bet.
// 9. After the cards 2, 2, then calling cc(10) should return the string 1 Bet.
// 10. After the cards 3, 2, "A", 10, then calling cc("K") should return the string -1 Hold.