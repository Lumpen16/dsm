let foobar = (list) => {
    const foo = 'foo', bar = 'bar', foobar = 'foobar';
    list.forEach(function (li) {
        if (li % 3 == 0 && li % 5 == 0) {
            return foobar;
        }
        else if (li % 3 == 0) {
            return foo;
        }
        else if (li % 5 == 0) {
            return bar;
        }
    });
};

const nums = [1, 2, 3, 4, 5, 15, 30];
console.log(foobar(nums));
