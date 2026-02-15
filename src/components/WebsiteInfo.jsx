import Link from "./Link";

export default function WebsiteInfo({ work }) {
        let enumData = [];
    if (work.info) {
        enumData = Object.entries(work.info);
    }
    return <div className="flex flex-wrap sm:flex-nowrap bg-gray-50 p-2" >
        {
            work.info?.thumbnail && <img className="w-full sm:w-auto sm:h-40 aspect-video object-cover border-gray-200 border-2" src={work.info.thumbnail} alt={work.name} />
        }
        {
            !work.info?.thumbnail && <div className="w-full sm:w-auto sm:h-40 aspect-video bg-gray-200"></div>
        }
        {
            <div className="w-full text-left px-2 flex flex-col">
                <h2 className="text-center font-semibold px-2 py-1 border-b-2 border-b-gray-300">{work.name}</h2>
                <div className="flex flex-col justify-between flex-grow">
                    {
                        enumData && <table className="w-full mt-1">
                            <tbody>
                                {
                                    enumData.map(([key, value]) => {
                                        return key != 'type' && key != 'link' && key != 'thumbnail' && <tr key={key}><th className="px-2" scope="row">{key}</th>
                                            <td className="px-2" >
                                                {
                                                    (key == 'link') && <Link link={value} />
                                                }
                                                {
                                                    (key != 'link') &&
                                                    <span>{value}</span>
                                                }
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                                
                    }
                    
                    {
                        work.info?.link && <Link link={work.info.link} className={"mx-2 w-max"} />
                        // <a className="block text-gray-400 hover:text-gray-600" href={work.info.link.url} target="_blank">{work.info.link.type }</a>
                    }
                </div>
            </div>
        }
            

    </div>
}