import TestComponent3 from "./TestComponent3";

const TestComponent6 = () => {
    return(
        <div>
            <h3>TestComponent6</h3>
            <TestComponent8 />
        </div>
    );
};

const TestComponent7 = () => {
    return(
        <div>
            <h2>TestComponent7</h2>
            <TestComponent3 />
        </div>
    );
};

const TestComponent8 = () => {
    return(
        <div>
            <p>TestComponent8</p>
        </div>
    );
};

export {TestComponent6, TestComponent7};

