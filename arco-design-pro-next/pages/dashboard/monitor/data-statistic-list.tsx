import { Table, Tag, Typography } from "@arco-design/web-react";
import React from "react";
import useLocale from "./locale/useLocale";
import styles from "./style/index.module.less";

export default function QuickOperation() {
  const t = useLocale();
  const columns = [
    {
      title: t["monitor.list.title.order"],
      render: (_col, _record, index) => <span>{index + 1}</span>,
    },
    {
      title: t["monitor.list.title.cover"],
      dataIndex: "cover",
      render: (_col, record) => (
        <div className={styles["data-statistic-list-cover-wrapper"]}>
          <img src={record.cover} />
          {record.status === -1 && (
            <Tag
              color="red"
              className={styles["data-statistic-list-cover-tag"]}
            >
              {t["monitor.list.tag.auditFailed"]}
            </Tag>
          )}
        </div>
      ),
    },
    {
      title: t["monitor.list.title.name"],
      dataIndex: "name",
    },
    {
      dataIndex: "duration",
      title: t["monitor.list.title.duration"],
    },
    {
      dataIndex: "id",
      title: t["monitor.list.title.id"],
    },
  ];
  const data = [
    {
      cover:
        "http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/f9e130633f85f194bbb291ff1db02557.png~tplv-uwbnlip3yd-png.png",
      name: "视频直播",
      duration: "00:05:19",
      id: "54e23ade",
      status: -1,
    },
  ];
  return (
    <div className={styles[""]}>
      <Table
        columns={columns}
        data={data}
        rowKey="id"
        rowSelection={{
          type: "checkbox",
        }}
        border={false}
        pagination={false}
      />
      <Typography.Text
        type="secondary"
        className={styles["data-statistic-list-tip"]}
      >
        {t["monitor.list.tip.rotations"]}
        {data.length}
        {t["monitor.list.tip.rest"]}
      </Typography.Text>
    </div>
  );
}
