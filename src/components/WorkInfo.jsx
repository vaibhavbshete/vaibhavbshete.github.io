import Link from "./Link";
import FilmInfo from "./FilmInfo";

export default function WorkInfo({work}) {
    // console.log(work);
    let enumData = [];
    if (work.info) {
        enumData = Object.entries(work.info);
    }
    // console.log(enumData);
    return <>
        {
            work.info?.type == 'film' && <FilmInfo work={work}></FilmInfo>
        }
        {
            work.info?.type != 'film' && <div className="flex flex-wrap sm:flex-nowrap bg-gray-50 " >
            {
                work.info?.thumbnail&&<img className="w-full sm:w-auto sm:h-40 aspect-video object-cover" src={work.info.thumbnail} alt={work.name} />
            }
            {
                !work.info?.thumbnail&& <div className="w-full sm:w-auto sm:h-40 aspect-video bg-gray-200"></div>
            }

        
            {
                <div className="w-full text-left px-2">
                    <h2 className="text-center font-semibold px-2 py-1">{work.name}</h2>
                    {
                        enumData && <table className="w-full mt-1">
                        <tbody>
                            {
                                
                                enumData.map(([key, value]) => {
                                
                                    return key !='type' && key!='link' && key!='thumbnail' && <tr key={key}><th className="px-2" scope="row">{key}</th>
                                        <td className="px-2" >
                                            {
                                                (key == 'link') && <Link link={value} />
                                            }
                                            {/* {
                                                (key == 'link') &&(!value.platform) && <a href={value.url} target="_blank">{value.type}</a>
                                                
                                            } */}
                                            {
                                                (key != 'link') &&
                                                <span>{value}</span>
                                            }
                                            
                                        </td>
                                    </tr>
                                } )
                            }
                                {/* <tr><th className="px-2" scope="row">Director</th><td className="px-2" >{ work.data.director}</td></tr>
                                <tr><th className="px-2" scope="row">DoP</th><td className="px-2" >{work.data.dop}</td></tr>
                                <tr><th className="px-2" scope="row">Duration</th><td className="px-2" >{  work.data.duration}</td></tr> */}
                        </tbody>
                    
                    </table>
                    }
                    
                    {
                    work.info?.link && <Link link={work.info.link} className={"mx-2 mt-3"} />
                        // <a className="block text-gray-400 hover:text-gray-600" href={work.info.link.url} target="_blank">{work.info.link.type }</a>
                    }
            </div>
            }
            

        </div>
        }
    </>

    
}