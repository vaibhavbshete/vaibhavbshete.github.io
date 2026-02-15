export type link = {
    url:string,
    type: "Website"
    platform?:string
}

export type video = {
    url:string,
    type:"Full Film"|"Trailer",
    platform: 'youtube'|'vimeo'|'local',
    title?: string,
    cover?: string
}

export type filmWorkInfo = {
    type: "film",
    language: string,
    duration: string,
    thumbnail: string,
    director: string,
    producer?: string,
    dop: string,
    videos: Array<video>,
    links?: Array<link>  
}

export type websiteWorkInfo = {
    thumbnail: string,
    type: "website",
    client: string,
    poc?: string,
    link: link

}

export type work = {
    name: string,
    year: Number,
    // info: websiteInfo | filmInfo,
    link?: string,
    info: filmWorkInfo | websiteWorkInfo
}