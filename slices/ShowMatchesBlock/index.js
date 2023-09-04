import React, { useContext } from 'react';
import { MatchesContext } from '../../context/MatchecsContext';
import Matches from '../Matches';

/**
 * @typedef {import("@prismicio/client").Content.ShowMatchesBlockSlice} ShowMatchesBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ShowMatchesBlockSlice>} ShowMatchesBlockProps
 * @param { ShowMatchesBlockProps }
 */
const ShowMatchesBlock = ({ slice }) => {
  const { matchesData } = useContext(MatchesContext);
  if (!matchesData?.data?.slices[0] || !slice.primary.matches) return null;
  return <Matches slice={matchesData?.data?.slices[0]} />;
};

export default ShowMatchesBlock;
