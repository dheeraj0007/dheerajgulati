import React from "react";

function Calendar() {
  return (
    <div className="mx-auto w-fit my-14">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=dheerajgulati544%40gmail.com&ctz=Asia%2FKolkata"
        style={{ border: 0 }}
        width="700"
        height="500"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default Calendar;
