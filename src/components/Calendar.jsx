import DateCard from "./DateCard";

const calendarData = [
  { date: 1, isHoliday: false, todos: ["운동"] },
  { date: 2, isHoliday: false, todos: ["쉬기"] },
  { date: 3, isHoliday: false, todos: ["돈벌기", "책읽기"] },
  { date: 4, isHoliday: false, todos: ["달리기"] },
  { date: 5, isHoliday: false, todos: ["운동"] },
  { date: 6, isHoliday: true, todos: ["낮잠"] },
  { date: 7, isHoliday: false, todos: ["멍때리기"] },
  { date: 8, isHoliday: false, todos: ["돈벌기"] },
  { date: 9, isHoliday: false, todos: ["낮잠"] },
  { date: 10, isHoliday: false, todos: ["책읽기", "돈벌기"] },
  { date: 11, isHoliday: false, todos: ["영화보기"] },
  { date: 12, isHoliday: false, todos: ["운동"] },
  { date: 13, isHoliday: false, todos: ["돈벌기"] },
  { date: 14, isHoliday: false, todos: ["달리기"] },
  { date: 15, isHoliday: true, todos: ["책읽기", "영화보기"] },
  { date: 16, isHoliday: false, todos: ["운동"] },
  { date: 17, isHoliday: false, todos: ["쉬기"] },
  { date: 18, isHoliday: false, todos: ["운동", "책읽기"] },
  { date: 19, isHoliday: false, todos: ["돈벌기"] },
  { date: 20, isHoliday: false, todos: ["운동"] },
  { date: 21, isHoliday: false, todos: ["쉬기"] },
  { date: 22, isHoliday: false, todos: ["책읽기", "달리기"] },
  { date: 23, isHoliday: false, todos: ["운동", "돈벌기"] },
  { date: 24, isHoliday: false, todos: ["운동"] },
  { date: 25, isHoliday: false, todos: ["책읽기"] },
  { date: 26, isHoliday: false, todos: ["운동"] },
  { date: 27, isHoliday: false, todos: ["운동", "달리기"] },
  { date: 28, isHoliday: false, todos: ["운동"] },
  { date: 29, isHoliday: false, todos: ["운동"] },
  { date: 30, isHoliday: false, todos: ["영화보기", "돈벌기"] },
  { date: 31, isHoliday: false, todos: ["운동"] },
];

const Calendar = () => {
  return (
    <ul className="bg-blue-50 grid grid-cols-7 gap-4">
      <li className="bg-purple-100 w-[120px] h-[200px] text-xl rounded-md"></li>
      <li className="bg-purple-100 w-[120px] h-[200px] text-xl rounded-md"></li>
      <li className="bg-purple-100 w-[120px] h-[200px] text-xl rounded-md"></li>
      {calendarData.map((v, i) => (
        <DateCard
          key={i}
          date={v.date}
          isHoliday={v.isHoliday}
          todos={v.todos}
        />
      ))}
      {/* <DateCard date={1} /> */}
    </ul>
  );
};

export default Calendar;
