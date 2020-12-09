export const restrictCharactersRut = (rut: string): string => {

    const notNumber = new RegExp('[^0-9]+$');

    if (rut.length == 1) {
        if (notNumber.test(rut)) {
            return '';
        } else {
            return rut;
        }
    }

    if (rut.length > 1) {
        const checkDigit = rut.slice(-1);
        const sequenceOfNumbers = rut.slice(0, -1);
        if (notNumber.test(sequenceOfNumbers)) {
            return rut.slice(0, -1);
        }
        if (notNumber.test(checkDigit)) {
            if (checkDigit == 'k' || checkDigit == 'K') {
                return rut;
            } else {
                return sequenceOfNumbers;
            }
        } else {
            return rut;
        }
    }
    return '';

}

export const formatRut = (rut: string): string => {
    const checkDigit = rut.slice(-1);
    const sequenceOfNumbers = parseInt(rut.slice(0, -1));
    const formatSequenceOfNumbers = sequenceOfNumbers.toLocaleString('de-DE');

    return `${formatSequenceOfNumbers}-${checkDigit}`;
}

export const removeFormatToRut = (rut: string): string => {
    const checkDigit = rut.slice(-1);
    const sequenceOfNumbers = rut.slice(0, -1);
    const cleanSequenceOfNumbers = sequenceOfNumbers.replace(/[^0-9]+/g, "");

    return `${cleanSequenceOfNumbers}${checkDigit}`;
}
