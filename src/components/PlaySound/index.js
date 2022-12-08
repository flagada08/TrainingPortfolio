// == Import npm
import React, { useState } from 'react';

// == Import
import Sound from 'react-sound';
import HopeIsNotLost from '../../sound/HopeIsNotLost.mp3';
import './playsound.scss';

// == Composant
const PlaySound = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`playsound ${!isPlaying ? '' : 'bg-animated'}`}>{children}
      <Sound
        url={HopeIsNotLost}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        volume={50}
        autoplay
        loop
      />
      <h4>SoundTheme</h4>
      <button className="play-sound-theme" type="button" onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? 'Play' : 'Stop'}
      </button>
    </div>
  );
};

export default PlaySound;
