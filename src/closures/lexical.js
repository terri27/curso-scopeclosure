const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
}

const buildEnd = buildCount(1);

buildEnd();
buildEnd();
buildEnd();


const myOtherCount = buildCount(10);

myOtherCount();
myOtherCount();
myOtherCount();
