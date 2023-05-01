import { useEffect, useState } from 'react';
import Image from 'next/image';
import getConfig from 'next/config';
import { useMediaListener } from '@/hooks/MediaListener';

const fetchData = async (instaUrl) => {
  const response = await fetch(instaUrl);
  const data = await response.json();
  return data.data;
};

const InstagramPosts = () => {
  const { publicRuntimeConfig } = getConfig();
  const userId = publicRuntimeConfig.INST_USER;
  const accessToken = publicRuntimeConfig.INST_ACCESS;
  const instaUrl = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}&fields=media_url`;

  const [photos, setPhotos] = useState();
  const isDesctop = useMediaListener('(min-width: 991px)');

  useEffect(() => {
    fetchData(instaUrl).then((data) => {
      setPhotos(data);
    });
  }, [userId, accessToken]);

  return (
    <div className="footer_insta">
      {photos?.map(({ media_url, id }) => (
        <Image
          src={media_url}
          width={isDesctop ? 210 : 125}
          height={isDesctop ? 210 : 125}
          alt={id}
          key={id}
          loading="lazy"
        />
      ))}
    </div>
  );
};
export default InstagramPosts;
