import { describe, it, expect } from 'vitest'
import { capitalize, charCodeArrayToString, charFrequency, collapseNewlines, compressWhitespace, contains, countConsonants, countOccurrences, countVowels, endsWith, endsWithAny, ensureEndsWith, ensureStartsWith, escapeHtml, extractEmails, extractNumbers, extractUrls, extractWords, getCharAtSafe, getInitials, getNthWord, getUniqueCharacters, isAlpha, isAlphanumeric, isBlank, isEmail, isEmpty, isLoosePalindrome, isLowerCase, isStrictPalindrome, isString, isUpperCase, isUrlWithFtp, isWhitespace, levenshteinDistance, maskString, padLeft, padRight, randomString, removeDiacritics, removeDuplicateWords, removeNonAlpha, removeNonNumeric, removeWhitespace, repeat, repeatStringUntilLength, reverse, safeString, slugify, startsWith, startsWithAny, stringToAsciiSum, stringToCharCodeArray, stripHtml, stripPunctuation, swapCase, titleCase, toCamelCase, toDotCase, toKebabCase, toPascalCase, toSnakeCase, toSpaceCase, trimChar, truncate, wrap } from './index'

describe('isString', () => {
    it('returns true for string literals', () => {
        expect(isString('Thousand Sunny')).toBe(true)
    })

    it('returns false for numbers', () => {
        expect(isString(123)).toBe(false)
    })

    it('returns false for null', () => {
        expect(isString(null)).toBe(false)
    })

    it('returns false for arrays', () => {
        expect(isString(['Nami', 'Robin'])).toBe(false)
    })

    it('returns false for undefined', () => {
        expect(isString(undefined)).toBe(false)
    })

    it('returns true for String objects', () => {
        expect(isString(new String('Luffy'))).toBe(true)
    })
})
describe('capitalize', () => {
    it('should capitalize a lowercase string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    it('should not alter a string starting with uppercase', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });

    it('should capitalize a single lowercase character', () => {
        expect(capitalize('h')).toBe('H');
    });

    it('should not alter a single uppercase character', () => {
        expect(capitalize('H')).toBe('H');
    });

    it('should return an empty string when input is empty', () => {
        expect(capitalize('')).toBe('');
    });

    it('should not alter string with leading spaces', () => {
        expect(capitalize(' hello')).toBe(' hello');
    });

    it('should capitalize only the first character of a mixed-case string', () => {
        expect(capitalize('hElLo')).toBe('HElLo');
    });

    it('should not alter string with leading special characters', () => {
        expect(capitalize('!hello')).toBe('!hello');
    });

    it('should capitalize only the first character of the first word', () => {
        expect(capitalize('this is a it')).toBe('This is a it');
    });

    it('should not alter strings with non-alphabetic first character', () => {
        expect(capitalize('123abc')).toBe('123abc');
    });

    it('should not alter a string with all uppercase characters', () => {
        expect(capitalize('HELLO')).toBe('HELLO');
    });
});
describe('toCamelCase', () => {
    it('should convert hyphenated string to camelCase', () => {
        expect(toCamelCase('hello-world')).toBe('helloWorld');
    });

    it('should convert underscore-separated string to camelCase', () => {
        expect(toCamelCase('hello_world')).toBe('helloWorld');
    });

    it('should convert string with spaces to camelCase', () => {
        expect(toCamelCase('hello world')).toBe('helloWorld');
    });

    it('should handle string that is already in camelCase', () => {
        expect(toCamelCase('helloWorld')).toBe('helloWorld');
    });

    it('should handle string with mixed hyphen, underscore, and spaces', () => {
        expect(toCamelCase('hello_world -foo bar')).toBe('helloWorldFooBar');
    });

    it('should handle single-word input', () => {
        expect(toCamelCase('hello')).toBe('hello');
    });

    it('should handle empty string input', () => {
        expect(toCamelCase('')).toBe('');
    });

    it('should not alter a string that starts with an uppercase letter', () => {
        expect(toCamelCase('Hello World')).toBe('helloWorld');
    });

    it('should handle multiple consecutive separators', () => {
        expect(toCamelCase('hello---world__foo bar')).toBe('helloWorldFooBar');
    });

    it('should handle strings with numbers correctly', () => {
        expect(toCamelCase('hello-123-world')).toBe('hello123World');
    });

    it('should handle all-uppercase input and convert correctly', () => {
        expect(toCamelCase('HELLO_WORLD')).toBe('helloWorld');
    });
    it('should handle special symbols input and convert correctly', () => {
        expect(toCamelCase('hello & world')).toBe('helloWorld');
    });
});
describe('toKebabCase', () => {
    it('should convert camelCase to kebab-case', () => {
        expect(toKebabCase('helloWorld')).toBe('hello-world');
    });

    it('should convert snake_case to kebab-case', () => {
        expect(toKebabCase('hello_world')).toBe('hello-world');
    });

    it('should convert string with spaces to kebab-case', () => {
        expect(toKebabCase('hello world')).toBe('hello-world');
    });

    it('should convert string with mixed spaces, underscores, and camelCase to kebab-case', () => {
        expect(toKebabCase('helloWorld foo_bar')).toBe('hello-world-foo-bar');
    });

    it('should handle single-word input', () => {
        expect(toKebabCase('hello')).toBe('hello');
    });

    it('should handle empty string input', () => {
        expect(toKebabCase('')).toBe('');
    });

    it('should convert string with uppercase letters to kebab-case', () => {
        expect(toKebabCase('HelloWorld')).toBe('hello-world');
    });

    it('should convert string with numbers to kebab-case', () => {
        expect(toKebabCase('hello123World')).toBe('hello123-world');
    });

    it('should handle multiple consecutive spaces, underscores, or mixed separators', () => {
        expect(toKebabCase('hello___world    foo bar')).toBe('hello-world-foo-bar');
    });

    it('should convert all-uppercase input to kebab-case', () => {
        expect(toKebabCase('HELLO_WORLD')).toBe('hello-world');
    });

    it('should handle strings with leading or trailing spaces', () => {
        expect(toKebabCase('  hello world  ')).toBe('hello-world');
    });
});
describe('toSnakeCase', () => {
    it('converts camelCase to snake_case', () => {
        expect(toSnakeCase('camelCaseExample')).toBe('camel_case_example')
    })

    it('converts PascalCase to snake_case', () => {
        expect(toSnakeCase('PascalCaseExample')).toBe('pascal_case_example')
    })

    it('replaces spaces with underscores', () => {
        expect(toSnakeCase('this is a it')).toBe('this_is_a_it')
    })

    it('replaces hyphens with underscores', () => {
        expect(toSnakeCase('this-is-a-it')).toBe('this_is_a_it')
    })

    it('handles a mix of spaces and hyphens', () => {
        expect(toSnakeCase('mix of-spaces and-hyphens')).toBe('mix_of_spaces_and_hyphens')
    })

    it('handles multiple consecutive spaces and hyphens', () => {
        expect(toSnakeCase('multiple   spaces---and---hyphens')).toBe('multiple_spaces_and_hyphens')
    })

    it('handles already snake_case strings', () => {
        expect(toSnakeCase('already_snake_case')).toBe('already_snake_case')
    })

    it('handles uppercase strings', () => {
        expect(toSnakeCase('THISISAit')).toBe('thisisait')
    })

    it('handles empty string', () => {
        expect(toSnakeCase('')).toBe('')
    })

    it('handles single word lowercase', () => {
        expect(toSnakeCase('luffy')).toBe('luffy')
    })

    it('handles single word uppercase', () => {
        expect(toSnakeCase('ZORO')).toBe('zoro')
    })

    it('handles mixed special characters gracefully', () => {
        expect(toSnakeCase('mix-It Up Now')).toBe('mix_it_up_now')
    })

    it('handles camelCase with numbers', () => {
        expect(toSnakeCase('userID1AndID2')).toBe('user_id1_and_id2')
    })
})

describe('reverse', () => {
    it('reverses a regular word', () => {
        expect(reverse('onepiece')).toBe('eceipeno')
    })

    it('reverses a sentence', () => {
        expect(reverse('pirate king')).toBe('gnik etarip')
    })

    it('reverses an empty string', () => {
        expect(reverse('')).toBe('')
    })

    it('reverses a single character', () => {
        expect(reverse('z')).toBe('z')
    })

    it('reverses a string with spaces', () => {
        expect(reverse('monkey d luffy')).toBe('yfful d yeknom')
    })

    it('reverses a string with special characters', () => {
        expect(reverse('!@#$%^&*()')).toBe(')(*&^%$#@!')
    })

    it('reverses a palindrome', () => {
        expect(reverse('madam')).toBe('madam')
    })

    it('reverses a string with numbers', () => {
        expect(reverse('12345')).toBe('54321')
    })

    it('handles mixed case characters', () => {
        expect(reverse('GoLD.RoGeR')).toBe('ReGoR.DLoG')
    })
})

describe('truncate', () => {
    it('truncates a long string and appends ellipsis', () => {
        expect(truncate('strawhatpirates', 6)).toBe('strawh…')
    })

    it('returns original string when under limit', () => {
        expect(truncate('zoro', 10)).toBe('zoro')
    })

    it('returns original string when equal to limit', () => {
        expect(truncate('nami', 4)).toBe('nami')
    })

    it('truncates empty string to empty string', () => {
        expect(truncate('', 5)).toBe('')
    })

    it('truncates string of emojis correctly', () => {
        expect(truncate('🔥👒🗺️🏴‍☠️', 2)).toBe('🔥👒…')
    })

    it('handles multibyte characters (Japanese, etc)', () => {
        expect(truncate('ワンピース海賊団', 4)).toBe('ワンピー…')
    })

    it('truncates with limit 0 to just ellipsis', () => {
        expect(truncate('onepiece', 0)).toBe('…')
    })

    it('returns empty string when input is empty and limit is 0', () => {
        expect(truncate('', 0)).toBe('')
    })

    it('works with strings containing spaces', () => {
        expect(truncate('king of pirates', 7)).toBe('king of…')
    })

    it('handles very large limit greater than string length', () => {
        expect(truncate('usopp', 100)).toBe('usopp')
    })
})


describe('stripHtml', () => {
    it('removes single HTML tag', () => {
        expect(stripHtml('<p>Sanji</p>')).toBe('Sanji')
    })

    it('removes multiple nested tags', () => {
        expect(stripHtml('<div><span>Zoro</span> the swordsman</div>')).toBe('Zoro the swordsman')
    })

    it('removes self-closing tags', () => {
        expect(stripHtml('Chopper<br/>Tony')).toBe('ChopperTony')
    })

    it('removes HTML with attributes', () => {
        expect(stripHtml('<a href="https://onepiece.com">Luffy</a>')).toBe('Luffy')
    })

    it('removes multiple tags in sequence', () => {
        expect(stripHtml('<h1>One</h1><h2>Piece</h2>')).toBe('OnePiece')
    })

    it('removes empty tags', () => {
        expect(stripHtml('Nami <b></b> navigator')).toBe('Nami  navigator')
    })

    it('leaves string unchanged if no HTML tags', () => {
        expect(stripHtml('Franky Super!')).toBe('Franky Super!')
    })

    it('handles angle brackets not forming tags', () => {
        expect(stripHtml('Use < or > for comparison')).toBe('Use < or > for comparison')
    })

    it('handles broken HTML gracefully', () => {
        expect(stripHtml('<div><span>Brook')).toBe('Brook')
    })

    it('returns empty string if only tags', () => {
        expect(stripHtml('<p><div></div></p>')).toBe('')
    })

    it('removes script and style tags too', () => {
        expect(stripHtml('<style>.hat { color: red; }</style>Chopper')).toBe('Chopper')
        expect(stripHtml('<script>alert("yo");</script>Robin')).toBe('Robin')
    })
})

describe('escapeHtml', () => {
    it('escapes & character', () => {
        expect(escapeHtml('Luffy & Zoro')).toBe('Luffy &amp; Zoro')
    })

    it('escapes < and > characters', () => {
        expect(escapeHtml('<OnePiece>')).toBe('&lt;OnePiece&gt;')
    })

    it('escapes double quotes', () => {
        expect(escapeHtml('He said "I\'m King"')).toBe('He said &quot;I&#039;m King&quot;')
    })

    it('escapes single quotes', () => {
        expect(escapeHtml("It's sunny")).toBe('It&#039;s sunny')
    })

    it('escapes multiple special characters in one string', () => {
        expect(escapeHtml('Tom & Jerry <"Great">')).toBe('Tom &amp; Jerry &lt;&quot;Great&quot;&gt;')
    })

    it('returns empty string as is', () => {
        expect(escapeHtml('')).toBe('')
    })

    it('returns string without special chars unchanged', () => {
        expect(escapeHtml('Sanji')).toBe('Sanji')
    })

    it('escapes string with repeated special characters', () => {
        expect(escapeHtml('&&&&')).toBe('&amp;&amp;&amp;&amp;')
        expect(escapeHtml('<<>>')).toBe('&lt;&lt;&gt;&gt;')
    })

    it('escapes string with mixed quotes', () => {
        expect(escapeHtml(`'"Double and single"'`)).toBe('&#039;&quot;Double and single&quot;&#039;')
    })
})

describe('isUpperCase', () => {
    it('returns true for all uppercase letters', () => {
        expect(isUpperCase('GOLDFISH')).toBe(true)
    })

    it('returns false for all lowercase letters', () => {
        expect(isUpperCase('luffy')).toBe(false)
    })

    it('returns false for mixed case letters', () => {
        expect(isUpperCase('ZoroSan')).toBe(false)
    })

    it('returns true for empty string', () => {
        expect(isUpperCase('')).toBe(true)
    })

    it('returns true for string with numbers and uppercase letters', () => {
        expect(isUpperCase('SANJI123')).toBe(true)
    })

    it('returns false for string with numbers and lowercase letters', () => {
        expect(isUpperCase('nami123')).toBe(false)
    })

    it('returns true for string with only non-alphabetic characters', () => {
        expect(isUpperCase('123!@#')).toBe(true)
    })

    it('returns true for string with uppercase letters and special characters', () => {
        expect(isUpperCase('BROOK!')).toBe(true)
    })

    it('returns false for string with mixed case and special characters', () => {
        expect(isUpperCase('FrankY!')).toBe(false)
    })
})

describe('isLowerCase', () => {
    it('returns true for all lowercase letters', () => {
        expect(isLowerCase('nami')).toBe(true)
    })

    it('returns false for all uppercase letters', () => {
        expect(isLowerCase('SANJI')).toBe(false)
    })

    it('returns false for mixed case letters', () => {
        expect(isLowerCase('ZoroSan')).toBe(false)
    })

    it('returns true for empty string', () => {
        expect(isLowerCase('')).toBe(true)
    })

    it('returns true for string with numbers and lowercase letters', () => {
        expect(isLowerCase('chopper123')).toBe(true)
    })

    it('returns false for string with numbers and uppercase letters', () => {
        expect(isLowerCase('BROOK123')).toBe(false)
    })

    it('returns true for string with only non-alphabetic characters', () => {
        expect(isLowerCase('123!@#')).toBe(true)
    })

    it('returns true for string with lowercase letters and special characters', () => {
        expect(isLowerCase('franky!')).toBe(true)
    })

    it('returns false for string with mixed case and special characters', () => {
        expect(isLowerCase('FrankY!')).toBe(false)
    })
})


describe('repeat', () => {
    it('repeats a string multiple times', () => {
        expect(repeat('Luffy', 3)).toBe('LuffyLuffyLuffy')
    })

    it('returns empty string when count is 0', () => {
        expect(repeat('Zoro', 0)).toBe('')
    })

    it('returns empty string when repeating empty string', () => {
        expect(repeat('', 5)).toBe('')
    })

    it('returns original string when count is 1', () => {
        expect(repeat('Nami', 1)).toBe('Nami')
    })

    it('handles repeating string with spaces', () => {
        expect(repeat('Go ', 2)).toBe('Go Go ')
    })

    it('handles repeating string with special characters', () => {
        expect(repeat('🔥', 4)).toBe('🔥🔥🔥🔥')
    })

    it('handles large repeat counts', () => {
        const repeated = repeat('Sanji', 1000)
        expect(repeated.length).toBe(5 * 1000)
        expect(repeated.startsWith('Sanji')).toBe(true)
        expect(repeated.endsWith('Sanji')).toBe(true)
    })

    it('throws RangeError for negative count', () => {
        expect(() => repeat('Brook', -1)).toThrow(RangeError)
    })

    it('convert float value to Math.floor for non-integer count', () => {
        console.log(repeat('Robin', 2.5), "helo")
        expect(repeat('Robin', 2.5)).toBe("RobinRobin")
    })
})

describe('padLeft', () => {
    it('pads string with spaces by default', () => {
        expect(padLeft('Luffy', 8)).toBe('   Luffy')
    })

    it('returns original string if length is equal', () => {
        expect(padLeft('Zoro', 4)).toBe('Zoro')
    })

    it('returns original string if length is less', () => {
        expect(padLeft('Nami', 2)).toBe('Nami')
    })

    it('pads string with custom character', () => {
        expect(padLeft('Usopp', 7, '-')).toBe('--Usopp')
    })

    it('pads string with multi-character string (only first char used)', () => {
        expect(padLeft('Robin', 9, 'ab')).toBe('aaaaRobin')
    })

    it('pads empty string', () => {
        expect(padLeft('', 3)).toBe('   ')
    })

    it('pads with special characters', () => {
        expect(padLeft('Franky', 10, '🔥')).toBe('🔥🔥🔥🔥Franky')
    })

    it('returns original string if length equals string length', () => {
        expect(padLeft('Brook', 5)).toBe('Brook')
    })

    it('handles zero length (returns original string)', () => {
        expect(padLeft('Chopper', 0)).toBe('Chopper')
    })

    it('handles large length padding', () => {
        const padded = padLeft('Sanji', 15, '.')
        expect(padded.length).toBe(15)
        expect(padded.endsWith('Sanji')).toBe(true)
        expect(padded.startsWith('..........')).toBe(true)
    })
})

describe('padRight', () => {
    it('pads string with spaces by default', () => {
        expect(padRight('Luffy', 8)).toBe('Luffy   ')
    })

    it('returns original string if length is equal', () => {
        expect(padRight('Zoro', 4)).toBe('Zoro')
    })

    it('returns original string if length is less', () => {
        expect(padRight('Nami', 2)).toBe('Nami')
    })

    it('pads string with custom character', () => {
        expect(padRight('Usopp', 7, '-')).toBe('Usopp--')
    })

    it('pads string with multi-character string (only first char used)', () => {
        expect(padRight('Robin', 9, 'ab')).toBe('Robinaaaa')
    })

    it('pads empty string', () => {
        expect(padRight('', 3)).toBe('   ')
    })

    it('pads with special characters', () => {
        expect(padRight('Franky', 10, '🔥')).toBe('Franky🔥🔥🔥🔥')
    })

    it('returns original string if length equals string length', () => {
        expect(padRight('Brook', 5)).toBe('Brook')
    })

    it('handles zero length (returns original string)', () => {
        expect(padRight('Chopper', 0)).toBe('Chopper')
    })

    it('handles large length padding', () => {
        const padded = padRight('Sanji', 15, '.')
        expect(padded.length).toBe(15)
        expect(padded.startsWith('Sanji')).toBe(true)
        expect(padded.endsWith('..........')).toBe(true)
    })
})


describe('contains', () => {
    it('returns true if string contains the substring', () => {
        expect(contains('One Piece', 'Piece')).toBe(true)
    })

    it('returns false if string does not contain the substring', () => {
        expect(contains('Straw Hat', 'Pirate')).toBe(false)
    })

    it('returns true if substring is empty', () => {
        expect(contains('Nami', '')).toBe(true)
    })

    it('returns true if string equals substring', () => {
        expect(contains('Zoro', 'Zoro')).toBe(true)
    })

    it('returns false if substring is longer than string', () => {
        expect(contains('Usopp', 'Usopppp')).toBe(false)
    })

    it('is case sensitive', () => {
        expect(contains('Sanji', 'sanji')).toBe(false)
    })

    it('returns true if substring appears multiple times', () => {
        expect(contains('Mugiwara Mugiwara', 'Mugiwara')).toBe(true)
    })

    it('handles special characters', () => {
        expect(contains('Hello, world!', 'world!')).toBe(true)
    })

    it('returns false if string is empty and substring is not', () => {
        expect(contains('', 'Luffy')).toBe(false)
    })

    it('returns true if both string and substring are empty', () => {
        expect(contains('', '')).toBe(true)
    })
})
describe('startsWith', () => {
    it('returns true when string starts with the prefix', () => {
        expect(startsWith('One Piece', 'One')).toBe(true)
    })

    it('returns false when string does not start with the prefix', () => {
        expect(startsWith('Straw Hat', 'Hat')).toBe(false)
    })

    it('returns true when prefix is empty', () => {
        expect(startsWith('Nami', '')).toBe(true)
    })

    it('returns true when string equals prefix', () => {
        expect(startsWith('Zoro', 'Zoro')).toBe(true)
    })

    it('returns false when prefix is longer than string', () => {
        expect(startsWith('Usopp', 'Usopppp')).toBe(false)
    })

    it('is case sensitive', () => {
        expect(startsWith('Sanji', 'sanji')).toBe(false)
    })

    it('returns false when string is empty and prefix is not', () => {
        expect(startsWith('', 'Luffy')).toBe(false)
    })

    it('returns true when both string and prefix are empty', () => {
        expect(startsWith('', '')).toBe(true)
    })
})
describe('endsWith', () => {
    it('returns true when string ends with the suffix', () => {
        expect(endsWith('One Piece', 'Piece')).toBe(true)
    })

    it('returns false when string does not end with the suffix', () => {
        expect(endsWith('Straw Hat', 'Straw')).toBe(false)
    })

    it('returns true when suffix is empty', () => {
        expect(endsWith('Nami', '')).toBe(true)
    })

    it('returns true when string equals suffix', () => {
        expect(endsWith('Zoro', 'Zoro')).toBe(true)
    })

    it('returns false when suffix is longer than string', () => {
        expect(endsWith('Usopp', 'Usopppp')).toBe(false)
    })

    it('is case sensitive', () => {
        expect(endsWith('Sanji', 'sanji')).toBe(false)
    })

    it('returns false when string is empty and suffix is not', () => {
        expect(endsWith('', 'Luffy')).toBe(false)
    })

    it('returns true when both string and suffix are empty', () => {
        expect(endsWith('', '')).toBe(true)
    })
})

describe('removeNonAlpha', () => {
    it('removes all non-alphabetic characters', () => {
        expect(removeNonAlpha('Luffy123!@#')).toBe('Luffy')
    })

    it('keeps only letters from mixed case string', () => {
        expect(removeNonAlpha('Straw-Hat\_99')).toBe('StrawHat')
    })

    it('returns empty string if input has no letters', () => {
        expect(removeNonAlpha('1234567890!@#')).toBe('')
    })

    it('returns original string if only letters', () => {
        expect(removeNonAlpha('Zoro')).toBe('Zoro')
    })

    it('works with empty string', () => {
        expect(removeNonAlpha('')).toBe('')
    })

    it('removes spaces and punctuation', () => {
        expect(removeNonAlpha('Nami, the Navigator!')).toBe('NamitheNavigator')
    })

    it('handles Unicode letters outside a-z (removes them)', () => {
        expect(removeNonAlpha('Chopper😊é')).toBe('Chopper')
    })

    it('removes digits only', () => {
        expect(removeNonAlpha('Sanji7')).toBe('Sanji')
    })
})
describe('removeNonNumeric', () => {
    it('removes all non-numeric characters', () => {
        expect(removeNonNumeric('Luffy123!@#')).toBe('123')
    })

    it('returns only digits from mixed string', () => {
        expect(removeNonNumeric('Straw-Hat99')).toBe('99')
    })

    it('returns empty string if input has no digits', () => {
        expect(removeNonNumeric('NoDigitsHere!')).toBe('')
    })

    it('returns original digits-only string unchanged', () => {
        expect(removeNonNumeric('20230522')).toBe('20230522')
    })

    it('works with empty string', () => {
        expect(removeNonNumeric('')).toBe('')
    })

    it('removes spaces and punctuation', () => {
        expect(removeNonNumeric('Nami 123, 456!')).toBe('123456')
    })

    it('removes letters only', () => {
        expect(removeNonNumeric('Sanji7a8b')).toBe('78')
    })
})
describe('removeWhitespace', () => {
    it('removes all whitespace characters', () => {
        expect(removeWhitespace('Luffy Straw Hat')).toBe('LuffyStrawHat')
    })

    it('removes tabs and newlines', () => {
        expect(removeWhitespace('Zoro\tis\nstrong')).toBe('Zoroisstrong')
    })

    it('returns original string if no whitespace', () => {
        expect(removeWhitespace('Sanji')).toBe('Sanji')
    })

    it('works with empty string', () => {
        expect(removeWhitespace('')).toBe('')
    })

    it('removes multiple consecutive spaces', () => {
        expect(removeWhitespace('Nami   Navigator')).toBe('NamiNavigator')
    })

    it('removes all whitespace including non-breaking space', () => {
        expect(removeWhitespace('Brook\u00A0Pirate')).toBe('BrookPirate')
    })
})
describe('countOccurrences', () => {
    it('counts occurrences of a substring appearing multiple times', () => {
        expect(countOccurrences('Mugiwara Mugiwara', 'Mugiwara')).toBe(2)
    })

    it('returns 0 when substring does not appear', () => {
        expect(countOccurrences('Luffy', 'Zoro')).toBe(0)
    })

    it('counts overlapping substrings correctly (non-overlapping by default)', () => {
        expect(countOccurrences('aaaaa', 'aa')).toBe(2)
    })

    it('returns 0 if substring is longer than string', () => {
        expect(countOccurrences('Nami', 'Navigator')).toBe(0)
    })

    it('returns 0 if string is empty but substring is not', () => {
        expect(countOccurrences('', 'Luffy')).toBe(0)
    })

    it('returns length + 1 for empty substring', () => {
        expect(countOccurrences('Zoro', '')).toBe(5)
    })

    it('counts occurrences with special characters', () => {
        expect(countOccurrences('Hello, world! Hello!', 'Hello')).toBe(2)
    })

    it('is case sensitive', () => {
        expect(countOccurrences('Sanji sanji SANJI', 'Sanji')).toBe(1)
    })

    it('counts single character substring occurrences', () => {
        expect(countOccurrences('Chopper', 'p')).toBe(2)
    })
})

describe('slugify', () => {
    it('converts string to lowercase', () => {
        expect(slugify('One Piece')).toBe('one-piece')
    })

    it('trims leading and trailing whitespace', () => {
        expect(slugify('  Straw Hat  ')).toBe('straw-hat')
    })

    it('removes special characters', () => {
        expect(slugify('Luffy! @# \$%')).toBe('luffy')
    })

    it('replaces spaces, underscores, and multiple dashes with single dash', () => {
        expect(slugify('Sanji\_\_\_is  -  cool')).toBe('sanji-is-cool')
    })

    it('removes leading and trailing dashes', () => {
        expect(slugify('--Zoro--')).toBe('zoro')
    })

    it('returns empty string if input is only special chars or whitespace', () => {
        expect(slugify('  ---\_\_\_!!!  ')).toBe('')
    })

    it('handles empty string input', () => {
        expect(slugify('')).toBe('')
    })

    it('handles strings with numbers and letters', () => {
        expect(slugify('Chapter 1050: The Final War')).toBe('chapter-1050-the-final-war')
    })

    it('collapses multiple adjacent separators', () => {
        expect(slugify('Monkey  D   Luffy')).toBe('monkey-d-luffy')
    })
})
describe('getInitials', () => {
    it('returns uppercase initials of each word', () => {
        expect(getInitials('Monkey D Luffy')).toBe('MDL')
    })

    it('handles single word', () => {
        expect(getInitials('Zoro')).toBe('Z')
    })

    it('handles empty string', () => {
        expect(getInitials('')).toBe('')
    })

    it('handles multiple spaces between words', () => {
        expect(getInitials('Roronoa   Zoro')).toBe('RZ')
    })

    it('handles lowercase input', () => {
        expect(getInitials('nami sanji')).toBe('NS')
    })

    it('handles trailing and leading spaces', () => {
        expect(getInitials('  Brook  ')).toBe('B')
    })

    it('handles words with punctuation', () => {
        expect(getInitials('Franky-San')).toBe('F')
    })

    it('does not fail on empty words from multiple spaces', () => {
        expect(getInitials('Usopp  the Sniper')).toBe('UTS')
    })
})
describe('isStrictPalindrome', () => {
    it('returns true for a strict palindrome', () => {
        expect(isStrictPalindrome('madam')).toBe(true)
    })

    it('returns false for a non-palindrome', () => {
        expect(isStrictPalindrome('luffy')).toBe(false)
    })

    it('is case sensitive and returns false if cases differ', () => {
        expect(isStrictPalindrome('Madam')).toBe(false)
    })

    it('returns true for an empty string', () => {
        expect(isStrictPalindrome('')).toBe(true)
    })

    it('returns true for a single character string', () => {
        expect(isStrictPalindrome('z')).toBe(true)
    })

    it('returns false for strings with spaces that break palindrome', () => {
        expect(isStrictPalindrome('a man a plan')).toBe(false)
    })

    it('returns true for numeric palindrome strings', () => {
        expect(isStrictPalindrome('12321')).toBe(true)
    })
})
describe('isLoosePalindrome', () => {
    it('returns true for palindrome ignoring case and non-alphanumeric chars', () => {
        expect(isLoosePalindrome('A man, a plan, a canal: Panama')).toBe(true)
    })

    it('returns false for non-palindrome strings', () => {
        expect(isLoosePalindrome('Luffy Strawhat')).toBe(false)
    })

    it('returns true for palindrome with mixed case and punctuation', () => {
        expect(isLoosePalindrome('No lemon, no melon')).toBe(true)
    })

    it('returns true for empty string', () => {
        expect(isLoosePalindrome('')).toBe(true)
    })

    it('returns true for single character strings', () => {
        expect(isLoosePalindrome('Z')).toBe(true)
    })

    it('returns true for numeric palindrome strings', () => {
        expect(isLoosePalindrome('12321')).toBe(true)
    })

    it('returns false for strings that differ when cleaned', () => {
        expect(isLoosePalindrome('Straw Hat')).toBe(false)
    })
})
describe('extractNumbers', () => {
    it('extracts all number sequences as strings', () => {
        expect(extractNumbers('Luffy123 and Zoro456')).toEqual([123, 456])
    })

    it('returns empty array when no numbers present', () => {
        expect(extractNumbers('Straw Hat')).toEqual([])
    })

    it('handles string with only numbers', () => {
        expect(extractNumbers('20230522')).toEqual([20230522])
    })

    it('extracts multiple separate numbers', () => {
        expect(extractNumbers('Nami 77, Sanji 99, Usopp 100')).toEqual([77, 99, 100])
    })

    it('returns empty array for empty string', () => {
        expect(extractNumbers('')).toEqual([])
    })

    it('extracts numbers separated by non-digit characters', () => {
        expect(extractNumbers('Chopper1-2-3')).toEqual([1, 2, 3])
    })

    it('extracts large numbers', () => {
        expect(extractNumbers('Big number 1234567890')).toEqual([1234567890])
    })
})

describe('extractWords', () => {
    it('extracts all words from a sentence', () => {
        expect(extractWords('Monkey D. Luffy is the captain')).toEqual([
            'Monkey', 'D', 'Luffy', 'is', 'the', 'captain'
        ])
    })

    it('returns empty array when string has no words', () => {
        expect(extractWords('!!! ???')).toEqual([])
    })

    it('handles empty string', () => {
        expect(extractWords('')).toEqual([])
    })

    it('extracts words with underscores and digits', () => {
        expect(extractWords('Sanji\_123 and Nami456')).toEqual(['Sanji\_123', 'and', 'Nami456'])
    })

    it('handles strings with punctuation', () => {
        expect(extractWords('Zoro, the swordsman!')).toEqual(['Zoro', 'the', 'swordsman'])
    })

    it('handles multiple spaces and newlines', () => {
        expect(extractWords('Brook   is\nfunny')).toEqual(['Brook', 'is', 'funny'])
    })

    it('extracts single word', () => {
        expect(extractWords('Chopper')).toEqual(['Chopper'])
    })
})
describe('maskString', () => {
    it('masks characters from start to end indices with default maskChar', () => {
        expect(maskString('MonkeyDLuffy', 1, 6)).toBe('M\*\*\*\*\*DLuffy')
    })

    it('masks characters using custom maskChar', () => {
        expect(maskString('StrawHat', 2, 5, '#')).toBe('St###Hat')
    })

    it('returns original string if start >= end', () => {
        expect(maskString('Zoro', 3, 2)).toBe('Zoro')
    })

    it('handles masking entire string', () => {
        expect(maskString('Nami', 0, 4)).toBe('\*\*\*\*')
    })

    it('handles out-of-bounds end index gracefully', () => {
        expect(maskString('Sanji', 2, 10, '❤')).toBe('Sa❤❤❤')
    })

    it('does not mask if start and end are outside string length', () => {
        expect(maskString('Usopp', 10, 15)).toBe('Usopp')
    })

    it('handles empty string input', () => {
        expect(maskString('', 0, 3)).toBe('')
    })

    it('masks single character', () => {
        expect(maskString('Chopper', 3, 4)).toBe('Cho\*per')
    })
})

describe('randomString', () => {
    it('generates a string of the correct length', () => {
        const len = 10
        const result = randomString(len)
        expect(result).toHaveLength(len)
    })

    it('generates strings with only allowed characters', () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const result = randomString(50)
        for (const char of result) {
            expect(chars).toContain(char)
        }
    })

    it('returns empty string when length is 0', () => {
        expect(randomString(0)).toBe('')
    })

    it('generates different strings on subsequent calls', () => {
        const a = randomString(20)
        const b = randomString(20)
        expect(a).not.toBe(b)
    })

    it('handles large length', () => {
        const largeLen = 1000
        const result = randomString(largeLen)
        expect(result).toHaveLength(largeLen)
    })
})
describe('isAlpha', () => {
    it('returns true for string with only alphabetic characters', () => {
        expect(isAlpha('StrawHat')).toBe(true)
    })

    it('returns false for string with numbers', () => {
        expect(isAlpha('Luffy123')).toBe(false)
    })

    it('returns false for string with spaces', () => {
        expect(isAlpha('Sanji Vinsmoke')).toBe(false)
    })

    it('returns false for empty string', () => {
        expect(isAlpha('')).toBe(false)
    })

    it('returns false for string with special characters', () => {
        expect(isAlpha('Zoro!')).toBe(false)
    })

    it('returns true for lowercase alphabetic string', () => {
        expect(isAlpha('nami')).toBe(true)
    })

    it('returns true for uppercase alphabetic string', () => {
        expect(isAlpha('USOPP')).toBe(true)
    })
})
describe('isAlphanumeric', () => {
    it('returns true for string with only letters and numbers', () => {
        expect(isAlphanumeric('StrawHat123')).toBe(true)
    })

    it('returns false for string with spaces', () => {
        expect(isAlphanumeric('Sanji Vinsmoke')).toBe(false)
    })

    it('returns false for string with special characters', () => {
        expect(isAlphanumeric('Zoro!')).toBe(false)
    })

    it('returns false for empty string', () => {
        expect(isAlphanumeric('')).toBe(false)
    })

    it('returns true for lowercase alphanumeric string', () => {
        expect(isAlphanumeric('nami99')).toBe(true)
    })

    it('returns true for uppercase alphanumeric string', () => {
        expect(isAlphanumeric('USOPP007')).toBe(true)
    })
})

