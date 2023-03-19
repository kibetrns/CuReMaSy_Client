import "../styles/calendar-picker.component.css"

const CalendarPicker = ({ type, id, name, onChange }) => {
  return (
    <div className="calendar-picker">
      <span class="material-symbols-outlined">
calendar_today
</span>

      <input  type={type} id={id} name={name} onChange={onChange} />
    </div>
  );
};

export default CalendarPicker;
