/**首页 */
import { View, Image, Swiper, SwiperItem, Text } from "@tarojs/components";
import "./index.scss";
import { AtAvatar, AtIcon, AtGrid } from "taro-ui";
import { useState } from "react";

import MyCard from "./components/MyCard";

/**轮播图片 */
const rotateImg = [
  // 'https://imgcps.jd.com/ling4/10029443166324/5L2g5oOz6KaB55qE5oqk6IKk/54iG5qy-55u06ZmN/p-5bd8253082acdd181d02fa22/6f9d3f6e/cr/s/q.jpg',
  "https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000366/100012591774/FocusFullshop/CkNqZnMvdDEvMzczMTQvMTEvMTU2NDMvMzg3OTc0LzYwZTZlNWU0RWRjNmNiNzI5LzIxZDY1NTFmZWFjNDk0NDUucG5nEgkzLXR5XzBfNTQwAjjui3pCDQoJQUhD5rC05LmzEABCEwoP6LSo5LyY5Y-I5Lu35buJEAFCEAoM56uL5Y2z5oqi6LStEAJCCgoG56eN6I2JEAdYnpXcyfQC/cr/s/q.jpg",
  "https://imgcps.jd.com/ling4/100014234328/5Liq5oqk54iG5qy-5aW954mp/54iG5qy-56ys5LqM5Lu25Y2K5Lu3/p-5bd8253082acdd181d02fa68/d1453fcb/cr/s/q.jpg",
];

interface MainProps {}

