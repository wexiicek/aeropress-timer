import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import bell from "../sounds/bell.mp3";

const Timer = ({ data, setData }) => {
  const [playSound] = useSound(bell);

  const [active, setActive] = useState("");

  const [activeTimer, setActiveTimer] = useState(0);

  const [greetings, setGreetings] = useState(false);

  useEffect(() => {
    console.log(data);
    const times = [
      parseInt(data.input.pourTime) * 1000,
      parseInt(data.input.stirTime) * 1000,
      parseInt(data.input.brewTime) * 1000,
    ];
    if (data.input.length !== 0) {
      setActive((active) => "pour");
      setActiveTimer(times[0] / 1000);
      let countdown = setInterval(() => {
        setActiveTimer((activeTimer) => activeTimer - 1);
      }, 1000);
      setTimeout(() => {
        if (data.useSound) {
          playSound();
        }
        setActive((active) => "stir");
        setActiveTimer(times[1] / 1000);
        clearInterval(countdown);
        countdown = setInterval(() => {
          setActiveTimer((activeTimer) => activeTimer - 1);
        }, 1000);
        setTimeout(() => {
          if (data.useSound) {
            playSound();
          }
          setActive((active) => "brew");
          setActiveTimer(times[2] / 1000);
          clearInterval(countdown);
          countdown = setInterval(() => {
            setActiveTimer((activeTimer) => activeTimer - 1);
          }, 1000);
          setTimeout(() => {
            if (data.useSound) {
              playSound();
            }
            setActive((active) => "");
            clearInterval(countdown);
            setGreetings((greetings) => true);
            setData({ ...data, input: [] });
            setTimeout(() => {
              setGreetings(false);
            }, 3000);
          }, times[2] + 1000);
        }, times[1] + 1000);
      }, times[0] + 1000);
    }
  }, [data, setData, playSound]);

  return (
    <div className="progress">
      {active !== "" && <h2>Active Timer Progress</h2>}
      {active === "pour" && <h3>Pouring</h3>}
      {active === "stir" && <h3>Stirring</h3>}
      {active === "brew" && <h3>Brewing</h3>}
      {active !== "" && <p>{activeTimer}</p>}
      {greetings && (
        <h3>
          Enjoy Your Coffee!{" "}
          <span role="img" aria-label="Coffee emoji">
            ☕
          </span>{" "}
        </h3>
      )}
    </div>
  );
};

export default Timer;
