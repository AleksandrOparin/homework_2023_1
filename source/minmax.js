'use strict';

/**
 * @description ������� ��� ������ ������������ ����� � ������� �����
 * @param {Array} numbers - ������ �����
 * @returns {number} ����������� �����
*/
const min = numbers => Math.min(...numbers);

/**
 * @description ������� ��� ������ ������������� ����� � ������� �����
 * @param {Array} numbers - ������ �����
 * @returns {number} ������������ �����
*/
const max = numbers => Math.max(...numbers);

/**
 * @description ������� ��� ������ ������������ � ������������� ����� � ������
 * @param {string} str - ������ � �����, ����������� ���������
 * @returns {Array} ������, ���������� ����������� � ������������ �����
*/
const minmax = str => {
    const numbers = str ? str.split(' ').map(Number).filter((value) => !Number.isNaN(value)) : [];
    return numbers.length ? [min(numbers), max(numbers)] : [undefined, undefined];
};
