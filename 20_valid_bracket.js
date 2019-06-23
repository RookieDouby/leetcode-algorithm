let isValid = function(str) {
    let stack = [], isValid = true,
        mapper = {
            '{': '}',
            '[': ']',
            '(': ')'
        };
    for(var key in str) {
        let value = str[key];
        if(['{','(','['].indexOf(value) > -1) {
            stack.push(value);
        } else {
            const peak = stack.pop();
            if(value !== mapper[peak]) {
                return false
            }
        }
    }
    if(stack.length > 0) isValid = false;
    return isValid;
}

console.log('isValid', isValid('{[(]}'))