describe('isEmail', () => {
    it('returns true for valid email', () => {
        expect(isEmail('luffy@strawhat.com')).toBe(true)
    })

    it('returns false for missing @ symbol', () => {
        expect(isEmail('zoro.strawhat.com')).toBe(false)
    })

    it('returns false for missing domain', () => {
        expect(isEmail('nami@')).toBe(false)
    })

    it('returns false for spaces in email', () => {
        expect(isEmail('sanji @strawhat.com')).toBe(false)
    })

    it('returns false for multiple @ symbols', () => {
        expect(isEmail('brook@@strawhat.com')).toBe(false)
    })

    it('returns true for email with subdomain', () => {
        expect(isEmail('chopper@mail.strawhat.com')).toBe(true)
    })

    it('returns false for empty string', () => {
        expect(isEmail('')).toBe(false)
    })
})

describe('isUrlWithFtp', () => {
    it('valid http URL', () => {
        expect(isUrlWithFtp('http://example.com')).toBe(true)
    })

    it('valid https URL', () => {
        expect(isUrlWithFtp('https://example.com')).toBe(true)
    })

    it('valid ftp URL', () => {
        expect(isUrlWithFtp('ftp://example.com')).toBe(true)
    })

    it('valid ftp URL with path and query', () => {
        expect(isUrlWithFtp('ftp://example.com/path/to/file?query=123')).toBe(true)
    })

    it('invalid protocol (ftps)', () => {
        expect(isUrlWithFtp('ftps://example.com')).toBe(false)
    })

    it('missing protocol', () => {
        expect(isUrlWithFtp('example.com')).toBe(false)
    })

    it('empty string', () => {
        expect(isUrlWithFtp('')).toBe(false)
    })

    it('URL with spaces', () => {
        expect(isUrlWithFtp('http://example .com')).toBe(false)
    })

    it('invalid URL with spaces in protocol', () => {
        expect(isUrlWithFtp('http ://example.com')).toBe(false)
    })

    it('protocol only', () => {
        expect(isUrlWithFtp('http://')).toBe(false)
    })

    it('ftp with port number', () => {
        expect(isUrlWithFtp('ftp://example.com:21')).toBe(true)
    })

    it('http with subdomain', () => {
        expect(isUrlWithFtp('http://sub.domain.example.com')).toBe(true)
    })
})


