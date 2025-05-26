export const isString = (str: unknown): str is string =>
    typeof str === 'string' || str instanceof String

export const capitalize = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1)

export const toCamelCase = (str: string): string => {
    if (/^[a-z][a-zA-Z0-9]*$/.test(str)) return str
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(\w)/g, (_, c) => c.toUpperCase())
        .replace(/^[^a-zA-Z0-9]*([a-zA-Z])/, (_, c) => c.toLowerCase())

}

export const toKebabCase = (str: string): string =>
    str.trim() // Trim any leading or trailing spaces
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Add hyphen between lowercase and uppercase letters
        .replace(/(\d)([a-zA-Z])/g, '$1-$2') // Add hyphen between numbers and letters
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .toLowerCase(); // Convert all to lowercase

export const toSnakeCase = (str: string): string =>
    str
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/(\d)([a-zA-Z])/g, '$1_$2')
        .replace(/[\s-]+/g, '_')
        .toLowerCase()

export const reverse = (str: string): string =>
    str.split('').reverse().join('')

export const truncate = (str: string, length: number): string => {
    const graphemes = Array.from(str)
    return graphemes.length > length ? graphemes.slice(0, length).join('') + '…' : str
}

export const stripHtml = (str: string): string => {
    const withoutScriptsAndStyles = str
        .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '');

    return withoutScriptsAndStyles.replace(/<\/?[a-z][\s\S]*?>/gi, '');
};

export const escapeHtml = (str: string): string =>
    str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')

export const isUpperCase = (str: string): boolean =>
    str === str.toUpperCase()

export const isLowerCase = (str: string): boolean =>
    str === str.toLowerCase()

export const repeat = (str: string, count: number): string => {
    return str.repeat(Math.floor(count))
}

export const padLeft = (str: string, length: number, char = ' '): string => {
    const fill = Array.from(char);
    return str.length >= length ? str : fill[0]?.repeat(length - str.length) + str
}

export const padRight = (str: string, length: number, char = ' '): string => {
    const fill = Array.from(char);
    return str.length >= length ? str : str + fill[0]?.repeat(length - str.length)
}

export const contains = (str: string, substr: string): boolean =>
    str.includes(substr)

export const startsWith = (str: string, prefix: string): boolean =>
    str.startsWith(prefix)

export const endsWith = (str: string, suffix: string): boolean =>
    str.endsWith(suffix)

export const removeNonAlpha = (str: string): string =>
    str.replace(/[^a-z]/gi, '')

export const removeNonNumeric = (str: string): string =>
    str.replace(/[^0-9]/g, '')

export const removeWhitespace = (str: string): string =>
    str.replace(/\s/g, '')

export const countOccurrences = (str: string, sub: string): number => {
    if (sub === "") {
        return str?.length + 1
    }
    return str.split(sub).length - 1
}

export const slugify = (str: string): string =>
    str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')

export const getInitials = (str: string): string =>
    str
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()

export const isStrictPalindrome = (str: string): boolean =>
    str === str.split('').reverse().join('')

export const isLoosePalindrome = (str: string): boolean => {
    const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
    return cleaned === cleaned.split('').reverse().join('')
}

export const extractNumbers = (str: string): number[] =>
    (str.match(/\d+/g) || []).map((value) => parseInt(value))

export const extractWords = (str: string): string[] =>
    str.match(/\b\w+\b/g) || []

export const maskString = (str: string, start: number, end: number, maskChar = '*'): string =>
    str
        .split('')
        .map((char, i) => (i >= start && i < end ? maskChar : char))
        .join('')

export const randomString = (length: number): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('')
}

export const isAlpha = (str: string): boolean =>
    /^[A-Za-z]+$/.test(str)

export const isAlphanumeric = (str: string): boolean =>
    /^[A-Za-z0-9]+$/.test(str)

export const isEmail = (str: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)


export const extractEmails = (str: string): string[] =>
    str.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || []

export const extractUrls = (str: string): string[] =>
    str.match(/https?:\/\/[^\s]+[a-zA-Z0-9]/g) || []


