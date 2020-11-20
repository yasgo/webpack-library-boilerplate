(function () {

    const init = function (message, options) {

        return null
    };

    module.exports = function (message, options) {
        if (message === undefined || message === null)
            throw new Error('Illegal argument ' + message);

        return init(message, options)
    };

})();
