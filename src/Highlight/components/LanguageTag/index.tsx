import { ThemeType } from '@/Highlight/theme/type';
import { Tag, type TagProps as AntTagProps } from 'antd';
import Color from 'color';
import { ReactNode } from 'react';
import { createStyles } from '../../../theme';
import { getThemeColor } from '../../theme/colors';

const useStyles = createStyles(({ cx, css, token }, { prefixCls, theme }) => {
  const prefix = `${prefixCls}`;

  const { colorFillTertiary, colorText, colorTextSecondary } = getThemeColor(theme === 'dark');

  const background = Color(colorFillTertiary)
    .mix(Color(theme === 'dark' ? 'white' : 'black'), 0.03)
    .alpha(0.9)
    .hsl()
    .string();

  return {
    small: cx(
      `${prefix}-tag-small`,
      css`
        padding: 2px 6px;
        line-height: 1;
      `,
    ),
    lang: cx(
      css`
        position: absolute;
        z-index: 2;
        right: 0;
        bottom: 8px;
        background-color: ${background};
        font-family: ${token.fontFamilyCode};
        color: ${colorTextSecondary};
        transition: opacity 0.1s;
      `,
    ),
    tag: cx(
      `${prefix}-tag`,
      css`
        color: ${colorText} !important;
        border-radius: ${token.borderRadius}px;
        P &:hover {
          color: ${colorText};
          background: ${token.colorFill};
        }
      `,
    ),
  };
});

export interface TagProps extends AntTagProps {
  icon?: ReactNode;
  size?: 'default' | 'small';
  theme?: ThemeType;
  prefixCls?: string;
}

const LanguageTag: React.FC<TagProps> = (props) => {
  const { children, size = 'default', theme = 'light', prefixCls } = props || {};
  const { styles, cx } = useStyles({ theme, prefixCls });

  return (
    <Tag bordered={false} className={cx(styles.tag, styles.lang, size === 'small' && styles.small)}>
      {children}
    </Tag>
  );
};

export default LanguageTag;
