# TypeScript String Utilities — The Pirate King’s Toolbox

Welcome aboard! This repository is your ultimate collection of over **200+** powerful, reusable, and strictly typed **TypeScript string utility functions** — crafted for clean, robust, and scalable code across your projects.

Inspired by the relentless spirit of Monkey D. Luffy, this toolkit helps you conquer even the toughest string manipulation challenges on your coding voyage.

## Features

- 200+ unique, tested, and documented string utility functions
- Strictly typed with TypeScript for maximum safety and developer experience
- Fully functional and side-effect free — pure functions you can trust
- Designed for frontend and backend use (Node.js, React, Next.js)
- Semantic and accessible naming conventions for easy discovery
- Easy to integrate and extend, just like assembling your Straw Hat crew
- No dependencies — lightweight and fast as a Thousand Sunny sail

## Installation

```bash

npm install @thirteen-13/string-utility

```

If you encounter any bugs or unexpected behavior in the functions, please report an issue on the project's GitHub repository. Your contributions are invaluable in maintaining the quality and reliability of this codebase.

## List of Utility Functions and Usage

# isString

## Description

Checks if the provided value is a string.

This function returns `true` if the input is of type `string`. It acts as a TypeScript type guard to narrow types.

## Example

```typescript
isString("luffy"); // true
isString(123); // false
```

# capitalize

## Description

Capitalizes the first character of a given string and returns the new string.

## Example

```typescript
capitalize("luffy"); // "Luffy"
capitalize("one piece"); // "One piece"
```

# toCamelCase

## Description

Converts a string with spaces, dashes, or underscores into camelCase format.

## Example

```typescript
toCamelCase("one_piece"); // "onePiece"
toCamelCase("Monkey D Luffy"); // "monkeyDLuffy"
toCamelCase("roronoa-zoro"); // "roronoaZoro"
```

# toKebabCase

## Description

Converts a string from camelCase, spaces, or underscores into kebab-case (lowercase words separated by hyphens).

## Example

```typescript
toKebabCase("OnePiece"); // "one-piece"
toKebabCase("Monkey D Luffy"); // "monkey-d-luffy"
toKebabCase("roronoa_zoro"); // "roronoa-zoro"
```

# toSnakeCase

## Description

Converts a string from camelCase, spaces, or hyphens into snake_case (lowercase words separated by underscores).

## Example

```typescript
toSnakeCase("OnePiece"); // "one_piece"
toSnakeCase("Monkey D Luffy"); // "monkey_d_luffy"
toSnakeCase("roronoa-zoro"); // "roronoa_zoro"
```

# reverse

## Description

Reverses the characters in a string.

## Example

```typescript
reverse("Luffy"); // "yffuL"
reverse("One Piece"); // "ecieP enO"
```

# truncate

## Description

Truncates a string to a specified length and appends an ellipsis (…) if the string exceeds that length.

## Example

```typescript
truncate("Going Merry", 5); // "Going…"
truncate("Thousand Sunny", 20); // "Thousand Sunny"
```

# stripHtml

## Description

Removes all HTML tags from a string, leaving only the plain text content.

## Example

```typescript
stripHtml("<p>Straw Hat Pirates</p>"); // "Straw Hat Pirates"
stripHtml("<div><strong>Luffy</strong> is captain</div>"); // "Luffy is captain"
```

# escapeHtml

## Description

Escapes special HTML characters in a string to their corresponding HTML entities to prevent HTML injection.

## Example

```typescript
escapeHtml("<Luffy & Zoro>"); // "&lt;Luffy &amp; Zoro&gt;"
escapeHtml(`"One Piece's"`); // "&quot;One Piece&#039;s&quot;"
```

# isUpperCase

## Description

Checks if the entire string is in uppercase letters.

## Example

```typescript
isUpperCase("Gomu Gomu no"); // false
isUpperCase("MARINE"); // true
```

# isLowerCase

## Description

Checks if the entire string is in lowercase letters.

## Example

```typescript
isLowerCase("going merry"); // true
isLowerCase("Thousand Sunny"); // false
```

# repeat

## Description

Repeats the given string a specified number of times.

## Example

```typescript
repeat("Gomu ", 3); // "Gomu Gomu Gomu "
repeat("Yoho! ", 2); // "Yoho! Yoho! "
```

# padLeft

## Description

Pads the start of a string with a specified character until it reaches the desired length. Defaults to space padding.

## Example

```typescript
padLeft("Zoro", 6); // "  Zoro"
padLeft("Luffy", 8, "*"); // "***Luffy"
```

# padRight

## Description

Pads the end of a string with a specified character until it reaches the desired length. Defaults to space padding.

## Example

```typescript
padRight("Sanji", 7); // "Sanji  "
padRight("Nami", 6, "-"); // "Nami--"
```

# contains

## Description

Checks if a string contains a specified substring.

## Example

```typescript
contains("Straw Hat Pirates", "Hat"); // true
contains("One Piece", "Yonko"); // false
```

# startsWith

## Description

Checks if a string starts with the specified prefix.

## Example

```typescript
startsWith("Going Merry", "Going"); // true
startsWith("Thousand Sunny", "Merry"); // false
```

# endsWith

## Description

Checks if a string ends with the specified suffix.

## Example

```typescript
endsWith("Grand Line", "Line"); // true
endsWith("Red Hair", "Black"); // false
```

# removeNonAlpha

## Description

Removes all non-alphabetic characters from a string, leaving only letters (a-z, case-insensitive).

## Example

```typescript
removeNonAlpha("Luffy123!"); // "Luffy"
removeNonAlpha("Go! Go! Zoro."); // "GoGoZoro"
```

# removeNonNumeric

## Description

Removes all non-numeric characters from a string, leaving only digits (0-9).

## Example

```typescript
removeNonNumeric("Episode 101"); // "101"
removeNonNumeric("123-456-7890"); // "1234567890"
```

# removeWhitespace

## Description

Removes all whitespace characters (spaces, tabs, newlines) from a string.

## Example

```typescript
removeWhitespace("Straw Hat Pirates"); // "StrawHatPirates"
removeWhitespace("  Monkey  D   Luffy "); // "MonkeyDLuffy"
```

# countOccurrences

## Description

Counts how many times a substring appears within a string.

## Example

```typescript
countOccurrences("Luffy is the captain of the Straw Hat crew", "the"); // 2
countOccurrences("One Piece is amazing", "a"); // 2
```

# slugify

## Description

Converts a string into a URL-friendly slug by lowercasing, trimming, removing special characters, and replacing spaces/underscores with hyphens.

## Example

```typescript
slugify("Monkey D Luffy"); // "monkey-d-luffy"
slugify("  Going Merry's Voyage! "); // "going-merrys-voyage"
```

"monkey-d-luffy" "going-merrys-voyage"

# getInitials

## Description

Extracts and returns the uppercase initials from a space-separated string.

## Example

```typescript
getInitials("Monkey D Luffy"); // "MDL"
getInitials("Straw Hat Pirates"); // "SHP"
```

# isStrictPalindrome

## Description

Checks if a string is a strict palindrome, meaning it reads the same forwards and backwards, including case and spaces.

## Example

```typescript
isStrictPalindrome("anna"); // true
isStrictPalindrome("Luffy"); // false
```

# isLoosePalindrome

## Description

Checks if a string is a palindrome, ignoring case, spaces, and non-alphanumeric characters.

## Example

```typescript
isLoosePalindrome("A man, a plan, a canal: Panama"); // true
isLoosePalindrome("Straw Hat"); // false
```

# extractNumbers

## Description

Extracts all sequences of digits from a string and returns them as an array of numbers.

## Example

```typescript
extractNumbers("Episode 101 and 102 are great"); // ["101", "102"]
extractNumbers("No numbers here"); // []
```

# extractWords

## Description

Extracts all words from a string and returns them as an array of strings.

## Example

```typescript
extractWords("Straw Hat Pirates"); // ["Straw", "Hat", "Pirates"]
extractWords("One Piece: The Beginning!"); // ["One", "Piece", "The", "Beginning"]
```