describe('extractEmails', () => {
    it('extracts a single email', () => {
        expect(extractEmails('Contact me at luffy@strawhatpirates.com')).toEqual(['luffy@strawhatpirates.com'])
    })

    it('extracts multiple emails', () => {
        const input = 'Zoro: zoro@wano.jp, Sanji: sanji@baratie.fr'
        expect(extractEmails(input)).toEqual(['zoro@wano.jp', 'sanji@baratie.fr'])
    })

    it('returns empty array when no emails', () => {
        expect(extractEmails('No emails here, just sea breeze')).toEqual([])
    })

    it('handles emails with subdomains', () => {
        expect(extractEmails('Nami: nami@weather.earth.ocean')).toEqual(['nami@weather.earth.ocean'])
    })

    it('ignores invalid emails', () => {
        expect(extractEmails('Buggy@pirates, wrong@com, right@onepiece.com')).toEqual(['right@onepiece.com'])
    })

    it('extracts emails from mixed content', () => {
        const input = 'Send to franky@shipbuilders.org and robin@archaeologist.net asap!'
        expect(extractEmails(input)).toEqual(['franky@shipbuilders.org', 'robin@archaeologist.net'])
    })

    it('handles emails with plus signs and dots', () => {
        expect(extractEmails('Usopp: usopp+sniper@gears.marine')).toEqual(['usopp+sniper@gears.marine'])
    })

    it('handles empty string', () => {
        expect(extractEmails('')).toEqual([])
    })
})
describe('extractUrls', () => {
    it('extracts a single http URL', () => {
        expect(extractUrls('Check out http://onepiece.com')).toEqual(['http://onepiece.com'])
    })

    it('extracts a single https URL', () => {
        expect(extractUrls('Secure site: https://marineford.marine')).toEqual(['https://marineford.marine'])
    })

    it('extracts multiple URLs', () => {
        const input = 'Visit http://dressrosa.jp and https://wano.kuni.jp now!'
        expect(extractUrls(input)).toEqual(['http://dressrosa.jp', 'https://wano.kuni.jp'])
    })

    it('returns empty array if no URLs', () => {
        expect(extractUrls('No URLs in this text')).toEqual([])
    })

    it('extracts URLs with paths and queries', () => {
        const input = 'Go to https://grandline.onepiece/path?chapter=1000'
        expect(extractUrls(input)).toEqual(['https://grandline.onepiece/path?chapter=1000'])
    })

    it('does not extract ftp URLs', () => {
        expect(extractUrls('ftp://secretbase.onepiece')).toEqual([])
    })

    it('handles URLs followed by punctuation', () => {
        expect(extractUrls('Read more at http://onepiece.com, then report back. http://onepiece1.com')).toEqual(['http://onepiece.com', "http://onepiece1.com"])
    })

    it('extracts URLs with ports', () => {
        expect(extractUrls('Server running at http://localhost:3000')).toEqual(['http://localhost:3000'])
    })

    it('handles empty string', () => {
        expect(extractUrls('')).toEqual([])
    })
})

