import { useEffect, useState, startTransition } from 'react';
import { STREAMS_ICONS } from '../../constants/constant';
import Image from 'next/image';

function formatNumber(num) {
  const roundedNum = Math.ceil(num / 1000) * 1000;
  const suffix = 'k';
  return (roundedNum / 1000).toFixed(0) + suffix;
}

async function fetchStreamData() {
  const response = await fetch(
    `https://api.twitch.tv/helix/streams?user_login=Burmylov&user_login=Hkta&user_login=m1she4ka&user_login=munch&user_login=Hkta&user_login=lzrcats`,
    {
      headers: {
        'Client-ID': 'jbmzacqpwuqbypn6klo68ec9zbq2lg',
        Authorization: 'Bearer u9hyyjx6e0jygcdesf3yd5jygsbvcb',
      },
    }
  );
  return await response.json();
}

const OnlineStreams = () => {
  const [streamData, setStreamData] = useState();

  useEffect(() => {
    if (!streamData) {
      startTransition(() => {
        fetchStreamData().then(setStreamData);
      });
    }
  }, []);

  if (!streamData || !streamData?.data?.length) {
    return null;
  }

  return (
    <div className="d-flex header_streams">
      {streamData.data.map(({ user_name, viewer_count }) => (
        <a
          href={`https://www.twitch.tv/${user_name}`}
          className="d-flex header_streams_item flex-shrink-0 "
          key={user_name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="header_streams_icon flex-shrink-0">
            <Image src={STREAMS_ICONS[user_name.toLowerCase()]?.icon} alt="stream" loading="lazy" />
          </div>
          <div>
            <div className="header_streams_name">{user_name}</div>
            <div className="header_streams_view">{formatNumber(viewer_count)} viewers</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default OnlineStreams;
