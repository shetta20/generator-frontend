import Left from './Left';
import Right from './Right';

const Main = (props) => {    
    return(
    <div className='Main'>
        {console.log("Rendering Main")}
        <Left Response={props.Response} SetResponse={props.SetResponse}/>
        <Right Response={props.Response} SetResponse={props.SetResponse}/>
    </div>
    );
}

export default Main;