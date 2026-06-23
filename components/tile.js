const Tile = ({ headline, text, category, maxWidth, maxHeight, imageUrl, newsUrl }) => {
    // const category_styles = {
    //     Tech: { badge: "bg-green-50 text-green-600", dot: "bg-green-500" },
    //     Economics: { badge: "bg-amber-50 text-amber-700 border border-amber-200", dot: "bg-amber-500" },
    //     Overview: { badge: "bg-zinc-100 text-zinc-500 border border-zinc-200", dot: "bg-zinc-400" }
    // }

    // const style = category_styles[category] || category_styles["Overview"]

    return (
        <div className="relative border border-gray-300 rounded-md hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 overflow-hidden" style={{ maxWidth: maxWidth, maxHeight: maxHeight }}>
            <img src={imageUrl} alt={headline} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-1.5">
                {/* {category && (
                    <div className="flex items-center gap-1.5 w-fit text-xs">
                        <div className={`w-1.5 h-1.5 rounded-full ${style.dot}`}></div>
                        <span className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full ${style.badge}`}>
                            {category}
                        </span>
                    </div>
                )} */}
                <h2 className="text-white text-3xl font-bold line-clamp-2">{headline}</h2>
                <div className="w-8 h-0.5 bg-gray-400 rounded-full"></div>
                <div className="text-xs text-gray-300 line-clamp-3">{text}</div>
            </div>
        </div>
    )
}

export default Tile;