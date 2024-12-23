import Course from './Course';

function Courses(props) {
    let myCourses = [];
    for (let i = 0; i < props.num; i++) {
        myCourses.push(<Course num={i+1}/>);
    };
    return (
        <form class="cont__main__maj__crs">
            <div class="cont__main__maj__crsdiv">
                {myCourses}
            </div>
        </form>
    );
}

export default Courses;