import Color from 'color';
import { STUDIO_UI_PREFIX, createStyles } from '../theme';
import { getThemeColor } from './theme/colors';

interface IHighlightStyleProps {
  type: 'pure' | 'block';
  theme: 'light' | 'dark';
  prefixCls: string;
}

export const useStyles = createStyles(
  ({ css, cx, token }, { prefixCls, theme, type }: IHighlightStyleProps) => {
    const prefix = `${prefixCls}`;
    const { colorFillTertiary, colorText, colorTextSecondary } = getThemeColor(theme === 'dark');

    const typeStylish = css`
      background-color: ${type === 'block' ? colorFillTertiary : 'transparent'};
      border: 1px solid ${type === 'block' ? 'transparent' : token.colorBorder};
    `;

    const lighterTypeStylish = css`
      background-color: ${type === 'block'
        ? Color(colorFillTertiary).alpha(0.9).hsl().string()
        : 'transparent'};
    `;

    return {
      wrapper: cx(
        `${prefix}-wrapper`,
        lighterTypeStylish,
        css`
          border-radius: ${token.borderRadius}px;
          .${prefix}-copy {
            background-color: transparent;
            position: inherit;
            width: 30px;
            padding-left: 6px;
          }
        `,
      ),
      expland: css`
        color: ${Color(colorText).alpha(0.8).hsl().string()};
      `,

      copy: css`
        color: ${Color(colorText).alpha(0.6).hsl().string()};
      `,
      header: cx(
        `${prefix}-header`,
        css`
          background-color: ${type === 'block' ? token.colorFillTertiary : 'transparent'};
          padding: 4px 8px;
          border-radius: ${token.borderRadius}px;
          width: auto !important; // override self width
        `,
        css`
          .${STUDIO_UI_PREFIX}-btn {
            &:hover {
              color: ${colorTextSecondary} !important;
            }
          }
        `,
      ),
      container: cx(
        `${prefix}-container`,
        typeStylish,
        css`
          position: relative;
          overflow: auto;
          margin: 0;
          border-radius: ${token.borderRadius}px;
          transition: background-color 100ms ${token.motionEaseOut};

          :not(:hover) {
            .${prefix}-copy {
              visibility: hidden;
              opacity: 0;
            }

            .${prefix}-tag {
              visibility: hidden;
              opacity: 0;
            }
          }

          pre {
            margin: 0 !important;
            padding: ${type === 'pure' ? 0 : `16px 24px`} !important;
            background: none !important;
          }

          code {
            background: transparent !important;
          }
        `,
      ),
      trigger: css`
        min-width: 100px;
        display: flex;
        justify-content: center;
        span {
          font-family: ${token.fontFamilyCode} !important;
        }
      `,
      lang: cx(
        css`
          position: absolute;
          z-index: 2;
          right: 0;
          bottom: 8px;

          font-family: ${token.fontFamilyCode};
          color: ${token.colorTextSecondary};

          // opacity: 0;

          transition: opacity 0.1s;
        `,
      ),
      select: css`
        min-width: 100px;
        .${STUDIO_UI_PREFIX}-btn {
          color: ${colorText};
        }
        .${STUDIO_UI_PREFIX}-select-selector {
          padding-inline-end: 4px !important;
        }
        .${STUDIO_UI_PREFIX}-select-selection-overflow-item-suffix {
          .${STUDIO_UI_PREFIX}-select-selection-search {
            display: none;
          }
        }
      `,
    };
  },
);
