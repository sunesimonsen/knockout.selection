function useTestElement(selector) {
    var container = $('#test');
    container.empty();
    var testElement = $(selector).clone();
    testElement.appendTo(container);
    return testElement[0];
}

function click(element, options) {
    var defaultOptions = {
        which: 1,
        shiftKey: false,
        ctrlKey: false
    };
    options = $.extend(defaultOptions, options);
    var e = $.Event("mousedown", options);
    element.trigger(e);
}

function keyDown(element, options) {
    var defaultOptions = {
        shiftKey: false,
        ctrlKey: false
    };
    options = $.extend(defaultOptions, options);
    var e = $.Event("keydown", options);
    element.trigger(e);
}

function arrowDown(element, options) {
    var defaultOptions = { which: 40 };
    options = $.extend(defaultOptions, options);
    keyDown(element, options);
}

function arrowUp(element, options) {
    var defaultOptions = { which: 38 };
    options = $.extend(defaultOptions, options);
    keyDown(element, options);
}

function space(element, options) {
    var defaultOptions = { which: 32 };
    options = $.extend(defaultOptions, options);
    keyDown(element, options);
}

beforeEach(function() {
    expect.Assertion.prototype.cssClass = function (expected) {
        var $element = $(this.obj);
        var elementClasses = ($element.attr('class') || '').split(' ');

        if (this.flags.not) {
            expect(elementClasses).to.not.contain(expected);
        } else {
            expect(elementClasses).to.contain(expected);
        }

        return this;
    };

    expect.Assertion.prototype.selectionCount = function (expected) {
        var selectionCount = $('.selected', this.obj).length;

        this.assert(
            selectionCount === expected, 
            function(){ return 'expected list to have ' + expected + ' selected items'; },
            function(){ return 'expected list to not have ' + expected + ' selected items'; });
        
        return this;
    };
});
