import React from 'react'
import { RegisterPage } from '../../src/screen/register'
import { GetStaticProps, GetServerSideProps } from 'next' //GetStaticPaths, GetServerSideProps

const RestaurantRegister = (props: GetServerSideProps & { data: any }) => {
  return <RegisterPage data={props.data} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch('https://.../posts')
  const data = {
    store_name: '제니얌얌',
    store_address: '경기 화성시 영통로61번길 6 제일프라자 2층',
    kakaoKey: '1282268584',
    latitude: '37.2353783',
    longitude: '127.0586712,17z',
  }

  // By returning { props: { posts } }, the RegisterPage component
  // will receive `posts` as a prop at build time
  return {
    props: {
      layoutProps: { contentLayout: 'TitleSection', title: '맛집등록' },
      data,
    },
  }
}

export default RestaurantRegister
