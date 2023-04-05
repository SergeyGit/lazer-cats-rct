import { useEffect, useState } from 'react';
import { STREAMS_ICONS } from '../../constants/constant';
import Image from 'next/image';

function formatNumber(num) {
  const roundedNum = Math.ceil(num / 1000) * 1000;
  const suffix = 'k';
  return (roundedNum / 1000).toFixed(0) + suffix;
}

async function fetchStreamData() {
  const response = await fetch(
    `https://api.twitch.tv/helix/streams?user_login=Burmylov&user_login=Hkta&user_login=m1she4ka&user_login=munch&user_login=Hkta`,
    {
      headers: {
        'Client-ID': 'fwovkl5f9bdpzpanjhlvpqrt12v0yh',
        Authorization: 'Bearer 1jb0abo2h7twvb7f6u1xucmdq8xuju',
      },
    }
  );
  return await response.json();
}

const OnlineStreams = () => {
  const [streamData, setStreamData] = useState();

  useEffect(() => {
    if (!streamData) {
      fetchStreamData().then(setStreamData);
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
          className="d-flex header_streams_item flex-shrink-0"
          key={user_name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="header_streams_icon flex-shrink-0">
            <Image src={STREAMS_ICONS[user_name]?.icon} alt="stream" loading="lazy" />
          </div>
          <div>
            <div className="header_streams_name">{user_name}</div>
            <div className="header_streams_view">{formatNumber(viewer_count)}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default OnlineStreams;
