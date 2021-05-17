// == Import npm
import React, { useState } from 'react';

// == Import
import Sound from 'react-sound';
import HopeIsNotLost from '../../sound/HopeIsNotLost.mp3';
import './playsound.scss';

// == Composant
const PlaySound = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="playsound">
      <Sound
        url={HopeIsNotLost}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        loop
      />
      <button className="play-sound-theme" type="button" onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? 'Play' : 'Stop'}
      </button>
    </div>
  );
};

export default PlaySound;
