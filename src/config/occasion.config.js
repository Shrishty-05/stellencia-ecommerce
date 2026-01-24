import casual from "../assets/occasion-icons/casual.jpeg";
import work from "../assets/occasion-icons/workwear.jpeg";
import party from "../assets/occasion-icons/party.jpeg";
import datenight from "../assets/occasion-icons/date.jpeg";
import ethnic from "../assets/occasion-icons/ethnic.jpeg";

export const OCCASIONS = [
  {
    id: "casual",
    title: "Casual",
    image: casual,
    desktop: "col-span-2",
    mobile: "col-span-2",
  },
  {
    id: "work",
    title: "Work",
    image: work,
    desktop: "row-span-2",
    mobile: "col-span-2",
  },
  {
    id: "party",
    title: "Party",
    image: party,
    desktop: "row-span-2",
    mobile: "col-span-4",
  },
  {
    id: "date-night",
    title: "Date Night",
    image: datenight,
    desktop: "",
    mobile: "col-span-2",
  },
  {
    id: "ethnic",
    title: "Ethnic",
    image: ethnic,
    desktop: "col-span-2",
    mobile: "col-span-2",
  }

];
