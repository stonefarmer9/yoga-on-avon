export interface lesson {
    name: string,
    location: string,
    dateTime: number | string,
    info: string,
    infoLink: string,
    bookingLink: string,   
    price: string
}

const weeklyYogaNidra: lesson = {
    name: "Yoga Nidra",
    location: "Bradford on avon youth and community centre",
    dateTime: "Every sunday 5pm",
    info: "10-15 minutes of gentle movement followed by 30-45 minute meditative yoga nap",
    infoLink: "/yoga-nidra",
    bookingLink: "/yogaNidra",
    price: "£10 per person",
}

const privateClass: lesson = {
  name: "Private classes",
  location: "Your home or private space",
  dateTime: "Custom",
  info: "private yoga nidra or vinyasa flow lessons",
  infoLink: "/private-classes",
  bookingLink: "/privateClass",
  price: "Dependent on needs starting from £35 per hour",
};

const lessons = [weeklyYogaNidra, privateClass];

export default lessons; 