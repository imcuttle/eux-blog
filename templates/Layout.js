/**
 * @file: Layout
 * @author: Cuttle Cong
 * @date: 2017/11/24
 * @description: 
 */
import React from 'picidae/exports/react'
import PropTypes from 'picidae/exports/prop-types'

import Header from './comps/Header'
import Footer from './comps/Footer'

import './assets/style/index.less'

export default class Layout extends React.PureComponent {
  getChildContext() {
    return {
      location: this.props.location
    }
  }
  static childContextTypes = {
    location: PropTypes.object
  }

  get withScreen() {
    const {params = {}} = this.props
    return location.pathname === '/' ||
        params.pageNum != null && params.menu == null
  }

  render() {
    const {children, location, params} = this.props;
    return (
      <div className="main">
        <Header withScreen={this.withScreen}/>
        {children}
        <Footer className={location.pathname.startsWith('blog/') ? 'container-singular' : 'container'}/>
      </div>
    )
  }
}