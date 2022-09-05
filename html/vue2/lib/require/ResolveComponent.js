define(["require", "promise"], function(require, Q){
    var resolve = function(dep) {
        return function() {
            if (!(dep instanceof Array)) {
                dep = [dep];
            }
            var deferred = Q.defer();
            require(dep, function(res) {
                deferred.resolve(res);
            });
            return deferred.promise;
        };
    };
    return resolve;
});