export const titleCase = (str: string): string => {
    const leadingSpaces = str.match(/^(\s*)/)?.[0] || ''
    const trailingSpaces = str.match(/(\s*)$/)?.[0] || ''
    const words = str.trim().split(/\s+/)
    const titled = words
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ')
    return leadingSpaces + titled + trailingSpaces
}

export const swapCase = (str: string): string =>
    str
        .split('')
        .map((c) =>
            c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
        )
        .join('')

export const removeDuplicateWords = (str: string): string =>
    Array.from(new Set(str.split(' ').filter(value => !!value))).join(" ")

export const safeString = (str: string): string =>
    str.replace(/[^\w\s]/gi, '')

export const compressWhitespace = (str: string): string =>
    str.replace(/\s+/g, ' ').trim()

export const charFrequency = (str: string): Record<string, number> =>
    Array.from(str).reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1
        return acc
    }, {} as Record<string, number>)

export const levenshteinDistance = (a: string, b: string): number => {
    const m = a.length
    const n = b.length

    if (m === 0) return n
    if (n === 0) return m

    const dp: number[][] = Array.from({ length: a.length + 1 }, () =>
        new Array(b.length + 1).fill(0)
    )

    for (let i = 0; i <= m; i++) dp[i][0] = i
    for (let j = 0; j <= n; j++) dp[0][j] = j

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,    // deletion
                dp[i][j - 1] + 1,    // insertion
                dp[i - 1][j - 1] + cost // substitution
            )
        }
    }

    return dp[m][n]
}



export const toPascalCase = (str: string): string =>
    str
        .replace(/[^a-zA-Z0-9]+/g, ' ') // turn all non-alphanum into space
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('')


export const toDotCase = (str: string): string =>
    str.trim().replace(/\s+/g, '.').toLowerCase()

