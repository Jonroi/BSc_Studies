import Hello from './hello';

const HelloList = () => {
    return (
        <div>
            <Hello message="Hello World!" />
            <Hello message="Hello React!" />
            <Hello message="Hello JavaScript!" />
        </div>
    );
}

export default HelloList;
