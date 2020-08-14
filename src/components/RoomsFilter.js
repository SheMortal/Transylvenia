import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

// get unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))]; //using dynamic prop
};

export default function RoomsFilter({ rooms }) {
  // accessing the content
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  //   get unique types
  let types = getUnique(rooms, "type");

  //   add all types
  types = ["all", ...types];

  // Types: map to JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // Guests: get unique types and  map to JSX
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        {/* select type */}
        <div className="form-goup">
          <label htmlFor="type">Room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* guest */}
        <div className="form-goup">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guest */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">Room price R{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/*end room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </label>
        </div>
        {/* end size */}
        {/* extras */}
        <div className="form-group">
            <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
            <label htmlFor="breakfast">Breakfast</label>
            </div>
            <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
            <label htmlFor="pets">Pets</label>
            </div>
        </div>
        {/*end  extras */}
      </form>
    </section>
  );
}
