import { describe, it, expect } from 'vitest'
import { isString } from './index'

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
