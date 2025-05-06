// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('phone1', () => {
  expect(isPhoneNumber('phone')).toBe(false);
});
test('phone2', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('phone3', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('phone4', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});
test('email1', () => {
  expect(isEmail('cse110')).toBe(false);
});
test('email2', () => {
  expect(isEmail('cse.110@test.tes')).toBe(false);
});
test('email3', () => {
  expect(isEmail('1@t.es')).toBe(true);
});
test('email4', () => {
  expect(isEmail('456_7890@vsnreoiugvnsrourgnvis.tes')).toBe(true);
});
test('pw1', () => {
  expect(isStrongPassword('1')).toBe(false);
});
test('pw2', () => {
  expect(isStrongPassword('1145141919810')).toBe(false);
});

test('pw3', () => {
  expect(isStrongPassword('senpai114514')).toBe(true);
});

test('pw4', () => {
  expect(isStrongPassword('O123')).toBe(true);
});
test('date1', () => {
  expect(isDate('05052025')).toBe(false);
});
test('date2', () => {
  expect(isDate('05/May/2025')).toBe(false);
});
test('date3', () => {
  expect(isDate('05/05/2025')).toBe(true);
});
test('date4', () => {
  expect(isDate('99/00/9999')).toBe(true);
});
test('Hex1', () => {
  expect(isHexColor('99')).toBe(false);
});
test('Hex2', () => {
  expect(isHexColor('1234')).toBe(false);
});
test('Hex3', () => {
  expect(isHexColor('000000')).toBe(true);
});
test('Hex4', () => {
  expect(isHexColor('#AaBbCc')).toBe(true);
});