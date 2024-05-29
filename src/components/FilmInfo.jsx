import Link from "./Link"
export default function FilmInfo({ work }) {
    let info = work.info
    info.year = work.year

    return <div className="bg-gray-50 max-w-prose mx-auto">
        {info.thumbnail &&<img className="aspect-video w-full object-cover" src={info.thumbnail} alt={work.name} />}
        {!info.thumbnail &&<div className="aspect-video w-full bg-gray-200 flex items-center justify-center"  >{work.name}</div>}
        <h2 className="font-bold text-lg px-2 mt-3">{work.name}</h2>
        <div className="px-2">
            <span className="">{info.year}</span>
            {info.duration && <span className=""> &bull; {info.duration}</span>}
            {info.language && <span className=""> &bull; {info.language}</span>}
        </div>
        <hr className="mx-3"/>
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
        <hr className="mx-6 border-2 border-gray-400 border-dashed"/>
        <div className="mt-3 px-2 pb-2 flex">
            {info.links.map((link) => {
                return <Link link={link} />
            })}
        </div>
            </>
        }
    </div>
}