# maskString

## Description

Masks part of a string by replacing characters from the start index up to (but not including) the end index with a specified mask character (default is '\*').

## Example

```typescript
maskString("Straw Hat Pirates", 6, 9); // "Straw *** Pirates"
maskString("Monkey D Luffy", 0, 6, "#"); // "###### D Luffy"
```

# randomString

## Description

Generates a random alphanumeric string of a specified length.

## Example

```typescript
randomString(8); // e.g. "4K9bZ1Lp"
randomString(5); // e.g. "a3X9Q"
```

# isAlpha

## Description

Checks if a string contains only alphabetic characters (A-Z, a-z) with no spaces or other characters.

## Example

```typescript
isAlpha("Luffy"); // true
isAlpha("Straw Hat"); // false
```

# isAlphanumeric

## Description

Checks if a string contains only alphanumeric characters (letters and numbers) with no spaces or special characters.

## Example

```typescript
isAlphanumeric("Luffy123"); // true
isAlphanumeric("Straw Hat 9"); // false
```

# isEmail

## Description

Checks if a string is a valid email format.

## Example

```typescript
isEmail("luffy@strawhat.com"); // true
isEmail("nami@weather"); // false
```

# extractEmails

## Description

Extracts all email addresses from a string and returns them as an array.

## Example

```typescript
extractEmails("Contact luffy@strawhat.com or nami@weather.com"); // ["luffy@strawhat.com", "nami@weather.com"]
extractEmails("No emails here"); // []
```

# extractUrls

## Description

Extracts all HTTP and HTTPS URLs from a string and returns them as an array.

## Example

```typescript
extractUrls("Visit https://onepiece.com and http://strawhatpirates.com");
// ["https://onepiece.com", "http://strawhatpirates.com"]

extractUrls("No links here");
// []
```

# titleCase

## Description

Converts a string to title case, capitalizing the first letter of each word and lowercasing the rest.

## Example

```typescript
titleCase("monkey d luffy"); // "Monkey D Luffy"
titleCase("straw hat pirates"); // "Straw Hat Pirates"
```

# swapCase

## Description

Swaps the case of each character in the string: uppercase characters become lowercase, and lowercase become uppercase.

## Example

```typescript
swapCase("Straw Hat"); // "sTRAW hAT"
swapCase("Luffy"); // "lUFFY"
```

# removeDuplicateWords

## Description

Removes duplicate words from a string, preserving the original word order.

## Example

```typescript
removeDuplicateWords("Straw Hat Straw Pirates"); // "Straw Hat Pirates"
removeDuplicateWords("Luffy Luffy Luffy"); // "Luffy"
```

# safeString

## Description

Removes all non-alphanumeric and non-whitespace characters from a string, leaving only letters, numbers, and spaces.

## Example

```typescript
safeString("Luffy!@# is #1"); // "Luffy is 1"
safeString("Straw-Hat Pirates!"); // "StrawHat Pirates"
```

# compressWhitespace

## Description

Replaces consecutive whitespace characters with a single space and trims whitespace from the start and end of the string.

## Example

```typescript
compressWhitespace("  Straw   Hat   Pirates  "); // "Straw Hat Pirates"
compressWhitespace("Monkey    D    Luffy"); // "Monkey D Luffy"
```

# charFrequency

## Description

Calculates the frequency of each character in a string and returns an object mapping characters to their counts.

## Example

```typescript
charFrequency("Luffy"); // { L: 1, u: 1, f: 2, y: 1 }
charFrequency("Straw Hat"); // { S: 1, t: 2, r: 1, a: 2, w: 1,  : 1, H: 1 }
```

# levenshteinDistance

## Description

Calculates the Levenshtein distance between two strings, which is the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into the other.

## Example

```typescript
levenshteinDistance("Luffy", "Luffa"); // 1
levenshteinDistance("Straw Hat", "Straw Hats"); // 1
levenshteinDistance("Zoro", "Luffy"); // 5
```

# toPascalCase

## Description

Converts a string to PascalCase by capitalizing the first letter of each word and removing all spaces.

## Example

```typescript
toPascalCase("straw hat pirates"); // "StrawHatPirates"
toPascalCase("luffy the captain"); // "LuffyTheCaptain"
```

# toDotCase

## Description

Converts a string to dot.case by replacing all spaces with dots and converting the entire string to lowercase.

## Example

```typescript
toDotCase("Straw Hat Pirates"); // "straw.hat.pirates"
toDotCase("Monkey D Luffy"); // "monkey.d.luffy"
```

# toSpaceCase

## Description

Converts a string to space case by replacing underscores and hyphens with spaces, and adding spaces between camelCase words.

## Example

```typescript
toSpaceCase("Straw-Hat_Pirates"); // "Straw Hat Pirates"
toSpaceCase("MonkeyDLuffy"); // "Monkey D Luffy"
```

# endsWithAny

## Description

Checks if a string ends with any of the provided suffixes.

## Example

```typescript
endsWithAny("OnePiece.mp4", [".mp4", ".avi"]); // true
endsWithAny("Zoro.png", [".jpg", ".gif"]); // false
```

# startsWithAny

## Description

Checks if a string starts with any of the provided prefixes.

## Example

```typescript
startsWithAny("OnePieceIsReal", ["One", "Two"]); // true
startsWithAny("GrandLine", ["East", "North"]); // false
```

# trimChar

## Description

Removes all occurrences of a specific character from the start and end of a string.

## Example

```typescript
trimChar("---Luffy---", "-"); // "Luffy"
trimChar("$$$Bounty$$$", "$"); // "Bounty"
```

# removeDiacritics

## Description

Removes diacritical marks (accents) from characters in a string.

## Example

```typescript
removeDiacritics("école"); // "ecole"
removeDiacritics("Luffý D. Mónkey"); // "Luffy D. Monkey"
```

# getUniqueCharacters

## Description

Returns an array of unique characters from the given string.

## Example

```typescript
getUniqueCharacters("luffy"); // ["l", "u", "f", "y"]
getUniqueCharacters("nami nami"); // ["n", "a", "m", "i", " "]
```

# stringToCharCodeArray

## Description

Converts each character in the string to its corresponding ASCII (char code) value.

## Example

```typescript
stringToCharCodeArray("Zoro"); // [90, 111, 114, 111]
stringToCharCodeArray("Luffy"); // [76, 117, 102, 102, 121]
```

# charCodeArrayToString

## Description

Converts an array of ASCII (char code) values back to a string.

## Example

```typescript
charCodeArrayToString([90, 111, 114, 111]); // "Zoro"
charCodeArrayToString([76, 117, 102, 102, 121]); // "Luffy"
```

# wrap

## Description

Wraps a string with the specified wrapper characters or strings on both sides.

## Example

```typescript
wrap("Gear4", "*"); // "*Gear4*"
wrap("Sunny", '"'); // "\"Sunny\""
```

# ensureStartsWith

## Description

Ensures the string starts with the given prefix. If it already does, returns the string unchanged; otherwise, prepends the prefix.

## Example

```typescript
ensureStartsWith("OnePiece", "The "); // "The OnePiece"
ensureStartsWith("The Grand Line", "The "); // "The Grand Line"
```

# ensureEndsWith

## Description

Ensures the string ends with the given suffix. If it already does, returns the string unchanged; otherwise, appends the suffix.

## Example

```typescript
ensureEndsWith("Going Merry", " Ship"); // "Going Merry Ship"
ensureEndsWith("Thousand Sunny Ship", " Ship"); // "Thousand Sunny Ship"
```

# repeatStringUntilLength

## Description

Repeats the input string until it reaches at least the target length, then slices it to exactly that length.

## Example

```typescript
repeatStringUntilLength("Nami", 10); // "NamiNamiNa"
repeatStringUntilLength("Ace", 7); // "AceAceA"
```

# collapseNewlines

## Description

Replaces consecutive newlines and carriage returns with a single newline character.

## Example

