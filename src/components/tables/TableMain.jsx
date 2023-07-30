export default function TableMain(props){
    return(
        <div className={`absolute ${props.position} p-[1px] flex flex-col border border-r-black border-b-black border-l-white border-t-white ${props.h} ${props.w} + ${props.color}`}>
            <div className="bg-gradient-to-r from-green-700 to-green-500 text-[10px] text-white pl-1"><p>{props.title}</p></div>
            <div className={`flex p-4 `}>
                {props.children}
            </div>
        </div>
        
    )
}