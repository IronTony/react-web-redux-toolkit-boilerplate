import { css } from '@emotion/react';
import { FC } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { palette } from 'theme/theme';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

interface IWBLoader {
  color?: string;
  size?: number;
}

const WBLoader: FC<IWBLoader> = ({ color = palette.BBLUE, size = 50 }) => {
  return <MoonLoader css={override} size={size} color={color} loading />;
};

export default WBLoader;