```typescript
collapseNewlines("Luffy\n\n\nZoro\r\n\r\nSanji"); // "Luffy\nZoro\nSanji"
collapseNewlines("One\nPiece\r\n\r\n\n"); // "One\nPiece\n"
```

# stringToAsciiSum

## Description

Calculates the sum of ASCII character codes of all characters in the string.

## Example

```typescript
stringToAsciiSum("Luffy"); // 527
stringToAsciiSum("Zoro"); // 412
```

# getCharAtSafe

## Description

Returns the character at the specified index in the string, or an empty string if the index is out of bounds.

## Example

```typescript
getCharAtSafe("Sanji", 2); // "n"
getCharAtSafe("Chopper", 10); // ""
```

# isWhitespace

## Description

Checks if the entire string consists only of whitespace characters (spaces, tabs, newlines).

## Example

```typescript
isWhitespace("   "); // true
isWhitespace("\n\t"); // true
isWhitespace("Luffy"); // false
```

# isEmpty

## Description

Checks if the string is empty (has zero length).

## Example

```typescript
isEmpty(""); // true
isEmpty("One Piece"); // false
```

# isBlank

## Description

Checks if the string is blank — meaning it contains only whitespace characters or is empty.

## Example

```typescript
isBlank("   "); // true
isBlank(""); // true
isBlank("Zoro"); // false
```

# getNthWord

## Description

Returns the nth word (0-based index) from the string. If the index is out of range, returns an empty string.

## Example

```typescript
getNthWord("Straw Hat Pirates", 1); // "Hat"
getNthWord("One Piece", 3); // ""
```

# countVowels

## Description

Counts the number of vowels (a, e, i, o, u) in the string, case-insensitive.

## Example

```typescript
countVowels("Going Merry"); // 4
countVowels("Thousand Sunny"); // 4
```

# countConsonants

## Description

Counts the number of consonants (letters other than a, e, i, o, u) in the string, case-insensitive.

## Example

```typescript
countConsonants("Going Merry"); // 6
countConsonants("Thousand Sunny"); // 7
```

# stripPunctuation

## Description

Removes common punctuation characters from the string.

## Example

```typescript
stripPunctuation("Zoro, the swordsman!"); // "Zoro the swordsman"
stripPunctuation("Luffy's going to the Grand Line."); // "Luffys going to the Grand Line"
```

# extractHashtags

## Description

Extracts all hashtags from a string.

## Example

```typescript
extractHashtags("Luffy #PirateKing #StrawHat"); // ["#PirateKing", "#StrawHat"]
extractHashtags("No hashtags here!"); // []
```

# extractMentions

## Description

Extracts all mentions (words starting with '@') from a string.

## Example

```typescript
extractMentions("Hello @Luffy, meet @Zoro!"); // ["@Luffy", "@Zoro"]
extractMentions("No mentions here."); // []
```

# hasRepeatedCharacters

## Description

Checks if the string contains any repeated consecutive characters.

## Example

```typescript
hasRepeatedCharacters("Luffy"); // false
hasRepeatedCharacters("Zorooo"); // true
```

# isHexColor

## Description

