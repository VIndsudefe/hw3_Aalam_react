
import classes from "./redPage.module.css"
function RedPage(props){
    return(
        <>
            <h1 className={`${classes.title} text-center`}> 
                <ul>
                    <li> name : {props.title.name}</li>
                    <li> age: {props.title.age}</li>
                </ul>
            </h1>
        </> 
    )
}
export default  RedPage