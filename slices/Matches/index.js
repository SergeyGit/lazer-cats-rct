import { PrismicLink, PrismicRichText } from '@prismicio/react';
import style from '../../styles/modules/matches.module.scss';
import { PrismicNextImage } from '@prismicio/next';
import { Container } from 'react-bootstrap';
import cn from 'classnames';
import moment from 'moment';
// import { useEffect, useState } from 'react';

/**
 * @typedef {import("@prismicio/client").Content.MatchesSlice} MatchesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MatchesSlice>} MatchesProps
 * @param { MatchesProps }
 */

// async function fetchStreamData() {
//   const response = await fetch(`https://api.twitch.tv/helix/schedule?broadcaster_id=874081470`, {
//     headers: {
//       'Client-ID': 'fwovkl5f9bdpzpanjhlvpqrt12v0yh',
//       Authorization: 'Bearer 1jb0abo2h7twvb7f6u1xucmdq8xuju',
//     },
//   });
//   return await response.json();
// }

const getWinner = (score) => {
  // Удаление пробелов из строки
  const cleanedScore = score?.replace(/\s/g, '');
  // Разделение строки на числа
  const [leftScore, rightScore] = cleanedScore.split(':');
  // Преобразование чисел из строкового формата в числовой формат
  const leftScoreNumber = parseInt(leftScore, 10) || 0;
  const rightScoreNumber = parseInt(rightScore, 10) || 0;

  if (leftScoreNumber > rightScoreNumber) {
    return 'Left';
  }
  if (leftScoreNumber < rightScoreNumber) {
    return 'Right';
  }
  return '';
};

