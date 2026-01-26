import { Link } from "react-router-dom";
import { OCCASIONS } from "../../config/occasion.config";

export default function Occasion() {
  return (
    <section className="occassion-picks md:p-10 p-5 pb-0 w-full h-screen text-center flex flex-col gap-5">

      <h2 className="text-2xl md:text-4xl">Occasion Picks</h2>

      {/* Mobile */}
      <div className="md:hidden grid grid-cols-4 grid-rows-3 gap-1">
        {OCCASIONS.map((item) => (
          <Link
            key={item.id}
            to={`/plp/${item.slug}`}
            className={`occ ${item.mobile}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <span className="occ-title">{item.title}</span>
          </Link>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-3 md:grid-rows-3 gap-1">
        {OCCASIONS.map((item) => (
          <Link
            key={item.id}
            to={`/plp/${item.slug}`}
            className={`occ ${item.desktop}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <span className="occ-title">{item.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
