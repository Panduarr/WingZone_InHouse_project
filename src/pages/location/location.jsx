import { useState } from "react";
import IndiaSVG from "../../assets/india.svg?react";

const stateMap = [
  { id: "anan", name: "Andaman and Nicobar" },
  { id: "ap", name: "Andhra Pradesh" },
  { id: "ar", name: "Arunachal Pradesh" },
  { id: "as", name: "Assam" },
  { id: "br", name: "Bihar" },
  { id: "ch", name: "Chandigarh" },
  { id: "ct", name: "Chhattisgarh" },
  { id: "dh", name: "Dadra and Nagar Haveli and Daman and Diu" },
  { id: "dl", name: "Delhi" },
  { id: "ga", name: "Goa" },
  { id: "gj", name: "Gujarat" },
  { id: "hp", name: "Himachal Pradesh" },
  { id: "hr", name: "Haryana" },
  { id: "jh", name: "Jharkhand" },
  { id: "jk", name: "Jammu and Kashmir" },
  { id: "ka", name: "Karnataka" },
  { id: "kl", name: "Kerala" },
  { id: "la", name: "Ladakh" },
  { id: "ld", name: "Lakshadweep" },
  { id: "mh", name: "Maharashtra" },
  { id: "ml", name: "Meghalaya" },
  { id: "mn", name: "Manipur" },
  { id: "mp", name: "Madhya Pradesh" },
  { id: "mz", name: "Mizoram" },
  { id: "nl", name: "Nagaland" },
  { id: "or", name: "Odisha" },
  { id: "pb", name: "Punjab" },
  { id: "py", name: "Puducherry" },
  { id: "rj", name: "Rajasthan" },
  { id: "sk", name: "Sikkim" },
  { id: "tg", name: "Telangana" },
  { id: "tn", name: "Tamil Nadu" },
  { id: "tr", name: "Tripura" },
  { id: "up", name: "Uttar Pradesh" },
  { id: "ut", name: "Uttarakhand" },
  { id: "wb", name: "West Bengal" },
];

function IndiaMap() {
  const [selected, setSelected] = useState("");

  const handleClick = (e) => {
    if (e.target.tagName !== "path") return;

    const title = e.target.getAttribute("title");
    if (!title) return;

    document
      .querySelectorAll(".india-map path")
      .forEach((p) => p.classList.remove("fill-orange-500"));

    e.target.classList.add("fill-orange-500");
    setSelected(title);
  };

  return (
    <div className="flex flex-row justify-center bg-gray-50">
      {/* Map */}
      <IndiaSVG
        className="india-map w-3xl h-auto cursor-pointer relative"
        onClick={handleClick}
      />

      {/* Selected State */}
      <div className="border-b-2 w-2/4 h-2/4 rotate-90 absolute top-60 left-180 max-w-full">
        </div>
      <div className="text-xl font-semibold mt-60">
        ➤ 
        <span className=" text-orange-500"> {selected || "None"}</span>
      </div>
    </div>
  );
}

export default IndiaMap;