const Matches = ({ slice }) => {
  const now = moment().utc();

  // const [streamData, setStreamData] = useState();
  //
  // useEffect(() => {
  //   if (!streamData) {
  //     fetchStreamData().then(setStreamData);
  //   }
  // }, []);
  // console.log(streamData);

  const specialData = slice?.items?.reduce(
    (prev, current) => {
      if (now.isBefore(moment(current.date).utc())) {
        return {
          ...prev,
          upcoming: [
            ...prev.upcoming,
            {
              ...current,
              date: moment(current.date, 'YYYY-MM-DDhh:mm:ssZ, hh:mm').format(
                'DD MMMM YYYY, hh:mm'
              ),
            },
          ],
        };
      }
      return {
        ...prev,
        past: [
          ...prev.past,
          {
            ...current,
            date: moment(current.date, 'YYYY-MM-DDhh:mm:ssZ, hh:mm').format('DD MMMM YYYY, hh:mm'),
          },
        ],
      };
    },
    {
      upcoming: [],
      past: [],
    }
  );

  function compareDate(d1, d2) {
    if (d1.date < d2.date) {
      return -1;
    }
    if (d1.date > d2.date) {
      return 1;
    }
    return 0;
  }

  return (
    <section className={style.section}>
      <Container>
        {!!specialData?.upcoming.length && (
          <>
            <div className="d-flex align-items-start align-items-lg-end flex-column flex-lg-row justify-content-between">
              <div className={'multicolor-title h1 dark'}>
                <PrismicRichText field={slice.primary.title} />
              </div>
              <div className={cn(style.seeAll, 'link dark')}>
                <PrismicLink field={slice.primary.link_upcoming}>
                  {slice.primary.text_link_upcoming}
                </PrismicLink>
              </div>
            </div>
            <div className={cn(style.matches, style.first)}>
              <div className="d-flex align-items-center justify-content-center" />
              {specialData.upcoming
                .sort(compareDate)
                .map(
                  ({
                    date,
                    tournamet_logo,
                    name_tournament,
                    team_name,
                    team_logo,
                    team_name_2,
                    team_logo_2,
                  }) => (
                    <div className={style.matchesItem} key={date}>
                      <div
                        className={cn(
                          style.matchesLineHead,
                          'd-flex align-items-center justify-content-center'
                        )}
                      >
                        <div className={style.matchesLineHeadPoint}>{date}</div>
                        <div className={cn(style.matchesImg, 'image-content flex-shrink-0')}>
                          <PrismicNextImage field={tournamet_logo} loading="lazy" alt="tournamet" />
                        </div>
                        <div className={style.matchesLineHeadPoint}>{name_tournament}</div>
                      </div>
                      <div className={cn(style.matchesLineBody, 'd-flex align-items-center')}>
                        <div className={style.matchesLineHeadPoint}>
                          <div className="d-inline-flex align-items-center">
                            <div className={cn(style.teamName, ' f-w-b')}>{team_name}</div>
                            <div className={cn(style.teamImg, 'image-content flex-shrink-0')}>
                              <PrismicNextImage field={team_logo} loading="lazy" alt="team" />
                            </div>
                          </div>
                        </div>
                        <div
                          className={cn(
                            style.score,
                            'f-w-b align-self-stretch d-flex align-items-center justify-content-center flex-shrink-0 text-center'
                          )}
                        >
                          VS
                        </div>
                        <div className={style.matchesLineHeadPoint}>
                          <div className="d-inline-flex align-items-center">
                            <div className={cn(style.teamImg, 'image-content flex-shrink-0')}>
                              <PrismicNextImage field={team_logo_2} loading="lazy" alt="team 2" />
                            </div>
                            <div className={cn(style.teamName, ' f-w-b')}>{team_name_2}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
          </>
        )}
        {specialData?.past && (
          <>
            <div className="d-flex align-items-start align-items-lg-end flex-column flex-lg-row justify-content-between">
              <div className={'multicolor-title h1 dark'}>
                <PrismicRichText field={slice.primary.title_second} />
              </div>
              <div className={cn(style.seeAll, 'link dark')}>
                <PrismicLink field={slice.primary.link_past}>
                  {slice.primary.text_link_past}
                </PrismicLink>
              </div>
            </div>
            <div className={style.matches}>
              <div className="d-flex align-items-center justify-content-center" />
              {specialData.past
                .sort(compareDate)
                .map(
                  ({
                    date,
                    tournamet_logo,
                    name_tournament,
                    team_name,
                    team_logo,
                    team_name_2,
                    team_logo_2,
                    score,
                  }) => {
                    const winner = getWinner(score);
                    return (
                      <div className={style.matchesItem} key={date}>
                        <div
                          className={cn(
                            style.matchesLineHead,
                            'd-flex align-items-center justify-content-center'
                          )}
                        >
                          <div className={style.matchesLineHeadPoint}>{date}</div>
                          <div className={cn(style.matchesImg, 'image-content flex-shrink-0')}>
                            <PrismicNextImage
                              field={tournamet_logo}
                              loading="lazy"
                              alt="tournamet"
                            />
                          </div>
                          <div className={style.matchesLineHeadPoint}>{name_tournament}</div>
                        </div>
                        <div className={cn(style.matchesLineBody, 'd-flex align-items-center')}>
                          <div className={style.matchesLineHeadPoint}>
                            <div className="d-inline-flex align-items-center">
                              <div className={cn(style.teamName, ' f-w-b')}>{team_name}</div>
                              <div className={cn(style.teamImg, 'image-content flex-shrink-0')}>
                                <PrismicNextImage field={team_logo} loading="lazy" alt="team" />
                              </div>
                            </div>
                          </div>
                          <div
                            className={cn(
                              style.score,
                              {
                                [style.win]: winner,
                                [style.right]: winner === 'Right',
                              },
                              'f-w-b align-self-stretch d-flex align-items-center justify-content-center flex-shrink-0 text-center'
                            )}
                          >
                            {score?.length ? score : 'VS'}
                          </div>
                          <div className={style.matchesLineHeadPoint}>
                            <div className="d-inline-flex align-items-center">
                              <div className={cn(style.teamImg, 'image-content flex-shrink-0')}>
                                <PrismicNextImage field={team_logo_2} loading="lazy" alt="team 2" />
                              </div>
                              <div className={cn(style.teamName, ' f-w-b')}>{team_name_2}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
            </div>
          </>
        )}
      </Container>
      <div className={style.bg}>
        <PrismicNextImage field={slice.primary.background} fill loading="lazy" alt="bg matches" />
      </div>
    </section>
  );
};

export default Matches;
