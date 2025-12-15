// This lab is about converting special characters in a string with their corresponding HTML entities.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should have a convertHTML function that accepts a string as an argument.
// 2. The convertHTML function should return a new string by converting special characters in the argument string to their corresponding HTML entities.

// & should be converted to &amp;.
// < should be converted to &lt;.
// > should be converted to &gt;.
// " should be converted to &quot;.
// ' should be converted to &apos;.



// Tests

// 1. You should have a convertHTML function.
// 2. convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.
// 3. convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.
// 4. convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.
// 5. convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.
// 6. convertHTML("Schindler's List") should return the string Schindler&apos;s List.
// 7. convertHTML("<>") should return the string &lt;&gt;.
// 8. convertHTML("abc") should return the string abc.