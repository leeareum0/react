import "./test4.css";

const TestComponent4 = () => {
    return(
        <div>
            <h2 className="h2">TestComponent4</h2>
        </div>
    );
};

const TestComponent5 = () => {
    return (
        <div>
            <h3>TestComponent5 테스트</h3>
        </div>
    );
};
//여러개 컴포넌트 export할 때
export {TestComponent4, TestComponent5};