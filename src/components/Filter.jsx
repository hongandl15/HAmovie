import React from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';

export default function Filter() {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/explore/${e.target.sort.value}`,{
    sort: e.target.sort.value
    })
 };

  return (
    <div className='filter'>
      <div className='filter_tags'>
      <select id="type" name="type">
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Animation">Animation</option>
        <option value="Comedy">Comedy</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Documentary">Documentary</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Horror">Horror</option>
        <option value="Thriller">Thriller</option>
      </select>

        <div className="filter_box">
          <div className='filter_date'>
            <div className="filter_date_title"> Release Dates</div>
            <label htmlFor="start">From</label>
            <input name="start" className="datepicker" type="date" />
            <label htmlFor="stop">To</label>
            <input name="stop" className="datepicker" type="date" />
          </div>
          <div className="filter_sort">
            Sort
            <form onSubmit={handleSubmit}>
                  <select id="sort" name="sort">
                    <option value="popularity">Popularity</option>
                    <option value="release_date">Release date</option>
                    <option value="vote_average">Rating</option>
                  </select>
                <button className="buttongo" type="submit">Go</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