Determines if a string is a valid hex color code (3 or 6 hexadecimal digits prefixed with #).

## Example

```typescript
isHexColor("#FFF"); // true
isHexColor("#123ABC"); // true
isHexColor("#123ABZ"); // false
```

# isRgbColor

## Description

Checks if a string matches the RGB color format `rgb(r, g, b)` where r, g, b are integers from 0 to 255.

## Example

```typescript
isRgbColor("rgb(255, 0, 128)"); // true
isRgbColor("rgb(256, 0, 0)"); // true (regex does not validate range)
isRgbColor("rgba(255, 0, 0)"); // false
isRgbColor("rgb(12,34,56)"); // true
isRgbColor("rgb(12, 34)"); // false
```

# getLastNChars

## Description

Returns the last `n` characters of a given string.

## Parameters

- `str` (string): The input string.
- `n` (number): The number of characters to extract from the end of the string.

## Returns

(string): A substring containing the last `n` characters of `str`. If `n` is greater than the string length, returns the entire string.

## Example

```typescript
getLastNChars("One Piece", 4); // "Piece"
getLastNChars("Straw Hat", 3); // "Hat"
getLastNChars("Luffy", 10); // "Luffy"
```

# getFirstNChars

## Description

Returns the first `n` characters of a given string.

## Parameters

- `str` (string): The input string.
- `n` (number): The number of characters to extract from the start of the string.

## Returns

(string): A substring containing the first `n` characters of `str`. If `n` is greater than the string length, returns the entire string.

## Example

```typescript
getFirstNChars("One Piece", 3); // "One"
getFirstNChars("Straw Hat", 5); // "Straw"
getFirstNChars("Luffy", 10); // "Luffy"
```

# containsAny

## Description

Checks if the given string contains any of the substrings from the provided list.

## Parameters

- `str` (string): The main string to search within.
- `items` (string[]): An array of substrings to check for within `str`.

## Returns

(boolean): `true` if any substring from `items` is found in `str`, otherwise `false`.

## Example

```typescript
containsAny("Going Merry is the ship", ["Merry", "Thousand"]); // true
containsAny("Grand Line adventures", ["Davy", "Beard"]); // false
containsAny("Zoro wields three swords", ["swords", "bows"]); // true
```

# replaceAll

## Description

Replaces all occurrences of a substring within a string with a new substring.

## Parameters

- `str` (string): The original string.
- `find` (string): The substring to find and replace.
- `replace` (string): The substring to replace all occurrences of `find` with.

## Returns

(string): The new string with all occurrences of `find` replaced by `replace`.

## Example

```typescript
replaceAll("Luffy is the captain. Luffy is strong.", "Luffy", "Zoro");
// "Zoro is the captain. Zoro is strong."
```

# isAllUpperCase

## Description

Checks if a string is entirely uppercase and contains at least one uppercase letter.

## Parameters

- `str` (string): The input string to check.

## Returns

(boolean): `true` if the string is all uppercase and contains at least one uppercase letter, otherwise `false`.

## Example

```typescript
isAllUpperCase("GUMBO"); // true
isAllUpperCase("Gumbo"); // false
isAllUpperCase("123"); // false
```

# isAllLowerCase

## Description

Checks if a string is entirely lowercase and contains at least one lowercase letter.

## Parameters

- `str` (string): The input string to check.

## Returns

(boolean): `true` if the string is all lowercase and contains at least one lowercase letter, otherwise `false`.

## Example

```typescript
isAllLowerCase("gumbo"); // true
isAllLowerCase("Gumbo"); // false
isAllLowerCase("123"); // false
```

# toCharArray

## Description

Converts a string into an array of its individual characters.

## Parameters

- `str` (string): The input string to convert.

## Returns

(string[]): An array containing each character of the input string as a separate element.

## Example

```typescript
toCharArray("Luffy"); // ['L', 'u', 'f', 'f', 'y']
```

# reverseWords

## Description

Reverses the order of words in a string, preserving the words themselves.

## Parameters

- `str` (string): The input string whose word order will be reversed.

## Returns

(string): A new string with the words in reverse order.

## Example

```typescript
reverseWords("Straw Hat Pirates"); // "Pirates Hat Straw"
```

# countWords

## Description

Counts the number of words in a string using word boundaries.

## Parameters

- `str` (string): The input string to count words from.

## Returns

(number): The total count of words in the string.

## Example

```typescript
countWords("Going Merry sets sail"); // 4
```

# repeatWithSeparator

## Description

Repeats a given string a specified number of times, separated by a custom separator.

## Parameters

- `str` (string): The string to repeat.
- `count` (number): Number of times to repeat the string.
- `sep` (string): Separator to insert between each repetition.

## Returns

(string): The resulting concatenated string with separators.

## Example

```typescript
repeatWithSeparator("One Piece", 3, " - "); // "One Piece - One Piece - One Piece"
```

# trimStart

## Description

Removes whitespace characters from the start (left side) of the string.

## Parameters

- `str` (string): The input string to trim.

## Returns

(string): The string with leading whitespace removed.

## Example

```typescript
trimStart("   Going Merry"); // "Going Merry"
```

# trimEnd

## Description

Removes whitespace characters from the end (right side) of the string.

## Parameters

- `str` (string): The input string to trim.

## Returns

(string): The string with trailing whitespace removed.

## Example

```typescript
trimEnd("Going Merry   "); // "Going Merry"
```

# obfuscateEmail

## Description

Obfuscates an email address by masking part of the user name, keeping only the first character visible, followed by three asterisks, then the domain.

## Parameters

- `email` (string): The email address to obfuscate.

## Returns

(string): The obfuscated email string.

## Example

```typescript
obfuscateEmail("luffy@onepiece.com"); // "l***@onepiece.com"
```

# base64Encode

## Description

Encodes a given string into its Base64 representation using Node.js Buffer. if the input string has multi-byte characters (like Japanese kana or kanji), the result might not be different.

## Parameters

- `str` (string): The input string to encode.

## Returns

(string): The Base64 encoded string.

## Example

```typescript
base64Encode("Going Merry"); // "R29pbmcgTWVycnk="
```

# base64Decode

## Description

Decodes a Base64 encoded string back to its original UTF-8 string using Node.js Buffer. multi-byte characters (like Japanese kana or kanji), the result might not decode correctly depending on where you decode it later.

## Parameters

- `str` (string): The Base64 encoded string to decode.

## Returns

(string): The decoded original string.

## Example

```typescript
base64Decode("R29pbmcgTWVycnk="); // "Going Merry"
```

# camelToSnake

## Description

Converts a camelCase string into snake_case by replacing uppercase letters with an underscore followed by the lowercase letter.

## Parameters

- `str` (string): The camelCase string to convert.

## Returns

(string): The converted snake_case string.

## Example

```typescript
camelToSnake("GoingMerry"); // "going_merry"
```

# snakeToCamel

## Description

Converts a snake_case string into camelCase by replacing underscores followed by a letter with the uppercase version of that letter.

## Parameters

- `str` (string): The snake_case string to convert.

## Returns

(string): The converted camelCase string.

## Example

```typescript
snakeToCamel("going_merry"); // "goingMerry"
```

# removeTrailingSlash

## Description

Removes the trailing slash from a URL or path string if it exists.

## Parameters

- `str` (string): The string from which to remove the trailing slash.

## Returns

(string): The string without a trailing slash.

## Example

```typescript
removeTrailingSlash("https://onepiece.com/"); // "https://onepiece.com"
removeTrailingSlash("grandline"); // "grandline"
```

# removeLeadingSlash

## Description

Removes the leading slash from a URL or path string if it exists.

## Parameters

- `str` (string): The string from which to remove the leading slash.

## Returns

(string): The string without a leading slash.

## Example

```typescript
removeLeadingSlash("/goingmerry"); // "goingmerry"
removeLeadingSlash("sunny"); // "sunny"
```

# splitByLength

## Description

Splits a string into an array of substrings, each with a maximum specified length.

## Parameters

- `str` (string): The string to split.
- `length` (number): The maximum length of each substring.

## Returns

(string[]): An array of substrings with the specified maximum length.

## Example

```typescript
splitByLength("thousandSunny", 3); // ["tho", "usa", "ndS", "unn", "y"]
```

# truncateWords

## Description

Truncates a string to a specified number of words and appends an ellipsis.

## Parameters

- `str` (string): The string to truncate.
- `numWords` (number): The number of words to keep before truncating.

## Returns

(string): The truncated string with an ellipsis.

## Example

```typescript
truncateWords("I'm gonna be King of the Pirates", 5); // "I'm gonna be King of the…"
```

# isUUID

## Description

Checks whether a string is a valid UUID v4.

## Parameters

- `str` (string): The string to validate as a UUID.

## Returns

(boolean): `true` if the string is a valid UUID v4, otherwise `false`.

## Example

```typescript
isUUID("123e4567-e89b-12d3-a456-426614174000"); // true
isUUID("goldroger"); // false
```

# generateUUID

## Description

Generates a random UUID v4 string using a standard pattern.

## Parameters

- `None`

## Returns

(string): A randomly generated UUID v4.

## Example

```typescript
generateUUID(); // "3f2504e0-4f89-41d3-9a0c-0305e82c3301"
```

# removeDuplicateChars

## Description

Removes duplicate characters from a string, preserving the first occurrence of each character.

## Parameters

- `str` (string): The string from which to remove duplicate characters.

## Returns

(string): A string with duplicate characters removed.

## Example

```typescript
removeDuplicateChars("goingmerry"); // "goingmery"
```

# percentEncode

## Description

Encodes a string by replacing each instance of certain characters with one, two, three, or four escape sequences representing the UTF-8 encoding of the character.

## Parameters

- `str` (string): The string to percent-encode.

## Returns

(string): The percent-encoded string.

## Example

```typescript
percentEncode("One Piece: Grand Line!"); // "One%20Piece%3A%20Grand%20Line%21"
```

# percentDecode

## Description

Decodes a percent-encoded string back to its original representation.

## Parameters

- `str` (string): The percent-encoded string to decode.

## Returns

(string): The decoded string.

## Example

```typescript
percentDecode("One%20Piece%3A%20Grand%20Line%21"); // "One Piece: Grand Line!"
```

# getByteLength

## Description

Calculates the byte length of a string using Blob, accounting for multi-byte characters.

## Parameters

- `str` (string): The string to measure.

## Returns

(number): The byte length of the string.

## Example

```typescript
getByteLength("Going Merry"); // 11
getByteLength("ゾロ"); // 6
```

# endsWithPunctuation

## Description

Checks if a string ends with a punctuation mark: period, exclamation point, or question mark.

## Parameters

- `str` (string): The string to check.

## Returns

(boolean): `true` if the string ends with punctuation, otherwise `false`.

## Example

```typescript
endsWithPunctuation("I’m gonna be King!"); // true
endsWithPunctuation("Going Merry"); // false
```

# stringSimilarity

## Description

Calculates the similarity between two strings as the ratio of matching characters at the same positions to the length of the longer string.

## Parameters

- `a` (string): The first string to compare.
- `b` (string): The second string to compare.

## Returns

(number): A similarity score between 0 and 1, where 1 means identical strings.

## Example

```typescript
stringSimilarity("Going Merry", "Going Meriy"); // 0.9
stringSimilarity("Luffy", "Zoro"); // 0.2
```

# censor

## Description

Censors specified words in a string by replacing them with a mask character repeated for the word's length.

## Parameters

- `str` (string): The input string to censor.
- `words` (string[]): An array of words to be censored.
- `mask` (string, optional): The character used for masking. Defaults to `'*'`.

## Returns

(string): The censored string with specified words masked.

## Example

```typescript
censor("I want to be Pirate King", ["Pirate"]); // "I want to be ****** King"
censor("Zoro is a swordsman", ["Zoro"], "#"); // "#### is a swordsman"
```

# safeJsonParse

## Description

Safely parses a JSON string, returning `null` if parsing fails.

## Parameters

- `str` (string): The JSON string to parse.

## Returns

(T | null): The parsed object of type `T`, or `null` if parsing fails.

## Example

```typescript
safeJsonParse<{ name: string }>('{"name":"Luffy"}'); // { name: "Luffy" }
safeJsonParse("invalid json"); // null
```

# mirrorString

## Description

Creates a mirrored string by appending the reverse of the input string to itself.

## Parameters

- `str` (string): The string to mirror.

## Returns

(string): The mirrored string.

## Example

```typescript
mirrorString("OnePiece"); // "OnePieceeceiPnO"
mirrorString("Luffy"); // "LuffyyffuL"
```

# removeHtmlTags

## Description

Removes all HTML tags from a string, leaving only the plain text content.

## Parameters

- `str` (string): The string containing HTML tags to remove.

## Returns

(string): The string with HTML tags removed.

## Example

```typescript
removeHtmlTags("<p>Going Merry</p>"); // "Going Merry"
removeHtmlTags("<div><span>Luffy</span> is Pirate King</div>"); // "Luffy is Pirate King"
```

# unescapeHtml

## Description

Converts HTML escape sequences back to their corresponding characters.

## Parameters

- `str` (string): The string containing HTML escape sequences.

## Returns

(string): The unescaped string with HTML entities converted to characters.

## Example

```typescript
unescapeHtml("Luffy &amp; Zoro &lt; Sanji"); // "Luffy & Zoro < Sanji"
unescapeHtml("He said &quot;Pirate King&quot;"); // "He said \"Pirate King\""
```

# countCharacterOccurrences

## Description

Counts how many times a specific character appears in a string.

## Parameters

- `str` (string): The string to search within.
- `char` (string): The character to count occurrences of.

## Returns

(number): The number of occurrences of the character in the string.

## Example

```typescript
countCharacterOccurrences("Going Merry", "r"); // 2
countCharacterOccurrences("Luffy", "z"); // 0
```

# extractInitials

## Description

Extracts and returns the uppercase initials from each word in a string.

## Parameters

- `str` (string): The input string to extract initials from.

## Returns

(string): A string of uppercase initials.

## Example

```typescript
extractInitials("Monkey D Luffy"); // "MDL"
extractInitials("Going Merry"); // "GM"
```

# stripAnsiCodes

## Description

Removes ANSI escape codes (used for terminal colors and formatting) from a string.

## Parameters

- `str` (string): The string potentially containing ANSI codes.

## Returns

(string): The cleaned string without ANSI escape codes.

## Example

```typescript
stripAnsiCodes("\u001b[31mRed Text\u001b[0m"); // "Red Text"
stripAnsiCodes("Going Merry"); // "Going Merry"
```

# removeAllNumbers

## Description

Removes all numeric digits from a string.

## Parameters

- `str` (string): The string to remove numbers from.

## Returns

(string): The string with all numbers removed.

## Example

```typescript
removeAllNumbers("Going123 Merry456"); // "Going Merry"
removeAllNumbers("One Piece 2024"); // "One Piece "
```

# extractAllNumbers

## Description

Extracts all sequences of digits from a string as an array of strings.

## Parameters

- `str` (string): The string to extract numbers from.

## Returns

(string[]): An array of number strings found in the input.

## Example

```typescript
extractAllNumbers("Going123 Merry456"); // ["123", "456"]
extractAllNumbers("One Piece 2024"); // ["2024"]
extractAllNumbers("No numbers here"); // []
```

# padCenter

## Description

Centers a string by padding it equally on both sides to reach a specified total length.

## Parameters

- `str` (string): The string to pad.
- `length` (number): The desired total length after padding.
- `pad` (string, optional): The character used for padding. Defaults to a space.

## Returns

(string): The centered and padded string.

## Example

```typescript
padCenter("Luffy", 11); // "   Luffy   "
padCenter("Going Merry", 15, "*"); // "***Going Merry***"
```

# hasEmoji

## Description

Checks if a string contains any emoji characters within the Unicode range U+1F600 to U+1F6FF.

## Parameters

- `str` (string): The string to check for emojis.

## Returns

(boolean): `true` if the string contains at least one emoji, otherwise `false`.

## Example

```typescript
hasEmoji("Luffy 😀"); // true
hasEmoji("Going Merry"); // false
```

# extractEmoji

## Description

Extracts all emoji characters from a string within the Unicode range U+1F600 to U+1F6FF.

## Parameters

- `str` (string): The string to extract emojis from.

## Returns

(string[]): An array of emoji characters found in the string.

## Example

```typescript
extractEmoji("Luffy 😀 and Zoro 🗡️"); // ["😀", "🗡️"]
extractEmoji("Going Merry"); // []
```

# toCurrencyFormat

## Description

Formats a numeric string as currency using the specified currency code (default is USD).

## Parameters

- `numStr` (string): The numeric string to format.
- `currency` (string, optional): The ISO 4217 currency code. Defaults to 'USD'.

## Returns

(string): The formatted currency string.

## Example

```typescript
toCurrencyFormat("1234.56"); // "$1,234.56"
toCurrencyFormat("1234.56", "EUR"); // "€1,234.56"
```

# stripSpaces

## Description

Removes all whitespace characters from a string.

## Parameters

- `str` (string): The string to remove spaces from.

## Returns

(string): The string without any spaces.

## Example

```typescript
stripSpaces("Going Merry"); // "GoingMerry"
stripSpaces("  Luffy  is  Pirate  King  "); // "LuffyisPirateKing"
```

# extractDomain

## Description

Extracts the domain (hostname) from a given URL string.

## Parameters

- `url` (string): The URL to extract the domain from.

## Returns

(string): The domain name (hostname) of the URL.

## Example

```typescript
extractDomain("https://onepiece.com/crew/luffy"); // "onepiece.com"
extractDomain("http://goingmerry.ship/log"); // "goingmerry.ship"
```

# extractTLD

## Description

Extracts the top-level domain (TLD) from a given URL string.

## Parameters

- `url` (string): The URL to extract the TLD from.

## Returns

(string): The top-level domain of the URL, or an empty string if none found.

## Example

```typescript
extractTLD("https://onepiece.com/crew/luffy"); // "com"
extractTLD("http://goingmerry.ship/log"); // "ship"
```

# removeAlphanumeric

## Description

Removes all alphanumeric characters (letters and digits) from a string.

## Parameters

- `str` (string): The string to remove alphanumeric characters from.

## Returns

(string): The string with all letters and digits removed.

## Example

```typescript
removeAlphanumeric("Going123 Merry456!@#"); // " !@#"
removeAlphanumeric("OnePiece2024!"); // "!"
```

# getMiddleCharacter

## Description

Returns the middle character of a string. If the string length is even, it returns the character just right of center.

## Parameters

- `str` (string): The string to get the middle character from.

## Returns

(string): The middle character or an empty string if the input is empty.

## Example

```typescript
getMiddleCharacter("Going"); // "i"
getMiddleCharacter("Merry"); // "r"
getMiddleCharacter(""); // ""
```

# insertAt

## Description

Inserts a given string value into another string at a specified index.

## Parameters

- `str` (string): The original string.
- `index` (number): The position at which to insert the value.
- `value` (string): The string to insert.

## Returns

(string): The new string with the value inserted.

## Example

```typescript
insertAt("Going Merry", 6, "D "); // "Going D Merry"
insertAt("OnePiece", 3, "-"); // "One-Piece"
```

# removeAt

## Description

Removes a specified number of characters from a given string starting at a specific index.

## Parameters

- `str` (`string`): The original string.
- `index` (`number`): The starting index from which characters will be removed.
- `count` (`number`, optional): The number of characters to remove. Defaults to `1`.

## Returns

- `string`: A new string with the specified characters removed. If the index is invalid or the count is not positive, the original string is returned.

## Example

```typescript
removeAt("Going Merry", 6, 2);
// Output: "Going erry"

removeAt("Thousand Sunny", 9);
// Output: "Thousand Suny"

removeAt("Zoro", 0, 3);
// Output: "o"
```

# reverseSentences

## Description

Reverses the order of sentences in a string. Sentences are assumed to be separated by periods.

## Parameters

- `str` (string): The string containing sentences to reverse.

## Returns

(string): The string with sentence order reversed, preserving punctuation.

## Example

```typescript
reverseSentences("Luffy is brave. Zoro is strong. Nami is smart.");
// "Nami is smart. Zoro is strong. Luffy is brave."
```

# capitalizeSentences

## Description

Capitalizes the first letter of each sentence in a string.

## Parameters

- `str` (string): The string containing sentences to capitalize.

## Returns

(string): The string with the first letter of each sentence capitalized.

## Example

```typescript
capitalizeSentences("luffy is brave. zoro is strong! nami is smart?");
// "Luffy is brave. Zoro is strong! Nami is smart?"
```

# decapitalize

## Description

Converts the first character of a string to lowercase.

## Parameters

- `str` (string): The string to decapitalize.

## Returns

(string): The string with the first character in lowercase.

## Example

```typescript
decapitalize("Luffy"); // "luffy"
decapitalize("GoingMerry"); // "goingMerry"
```

# toUpperFirstChar

## Description

Converts the first character of a string to uppercase.

## Parameters

- `str` (string): The string to transform.

## Returns

(string): The string with the first character in uppercase.

## Example

```typescript
toUpperFirstChar("luffy"); // "Luffy"
toUpperFirstChar("goingMerry"); // "GoingMerry"
```

# toLowerFirstChar

## Description

Converts the first character of a string to lowercase.

## Parameters

- `str` (string): The string to transform.

## Returns

(string): The string with the first character in lowercase.

## Example

```typescript
toLowerFirstChar("Luffy"); // "luffy"
toLowerFirstChar("GoingMerry"); // "goingMerry"
```

# removeQuotes

## Description

Removes leading and trailing single or double quotes from a string.

## Parameters

- `str` (string): The string to remove quotes from.

## Returns

(string): The string without leading or trailing quotes.

## Example

```typescript
removeQuotes('"Going Merry"'); // "Going Merry"
removeQuotes("'One Piece'"); // "One Piece"
```

# surroundWithQuotes

## Description

Wraps a given string with the specified type of quotation marks.

## Parameters

- `str` (`string`): The string to be wrapped.
- `quoteType` (`'"' | '\''`, optional): The type of quotation mark to use. Defaults to double quotes (`"`).

## Returns

- `string`: The input string wrapped with the specified quotation marks.

## Example

```typescript
surroundWithQuotes("Luffy");
// Output: "\"Luffy\""

surroundWithQuotes("Zoro", "'");
// Output: "'Zoro'"
```

# formatPhoneNumber

## Description

Formats a 10-digit phone number string into the format (XXX) XXX-XXXX.

## Parameters

- `num` (string): The 10-digit phone number string.

## Returns

(string): The formatted phone number.

## Example

```typescript
formatPhoneNumber("1234567890"); // "(123) 456-7890"
formatPhoneNumber("9876543210"); // "(987) 654-3210"
```

# convertToBinary

## Description

Converts each character in a string to its binary representation, separated by spaces.

## Parameters

- `str` (string): The string to convert.

## Returns

(string): A string of binary numbers representing each character.

## Example

```typescript
convertToBinary("Luffy"); // "1001100 1110101 1100110 1100110 1111001"
convertToBinary("Merry"); // "1001101 1100101 1110010 1110010 1111001"
```

# binaryToString

## Description

Converts a string of binary numbers (separated by spaces) back to the original string.

## Parameters

- `bin` (string): The binary string to convert.

## Returns

(string): The decoded original string.

## Example

```typescript
binaryToString("1001100 1110101 1100110 1100110 1111001"); // "Luffy"
binaryToString("1001101 1100101 1110010 1110010 1111001"); // "Merry"
```

# convertToHex

## Description

Converts each character in a string to its hexadecimal representation, separated by spaces.

## Parameters

- `str` (string): The string to convert.

## Returns

(string): A string of hexadecimal numbers representing each character.

## Example

```typescript
convertToHex("Luffy"); // "4c 75 66 66 79"
convertToHex("Merry"); // "4d 65 72 72 79"
```

# hexToString

## Description

Converts a string of hexadecimal numbers (separated by spaces) back to the original string.

## Parameters

- `hex` (string): The hexadecimal string to convert.

## Returns

(string): The decoded original string.

## Example

```typescript
hexToString("4c 75 66 66 79"); // "Luffy"
hexToString("4d 65 72 72 79"); // "Merry"
```

# htmlEntityEncode

## Description

Encodes special characters in a string into their corresponding HTML entities.

## Parameters

- `str` (string): The string to encode.

## Returns

(string): The HTML entity encoded string.

## Example

```typescript
htmlEntityEncode("One Piece & Going Merry <3");
// "One&#32;Piece&#32;&#38;&#32;Going&#32;Merry&#32;&#60;3"
```

# htmlEntityDecode

## Description

Decodes HTML entities in a string back to their original characters.

## Parameters

- `str` (string): The string with HTML entities to decode.

## Returns

(string): The decoded string.

## Example

```typescript
htmlEntityDecode("One&#32;Piece&#32;&#38;&#32;Going&#32;Merry&#32;&#60;3");
// "One Piece & Going Merry <3"
```

# countLines

## Description

Counts the number of lines in a string, supporting different newline formats.

## Parameters

- `str` (string): The string to count lines in.

## Returns

(number): The total number of lines.

## Example

```typescript
countLines("I want to be King.\nAnd rule the seas."); // 2
countLines("Going Merry\r\nIs my ship."); // 2
```

# getFirstLine

## Description

Extracts the first line from a string.

## Parameters

- `str` (string): The string to extract the first line from.

## Returns

(string): The first line of the string or an empty string if none.

## Example

```typescript
getFirstLine("I am Luffy.\nThe future Pirate King."); // "I am Luffy."
getFirstLine("Going Merry"); // "Going Merry"
```

# getLastLine

## Description

Extracts the last line from a string.

## Parameters

- `str` (string): The string to extract the last line from.

## Returns

(string): The last line of the string or an empty string if none.

## Example

```typescript
getLastLine("I am Luffy.\nThe future Pirate King."); // "The future Pirate King."
getLastLine("Going Merry"); // "Going Merry"
```

# highlightSubstr

## Description

Highlights all occurrences of a substring within a string by wrapping them with a specified tag.

## Parameters

- `str` (string): The main string.
- `substr` (string): The substring to highlight.
- `tag` (string, optional): The tag or marker to wrap around the substring (default is '\*\*').

## Returns

(string): The string with highlighted substrings.

## Example

```typescript
highlightSubstr("Going Merry is my ship", "Merry"); // "Going **Merry** is my ship"
highlightSubstr("Luffy is the Pirate King", "Pirate", "__"); // "Luffy is the __Pirate__ King"
```

# replaceAt

## Description

Replaces the character at a specified index in a string with a new character.

## Parameters

- `str` (string): The original string.
- `index` (number): The zero-based index at which to replace the character.
- `char` (string): The new character to insert.

## Returns

(string): The resulting string after replacement.

## Example

```typescript
replaceAt("Going Merry", 6, "S"); // "Going Serry"
replaceAt("Luffy", 0, "D"); // "Duffy"
```

# stripLeadingZeros

## Description

Removes all leading zeros from a numeric string.

## Parameters

- `str` (string): The string to process.

## Returns

(string): The string without leading zeros.

## Example

```typescript
stripLeadingZeros("00012345"); // "12345"
stripLeadingZeros("007"); // "7"
```

# removeDuplicatesWords

## Description

Removes duplicate words from a string, preserving the original word order.

## Parameters

- `str` (string): The string to process.

## Returns

(string): The string with duplicate words removed.

## Example

```typescript
removeDuplicatesWords("Pirate King Pirate Adventure"); // "Pirate King Adventure"
removeDuplicatesWords("Luffy Luffy Straw Hat Straw Hat"); // "Luffy Straw Hat"
```

# sortWords

## Description

Sorts the words in a string alphabetically.

## Parameters

- `str` (string): The string containing words to sort.

## Returns

(string): The string with words sorted alphabetically.

## Example

```typescript
sortWords("Zoro Luffy Sanji"); // "Luffy Sanji Zoro"
sortWords("Going Merry Thousand Sunny"); // "Going Merry Sunny Thousand"
```

# uniqueWords

## Description

Extracts unique words from a string, ignoring punctuation.

## Parameters

- `str` (string): The string to extract words from.

## Returns

(string[]): An array of unique words.

## Example

```typescript
uniqueWords("Luffy, Zoro, Luffy!"); // ["Luffy", "Zoro"]
uniqueWords("Going Merry. Going! Sunny?"); // ["Going", "Merry", "Sunny"]
```

# toTitleCase

## Description

Converts the first letter of each word in a string to uppercase, making it title case.

## Parameters

- `str` (string): The string to convert.

## Returns

(string): The string converted to title case.

## Example

```typescript
toTitleCase("going merry ship"); // "Going Merry Ship"
toTitleCase("the straw hat pirates"); // "The Straw Hat Pirates"
```

# slugToCamelCase

## Description

Converts a slug-case string (kebab-case) into camelCase by replacing hyphens followed by a letter with the uppercase version of that letter.

## Parameters

- `str` (string): The slug-case string to convert.

## Returns

(string): The converted camelCase string.

## Example

```typescript
slugToCamelCase("going-merry"); // "goingMerry"
slugToCamelCase("straw-hat-pirates"); // "strawHatPirates"
```

# camelCaseToSlug

## Description

Converts a camelCase string into slug-case (kebab-case) by inserting hyphens before uppercase letters and converting all letters to lowercase.

## Parameters

- `str` (string): The camelCase string to convert.

## Returns

(string): The converted slug-case string.

## Example

```typescript
camelCaseToSlug("goingMerry"); // "going-merry"
camelCaseToSlug("strawHatPirates"); // "straw-hat-pirates"
```

# removeSpecialChars

## Description

Removes all special characters from a string, leaving only alphanumeric characters and whitespace.

## Parameters

- `str` (string): The string to clean.

## Returns

(string): The string without special characters.

## Example

```typescript
removeSpecialChars("Luffy@#123!"); // "Luffy123"
removeSpecialChars("Straw Hat Pirates!!"); // "Straw Hat Pirates"
```

# countPunctuation

## Description

Counts the number of punctuation characters in a string. Includes characters like period, comma, exclamation mark, question mark, semicolon, and colon.

## Parameters

- `str` (string): The string to analyze.

## Returns

(number): The count of punctuation characters.

## Example

```typescript
countPunctuation("Ready for battle! Are you?"); // 2
countPunctuation("Yohoho! Let's go..."); // 4
```

# countUppercase

## Description

Counts the number of uppercase letters in a string.

## Parameters

- `str` (string): The string to analyze.

## Returns

(number): The count of uppercase letters.

## Example

```typescript
countUppercase("StrawHatPirates"); // 3
countUppercase("One Piece"); // 2
```

# countLowercase

## Description

Counts the number of lowercase letters in a string.

## Parameters

- `str` (string): The string to analyze.

## Returns

(number): The count of lowercase letters.

## Example

```typescript
countLowercase("StrawHatPirates"); // 11
countLowercase("One Piece"); // 5
```

# shuffleCharacters

## Description

Randomly shuffles the characters in a string, returning a new string with characters in a random order.

## Parameters

- `str` (string): The string to shuffle.

## Returns

(string): The shuffled string.

## Example

```typescript
shuffleCharacters("GoingMerry"); // "eGnriyMog" (example output, random)
shuffleCharacters("OnePiece"); // "eicnOeP" (example output, random)
```

# containsUppercase

## Description

Checks if a string contains at least one uppercase letter.

## Parameters

- `str` (string): The string to check.

## Returns

(boolean): `true` if the string contains an uppercase letter, otherwise `false`.

## Example

```typescript
containsUppercase("GoingMerry"); // true
containsUppercase("goingmerry"); // false
```

# containsLowercase

## Description

Checks if a string contains at least one lowercase letter.

## Parameters

- `str` (string): The string to check.

## Returns

(boolean): `true` if the string contains a lowercase letter, otherwise `false`.

## Example

```typescript
containsLowercase("GoingMerry"); // true
containsLowercase("GOINGMERRY"); // false
```

# rotateString

## Description

Rotates a string by moving the first `n` characters to the end of the string.

## Parameters

- `str` (string): The string to rotate.
- `n` (number): The number of characters to rotate from the start.

## Returns

(string): The rotated string.

## Example

```typescript
rotateString("GoingMerry", 3); // "ingMerryGo"
rotateString("OnePiece", 2); // "ePieceOn"
```

# toggleCase

## Description

Toggles the case of each character in a string: uppercase letters become lowercase and vice versa.

## Parameters

- `str` (string): The string to toggle case.

## Returns

(string): The string with toggled case for every character.

## Example

```typescript
toggleCase("GoingMerry"); // "gOINGmERRY"
toggleCase("ONEpiece"); // "onePIECE"
```

# reverseEachWord

## Description

Reverses each individual word in a string while keeping the word order intact.

## Parameters

- `str` (string): The string whose words will be reversed.

## Returns

(string): The string with each word reversed but in the original word order.

## Example

```typescript
reverseEachWord("Going Merry"); // "gni oG yrreM"
reverseEachWord("One Piece"); // "enO eci eP"
```

# splitToWords

## Description

Splits a string into an array of words by whitespace, trimming leading and trailing spaces.

## Parameters

- `str` (string): The string to split into words.

## Returns

(string[]): An array of words extracted from the string.

## Example

```typescript
splitToWords(" Going Merry  crew "); // ["Going", "Merry", "crew"]
splitToWords("One Piece adventure"); // ["One", "Piece", "adventure"]
```

# countSentences

## Description

Counts the number of sentences in a given string. A sentence is considered to end with a period (`.`), exclamation mark (`!`), or question mark (`?`) that follows a word character or a closing parenthesis.

## Parameters

- str (string): The input string to evaluate.

## Returns

(number): The number of sentences found in the input string.

## Example

```typescript
countSentences("Luffy became the Pirate King. Zoro asked, 'Where's the next island?' Sanji cooked dinner!"); // 3
```

# countSentences

## Description

Counts the number of sentences in a given string. A sentence is considered to end with a period (`.`), exclamation mark (`!`), or question mark (`?`) that follows a word character or a closing parenthesis.

## Parameters

- str (string): The input string to evaluate.

## Returns

(number): The number of sentences found in the input string.

## Example

```typescript
countSentences("Luffy became the Pirate King. Zoro asked, 'Where's the next island?' Sanji cooked dinner!");
// Output: 3
```

# extractSentences

## Description

Extracts all sentences from a given string. A sentence is considered any sequence of characters ending with a period (`.`), exclamation mark (`!`), or question mark (`?`).

## Parameters

- str (string): The input string to extract sentences from.

## Returns

(string[]): An array of sentences extracted from the input string.

## Example

```typescript
extractSentences("Nami drew the map. Usopp told a funny story! Chopper asked, 'Is that safe?'");
// Output: ["Nami drew the map.", " Usopp told a funny story!", " Chopper asked, 'Is that safe?'"]
```

# generateAcronym

## Description

Generates an acronym from a given string by taking the first letter of each word and converting it to uppercase.

## Parameters

- str (string): The input string to convert into an acronym.

## Returns

(string): The resulting acronym in uppercase letters.

## Example

```typescript
generateAcronym("Straw Hat Pirates");
// Output: "SHP"
```

# titleToSlug

## Description

Converts a given title string into a URL-friendly slug by converting it to lowercase, removing special characters, trimming whitespace, and replacing spaces with hyphens.

## Parameters

- str (string): The input title string to convert.

## Returns

(string): The generated slug string.

## Example

```typescript
titleToSlug("One Piece: Adventure on the Grand Line!");
// Output: "one-piece-adventure-on-the-grand-line"
```

# sanitizeFileName

## Description

Sanitizes a filename string by replacing characters that are invalid in file names (`/ \ : * ? " < > |`) with underscores (`_`).

## Parameters

- str (string): The filename string to sanitize.

## Returns

(string): The sanitized filename with invalid characters replaced.

## Example

```typescript
sanitizeFileName("Luffy/Straw:Hat|Adventure?.txt");
// Output: "Luffy_Straw_Hat_Adventure_.txt"
```

# isIpAddress

## Description

Checks if a given string is a valid IPv4 address in the format `x.x.x.x`, where `x` is a number from 0 to 999 (note: does not validate ranges beyond 0-255).

## Parameters

- str (string): The string to validate as an IP address.

## Returns

(boolean): `true` if the string matches the IPv4 format, otherwise `false`.

## Example

```typescript
isIpAddress("123.45.67.89");
// Output: true

isIpAddress("Going.Merry");
// Output: false
```

# isUrl

## Description

Checks if a given string is a valid HTTP or HTTPS URL.

## Parameters

- str (string): The string to validate as a URL.

## Returns

(boolean): `true` if the string is a valid URL starting with `http://` or `https://`, otherwise `false`.

## Example

```typescript
isUrl("https://goingmerry.onepiece.com");
// Output: true

isUrl("GoingMerryShip");
// Output: false
```

# getFileExtension

## Description

Extracts the file extension from a given filename string. Returns an empty string if no extension is found.

## Parameters

- str (string): The filename string to extract the extension from.

## Returns

(string): The file extension without the dot, or an empty string if none exists.

## Example

```typescript
getFileExtension("thousand_sunny.png");
// Output: "png"

getFileExtension("goingmerry");
// Output: ""
```

# removeFileExtension

## Description

Removes the file extension from a given filename string.

## Parameters

- str (string): The filename string to process.

## Returns

(string): The filename without its extension.

## Example

```typescript
removeFileExtension("thousand_sunny.png");
// Output: "thousand_sunny"

removeFileExtension("goingmerry");
// Output: "goingmerry"
```

# isNumericString

## Description

Checks if a given string consists only of numeric digits (0-9).

## Parameters

- str (string): The string to check.

## Returns

(boolean): `true` if the string contains only digits, otherwise `false`.

## Example

```typescript
isNumericString("123456");
// Output: true
isNumericString("Zoro123");
// Output: false
```

# compactWhitespace

## Description

Replaces consecutive whitespace characters in a string with a single space and trims leading and trailing whitespace.

## Parameters

- str (string): The input string to compact whitespace in.

## Returns

(string): The string with compacted whitespace.

## Example

```typescript
compactWhitespace("  Going   Merry   is   the   best  ship!  ");
// Output: "Going Merry is the best ship!"
```

# unescapeBackslashes

## Description

Removes backslash escaping from characters in a string by replacing occurrences of a backslash followed by any character with just that character.

## Parameters

- str (string): The input string containing escaped characters.

## Returns

(string): The unescaped string with backslashes removed.

## Example

```typescript
unescapeBackslashes("Luffy\\'s\\ adventure\\!");
// Output: "Luffy's adventure!"
```

# stringToUnicode

## Description

Converts each character in a string to its Unicode escape sequence representation.

## Parameters

- str (string): The input string to convert.

## Returns

(string): A string representing the Unicode escape sequences of each character.

## Example

```typescript
stringToUnicode("Luffy");
// Output: "\u004c\u0075\u0066\u0066\u0079"
```

# unicodeToString

## Description

Converts a string of Unicode escape sequences back to the original string.

## Parameters

- unicodeStr (string): The string containing Unicode escape sequences.

## Returns

(string): The decoded string with Unicode sequences converted to characters.

## Example

```typescript
unicodeToString("\\u004c\\u0075\\u0066\\u0066\\u0079");
// Output: "Luffy"
```

# removeVowels

## Description

Removes all vowels (`a`, `e`, `i`, `o`, `u`) from a given string, case-insensitive.

## Parameters

- str (string): The input string to process.

## Returns

(string): The string with all vowels removed.

## Example

```typescript
removeVowels("Monkey D. Luffy");
// Output: "Mnky D. Lffy"
```

# removeConsonants

## Description

Removes all consonants from a given string, keeping only vowels, whitespace, and digits.

## Parameters

- str (string): The input string to process.

## Returns

(string): The string with all consonants removed.

## Example

```typescript
removeConsonants("Monkey D. Luffy 123");
// Output: "o e  u y 123"
```

# alternateCase

## Description

Converts a string so that characters at even indices are uppercase and characters at odd indices are lowercase.

## Parameters

- str (string): The input string to transform.

## Returns

(string): The string with alternating uppercase and lowercase characters.

## Example

```typescript
alternateCase("Going Merry");
// Output: "GoInG MeRrY"
```

# randomStringBase36

## Description

Generates a random string of specified length using base-36 characters (0-9, a-z).

## Parameters

- length (number): The desired length of the random string.

## Returns

(string): A random base-36 string of the given length.

## Example

```typescript
randomStringBase36(5);
// Output: e.g. "a1x9z"
```

# obfuscatePhoneNumber

## Description

Obfuscates a phone number by replacing the last 4 digits with asterisks, keeping the first 5 digits visible.

## Parameters

- num (string): The phone number string to obfuscate (assumed format: 9 digits).

## Returns

(string): The obfuscated phone number with the last 4 digits replaced by `****`.

## Example

```typescript
obfuscatePhoneNumber("123456789");
// Output: "12345****"
```

# countWordsByLength

## Description

Counts the number of words in a string grouped by their length.

## Parameters

- str (string): The input string to analyze.

## Returns

(Record<number, number>): An object where keys are word lengths and values are the count of words of that length.

## Example

```typescript
countWordsByLength("Luffy and Zoro are strong pirates");
// Output: {5: 2, 3: 2, 2: 1, 7: 1}
```

# stringToArrayBuffer

## Description

Converts a string into an `ArrayBuffer` using UTF-8 encoding.

## Parameters

- str (string): The input string to convert.

## Returns

(ArrayBuffer): The UTF-8 encoded `ArrayBuffer` representation of the string.

## Example

```typescript
const buffer = stringToArrayBuffer("Going Merry");
// Output: ArrayBuffer containing UTF-8 bytes of "Going Merry"
console.log(new Uint8Array(buffer));
// Example output: Uint8Array(11) [71, 111, 105, 110, 103, 32, 77, 101, 114, 114, 121]
```

# arrayBufferToString

## Description

Converts an `ArrayBuffer` back into a string using UTF-8 decoding.

## Parameters

- buf (ArrayBuffer): The input `ArrayBuffer` to decode.

## Returns

(string): The decoded string from the `ArrayBuffer`.

## Example

```typescript
const buffer = new TextEncoder().encode("Going Merry").buffer;
const result = arrayBufferToString(buffer);
// Output: "Going Merry"
console.log(result);
```

# isStrongPassword

## Description

Checks if a string meets common strong password criteria: at least 8 characters, including lowercase, uppercase, digits, and special characters.

## Parameters

- str (string): The password string to validate.

## Returns

(boolean): `true` if the password is strong, otherwise `false`.

## Example

```typescript
isStrongPassword("Luffy123!");
// Output: true

isStrongPassword("zoro");
// Output: false
```

# getLongestWord

## Description

Finds and returns the longest word in a given string.

## Parameters

- str (string): The input string to search.

## Returns

(string): The longest word found in the string. If there are multiple with the same length, the first is returned.

## Example

```typescript
getLongestWord("Monkey D. Luffy and the Going Merry");
// Output: "Monkey"
```

# getShortestWord

## Description

Finds and returns the shortest word in a given string.

## Parameters

- str (string): The input string to search.

## Returns

(string): The shortest word found in the string. If there are multiple with the same length, the first is returned.

## Example

```typescript
getShortestWord("Monkey D. Luffy and the Going Merry");
// Output: "D."
```

# getAllIndexesOf

## Description

Returns all starting indexes of a target substring within a given string. Optionally supports overlapping matches.

## Parameters

- `str` (`string`): The string to search within.
- `target` (`string`): The substring to find.
- `overlapping` (`boolean`, optional): If `true`, allows overlapping matches. Defaults to `false`.

## Returns

- `number[]`: An array of all starting indexes where the target substring is found.

## Example

```typescript
getAllIndexesOf("banana", "ana");
// Output: [1]

getAllIndexesOf("banana", "ana", true);
// Output: [1, 3]

getAllIndexesOf("aaaa", "aa");
// Output: [0, 2]

getAllIndexesOf("aaaa", "aa", true);
// Output: [0, 1, 2]
```
