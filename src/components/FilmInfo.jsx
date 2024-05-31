import Link from "./Link"
export default function FilmInfo({ work }) {
    let info = work.info
    info.year = work.year

    return <div className="bg-gray-50 mx-auto flex items-center md:items-start flex-col md:flex-row">
        <div className="aspect-square p-2 bg-gray-200 w-52 h-52 md:w-64 md:h-64 max-w-full">
            {info.thumbnail &&<img className="w-full h-full object-contain" src={info.thumbnail} alt={work.name} />}
            {!info.thumbnail &&<div className="w-full h-full  flex items-center justify-center"  >{work.name}</div>}
        </div>
        <div className="max-w-prose w-full">
            <h2 className="font-bold text-lg px-2 mt-3">{work.name}</h2>
            <div className="px-2">
                <span className="">{info.year}</span>
                {info.duration && <span className=""> &bull; {info.duration}</span>}
                {info.language && <span className=""> &bull; {info.language}</span>}
            </div>
            <hr className="mx-6 border border-gray-200 border-dashed"/>
            <div className="mt-3 px-2 pb-2 flex gap-4 flex-wrap">
                {info.director && <div><small className="font-bold">Director</small><div className="">{info.director}</div></div>}
                {info.dop && <div><small className="font-bold">DoP</small><div className="">{info.dop}</div></div>}
                {info.producer && <div><small className="font-bold">Producer</small><div className="">{info.producer}</div></div>}
                {/* <table>
                    <tbody>
                        <tr>
                            <th>Director</th>
                            <td>{info.director}</td>
                        </tr>
                        <tr>
                            <th>DoP</th>
                            <td>{info.dop}</td>
                        </tr>
                    </tbody>
                </table> */}
            </div>
            {info.links?.length && <>
                <hr className="mx-6 border border-gray-200 border-dashed"/>
                <div className="mt-3 px-2 pb-2 flex">
                    {info.links.map((link) => {
                        return <Link link={link} key={link.url } />
                    })}
                </div>
            </>
        }
        </div>
    </div>
}