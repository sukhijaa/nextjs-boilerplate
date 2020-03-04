import React, {Component} from 'react'
import {node} from 'prop-types'
import {LocaleChanger} from 'components/localeChange';
import {withTranslation, Link, Router} from 'translations/i18n';

Router.onRouteChangeComplete = () => {
  document.querySelectorAll('.spinner').forEach(el => {
    el.classList.remove('spinner')
  })
}

class App extends Component {
  static propTypes = {
    children: node,
  }

  componentDidMount() {
    if (typeof window === 'undefined') return
    Router.prefetch('/sync')
    Router.prefetch('/async')
  }

  render() {
    return (
      <main>
        <LocaleChanger/>
        <div className={'layout-grid-wrapper'}>
          <Link href="/">
            <div className="layout-link-box">Home</div>
          </Link>
          <Link href="/sync">
            <div className="layout-link-box">Sync</div>
          </Link>
          <Link href="/async">
            <div className="layout-link-box">Async</div>
          </Link>
          {this.props.children}
        </div>
        <style jsx>{`
          
          .layout-grid-wrapper {
            display: grid;
            grid-gap: 2rem;
            grid-template-columns: repeat(3, 1fr);
          }

          .layout-link-box {
            padding: 2rem;
            border: 1px solid #333;
            border-radius: 5px;
            color: #333;
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
          }

          .layout-link-box.active {
            background: #333;
            color: #fff;
          }

          .layout-link-box:hover {
            text-decoration: line-through;
          }

          section {
            font-size: 1.25rem;
            text-align: center;
            padding: 10rem 0;
            border: 1px solid #eee;
          }
        `}</style>
        <style global jsx>{`
          html {
            color: #333;
            font-family: -apple-system, system-ui, BlinkMacSystemFont,
              'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          }

          section {
            font-size: 1.25rem;
            text-align: center;
            padding: 10rem 0;
            border: 1px solid #eee;
          }

          @keyframes spinner {
            to {
              transform: rotate(360deg);
            }
          }

          .spinner:before {
            content: '';
            box-sizing: border-box;
            position: absolute;
            top: 20px;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 7px solid transparent;
            border-top-color: #333;
            border-bottom-color: #333;
            animation: spinner 0.8s ease infinite;
          }
        `}</style>
      </main>
    )
  }
}

export default withTranslation('common')(App)
