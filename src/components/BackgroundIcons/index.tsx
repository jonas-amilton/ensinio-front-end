import React from 'react';

import CertifiedImage from '../../assets/icons/icon-certified.svg';
import PlayImageClean from '../../assets/icons/icon-playlists-first.svg';
import PlayImage from '../../assets/icons/icon-playlists.svg';
import TranscriptionImage from '../../assets/icons/icon-transcription.svg';
import Container from './styles';

const BackgroundIcons: React.FC = () => (
  <Container>
    <img alt="Video" src={PlayImageClean} />
    <img alt="Video" src={PlayImageClean} />
    <img alt="Video" src={PlayImage} />
    <img alt="Certified" src={CertifiedImage} />
    <img alt="Transcript" src={TranscriptionImage} />
  </Container>
);

export default BackgroundIcons;
