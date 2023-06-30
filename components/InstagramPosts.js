import { useEffect, useState } from 'react';
import getConfig from 'next/config';
import { useMediaListener } from '@/hooks/MediaListener';

const fetchData = async (instaUrl) => {
  const response = await fetch(instaUrl);
  const data = await response.json();
  return data.data;
};

const InstagramPosts = ({ link }) => {
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
    <a href={link} className="footer_insta" target="_blank" rel="noopener noreferrer">
      {photos?.map(({ media_url, id }) => (
        // <Image
        //   src={media_url}
        //   width={isDesctop ? 210 : 125}
        //   height={isDesctop ? 210 : 125}
        //   alt={id}
        //   key={id}
        //   loading="lazy"
        // />
        <div className="footer_insta_item" key={id}>
          <img
            src={media_url}
            width={isDesctop ? 210 : 125}
            height={isDesctop ? 210 : 125}
            alt={id}
            // loading="lazy"
          />
        </div>
      ))}
    </a>
  );
};
export default InstagramPosts;
