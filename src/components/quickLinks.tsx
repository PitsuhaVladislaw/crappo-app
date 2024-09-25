import '../style/hoverAnima.css'

function QuickLinks () {
    const arrayLinks = [
        {    
            title: "Quick Link",
            array: ["Home", "Products", "About ", "Features", "Contact"]
        },
        {
            title: "Resources",
            array: ["Download Whitepapper", "Smart Token", "Blockchain Explorer", "Crypto API", "Interest"]
        }
    ];
    
    return(
        arrayLinks.map((obj, index) => (
            <article key={index} className="flex flex-col gap-9 items-start">
                <h5 className="font-rubik text-[20px] font-medium leading-[30px] text-left text-white">
                    {obj.title}
                </h5>
                <div key={index} className="flex flex-col items-start gap-1 mb-[1px] ">
                    {obj.array.map((text, key) =>(
                        <h6 
                            key={key} 
                            className="font-rubik text-base font-normal leading-[38px] text-left text-[#F2F2F2] cursor-pointer titleQuickLink"
                        >
                            {text}
                        </h6>
                    ))}
                </div>
            </article>
        ))
    )
}

export default QuickLinks;