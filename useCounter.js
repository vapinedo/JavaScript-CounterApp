export default function useCounter() {
    let _counter = 0;

    function getCounter() {
        return _counter;
    }

    function increment() {
        _counter++;
    }

    function decrement() {
        _counter--;
    }

    return { getCounter, increment, decrement };
}