describe('titleCase', () => {
    it('converts a single lowercase word to title case', () => {
        expect(titleCase('luffy')).toBe('Luffy')
    })

    it('converts multiple lowercase words to title case', () => {
        expect(titleCase('the straw hat pirates')).toBe('The Straw Hat Pirates')
    })

    it('handles already title-cased words', () => {
        expect(titleCase('Going Merry')).toBe('Going Merry')
    })

    it('handles mixed case words', () => {
        expect(titleCase('Grand LINE adventure')).toBe('Grand Line Adventure')
    })

    it('handles empty string', () => {
        expect(titleCase('')).toBe('')
    })

    it('handles multiple spaces between words', () => {
        expect(titleCase('Monkey   D    Luffy')).toBe('Monkey D Luffy')
    })

    it('handles string with leading and trailing spaces', () => {
        expect(titleCase('  pirate king  ')).toBe('  Pirate King  ')
    })

    it('handles single character words', () => {
        expect(titleCase('a b c')).toBe('A B C')
    })
})
describe('swapCase', () => {
    it('swaps lowercase to uppercase and vice versa', () => {
        expect(swapCase('One Piece')).toBe('oNE pIECE')
    })

    it('swaps all lowercase letters', () => {
        expect(swapCase('strawhat')).toBe('STRAWHAT')
    })

    it('swaps all uppercase letters', () => {
        expect(swapCase('MARINE')).toBe('marine')
    })

    it('handles mixed case with numbers and symbols', () => {
        expect(swapCase('Luffy123!')).toBe('lUFFY123!')
    })

    it('handles empty string', () => {
        expect(swapCase(' ')).toBe(' ')
    })

    it('does not change non-alphabetic characters', () => {
        expect(swapCase('!@# $%^')).toBe('!@# $%^')
    })

    it('swaps single characters', () => {
        expect(swapCase('a')).toBe('A')
        expect(swapCase('Z')).toBe('z')
    })
})
describe('removeDuplicateWords', () => {
    it('removes duplicate words from a simple sentence', () => {
        expect(removeDuplicateWords('Luffy Luffy is the captain')).toBe('Luffy is the captain')
    })

    it('removes all duplicates', () => {
        expect(removeDuplicateWords('pirate pirate pirate')).toBe('pirate')
    })

    it('returns original string if no duplicates', () => {
        expect(removeDuplicateWords('Nami Robin Franky')).toBe('Nami Robin Franky')
    })

    it('handles empty string', () => {
        expect(removeDuplicateWords('')).toBe('')
    })

    it('removes duplicates preserving first occurrences', () => {
        expect(removeDuplicateWords('One Piece One Piece')).toBe('One Piece')
    })

    it('handles multiple spaces between words', () => {
        expect(removeDuplicateWords('Zoro   Sanji Zoro')).toBe('Zoro Sanji')
    })

    it('is case-sensitive when removing duplicates', () => {
        expect(removeDuplicateWords('Luffy luffy LUFFY')).toBe('Luffy luffy LUFFY')
    })
})
describe('safeString', () => {
    it('removes punctuation from the string', () => {
        expect(safeString('Luffy! is# the@ king.')).toBe('Luffy is the king')
    })

    it('retains letters, numbers, and spaces', () => {
        expect(safeString('Zoro123 goes to Wano')).toBe('Zoro123 goes to Wano')
    })

    it('removes special characters', () => {
        expect(safeString('Sanji$%^&*() cooks!')).toBe('Sanji cooks')
    })

    it('handles empty string', () => {
        expect(safeString('')).toBe('')
    })

    it('retains underscores and alphanumeric characters', () => {
        expect(safeString('Usopp_sniperKing')).toBe('Usopp_sniperKing')
    })

    it('removes mixed special characters and preserves spacing', () => {
        expect(safeString('Franky - SUPER!! @ shipwright')).toBe('Franky  SUPER  shipwright')
    })

    it('removes emojis and symbols', () => {
        expect(safeString('Brook 🎸 sings ☠️')).toBe('Brook  sings ')
    })
})
describe('compressWhitespace', () => {
    it('compresses multiple spaces to single space', () => {
        expect(compressWhitespace('Luffy     is    the   captain')).toBe('Luffy is the captain')
    })

    it('trims leading and trailing whitespace', () => {
        expect(compressWhitespace('   Zoro is here   ')).toBe('Zoro is here')
    })

    it('handles tabs and newlines as whitespace', () => {
        expect(compressWhitespace('Sanji\tis\ncooking')).toBe('Sanji is cooking')
    })

    it('handles string with no extra whitespace', () => {
        expect(compressWhitespace('Nami navigates the ship')).toBe('Nami navigates the ship')
    })

    it('returns empty string if input is only whitespace', () => {
        expect(compressWhitespace('     ')).toBe('')
    })

    it('handles single-word string', () => {
        expect(compressWhitespace('Chopper')).toBe('Chopper')
    })

    it('compresses complex mixed whitespace', () => {
        expect(compressWhitespace('  Franky \n builds \t the \n\n ship  ')).toBe('Franky builds the ship')
    })
})

