export default function ButtonMain(props){
    return <button onClick={props.event} className={"flex flex-col justify-center items-center h-8 w-32 text-xs border border-l-white border-t-white border-b-black border-r-black " + props.color}>
        <p className="text-xs">{props.name}</p>
        <p className="text-xs">costs {props.price} knowledge</p>
        </button>
}