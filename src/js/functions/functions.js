/*
* hasNull - checks if there are not null errors when signing up
*/

function hasNull(obj) {
    for (const child in obj) {
        if (obj[child] !== null) {
            return false;
        }
    }
    return true;
}

/*
* hasNull - checks if there are empty inputs when signing up/sigining in
*/

function hasEmpty(obj) {
    for (const child in obj) {
        if (obj[child] === '') {
            return true;
        }
    }
    return false;
}

export {hasNull, hasEmpty};