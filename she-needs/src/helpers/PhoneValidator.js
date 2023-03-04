export function validatePhoneNumber(phoneNumber) {
    // Remove all punctuation from phone number
    const strippedPhoneNumber = phoneNumber.replace(/[^\w\s\']|_/g, "")
        .replace(/\s+/g, " ");
    console.log(strippedPhoneNumber)

    // Check if phone number contains a letter
    if (/[a-zA-Z]/.test(strippedPhoneNumber)) {
        return false;
    }

    // Check if phone number has 10 digits
    return strippedPhoneNumber.length === 10;
}