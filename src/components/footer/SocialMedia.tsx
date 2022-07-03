import { mdiInstagram, mdiTwitter, mdiYoutube } from "@mdi/js";
import Icon from "@mdi/react";
import React, { FC } from "react";
import "./SocialMedia.css";

const SocialMedia: FC = () => {
  return (
    <div className='social-media'>
      <div className='social-media__item'>
        <Icon path={mdiInstagram} size={1} />
      </div>
      <div className='social-media__item'>
        <Icon path={mdiTwitter} size={1} />
      </div>
      <div className='social-media__item'>
        <Icon path={mdiYoutube} size={1} />
      </div>
    </div>
  );
};

export default SocialMedia;
