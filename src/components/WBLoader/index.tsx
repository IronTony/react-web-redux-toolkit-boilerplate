import { CSSProperties, FC } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { palette } from 'theme/theme';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

interface IWBLoader {
  color?: string;
  size?: number;
}

const WBLoader: FC<IWBLoader> = ({ color = palette.BBLUE, size = 50 }) => {
  return <MoonLoader cssOverride={override} size={size} color={color} loading />;
};

export default WBLoader;