describe('charFrequency', () => {
    it('counts frequency of characters in a simple string', () => {
        expect(charFrequency('luffy')).toEqual({ l: 1, u: 1, f: 2, y: 1 })
    })

    it('handles repeated characters', () => {
        expect(charFrequency('aaaa')).toEqual({ a: 4 })
    })

    it('handles mixed characters', () => {
        expect(charFrequency('zoro123')).toEqual({ z: 1, o: 2, r: 1, '1': 1, '2': 1, '3': 1 })
    })

    it('counts spaces as characters', () => {
        expect(charFrequency('sanji cook')).toEqual({ s: 1, a: 1, n: 1, j: 1, i: 1, ' ': 1, c: 1, o: 2, k: 1 })
    })

    it('handles special characters', () => {
        expect(charFrequency('!@!')).toEqual({ '!': 2, '@': 1 })
    })

    it('returns empty object for empty string', () => {
        expect(charFrequency('')).toEqual({})
    })

    it('differentiates between upper and lowercase letters', () => {
        expect(charFrequency('Usopp')).toEqual({ U: 1, s: 1, o: 1, p: 2 })
    })

    it('handles unicode characters', () => {
        expect(charFrequency('Brook🎸🎸')).toEqual({ B: 1, r: 1, o: 2, k: 1, '🎸': 2 })
    })
})