export const toSpaceCase = (str: string): string =>
    str.replace(/[_-]+/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2')

export const endsWithAny = (str: string, suffixes: string[]): boolean =>
    suffixes.some(suffix => str.endsWith(suffix))

export const startsWithAny = (str: string, prefixes: string[]): boolean =>
    prefixes.some(prefix => str.startsWith(prefix))

export const trimChar = (str: string, char: string): string => {
    const escapedChar = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return str.replace(new RegExp(`^${escapedChar}+|${escapedChar}+$`, 'g'), '')
}

export const removeDiacritics = (str: string): string =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export const getUniqueCharacters = (str: string): string[] =>
    Array.from(new Set(str.split('')))

export const stringToCharCodeArray = (str: string): number[] => {
    const codes: number[] = []
    for (const char of str) {
        codes.push(char.codePointAt(0)!)
    }
    return codes
}

export const charCodeArrayToString = (arr: number[]): string =>
    arr.map(code => String.fromCodePoint(code)).join('')


export const wrap = (str: string, wrapper: string): string =>
    `${wrapper}${str}${wrapper}`

export const ensureStartsWith = (str: string, prefix: string): string =>
    str.startsWith(prefix) ? str : prefix + str

export const ensureEndsWith = (str: string, suffix: string): string =>
    str.endsWith(suffix) ? str : str + suffix

export const repeatStringUntilLength = (str: string, targetLength: number): string =>
    str.repeat(Math.ceil(targetLength / (str?.length || 1))).slice(0, targetLength)

export const collapseNewlines = (str: string): string =>
    str.replace(/[\r\n]+/g, '\n')

export const stringToAsciiSum = (str: string): number =>
    [...str].reduce((sum, char) => sum + char.codePointAt(0)!, 0)

export const getCharAtSafe = (str: string, index: number): string =>
    str[index] ?? ''

export const isWhitespace = (str: string): boolean =>
    /^\s*$/.test(str)

export const isEmpty = (str: string): boolean =>
    str?.length === 0

export const isBlank = (str: string): boolean =>
    str.trim().length === 0

export const getNthWord = (str: string, n: number): string =>
    str.split(/\s+/)[n] ?? ''

export const countVowels = (str: string): number =>
    (str.match(/[aeiou]/gi) || []).length

export const countConsonants = (str: string): number =>
    (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length

export const stripPunctuation = (str: string): string =>
    str.replace(/[.!@#$%^&*()\-_=+{}\[\]:;"\/\\,~]/g, '')


export const extractHashtags = (str: string): string[] =>
    str.match(/#[\w]+/g) || []

export const extractMentions = (str: string): string[] =>
    str.match(/@[\w]+/g) || []

export const hasRepeatedCharacters = (str: string): boolean =>
    /(.)\1/.test(str)

export const isHexColor = (str: string): boolean =>
    /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(str)

export const isRgbColor = (str: string): boolean =>
    /^rgb\((\d{1,3},\s*){2}\d{1,3}\)$/.test(str)

export const getLastNChars = (str: string, n: number): string => {
    if (n === 0) return ""
    return str.slice(-n)
}

export const getFirstNChars = (str: string, n: number): string =>
    str.slice(0, n)

export const containsAny = (str: string, items: string[]): boolean =>
    items.some(item => str.includes(item))

export const replaceAll = (str: string, find: string, replace: string): string =>
    str.replaceAll(find, replace)

export const isAllUpperCase = (str: string): boolean =>
    str === str.toUpperCase() && /[A-Z]/.test(str)

export const isAllLowerCase = (str: string): boolean =>
    str === str.toLowerCase() && /[a-z]/.test(str)

export const toCharArray = (str: string): string[] =>
    Array.from(str)

export const reverseWords = (str: string): string =>
    str.split(' ').reverse().join(' ')

export const countWords = (str: string): number =>
    (str.match(/\b\w+\b/g) || []).length

export const repeatWithSeparator = (str: string, count: number, sep: string): string =>
    Array(count).fill(str).join(sep)

export const trimStart = (str: string): string =>
    str.replace(/^\s+/, '')

export const trimEnd = (str: string): string =>
    str.replace(/\s+$/, '')

export const obfuscateEmail = (email: string): string => {
    if (!isEmail(email)) {
        console.error(`provide valid email address${email}`);
        return email;
    };
    const [user, domain] = email.split('@')
    return `${user[0]}***@${domain}`
}

export const base64Encode = (str: string): string =>
    Buffer.from(str, 'utf-8').toString('base64')

export const base64Decode = (str: string): string =>
    Buffer.from(str, 'base64').toString('utf-8')

export const camelToSnake = (str: string): string =>
    str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)

export const snakeToCamel = (str: string): string =>
    trimChar(str.replace(/(_\w)/g, m => m[1].toUpperCase()), "_")


export const removeTrailingSlash = (str: string): string =>
    str.endsWith('/') ? str.slice(0, -1) : str

export const removeLeadingSlash = (str: string): string =>
    str.startsWith('/') ? str.slice(1) : str

export const splitByLength = (str: string, length: number): string[] =>
    str.match(new RegExp(`.{1,${length}}`, 'g')) || []

export const truncateWords = (str: string, numWords: number): string =>
    str.split(' ').slice(0, numWords).join(' ') + '…'

export const isUUID = (str: string): boolean => {
    return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(str)
}




export const generateUUID = (): string =>
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })

export const removeDuplicateChars = (str: string): string =>
    Array.from(new Set(str)).join('')

export const percentEncode = (str: string): string => {
    return encodeURIComponent(str).replace(/[!'()*]/g, ch =>
        `%${ch.charCodeAt(0).toString(16).toUpperCase()}`
    )
}


export const percentDecode = (str: string): string =>
    decodeURIComponent(str)

export const getByteLength = (str: string): number =>
    new Blob([str]).size

export const endsWithPunctuation = (str: string): boolean =>
    /[.!?]$/.test(str)

export const stringSimilarity = (a: string, b: string): number => {
    let matches = 0;
    if (Math.max(a.length, b.length) === 0) return 1; // Both empty, 100% similar
    if (Math.min(a.length, b.length) === 0 && Math.max(a.length, b.length) > 0) return 0; // One empty, one not, 0% similar

    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] === b[i]) matches++;
    }
    return matches / Math.max(a.length, b.length);
};

export const censor = (str: string, words: string[], mask = '*'): string =>
    words.reduce((s, word) =>
        s.replace(new RegExp(`\\b${word}\\b`, 'gi'), mask.repeat(word.length)), str)

export const safeJsonParse = <T = unknown>(str: string): T | null => {
    try {
        return JSON.parse(str)
    } catch {
        return null
    }
}


