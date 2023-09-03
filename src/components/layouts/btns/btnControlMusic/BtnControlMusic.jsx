import React, { useEffect, useState } from 'react'

export default function BtnControlMusic() {
    const [audio, SetAudio] = useState("");

    useEffect(() => {
      SetAudio(new Audio("theme.mp3"));
    }, []);

    const Playit = () => {
      audio.play();
    };
    const Stopit = () => {
      audio.pause();
    };

    return (
      <div>
        <button onClick={Playit}>Play</button>
        <button onClick={Stopit}>Stop</button>
      </div>
    );
}