describe('levenshteinDistance', () => {
    it('returns 0 for identical strings', () => {
        expect(levenshteinDistance('luffy', 'luffy')).toBe(0)
    })

    it('returns correct distance for one insertion', () => {
        expect(levenshteinDistance('zoro', 'zoron')).toBe(1)
    })

    it('returns correct distance for one deletion', () => {
        expect(levenshteinDistance('nami', 'nam')).toBe(1)
    })

    it('returns correct distance for one substitution', () => {
        expect(levenshteinDistance('sanji', 'sanja')).toBe(1)
    })

    it('handles completely different strings', () => {
        expect(levenshteinDistance('ace', 'sabo')).toBe(3)
    })

    it('handles empty string vs non-empty string', () => {
        expect(levenshteinDistance('', 'brook')).toBe(5)
        expect(levenshteinDistance('franky', '')).toBe(6)
    })

    it('handles both strings empty', () => {
        expect(levenshteinDistance('', '')).toBe(0)
    })

    it('returns correct distance for real-world example', () => {
        expect(levenshteinDistance('onepiece', 'one place')).toBe(3)
    })
})
describe('toPascalCase', () => {
    it('converts single word to PascalCase', () => {
        expect(toPascalCase('luffy')).toBe('Luffy')
    })

    it('converts multiple words to PascalCase', () => {
        expect(toPascalCase('straw hat pirates')).toBe('StrawHatPirates')
    })

    it('handles mixed casing in input', () => {
        expect(toPascalCase('gEar foUR SnAke MaN')).toBe('GearFourSnakeMan')
    })

    it('removes extra spaces and converts correctly', () => {
        expect(toPascalCase('  going    merry ship  ')).toBe('GoingMerryShip')
    })

    it('handles empty string', () => {
        expect(toPascalCase('')).toBe('')
    })

    it('handles string with only spaces', () => {
        expect(toPascalCase('     ')).toBe('')
    })

    it('preserves numbers in words', () => {
        expect(toPascalCase('gear 5 nika')).toBe('Gear5Nika')
    })

    it('handles underscores and dashes as word separators (does not transform them)', () => {
        expect(toPascalCase('wano-kuni arc')).toBe('WanoKuniArc')
        expect(toPascalCase('thriller_bark saga')).toBe('ThrillerBarkSaga')
    })
})
describe('toDotCase', () => {
    it('converts spaces to dots and lowercases string', () => {
        expect(toDotCase('Straw Hat Pirates')).toBe('straw.hat.pirates')
    })

    it('handles multiple consecutive spaces', () => {
        expect(toDotCase('Going    Merry Ship')).toBe('going.merry.ship')
    })

    it('trims and replaces leading/trailing spaces', () => {
        expect(toDotCase('  Thousand Sunny  ')).toBe('thousand.sunny')
    })

    it('returns empty string if input is empty', () => {
        expect(toDotCase('')).toBe('')
    })

    it('handles single word without spaces', () => {
        expect(toDotCase('Luffy')).toBe('luffy')
    })

    it('does not remove special characters or underscores', () => {
        expect(toDotCase('Wano_kuni Arc')).toBe('wano_kuni.arc')
    })
})
describe('toSpaceCase', () => {
    it('replaces underscores with spaces', () => {
        expect(toSpaceCase('wano_kuni')).toBe('wano kuni')
    })

    it('replaces dashes with spaces', () => {
        expect(toSpaceCase('straw-hat-pirates')).toBe('straw hat pirates')
    })

    it('inserts spaces between camelCase words', () => {
        expect(toSpaceCase('goingMerryShip')).toBe('going Merry Ship')
    })

    it('handles combined cases', () => {
        expect(toSpaceCase('thousandSunny_go')).toBe('thousand Sunny go')
    })

    it('handles strings without underscores, dashes or camelCase', () => {
        expect(toSpaceCase('redHairedShanks')).toBe('red Haired Shanks')
    })

    it('handles empty string', () => {
        expect(toSpaceCase('')).toBe('')
    })

    it('handles string with consecutive underscores and dashes', () => {
        expect(toSpaceCase('one__piece--arc')).toBe('one piece arc')
    })
})
describe('endsWithAny', () => {
    it('returns true if string ends with one of the suffixes', () => {
        expect(endsWithAny('onepiece', ['ce', 'pie'])).toBe(true)
    })

    it('returns false if string does not end with any of the suffixes', () => {
        expect(endsWithAny('strawhat', ['pirate', 'king'])).toBe(false)
    })

    it('returns false for empty suffix array', () => {
        expect(endsWithAny('zoro', [])).toBe(false)
    })

    it('returns true if string ends with suffix equal to whole string', () => {
        expect(endsWithAny('luffy', ['luffy', 'd'])).toBe(true)
    })

    it('returns false if suffix is longer than string', () => {
        expect(endsWithAny('nami', ['namis'])).toBe(false)
    })

    it('handles empty string with non-empty suffixes', () => {
        expect(endsWithAny('', [''])).toBe(true)
        expect(endsWithAny('', ['a'])).toBe(false)
    })

    it('handles suffixes with empty string in array', () => {
        expect(endsWithAny('brook', [''])).toBe(true)
    })
})
describe('startsWithAny', () => {
    it('returns true if string starts with one of the prefixes', () => {
        expect(startsWithAny('onepiece', ['one', 'two'])).toBe(true)
    })

    it('returns false if string does not start with any of the prefixes', () => {
        expect(startsWithAny('strawhat', ['pirate', 'king'])).toBe(false)
    })

    it('returns false for empty prefix array', () => {
        expect(startsWithAny('zoro', [])).toBe(false)
    })

    it('returns true if string starts with prefix equal to whole string', () => {
        expect(startsWithAny('luffy', ['luffy', 'd'])).toBe(true)
    })

    it('returns false if prefix is longer than string', () => {
        expect(startsWithAny('nami', ['namis'])).toBe(false)
    })

    it('handles empty string with non-empty prefixes', () => {
        expect(startsWithAny('', [''])).toBe(true)
        expect(startsWithAny('', ['a'])).toBe(false)
    })

    it('handles prefixes with empty string in array', () => {
        expect(startsWithAny('brook', [''])).toBe(true)
    })
})

