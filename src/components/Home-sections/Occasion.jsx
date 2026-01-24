import { OCCASIONS } from "../../config/occasion.config";

export default function Occasion() {
  return (
    <section className="occassion-picks md:p-10 p-5 pb-0 w-full h-screen text-center flex flex-col justify-evenly gap-5 md:gap-10">

      <div className="occassion-title">
        <h2 className="text-2xl md:text-4xl">Occassion Picks</h2>
      </div>

      {/* small screen grid layout — SAME AS BEFORE */}
      <div className="occ-templates md:hidden basis-[80%] grid grid-cols-4 grid-rows-3 auto-rows-fr gap-[1%] px-[1%]">
        {OCCASIONS.map((item) => (
          <div
            key={item.id}
            className={`occ ${item.mobile}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <span className="occ-title">{item.title}</span>
          </div>
        ))}
      </div>

      {/* medium and above grid layout — SAME AS BEFORE */}
      <div className="occ-templates hidden md:h-full md:px-[10%] md:grid md:grid-cols-3 md:grid-rows-3 auto-rows-fr gap-1">
        {OCCASIONS.map((item) => (
          <div
            key={item.id}
            className={`occ ${item.desktop}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <span className="occ-title">{item.title}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
