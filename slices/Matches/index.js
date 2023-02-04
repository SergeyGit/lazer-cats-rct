import { PrismicRichText } from '@prismicio/react';
import style from '../../styles/modules/matches.module.scss';
import { PrismicNextImage } from '@prismicio/next';
import { Container } from 'react-bootstrap';
import cn from 'classnames';
import moment from 'moment';

/**
 * @typedef {import("@prismicio/client").Content.MatchesSlice} MatchesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MatchesSlice>} MatchesProps
 * @param { MatchesProps }
 */
const Matches = ({ slice }) => {
  const now = moment().utc();
  console.log(
    moment('2023-03-02T13:36:00+0000', 'YYYY-MM-DDhh:mm:ssZ, hh:mm').format('DD MMMM YYYY, hh:mm')
  );

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
        {specialData?.upcoming && (
          <>
            <div className="d-flex align-items-end flex-column flex-lg-row justify-content-between">
              <div className={cn(style.caption, 'multicolor-title h1 dark')}>
                <PrismicRichText field={slice.primary.title} />
              </div>
              <div>link</div>
            </div>
            <div className={style.matches}>
              <div className="d-flex align-items-center justify-content-center" />
              {console.log(specialData?.upcoming)}
              {specialData?.upcoming
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
                  }) => (
                    <>
                      <div
                        className={cn(
                          style.matchesLineHead,
                          'd-flex align-items-center justify-content-center'
                        )}
                      >
                        <div className={style.matchesLineHeadPoint}>{date}</div>
                        <div className={cn(style.matchesImg, 'flex-shrink-0')}>
                          <PrismicNextImage field={tournamet_logo} loading="lazy" alt="tournamet" />
                        </div>
                        <div className={style.matchesLineHeadPoint}>{name_tournament}</div>
                      </div>
                      <div>

                      </div>
                    </>
                  )
                )}
            </div>
          </>
        )}

        <div className="d-flex align-items-end flex-column flex-lg-row justify-content-between">
          <div className={cn(style.caption, 'multicolor-title h1 dark')}>
            <PrismicRichText field={slice.primary.title_second} />
          </div>
          <div>link</div>
        </div>
      </Container>
      <div className={style.bg}>
        <PrismicNextImage field={slice.primary.background} fill loading="lazy" alt="bg matches" />
      </div>
    </section>
  );
};

export default Matches;
