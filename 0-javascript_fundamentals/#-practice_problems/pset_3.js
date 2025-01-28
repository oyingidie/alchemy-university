// CODE 0

// retrieve a prop that is deeply nested within objects
// i.e. { prop: { prop: { prop: 3 }}} => 3
function deepRetrieval(obj) {
    while (obj.prop) {
        obj = obj.prop;
    }

    return obj;
}

module.exports = deepRetrieval;
