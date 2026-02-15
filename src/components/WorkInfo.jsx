import FilmInfo from "./FilmInfo";
import WebsiteInfo from "./WebsiteInfo";

export default function WorkInfo({work}) {
    // console.log(work);

    // console.log(enumData);
    return <>
        {
            work.info?.type == 'film' && <FilmInfo work={work}></FilmInfo>
        }
        {
            work.info?.type == 'website' && <WebsiteInfo work={work}/>
        }
    </>

    
}