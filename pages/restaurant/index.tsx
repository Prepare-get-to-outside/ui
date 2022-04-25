import React from 'react'
import { MainBoard } from '../../src/screen/main'
import { GetStaticProps, GetServerSideProps } from 'next' //GetStaticPaths, GetServerSideProps

const RestaurantMain = (props: GetServerSideProps) => {
  return <MainBoard />
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch('https://.../posts')
  return {
    props: {
      data: {},
    },
  }
}

export default RestaurantMain
