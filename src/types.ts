export type link = {
    "url":"https://arkevents.co.in",
    "type":"Website"
}

export type video = {
    "url":"https://youtu.be/jSbbKd3N3Sw",
    "type":"Full Film",
    "platform": "youtube",
    title?: string,
    cover?: string
}

export type filmWorkInfo = {
    "type": "film",
    "language": "Marathi",
    "duration": "12min",
    "thumbnail": "img/thumbnail-kavadse.webp",
    "director": "Sameer Kulkarni",
    "producer": "Milind Soman",
    "dop": "Utkarsh Marulkar",
    "videos": Array<video>,
    links?: Array<link>  
}

export type websiteWorkInfo = {
    "thumbnail": "img/ark-horiz.webp",
    "type": "website",
    "Client": "Ark Events and Entertainment, Pune",
    "Person of Contact": "Pratiksha Bharti",
    "link": link

}

export type work = {
    name: string,
    year: Number,
    // info: websiteInfo | filmInfo,
    link?: string,
    info: filmWorkInfo | websiteWorkInfo
}