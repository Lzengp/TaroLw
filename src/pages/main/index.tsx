/**首页 */
import { View, Image, Swiper, SwiperItem, Text } from "@tarojs/components";
import "./index.scss";
import { AtList, AtListItem, AtAvatar, AtIcon, AtCurtain } from "taro-ui";
import { useState } from "react";

/**轮播图片 */
const rotateImg = [
  // 'https://imgcps.jd.com/ling4/10029443166324/5L2g5oOz6KaB55qE5oqk6IKk/54iG5qy-55u06ZmN/p-5bd8253082acdd181d02fa22/6f9d3f6e/cr/s/q.jpg',
  "https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000366/100012591774/FocusFullshop/CkNqZnMvdDEvMzczMTQvMTEvMTU2NDMvMzg3OTc0LzYwZTZlNWU0RWRjNmNiNzI5LzIxZDY1NTFmZWFjNDk0NDUucG5nEgkzLXR5XzBfNTQwAjjui3pCDQoJQUhD5rC05LmzEABCEwoP6LSo5LyY5Y-I5Lu35buJEAFCEAoM56uL5Y2z5oqi6LStEAJCCgoG56eN6I2JEAdYnpXcyfQC/cr/s/q.jpg",
  "https://imgcps.jd.com/ling4/100014234328/5Liq5oqk54iG5qy-5aW954mp/54iG5qy-56ys5LqM5Lu25Y2K5Lu3/p-5bd8253082acdd181d02fa68/d1453fcb/cr/s/q.jpg",
];

interface MainProps {}

function Main(props: MainProps) {
  const {} = props;
  const [isOpened, setIsOpened] = useState(true);
  const [currentIndicator, setCurrentIndicator] = useState<number>(0);

  return (
    <View className="memberCenter">
      <AtCurtain
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
        closeBtnPosition="bottom"
      >
        <Image
          style="width:100%;height:250px"
          src="https://taro-ui.jd.com/h5/static/images/curtain.png"
        />
      </AtCurtain>
      {/* <AtNoticebar marquee close>
        这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
      </AtNoticebar> */}
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
        <View className="membershipCardInfo">
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
        </View>
        <AtList>
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
        </AtList>
      </View>
    </View>
  );
}

export default Main;
