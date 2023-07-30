export default function TableInfo(props){
    return(
        <div className="fixed top-0 flex flex-col p-1 w-48 bg-zinc-400 z-10 border border-l-white border-t-white border-b-black border-r-black">
            <div className="bg-gradient-to-r from-green-700 to-green-500 text-[10px] text-white">
                <p>Resources</p>
            </div>
            <p className="text-sm">{props.children}</p>
        </div>
    )
}