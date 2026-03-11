export interface lesson {
  name: string;
  location: string;
  dateTime: number | string;
  info: string;
  infoLink: string;
  bookingLink: string;
  price: string;
}

const weeklyYogaNidra: lesson = {
  name: "Yoga Nidra",
  location: "Bradford on avon youth and community centre",
  dateTime: "Every sunday 5pm",
  info: "10-15 minutes of gentle movement followed by 30-45 minute meditative yoga nap",
  infoLink: "/yoga-nidra",
  bookingLink: "/yogaNidra",
  price: "£5 per person",
};

const privateClass: lesson = {
  name: "Private classes",
  location: "Your home or private space",
  dateTime: "Custom",
  info: "private yoga nidra or vinyasa flow lessons",
  infoLink: "/private-classes",
  bookingLink: "/privateClass",
  price: "Dependent on needs starting from £20 per hour",
};

const onlineMeditationClasses: lesson = {
  name: "Online guided meditation",
  location: "Zoom, Discord, Teams etc, open to using your preferred platform",
  dateTime: "Custom",
  info: "online guided meditation to help you relax, rest or unwind",
  infoLink: "/private-classes",
  bookingLink: "/onlineMeditation",
  price: "£5",
};

const beginnersBundle: lesson = {
  name: "Private Beginners bundle",
  location: "Your home or private space",
  dateTime: "Custom",
  info: "A bundle of 5 classes to get you practicing yoga and the confidence to flow like a pro",
  infoLink: "/private-classes",
  bookingLink: "/beginnersBundle",
  price: "£50",
};

const lessons = [
  weeklyYogaNidra,
  privateClass,
  onlineMeditationClasses,
  beginnersBundle,
];

export default lessons;