describe('trimChar', () => {
    it('removes specified char from start and end', () => {
        expect(trimChar('...onepiece...', '.')).toBe('onepiece')
    })

    it('removes multiple leading and trailing chars', () => {
        expect(trimChar('---strawhat---', '-')).toBe('strawhat')
    })

    it('removes char only from ends, not inside', () => {
        expect(trimChar('...luffy.mugiwara...', '.')).toBe('luffy.mugiwara')
    })

    it('returns original string if char not found at ends', () => {
        expect(trimChar('zoro', '.')).toBe('zoro')
    })

    it('removes char even if string is all that char', () => {
        expect(trimChar('aaaaa', 'a')).toBe('')
    })

    it('handles empty string input', () => {
        expect(trimChar('', '.')).toBe('')
    })

    it('handles trimming whitespace characters', () => {
        expect(trimChar('  nami  ', ' ')).toBe('nami')
    })

    it('removes special regex chars correctly', () => {
        expect(trimChar('***brook***', '*')).toBe('brook')
    })
})

describe('removeDiacritics', () => {
    it('removes common accented characters', () => {
        expect(removeDiacritics('café')).toBe('cafe')
        expect(removeDiacritics('résumé')).toBe('resume')
        expect(removeDiacritics('naïve')).toBe('naive')
    })

    it('removes uppercase accents', () => {
        expect(removeDiacritics('ÀÉÎÕÜ')).toBe('AEIOU')
    })

    it('does not change strings without accents', () => {
        expect(removeDiacritics('onepiece')).toBe('onepiece')
    })

    it('handles empty strings', () => {
        expect(removeDiacritics('')).toBe('')
    })

    it('removes multiple accents in complex words', () => {
        expect(removeDiacritics('Ångström')).toBe('Angstrom')
        expect(removeDiacritics('Jalapeño and crème brûlée')).toBe('Jalapeno and creme brulee')
    })

    it('leaves emojis and symbols intact', () => {
        expect(removeDiacritics('niño 😊 café')).toBe('nino 😊 cafe')
    })
})
describe('getUniqueCharacters', () => {
    it('returns unique characters from string', () => {
        expect(getUniqueCharacters('onepiece')).toEqual(['o', 'n', 'e', 'p', 'i', 'c'])
    })

    it('returns unique characters preserving order', () => {
        expect(getUniqueCharacters('strawhat')).toEqual(['s', 't', 'r', 'a', 'w', 'h'])
    })

    it('handles empty string', () => {
        expect(getUniqueCharacters('')).toEqual([])
    })

    it('returns unique characters with repeated characters', () => {
        expect(getUniqueCharacters('zoro')).toEqual(['z', 'o', 'r'])
    })

    it('works with special characters and spaces', () => {
        expect(getUniqueCharacters('go! go!')).toEqual(['g', 'o', '!', ' '])
    })

    it('handles unicode characters', () => {
        expect(getUniqueCharacters('さようなら')).toEqual(['さ', 'よ', 'う', 'な', 'ら'])
    })
})


describe('stringToCharCodeArray', () => {
    it('converts simple ASCII string to char codes', () => {
        expect(stringToCharCodeArray('one')).toEqual([111, 110, 101])
    })

    it('handles empty string', () => {
        expect(stringToCharCodeArray('')).toEqual([])
    })

    it('handles spaces and punctuation', () => {
        expect(stringToCharCodeArray('go!')).toEqual([103, 111, 33])
    })

    it('handles uppercase and lowercase', () => {
        expect(stringToCharCodeArray('Luffy')).toEqual([76, 117, 102, 102, 121])
    })

    it('handles unicode characters', () => {
        expect(stringToCharCodeArray('さよ')).toEqual([12373, 12424])
    })

    it('handles emojis', () => {
        expect(stringToCharCodeArray('😊')).toEqual([128522])
    })
})

describe('charCodeArrayToString', () => {
    it('converts array of ASCII codes to string', () => {
        expect(charCodeArrayToString([111, 110, 101])).toBe('one')
    })

    it('handles empty array', () => {
        expect(charCodeArrayToString([])).toBe('')
    })

    it('converts array with spaces and punctuation codes', () => {
        expect(charCodeArrayToString([103, 111, 33])).toBe('go!')
    })

    it('handles uppercase and lowercase codes', () => {
        expect(charCodeArrayToString([76, 117, 102, 102, 121])).toBe('Luffy')
    })

    it('converts unicode character codes', () => {
        expect(charCodeArrayToString([12373, 12424])).toBe('さよ')
    })

    it('converts emoji code points', () => {
        expect(charCodeArrayToString([128522])).toBe('😊')
    })
})
describe('wrap', () => {
    it('wraps string with given wrapper', () => {
        expect(wrap('onepiece', '*')).toBe('*onepiece*')
    })

    it('works with empty string', () => {
        expect(wrap('', '#')).toBe('##')
    })

    it('works with empty wrapper', () => {
        expect(wrap('luffy', '')).toBe('luffy')
    })

    it('wraps string with multi-character wrapper', () => {
        expect(wrap('zoro', '!!')).toBe('!!zoro!!')
    })

    it('handles whitespace wrapper', () => {
        expect(wrap('nami', ' ')).toBe(' nami ')
    })
})
describe('ensureStartsWith', () => {
    it('returns original string if it already starts with prefix', () => {
        expect(ensureStartsWith('onepiece', 'one')).toBe('onepiece')
    })

    it('adds prefix if missing', () => {
        expect(ensureStartsWith('piece', 'one')).toBe('onepiece')
    })

    it('handles empty string with prefix', () => {
        expect(ensureStartsWith('', 'one')).toBe('one')
    })

    it('returns empty string if both string and prefix are empty', () => {
        expect(ensureStartsWith('', '')).toBe('')
    })

    it('handles empty prefix', () => {
        expect(ensureStartsWith('luffy', '')).toBe('luffy')
    })

    it('works with multi-character prefix', () => {
        expect(ensureStartsWith('zoro', 'mr-')).toBe('mr-zoro')
    })
})
describe('ensureEndsWith', () => {
    it('returns original string if it already ends with suffix', () => {
        expect(ensureEndsWith('onepiece', 'piece')).toBe('onepiece')
    })

    it('adds suffix if missing', () => {
        expect(ensureEndsWith('one', 'piece')).toBe('onepiece')
    })

    it('handles empty string with suffix', () => {
        expect(ensureEndsWith('', 'piece')).toBe('piece')
    })

    it('returns empty string if both string and suffix are empty', () => {
        expect(ensureEndsWith('', '')).toBe('')
    })

    it('handles empty suffix', () => {
        expect(ensureEndsWith('luffy', '')).toBe('luffy')
    })

    it('works with multi-character suffix', () => {
        expect(ensureEndsWith('zoro', '-san')).toBe('zoro-san')
    })
})
describe('repeatStringUntilLength', () => {
    it('repeats string to reach exact target length', () => {
        expect(repeatStringUntilLength('go', 5)).toBe('gogog')
    })

    it('returns original string if target length equals string length', () => {
        expect(repeatStringUntilLength('luffy', 5)).toBe('luffy')
    })

    it('returns truncated repeated string if target length less than multiple repeats', () => {
        expect(repeatStringUntilLength('za', 3)).toBe('zaz')
    })

    it('handles empty string by returning empty string', () => {
        expect(repeatStringUntilLength('', 5)).toBe('')
    })

    it('returns empty string if target length is zero', () => {
        expect(repeatStringUntilLength('one', 0)).toBe('')
    })

    it('works with single character string', () => {
        expect(repeatStringUntilLength('a', 4)).toBe('aaaa')
    })
})
describe('collapseNewlines', () => {
    it('replaces multiple newlines with a single newline', () => {
        expect(collapseNewlines('line1\n\n\nline2')).toBe('line1\nline2')
    })

    it('replaces multiple carriage returns with a single newline', () => {
        expect(collapseNewlines('line1\r\r\rline2')).toBe('line1\nline2')
    })

    it('replaces mixed carriage returns and newlines with a single newline', () => {
        expect(collapseNewlines('line1\r\n\r\nline2')).toBe('line1\nline2')
    })

    it('does nothing if there is only one newline', () => {
        expect(collapseNewlines('line1\nline2')).toBe('line1\nline2')
    })

    it('handles empty string', () => {
        expect(collapseNewlines('')).toBe('')
    })

    it('works with string without newlines', () => {
        expect(collapseNewlines('luffy')).toBe('luffy')
    })
})
describe('stringToAsciiSum', () => {
    it('sums ASCII codes of characters in a simple string', () => {
        expect(stringToAsciiSum('one')).toBe(111 + 110 + 101)
    })

    it('returns 0 for empty string', () => {
        expect(stringToAsciiSum('')).toBe(0)
    })

    it('sums ASCII codes including spaces and punctuation', () => {
        expect(stringToAsciiSum('go!')).toBe(103 + 111 + 33)
    })

    it('sums ASCII codes of mixed case string', () => {
        expect(stringToAsciiSum('Luffy')).toBe(76 + 117 + 102 + 102 + 121)
    })

    it('sums codes for unicode characters', () => {
        expect(stringToAsciiSum('さよ')).toBe(12373 + 12424)
    })

    it('works with emojis', () => {
        expect(stringToAsciiSum('😊')).toBe(128522)
    })
})

