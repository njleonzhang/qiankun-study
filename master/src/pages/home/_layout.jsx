import React from 'react'
import { history } from 'umi'

export default function _layout(props) {

  return (
    <div>
      I am home
      {/* <button onClick={ () => history.push('/home') }>home 页面</button> */}
      <button onClick={ () => history.push('/home/list') }>list 页面</button>
      <button onClick={ () => history.push('/home/detail') }>detail 页面</button>
      {
        props.children
      }
    </div>
  )
}
