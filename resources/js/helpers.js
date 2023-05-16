/**
 * validate phone number in RU locale
 * @param phone {string}
 * @returns {boolean}
 */
const validatePhone = (phone) => {
    const pattern = /^(8|\+7)(\(\d{3}\))(\d{3})-(\d{2})-(\d{2})$/;
    return pattern.test(phone.replaceAll(' ', ''));
}

export { validatePhone }
