import React, { FC, useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import styled from "styled-components";
import { getAllRestaurants } from "../apis/enrollRestaurant";

const columns = [
  {
    title: "맛집이름",
    dataIndex: "rest_nm",
    key: "rest_nm",
  },
  {
    title: "가격",
    dataIndex: "rest_mn",
    key: "rest_mn",
  },
  {
    title: "Tags",
    key: "tag_cd",
    dataIndex: "tag_cd",
    render: (tags: tagType[]) => {
        console.log(tags);
        return (
      <>
        {tags?.map((tag: tagType) => {
          return (
            <Tag color={"geekblue"} key={tag.id}>
              {tag.name}
            </Tag>
          );
        })}
      </>
    )},
  },
  {
    title: "메모",
    dataIndex: "rmk_dc",
    key: "rmk_dc",
  },
];

const RestaurantTable: FC = () => {
  const [list, setList] = useState<RestaurantInfo[]>([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const res = await getAllRestaurants();

    if(res && res.status === 200){
        sortResList(res.data);
    }
  };

  const sortResList = (resList: any) => {
    const list = resList.map((item: any) => {
        return {
            rest_nm: item?.rest_nm,
            rest_mn: item?.rest_mn,
            tag_cd: JSON.parse(item?.tag_cd),
            rmk_dc: item?.rmk_dc,
        }
    })

    setList(list);
  }

  return <Table columns={columns} dataSource={list} />;
};

export default RestaurantTable;
