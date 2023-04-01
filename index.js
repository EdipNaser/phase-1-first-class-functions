function receivesAFunction(callBackFun) {
    return callBackFun()

}

function returnsANamedFunction() {
    const namedFun = () => {}
        return namedFun
    
}

function returnsAnAnonymousFunction() {
    return function () {}
}