function Main(props: MainProps) {
  const {} = props;
  const [currentIndicator, setCurrentIndicator] = useState<number>(0);

  return (
    <View className="memberCenter">
      <View className="topContent">
        <View className="personalInfo">
          <AtAvatar
            circle
            image="http://wx.qlogo.cn/mmopen/vi_32/FqQRxObqXMqa28pRyIxiaO0DqN0YQFyCOyeXtic2LzfmhicLh4uzLkg2cmnjMcIxrVOLyFOmS3rHB4loZcjvUrtag/132"
            size="small"
          />
          <View className="textInfo">
            <Text className="nickname">拾玖</Text>
            <Text className="detailInfo">
              点击查看资料
              <AtIcon value="chevron-right" size="10" />
            </Text>
          </View>
        </View>
        <View className="topContentBtn">
          <Text className="singIn">签到</Text>
        </View>
      </View>
      <View className="mainContent">
        <Swiper
          className="goodsSwiper"
          indicatorColor="#999"
          indicatorActiveColor="#ff6a8f"
          vertical={false}
          circular
          // indicatorDots={false}
          autoplay
          current={currentIndicator}
          onChange={(e) => {
            setCurrentIndicator(e.detail.current);
          }}
        >
          {rotateImg.map((item: string) => (
            <SwiperItem>
              <View className="rotateImg">
                <Image src={item} />
              </View>
            </SwiperItem>
          ))}
        </Swiper>
        {/**自定义轮播图指示点 */}
        <View className="spot-pagination">
          {rotateImg.map((item, index) => (
            <View
              key={index}
              className={
                "spot-pagination-bullet " +
                (currentIndicator == index
                  ? "spot-pagination-bullet-active"
                  : "")
              }
            />
          ))}
        </View>
        <MyCard style={{ position: "relative", top: "-1.7rem" }}>
          <View className="summaryInfo">
            <View className="summaryItemInfo">
              <Text className="itemNumInfo"> 117 </Text>
              <Text className="itemTextInfo"> 福币 </Text>
            </View>
            <View className="summaryItemInfo">
              <Text className="itemNumInfo"> 0 </Text>
              <Text className="itemTextInfo"> 优惠卷 </Text>
            </View>
            <View className="summaryItemInfo">
              <Text className="itemNumInfo"> 29 </Text>
              <Text className="itemTextInfo"> 年消费 </Text>
            </View>
          </View>
          {/**会员卡卡片 */}
          <View className="membershipCard">
            <View className="topCard">
              <View>
                <Text>三福普卡</Text>
                <Text style={{ fontSize: "0.5rem" }}>（当前等级）</Text>
                <View style={{ fontSize: "0.5rem", marginTop: "0.5rem" }}>
                  等级有效期至2023年12月31日
                </View>
              </View>
              <Text className="noDiscount"> 无折扣 </Text>
            </View>
            <View className="cardNum">GH986598</View>
          </View>
        </MyCard>
        {/**会员权益 */}
        <MyCard
          style={{ position: "relative", top: "-1rem" }}
          upperLeft={
            <View style={{ margin: "0.8rem 0.5rem" }}>
              <Text style={{ marginRight: "0.2rem" }}>会员权益</Text>
              <AtIcon value="help" size="13" color="#b2b2b2" />
            </View>
          }
          upperRight={
            <View
              style={{
                margin: "0.8rem 0.5rem",
                fontSize: "0.8rem",
                color: "#b2b2b2",
              }}
            >
              如何升级/降级保级
              <AtIcon value="chevron-right" size="10" />
            </View>
          }
        >
          <View className="membershipInterests">
            <AtGrid
              mode="rect"
              hasBorder={false}
              columnNum={4}
              data={[
                {
                  // iconInfo: {}
                  image:
                    "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
                  value: "会员抽奖",
                },
                {
                  image:
                    "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
                  value: "福币兑换",
                },
                {
                  image:
                    "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
                  value: "商家联盟",
                },
                {
                  image:
                    "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
                  value: "包邮卡",
                },
                {
                  image:
                    "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
                  value: "生日礼包",
                },
                {
                  image:
                    "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
                  value: "退货补偿卷",
                },
              ]}
            />
          </View>
        </MyCard>
        {/**我的订单 */}
        <MyCard
          upperLeft={
            <View style={{ margin: "0.8rem 0.5rem" }}>
              <Text style={{ marginRight: "0.2rem" }}>我的订单</Text>
            </View>
          }
        >
          <View className="myOrders">
            <View className="myOrderBtns">
              <View
                className="myOrderBtnAndDot"
                style={{
                  background: "#f02e72",
                  color: "#FFF",
                  border: "none",
                }}
              >
                线上
              </View>
              <View className="myOrderBtnAndDot">
                门店
                <Text className="dot">12</Text>
              </View>
              <View className="myOrderBtnAndDot">自提</View>
            </View>
            <View className="myOrderAction">
              <AtGrid
                mode="rect"
                hasBorder={false}
                columnNum={4}
                data={[
                  {
                    // iconInfo: {}
                    image:
                      "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
                    value: "会员抽奖",
                  },
                  {
                    image:
                      "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
                    value: "福币兑换",
                  },
                  {
                    image:
                      "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
                    value: "商家联盟",
                  },
                  {
                    image:
                      "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
                    value: "包邮卡",
                  },
                  {
                    image:
                      "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
                    value: "生日礼包",
                  },
                  {
                    image:
                      "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
                    value: "退货补偿卷",
                  },
                ]}
              />
            </View>
          </View>
        </MyCard>
        {/* <AtList>
          {new Array(20)
            .fill({
              title: "标题文字",
              arrow: "right",
              thumb:
                "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
            })
            .map((item: any, index: number) => (
              <AtListItem {...item} title={`${item.title}${index}`} />
            ))}
        </AtList> */}
      </View>
      {/**底部导航栏 */}
      <View className="bottomNavigation">
        <View className="bottomNavigationCenter">
          <AtIcon value="money" size="30" color="#FFF"></AtIcon>
          会员卡
        </View>
        <View className="bottomNavigationAction">
          <AtIcon value="user" size="35" color="#ff4e80"></AtIcon>
          <Text style={{ color: "#ff4e80" }}>我</Text>
        </View>
        <View className="bottomNavigationAction">
          <AtIcon value="camera" size="35" color="#c0c0bf"></AtIcon>
          生活
        </View>
      </View>
    </View>
  );
}

export default Main;
