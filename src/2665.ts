type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let count = init;
    
    const increment = () => {
        return ++count;
    }

    const decrement = () => {
        return --count;
    }

    const reset = () => {
        count = init;
        return count;
    }

    return {
        increment,
        decrement,
        reset
    }
};


/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */