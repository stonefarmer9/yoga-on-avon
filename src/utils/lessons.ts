export interface lesson {
    name: string,
    location: string,
    dateTime: number | string,
    info: string,
    link: string   
    price: number 
}

const weeklyYogaNidra: lesson = {
    name: "Yoga Nidra",
    location: "Bradford on avon youth and community centre",
    dateTime: "Every sunday 5pm",
    info: "10-15 minutes of gentle movement followed by 30-45 minute meditative yoga nap",
    link: "/yoga-nidra",
    price: 10,
}

export default [weeklyYogaNidra] 