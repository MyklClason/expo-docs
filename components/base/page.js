import React from 'react';
import Head from 'next/head';
import * as Constants from '~/style/constants';
import { LATEST_VERSION } from '~/lib/versions';

class Page extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
             window._NODE_ENV = '${process.env.NODE_ENV}';
             window._LATEST_VERSION = '${LATEST_VERSION}';
              `,
            }}
          />

          {/* Reset */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
              html, body, div, span, applet, object, iframe,
              h1, h2, h3, h4, h5, h6, p, blockquote, pre,
              a, abbr, acronym, address, big, cite, code,
              del, dfn, em, img, ins, kbd, q, s, samp,
              small, strike, strong, sub, sup, tt, var,
              b, u, i, center,
              dl, dt, dd, ol, ul, li,
              fieldset, form, label, legend,
              table, caption, tbody, tfoot, thead, tr, th, td,
              article, aside, canvas, details, embed,
              figure, figcaption, footer, header, hgroup,
              menu, nav, output, ruby, section, summary,
              time, mark, audio, video {
                font-weight: 400;
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                border: 0;
                vertical-align: baseline;
              }

              article, aside, details, figcaption, figure,
              footer, header, hgroup, menu, nav, section {
                display: block;
              }

              html, body {
                height: 100%;
                background-color: '#fff';
                color: '#000';
                width: 100%;
                height: 100%;
                margin: 0px;
                padding: 0px;
              }

              a {
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                color: ${Constants.colors.expoLighter};
              }

              body {
                font-family: ${Constants.fonts.book};
                text-rendering: optimizeLegibility;
                font-size: 16px;
                padding-bottom: 24px;
              }

              ::selection {
                background-color: ${Constants.colors.lila};
                color: black;
              }
          `,
            }}
          />

          {/* Top progress bar */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            #nprogress {
              pointer-events: none;
            }

            #nprogress .bar {
              position: fixed;
              z-index: 2000;
              top: 0;
              left: 0;
              width: 100%;
              height: 2px;
              background: ${Constants.colors.expoLighter};
            }

            #nprogress .spinner {
              display: none;
            }
          `,
            }}
          />

          {/* Table styles */}
          <style
            dangerouslySetInnerHTML={{
              __html: `

              table {
                margin-bottom: 4.45rem;
                font-size: 1rem;
                line-height: 1.45rem;
                border-collapse: collapse;
                border: 1px solid hsla(0,0%,0%,0.12);
                width: 100%;
              }

              thead {
                text-align: left;
              }

              th, td {
                text-align: left;
                border-bottom: 1px solid hsla(0,0%,0%,0.12);
                font-feature-settings: "tnum";
                -moz-font-feature-settings: "tnum";
                -ms-font-feature-settings: "tnum";
                -webkit-font-feature-settings: "tnum";
                padding-left: 0.96667rem;
                padding-right: 0.96667rem;
                padding-top: 0.725rem;
                padding-bottom: calc(0.725rem - 1px);
              }

              th {
                font-weight: bold;
              }
          `,
            }}
          />

          {/* Fonts */}
          <style
            dangerouslySetInnerHTML={{
              __html: `

                @font-face {
                  font-family: '${Constants.fonts.bold}';
                  src: url('/static/fonts/MaisonNeue-Bold.woff2');
                  src: url('/static/fonts/MaisonNeue-Bold.woff') format('woff');
                }

                @font-face {
                  font-family: ${Constants.fonts.book};
                  src: url('/static/fonts/MaisonNeue-Book.woff2');
                  src: url('/static/fonts/MaisonNeue-Book.woff') format('woff');
                }

                @font-face {
                  font-family: ${Constants.fonts.demi};
                  src: url('/static/fonts/MaisonNeue-Demi.woff2');
                  src: url('/static/fonts/MaisonNeue-Demi.woff') format('woff');
                }

                @font-face {
                  font-family: ${Constants.fonts.light};
                  src: url('/static/fonts/MaisonNeue-Light.woff2');
                  src: url('/static/fonts/MaisonNeue-Light.woff') format('woff');
                }

                @font-face {
                  font-family: ${Constants.fonts.mono};
                  src: url('/static/fonts/MaisonNeue-Mono.woff2');
                  src: url('/static/fonts/MaisonNeue-Mono.woff') format('woff');
                }

                html {
                  font-family: ${Constants.fontFamilies.book};
                  overflow-wrap: break-word;
                }
          `,
            }}
          />

          <style
            dangerouslySetInnerHTML={{
              __html: `
            /* Overall layout */

            .header {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 99;
            }

            .page-container {
              display: flex;
              flex-direction: row;
              max-width: 1440px;
              margin: 80px auto 0px auto;
            }

            .sidebar {
              position: fixed;
              z-index: 10000;
              width: 280px;
              height: calc(100vh - 80px);
              -webkit-font-smoothing: antialiased;
              border-right: 1px solid #eee;
              overflow: scroll;
              padding-top: 30px;
            }

            .doc-layout {
              display: flex;
              margin: 0px 80px 50px 280px;
              padding: 0 20px;
              justify-content: left;
              -webkit-font-smoothing: antialiased;
              padding-top: 30px;
            }

            .topbar {
              display: none;
            }

            .content {
              flex: 1;
              padding-left: 20px;
            }

            ._markdown_ div {
              max-width: 700px;
            }

            .content img {
              max-width: 100%;
            }

            .content h1 {
              color: #000;
              font-size: 26px;
              line-height: 20px;
              font-weight: 400;
              margin: 0 0 30px 0;
              padding-bottom: 20;
            }

            @media screen and (max-width: ${Constants.breakpoints.mobile}) {
              .header {
                position: relative;
              }

              /* .page-container > .doc-layout > content > .doc-markdown > ._markdown_ */

              .page-container {
                margin-top: 0px;
                width: 100%;
              }

              .doc-layout {
                display: block;
                margin: 0;
                margin-top: 20px;
                width: 100%;
              }

              ._markdown_ div {
                width: 100%;
              }

              .content {
                width: 100%;
                margin-left: 0;
                padding-left: 0px;
              }

              .sidebar {
                display: none;
              }

              .topbar {
                display: block;
              }

            }
          `,
            }}
          />

          {/* Table styles */}
          <style
            dangerouslySetInnerHTML={{
              __html: `

              table {
                margin-bottom: 1rem;
                font-size: 1rem;
                line-height: 1.45rem;
                border-collapse: collapse;
                border: 1px solid hsla(0,0%,0%,0.12);
                width: 100%;
              }

              thead {
                text-align: left;
              }

              th, td {
                text-align: left;
                border-bottom: 1px solid hsla(0,0%,0%,0.12);
                font-feature-settings: "tnum";
                -moz-font-feature-settings: "tnum";
                -ms-font-feature-settings: "tnum";
                -webkit-font-feature-settings: "tnum";
                padding-left: 0.96667rem;
                padding-right: 0.96667rem;
                padding-top: 0.725rem;
                padding-bottom: calc(0.725rem - 1px);
              }

              th {
                font-weight: bold;
              }
          `,
            }}
          />

          {/* Lists */}
          <style
            dangerouslySetInnerHTML={{
              __html: `

              /* Lists and permalinks */

              li {
                font-size: 1rem;
                line-height: 1.725rem;
                margin-bottom: 1.25rem;
              }

              li a.anchor {
                margin-left: -20px;
                float: left;
              }

              li > a.anchor > svg.bullet-icon {
                position: absolute;
                margin-top: 3px;
                visibility: visible;
              }

              li a.anchor > svg.anchor-icon {
                position: absolute;
                margin-top: 3px;
                visibility: hidden;
              }

              li:hover > a.anchor > svg.bullet-icon {
                visibility: hidden;
              }

              li:hover > a.anchor > svg.anchor-icon {
                visibility: visible;
              }

              ol li a.anchor > svg.bullet-icon {
                display: none;
              }

              ol li a.anchor svg.anchor-icon {
                background: #fff;
                padding: 3px;
              }

              svg.anchor-icon {
                width: 13px;
                height: 13px;
              }

              @media screen and (max-width: ${Constants.breakpoints.mobile}) {
                svg.anchor-icon {
                  width: 10px;
                  height: 10px;
                }
              }
          `,
            }}
          />
        </Head>
      </div>
    );
  }
}

export default Page;