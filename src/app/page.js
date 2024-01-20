"use client";
import dayjs from "dayjs";

const weeksIn80Years = 4174;

const birthDate = dayjs("1998-06-16");
const fromBirthTo80Years = birthDate.add(weeksIn80Years, "w");

const weeksPassed = fromBirthTo80Years.diff(birthDate, "week");

function Week({ id: week, year, decade }) {
  function onClick() {
    const currentDate = birthDate
      .add((decade - 1) * 10, "y")
      .add(year - 1, "y")
      .add(week - 1, "w");

    console.log(currentDate);
  }

  return (
    <div onClick={onClick} className="w-2 h-2 bg-black border border-black" />
  );
}

function Year({ id, decade }) {
  const weeks = [...Array(26).keys()];

  return (
    <div className="flex flex-row flex-nowrap gap-8">
      <div className="flex flex-row flex-nowrap gap-1">
        {weeks.map((item, index) => (
          <Week key={item + 1} id={item + 1} year={id} decade={decade} />
        ))}
      </div>
      <div className="flex flex-row flex-nowrap gap-1">
        {weeks.map((item, index) => (
          <Week key={item + 27} id={item + 1} year={id} decade={decade} />
        ))}
      </div>
    </div>
  );
}

function Decade({ id }) {
  const decade = [...Array(10).keys()];

  return (
    <div className="flex flex-col flex-nowrap gap-1">
      {decade.map((item, index) => (
        <Year key={item + 1} id={item + 1} decade={id} />
      ))}
    </div>
  );
}

function Life() {
  const decades = [...Array(8).keys()];

  return (
    <div className="flex flex-col gap-5">
      {decades.map((item, index) => (
        <Decade key={item + 1} id={item + 1} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen py-10 px-16">
      <div className="flex items-start pt-10 justify-center w-[15%] border border-solid border-red-700">
        <span
          className="text-8xl font-extralight"
          style={{ writingMode: "sideways-lr" }}
        >
          MEMENTO MORI
        </span>
      </div>
      <div className="flex w-[85%] border border-solid border-red-700">
        <Life />
      </div>
    </main>
  );
}
