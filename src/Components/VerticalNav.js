import VertItem from './VertItem';

const VerticalNav = (props) => {
    return(
    <div className='VerticalNav'>
        {console.log("Rendering Vertical Nav")}
        <VertItem changeTray={props.changeTray} item='Add button' name="Add a response/ Canned response"/>
        <VertItem changeTray={props.changeTray} item='Build' name="Responses"/>
        <VertItem changeTray={props.changeTray} item='Canned' name="Canned Responses"/>
        <VertItem changeTray={props.changeTray} item='internalEscalation' name="Internal escalation template"/>
        <VertItem changeTray={props.changeTray} item='developerEscalation' name="Developer escalation template"/>
        <VertItem changeTray={props.changeTray} item='developerEscalation' name="Handover Template"/>
        <VertItem changeTray={props.changeTray} item='developerEscalation' name="Repository"/>
        <VertItem changeTray={props.changeTray} item='noteHolder' name="Notes"/>
    </div>
    );
}

export default VerticalNav;