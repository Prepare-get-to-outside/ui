import React, { FC } from 'react'
import { withRouter, NextRouter } from 'next/router'
import url from '@/constant/url'

interface AppProp {
  router: NextRouter
}

const App = ({ router }: AppProp) => {
  router.push(url.main)

  return null
}

export default withRouter(App)
