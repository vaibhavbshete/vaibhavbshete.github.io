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
            work.info?.type == 'short-film' && <FilmInfo work={work}></FilmInfo>
        }
        {
            work.info?.type != 'short-film' && <div className="flex shadow rounded bg-gray-50 hover:bg-gray-100 p-1.5" >
            {
                work.info?.thumbnail&&<img className="h-20 rounded aspect-video object-cover" src={work.info.thumbnail} alt={work.name} />
            }
            {
                !work.info?.thumbnail&& <div className="h-20 rounded aspect-video bg-gray-200"></div>
            }

        
            {
                <div className="w-full text-left px-4">
                    <h2 className="text-center bg-gray-200 px-2">{work.name}</h2>
                    {
                        enumData && <table className="w-full">
                        <tbody>
                            {
                                
                                enumData.map(([key, value]) => {
                                
                                    return <tr key={key}><th className="px-2" scope="row">{key}</th>
                                        <td className="px-2" >
                                            {
                                                (key == 'link') && (value.platform == 'youtube') && <Link link={value} />
                                            }
                                            {
                                                (key == 'link') &&(!value.platform) && <a href={value.url} target="_blank">{value.type}</a>
                                                
                                            }
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
                    work.info?.link && 
                        <a className="block text-gray-400 hover:text-gray-600" href={work.info.link.url} target="_blank">{work.info.link.type }</a>
                    }
            </div>
            }
            

        </div>
        }
    </>

    
}