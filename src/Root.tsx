import { Composition, staticFile } from 'remotion';
import Main, { MainSchema } from './Composition/Composition';
import { Compare } from './Composition/Compare';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Template"
        component={Main}
        schema={MainSchema}
        fps={30}
        width={1920}
        height={1080}
        durationInFrames={900}
        defaultProps={{
          audioVolume: 0.5,
          music: staticFile('Music.mp3'),
          colors: {
            background: '#151515',
            backgroundText: '#FFFFFF',
            black: '#000000',
            white: '#FFFFFF',
            primary: '#f00',
            primaryText: '#FFFFFF',
            secondary: '#5118DB',
            secondaryText: '#f00',
            accent: '#FFFF08',
            accentText: '#f00',
          },
          background: {
            type: 'static',
            background: 'background',
          },
          fonts: {
            primary: 'Montserrat',
            secondary: 'Abel',
          },
          transitionDuration: 50,
          scene1Duration: 150,
          scene1Props: {
            logo: staticFile('Logo.png'),
            img: staticFile('Media_5.jpg'),
          },
          scene2Duration: 180,
          scene2Props: {
            logo: staticFile('Logo.png'),
            img: staticFile('Media_1.jpg'),
            title: "A MARINE \n VETERAN DEDICATED \n TO FIGHTING FOR \n AMERICA'S FUTURE",
          },
          scene3Duration: 180,
          scene3Props: {
            logo: staticFile('Logo.png'),
            img: staticFile('Media_2.jpg'),
            title:
              ' TOO MANY LEADERS FORGET THE VALUE OF SERVICE, INTEGRITY, AND TRUE REPRESENTATION',
          },
          scene4Duration: 180,
          scene4Props: {
            logo: staticFile('Logo.png'),
            img: staticFile('Media_3.jpg'),
            title:
              'bATTLEFIELD-TESTED LEADERSHIP AND COMMITMENT TOFIGHT FOR MEMBERS AND WOMEN IN LEADER',
          },
          scene5Duration: 180,
          scene5Props: {
            logo: staticFile('Logo.png'),
            img: staticFile('Media_4.jpg'),
            title:
              'ALEADER WHO EMBODIES INTEGRITY, CHAMPIONS THE PEOPLE, AND INSPIRES FUTIURE GENERATIONS',
          },
          scene6Duration: 180,
          scene6Props: {
            logo: staticFile('Logo.png'),
            img: staticFile('Media_5.jpg'),
            title1: 'Join Amy McGrath today',
            title2: 'WWW.aAMYMCGRATH.COM',
          },
        }}
      />
      <Composition
        id="Compare"
        component={Compare}
        schema={MainSchema}
        fps={30}
        width={1920 * 2}
        height={1080}
        durationInFrames={900}
        defaultProps={{
          audioVolume: 0.5,
          music: staticFile('Music.mp3'),
          colors: {
            background: '#151515',
            backgroundText: '#FFFFFF',
            black: '#000000',
            white: '#FFFFFF',
            primary: '#f00',
            primaryText: '#FFFFFF',
            secondary: '#5118DB',
            secondaryText: '#f00',
            accent: '#FFFF08',
            accentText: '#f00',
          },
          background: {
            type: 'static',
            background: 'background',
          },
          fonts: {
            primary: 'Montserrat',
            secondary: 'Abel',
          },
          transitionDuration: 50,
          scene1Duration: 150,
          scene1Props: {
            logo: staticFile('Logo.png'),
            img: staticFile('Media_5.jpg'),
          },
          scene2Duration: 180,
          scene2Props: {
            logo: staticFile('Logo.png'),
            img: staticFile('Media_1.jpg'),
            title: "A MARINE \n VETERAN DEDICATED \n TO FIGHTING FOR \n AMERICA'S FUTURE",
          },
          scene3Duration: 180,
          scene3Props: {
            logo: staticFile('Logo.png'),
            img: staticFile('Media_2.jpg'),
            title: "A MARINE \n VETERAN DEDICATED \n TO FIGHTING FOR \n AMERICA'S FUTURE",
          },
          scene4Duration: 180,
          scene4Props: {
            logo: staticFile('Logo.png'),
            img: staticFile('Media_3.jpg'),
            title: "A MARINE \n VETERAN DEDICATED \n TO FIGHTING FOR \n AMERICA'S FUTURE",
          },
          scene5Duration: 180,
          scene5Props: {
            logo: staticFile('Logo.png'),
            img: staticFile('Media_4.jpg'),
            title: "A MARINE \n VETERAN DEDICATED \n TO FIGHTING FOR \n AMERICA'S FUTURE",
          },
          scene6Duration: 180,
          scene6Props: {
            logo: staticFile('Logo.png'),
            img: staticFile('Media_5.jpg'),
            title1: "A MARINE \n VETERAN DEDICATED \n TO FIGHTING FOR \n AMERICA'S FUTURE",
            title2: "A MARINE \n VETERAN DEDICATED \n TO FIGHTING FOR \n AMERICA'S FUTURE",
          },
        }}
      />
    </>
  );
};