describe('getCharAtSafe', () => {
    it('returns character at valid index', () => {
        expect(getCharAtSafe('onepiece', 0)).toBe('o')
        expect(getCharAtSafe('onepiece', 3)).toBe('p')
    })

    it('returns empty string for negative index', () => {
        expect(getCharAtSafe('luffy', -1)).toBe('')
    })

    it('returns empty string for out-of-bounds index', () => {
        expect(getCharAtSafe('zoro', 10)).toBe('')
    })

    it('returns empty string for empty string input', () => {
        expect(getCharAtSafe('', 0)).toBe('')
    })

    it('returns character at last index', () => {
        expect(getCharAtSafe('nami', 3)).toBe('i')
    })
})
describe('isWhitespace', () => {
    it('returns true for empty string', () => {
        expect(isWhitespace('')).toBe(true)
    })

    it('returns true for spaces only', () => {
        expect(isWhitespace('   ')).toBe(true)
    })

    it('returns true for tabs only', () => {
        expect(isWhitespace('\t\t')).toBe(true)
    })

    it('returns true for newlines only', () => {
        expect(isWhitespace('\n\n')).toBe(true)
    })

    it('returns true for mixed whitespace characters', () => {
        expect(isWhitespace(' \n\t ')).toBe(true)
    })

    it('returns false for non-whitespace characters', () => {
        expect(isWhitespace('luffy')).toBe(false)
    })

    it('returns false for whitespace with characters', () => {
        expect(isWhitespace(' luffy ')).toBe(false)
    })
})
describe('isEmpty', () => {
    it('returns true for empty string', () => {
        expect(isEmpty('')).toBe(true)
    })

    it('returns false for non-empty string', () => {
        expect(isEmpty('luffy')).toBe(false)
    })

    it('returns false for whitespace string', () => {
        expect(isEmpty(' ')).toBe(false)
    })

    it('returns false for strings with only newlines', () => {
        expect(isEmpty('\n')).toBe(false)
    })

    it('returns false for null or undefined (if passed)', () => {
        // @ts-expect-error testing null input
        expect(isEmpty(null)).toBe(false)
        // @ts-expect-error testing undefined input
        expect(isEmpty(undefined)).toBe(false)
    })
})
describe('isBlank', () => {
    it('returns true for empty string', () => {
        expect(isBlank('')).toBe(true)
    })

    it('returns true for spaces only', () => {
        expect(isBlank('   ')).toBe(true)
    })

    it('returns true for tabs and newlines only', () => {
        expect(isBlank('\t\n')).toBe(true)
    })

    it('returns false for string with visible characters', () => {
        expect(isBlank('luffy')).toBe(false)
    })

    it('returns false for string with visible characters and spaces', () => {
        expect(isBlank('  luffy  ')).toBe(false)
    })
})
describe('getNthWord', () => {
    it('returns the nth word (0-based)', () => {
        expect(getNthWord('I am Luffy', 0)).toBe('I')
        expect(getNthWord('I am Luffy', 1)).toBe('am')
        expect(getNthWord('I am Luffy', 2)).toBe('Luffy')
    })

    it('returns empty string if n is out of range', () => {
        expect(getNthWord('One Piece', 5)).toBe('')
    })

    it('handles multiple spaces between words', () => {
        expect(getNthWord('Straw   Hat   Pirates', 2)).toBe('Pirates')
    })

    it('returns empty string for negative index', () => {
        expect(getNthWord('Zoro Sanji', -1)).toBe('')
    })

    it('returns empty string for empty string input', () => {
        expect(getNthWord('', 0)).toBe('')
    })
})
describe('countVowels', () => {
    it('counts vowels in a simple lowercase string', () => {
        expect(countVowels('one piece')).toBe(5)
    })

    it('counts vowels in a mixed case string', () => {
        expect(countVowels('Luffy and Zoro')).toBe(4)
    })

    it('returns 0 when no vowels are present', () => {
        expect(countVowels('rhythm')).toBe(0)
    })

    it('returns 0 for empty string', () => {
        expect(countVowels('')).toBe(0)
    })

    it('counts vowels in a string with only vowels', () => {
        expect(countVowels('aeiouAEIOU')).toBe(10)
    })

    it('ignores non-alphabetic characters', () => {
        expect(countVowels('1234!!aei')).toBe(3)
    })
})

describe('countConsonants', () => {
    it('counts consonants in a simple lowercase string', () => {
        expect(countConsonants('one piece')).toBe(3)
    })

    it('counts consonants in a mixed case string', () => {
        expect(countConsonants('Luffy and Zoro')).toBe(8)
    })

    it('returns 0 when no consonants are present', () => {
        expect(countConsonants('aeiouAEIOU')).toBe(0)
    })

    it('returns 0 for empty string', () => {
        expect(countConsonants('')).toBe(0)
    })

    it('ignores non-alphabetic characters', () => {
        expect(countConsonants('1234!!bcd')).toBe(3)
    })

    it('counts consonants correctly with spacing and punctuation', () => {
        expect(countConsonants('Sanji, cook of the ship!')).toBe(11)
    })
})

describe('stripPunctuation', () => {
    it('removes common punctuation marks', () => {
        expect(stripPunctuation('Luffy, Zoro, and Nami!')).toBe('Luffy Zoro and Nami')
    })

    it('returns the same string if no punctuation present', () => {
        expect(stripPunctuation('One Piece crew')).toBe('One Piece crew')
    })

    it('handles empty string', () => {
        expect(stripPunctuation('')).toBe('')
    })

    it('removes all listed punctuation characters', () => {
        expect(stripPunctuation('.!@#$%^&*()-_=+{}[]:;"/\\')).toBe('')
    })

    it('preserves spaces and letters', () => {
        expect(stripPunctuation('Hello, world! This is Usopp.')).toBe('Hello world This is Usopp')
    })

    it('does not remove numbers or letters', () => {
        expect(stripPunctuation('100,000 Berries!')).toBe('100000 Berries')
    })
})

















