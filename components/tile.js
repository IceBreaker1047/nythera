const Tile = ({ headline, text, category }) => {
    // const category_styles = {
    //     Tech: { badge: "bg-green-50 text-green-600", dot: "bg-green-500" },
    //     Economics: { badge: "bg-amber-50 text-amber-700 border border-amber-200", dot: "bg-amber-500" },
    //     Overview: { badge: "bg-zinc-100 text-zinc-500 border border-zinc-200", dot: "bg-zinc-400" }
    // }

    // const style = category_styles[category] || category_styles["Overview"]

    return (
        <div className="flex flex-col border border-gray-300 text-gray-600 p-3 rounded-md hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 hover:bg-gray-100 gap-1.5">
            {/* {category && (
                <div className="flex items-center gap-1.5 w-fit text-xs">
                    <div className={`w-1.5 h-1.5 rounded-full ${style.dot}`}></div>
                    <span className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full ${style.badge}`}>
                        {category}
                    </span>
                </div>
            )} */}
            <h2 className="text-black text-3xl font-bold">{headline}</h2>
            <div className="w-8 h-0.5 bg-gray-200 rounded-full"></div>
            <div className="text-xs">{text}</div>
        </div>
    )
}

export default Tile;