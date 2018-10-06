function hasNull(obj) {
    for (const child in obj) {
        if (obj[child] !== null) {
            return false;
        }
    }
    return true;
}

function hasEmpty(obj) {
    for (const child in obj) {
        if (obj[child] === '') {
            return true;
        }
    }
    return false;
}

export {hasNull, hasEmpty};