export const mirrorString = (str: string): string =>
    str + str.split('').reverse().join('')

export const removeHtmlTags = (str: string): string =>
    str.replace(/<[^>]*>/g, '')


export const unescapeHtml = (str: string): string =>
    str.replace(/&amp;/g, '&').replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, '\'')

export const countCharacterOccurrences = (str: string, char: string): number => {
    return str.split(char).length + (!char ? + 1 : -1)
}

export const extractInitials = (str: string): string =>
    str.split(' ').filter(word => word.length > 0).map(word => word[0].toUpperCase()).join('');

export const stripAnsiCodes = (str: string): string =>
    str.replace(/\x1B[[(?);]{0,2}(;?\d)*./g, '')

export const removeAllNumbers = (str: string): string =>
    str.replace(/\d+/g, '')

export const extractAllNumbers = (str: string): string[] =>
    str.match(/\d+/g) || []

export const padCenter = (str: string, length: number, padChar = ' '): string => {
    if (str.length >= length) return str;
    const totalPadding = length - str.length;
    const paddingStart = Math.floor(totalPadding / 2);
    const paddingEnd = totalPadding - paddingStart;
    return padChar.repeat(paddingStart) + str + padChar.repeat(paddingEnd);
};


export const hasEmoji = (str: string): boolean =>
    /[\u{1F600}-\u{1F6FF}]/u.test(str)

export const extractEmoji = (str: string): string[] =>
    Array.from(str.match(/[\u{1F600}-\u{1F6FF}|\u{1F300}-\u{1F5FF}|\u{1F900}-\u{1F9FF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/gu) || []);

export const toCurrencyFormat = (numStr: string, currency = 'USD'): string => {
    const num = Number(numStr);
    if (isNaN(num)) return "NaN"; // Or throw error, or return original string
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(num);
}
export const stripSpaces = (str: string): string =>
    str.replace(/\s+/g, '')

export const extractDomain = (url: string): string | null => {
    try {
        return new URL(url).hostname;
    } catch {
        return null; // Return null for invalid URLs
    }
}

export const extractTLD = (url: string): string | null => {
    try {
        const hostname = new URL(url).hostname;
        const parts = hostname.split('.');
        if (parts.length > 1) {
            return parts.pop() || null;
        }
        return null; // For hostnames like 'localhost' or single-label domains
    } catch {
        return null; // Return null for invalid URLs
    }
}

export const removeAlphanumeric = (str: string): string =>
    str.replace(/[a-z0-9]/gi, '')


export const getMiddleCharacter = (str: string): string => {
    if (str.length === 0) return '';
    return str[Math.floor((str.length - 1) / 2)]; // Corrected for even length to pick left of middle
}


export const insertAt = (str: string, index: number, value: string): string =>
    str.slice(0, index) + value + str.slice(index)

export const removeAt = (str: string, index: number, count = 1): string => {
    if (index < 0 || index >= str.length || count <= 0) return str;
    return str.slice(0, index) + str.slice(index + count);
}

export const reverseSentences = (str: string): string => {
    const sentences = str.match(/[^.!?]+[.!?]+/g) || [];
    if (sentences.length === 0 && str.trim().length > 0) return str; // Handle single phrase without punctuation
    if (sentences.length === 0) return '';
    return sentences?.map((value) => value?.trim()).reverse().join(' ').trim();
}

export const capitalizeSentences = (str: string): string =>
    str.replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase())

export const decapitalize = (str: string): string =>
    str.charAt(0).toLowerCase() + str.slice(1)

export const toUpperFirstChar = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1)

export const toLowerFirstChar = (str: string): string =>
    str.charAt(0).toLowerCase() + str.slice(1)

export const removeQuotes = (str: string): string =>
    str.replace(/^['"](.*)['"]$/, '$1').replace(/^'(.*)'$/, '$1').replace(/^"(.*)"$/, '$1');


export const surroundWithQuotes = (str: string, quoteType: '"' | '\'' = '"'): string =>
    `${quoteType}${str}${quoteType}`;

export const formatPhoneNumber = (num: string): string => {
    const cleaned = num.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
    if (cleaned.length === 11 && (cleaned.startsWith('1') || cleaned.startsWith('0'))) { // e.g. US with country code
        return cleaned.slice(1).replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
    return num; // Return original if not a clear 10-digit or 11-digit US number
}


export const convertToBinary = (str: string): string => {
    if (!str) return ""
    return [...str].map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' '); // Pad to 8 bits

}

export const binaryToString = (bin: string): string => {
    if (!bin) return ""
    return bin.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
}

export const convertToHex = (str: string): string => {
    if (!str) return ""
    return [...str].map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' '); // Pad to 2 hex chars
}

export const hexToString = (hex: string): string => {
    if (!hex) return ""
    return hex.split(' ').map(h => String.fromCharCode(parseInt(h, 16))).join('');
}

export const htmlEntityEncode = (str: string): string =>
    str.replace(/[\u00A0-\u9999<>\&"']/gim, i => `&#${i.charCodeAt(0)};`); // Added " and '


export const htmlEntityDecode = (str: string): string =>
    str.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))

export const countLines = (str: string): number => {
    if (str === '') return 0; // Or 1 for an empty string if it's considered one line
    return str.split(/\r\n|\r|\n/).length;
}


export const getFirstLine = (str: string): string =>
    str.split(/\r?\n/)[0] || ''

export const getLastLine = (str: string): string =>
    str.split(/\r?\n/).pop() || ''

export const highlightSubstr = (str: string, substr: string, tagOpen = '**', tagClose = '**'): string => {
    if (!substr) return str;
    // Escape special characters in substr for RegExp
    const escapedSubstr = substr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return str?.replaceAll(new RegExp(escapedSubstr, 'g'), `${tagOpen}${substr}${tagClose}`);
}

export const replaceAt = (str: string, index: number, char: string): string => {
    if (index < 0 || index >= str.length) return str;
    return str.substring(0, index) + char + str.substring(index + 1);
}

export const stripLeadingZeros = (str: string): string => {
    if (str === '0') return '0';
    return str.replace(/^0+/, '');
}

export const removeDuplicatesWords = (str: string): string =>
    [...new Set(str.split(' '))].join(' ')

export const sortWords = (str: string): string =>
    str.split(' ').sort().join(' ')

export const uniqueWords = (str: string): string[] =>
    [...new Set(str.toLowerCase().match(/\b\w+\b/g) || [])];

export const toTitleCase = (str: string): string =>
    str.replace(/\b\w/g, l => l.toUpperCase())

export const slugToCamelCase = (str: string): string =>
    str.replace(/-([a-z])/g, (_, c) => c.toUpperCase())

export const camelCaseToSlug = (str: string): string =>
    str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

export const removeSpecialChars = (str: string): string =>
    str.replace(/[^\w\s]/gi, '');

export const countPunctuation = (str: string): number =>
    (str.match(/[.,!?;:]/g) || []).length

export const countUppercase = (str: string): number =>
    (str.match(/[A-Z]/g) || []).length

export const countLowercase = (str: string): number =>
    (str.match(/[a-z]/g) || []).length

export const shuffleCharacters = (str: string): string =>
    [...str].sort(() => Math.random() - 0.5).join('')

export const containsUppercase = (str: string): boolean =>
    /[A-Z]/.test(str)

export const containsLowercase = (str: string): boolean =>
    /[a-z]/.test(str)

export const rotateString = (str: string, n: number): string => {
    if (str.length === 0) return '';
    const k = n % str.length;
    return str.slice(k) + str.slice(0, k);
}

export const toggleCase = (str: string): string =>
    [...str].map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('')

export const reverseEachWord = (str: string): string =>
    str.split(' ').map(word => word.split('').reverse().join('')).join(' ')

export const splitToWords = (str: string): string[] =>
    str.trim().split(/\s+/).filter(Boolean);

export const countSentences = (str: string): number =>
    (str.match(/[\w|\)][.?!](\s|$)/g) || []).length

export const extractSentences = (str: string): string[] =>
    str.match(/[^.!?]+[.!?]+\s*/g)?.map(s => s.trim()) || [];

export const generateAcronym = (str: string): string =>
    str.split(/\s+/).filter(Boolean).map(word => word[0].toUpperCase()).join('');

export const titleToSlug = (str: string): string =>
    str.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');



export const sanitizeFileName = (str: string): string => {
    return str.replace(/[^a-zA-Z0-9._-]/g, '_')
}


export const isIpAddress = (str: string): boolean => {
    if (!/^(\d{1,3}\.){3}\d{1,3}$/.test(str)) return false;
    return str.split('.').every(part => parseInt(part, 10) <= 255);
}


export const isUrl = (str: string): boolean => {
    if (!str || typeof str !== 'string') return false

    const normalized = str.startsWith('www.') || /^[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(str)
        ? `http://${str}`
        : str

    try {
        const url = new URL(normalized)
        return ['http:', 'https:', 'ftp:'].includes(url.protocol)
    } catch {
        return false
    }
}


export const getFileExtension = (str: string): string => {
    const lastDot = str.lastIndexOf('.');
    if (lastDot === -1 || lastDot === 0 || lastDot === str.length - 1) return ''; // No extension or hidden file
    return str.substring(lastDot + 1);
}


export const removeFileExtension = (str: string): string => {
    const lastDot = str.lastIndexOf('.');
    if (lastDot === -1 || lastDot === 0) return str; // No extension or hidden file
    return str.substring(0, lastDot);
}

export const isNumericString = (str: string): boolean =>
    /^\d+$/.test(str)

export const compactWhitespace = (str: string): string =>
    str.replace(/\s+/g, ' ').trim()

export const unescapeBackslashes = (str: string): string =>
    str.replace(/\\(.)/g, '$1')

export const stringToUnicode = (str: string): string =>
    [...str].map(c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0')).join('')

export const unicodeToString = (unicodeStr: string): string =>
    unicodeStr.replace(/\\u([\dA-Fa-f]{4})/g, (_, g) => String.fromCharCode(parseInt(g, 16)))

export const removeVowels = (str: string): string =>
    str.replace(/[aeiou]/gi, '')


export const removeConsonants = (str: string): string =>
    str.replace(/[^aeiouAEIOU\s\d\W_]/gi, ''); // Keep vowels, spaces, digits, and symbols


export const alternateCase = (str: string): string =>
    [...str].map((c, i) => i % 2 ? c.toLowerCase() : c.toUpperCase()).join('')

export const randomStringBase36 = (length: number): string =>
    Array.from({ length }, () => Math.random().toString(36)[2]).join('')

export const obfuscatePhoneNumber = (num: string): string => {
    const match = num.match(/^(\d{5})(\d{4})(.*)$/)
    return match ? `${match[1]}****${match[3]}` : num
}


export const countWordsByLength = (str: string): Record<number, number> =>
    str.trim().split(/\s+/).filter(Boolean).reduce((acc, word) => {
        const len = word.length;
        if (len > 0) {
            acc[len] = (acc[len] || 0) + 1;
        }
        return acc;
    }, {} as Record<number, number>);

export const stringToArrayBuffer = (str: string): ArrayBuffer =>
    new TextEncoder().encode(str).buffer

export const arrayBufferToString = (buf: ArrayBuffer): string =>
    new TextDecoder().decode(buf)

export const isStrongPassword = (str: string): boolean =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s:]).{8,}$/.test(str)

export const getLongestWord = (str: string): string => {
    const words = str.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return '';
    return words.reduce((a, b) => a.length >= b.length ? a : b, '');
}

export const getShortestWord = (str: string): string => {
    const words = str.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return '';
    return words.reduce((a, b) => (a.length <= b.length ? a : b));
}


export const getAllIndexesOf = (str: string, target: string, overlapping?: boolean): number[] => {
    if (target.length === 0)
        return Array.from({ length: str.length + 1 }, (_, i) => i);
    const indices: number[] = [];
    let i = -1;
    while ((i = str.indexOf(target, i)) !== -1) {
        indices.push(i);
        if (!overlapping) {
            i = i + target?.length;
        } else {
            i++;
        }
    }
    return indices;
};

export const isAnagram = (str1: string, str2: string): boolean => {
    const normalize = (str: string) =>
        str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('')
    return normalize(str1) === normalize(str2)
}
