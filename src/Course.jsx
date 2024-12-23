function Course(props) {
    return (
        <div class="cont__main__maj__crsdiv__cse">
            <div class="cont__main__maj__crsdiv__cse__num">
                <div class="cont__main__maj__crsdiv__cse__num__img">
                    {props.num}
                </div>
            </div>
            <div class="cont__main__maj__crsdiv__cse__flds">
                <input class="cont__main__maj__crsdiv__cse__flds__fld staticinfo" type="text" placeholder="Course Title" name="crs_title"/>
                <input class="cont__main__maj__crsdiv__cse__flds__fld staticinfo" type="text" placeholder="No of Units" name="units"/>
                <input class="cont__main__maj__crsdiv__cse__flds__fld" type="text" placeholder="Grade" name="grade"/>
            </div>            
        </div>
    );
}

export default Course;