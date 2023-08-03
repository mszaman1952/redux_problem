import { useSelector } from "react-redux";

const MyCounterApp = () => {
    const countValue = useSelector((state) => state.counter.countingValue);
    return (
        <div>
            <h1>{countValue}</h1>
            <button>Increse</button>
            <button>Decrese</button>
        </div>
    );
};

export default MyCounterApp;