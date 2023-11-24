import { View, ScrollView, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  AppBar,
  DescriptionText,
  HeightSpacer,
  HotelMap,
  NetworkImage,
  ReusableBtn,
  ReusableText,
  ReviewList,
} from "../../components";
import reusable from "../../components/Reusable/reusable.style";
import { Rating } from "react-native-stock-star-rating";
import styles from "./hotelDetails.style";
import { Feather } from "@expo/vector-icons";
import { SIZES, COLORS } from "../../constants/theme";

const HotelDetails = ({ navigation }) => {
  const route = useRoute();
  const id = route.params;

  const hotel = {
    availability: {
      start: "2023-08-20T00:00:00.000Z",
      end: "2023-08-25T00:00:00.000Z",
    },
    _id: "64c675793cfa5e847bcd5436",
    country_id: "64d2fd32618522e2fb342eec",
    title: "Hotel Alpha",
    description:
      "The hotel is an ideal place to enjoy a relaxing holiday in Sorrento Coast, away from the busy and chaotic streets of Sorrento but at the same time strategically located a few steps from the sea and the city center. Immersed in 6.000 square yards of traditional citrus grove, the Alpha guarantees an exclusive comfort by a modern and functional style of its two buildings. The lush garden with its terraces is the perfect place to enjoy relaxing evenings with soft music and bar service. Our gourmet restaurant serves Sorrentine, Mediterranean and Internacional cuisine, with the focus on quality and excellence.",
    contact: "64c5d95adc7efae2a45ec376",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/28266df3-1578-4d0d-8015-c5480f64a73d-hotel-alpha.jpeg",
    rating: 4.7,
    review: "253,425 Reviews",
    location: "Sant'Agnello Italy",
    coordinates: {
      latitude: 40.63453,
      longitude: 14.39599,
    },
    price: 200,
    facilities: [
      {
        wifi: true,
        _id: "64c675793cfa5e847bcd5437",
      },
    ],
    __v: 1,
    reviews: [
      {
        _id: "64d38ff59af9119acfab0ece",
        review:
          "I had a lovely stay here. All was great, clean room, balcony and hotel staff all excellent and helpful. The reception staff can answer every question there is! You can even arrange excursions from this hotel. I enjoyed a little time in the relaxing beautiful garden. I was on holiday solo with Jet2 from Scotland. I found the Sant Agnello area to be very good also. Firstly it is all flat and easy to walk around, and has a beautiful seafront, churches etc Secondly it has excellent transport links, you can leave this hotel and be standing n Sorrento in around 10 minutes by bus or train for just around 2 Euro. There is therefore no need to walk in the hot weather but you can do if you want, abour 20 mins walk to Sorrento. This is an advantage over some Sorrento hotels where you might be up on the cliff and need taxis etc. There is also a beautiful pool though I didn't have time to swim as I wanted to go to so many places such as Pompeii, Ercolano, Positano , Capri etc all an hour or so away.",
        rating: 4.6,
        user: {
          _id: "64c5d95adc7efae2a45ec376",
          name: "John Doe",
          profile:
            "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg",
        },
        updatedAt: "2023-08-09",
      },
      {
        _id: "64d797efa5628cedef4fce58",
        review:
          "We booked to return to this hotel after having a nice holiday there in 2019. We were disappointed with some areas of the hotel mainly the food. I read some reviews before we went about the food and i have to agree with some of them. Breakfast was the most disappointing it is the first time that i have not had any hot food at breakfast time ,what little choice there was did not look good and it was not kept warm enough or replaced with fresh later in morning serves / there was not enough staff at breakfast i had to go and find some one most mornings to ask for fresh coffee. Evening meals were better good choices and better service ,the pizza oven was good i had a lovely fresh cooked one and it was very big enough to share. The rest of the hotel was good reception and cleaning staff were very friendly and helpful",
        rating: 3.3,
        user: {
          _id: "64c5d95adc7efae2a45ec376",
          name: "Patricia C",
          profile:
            "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg",
        },
        updatedAt: "2023-09-13",
      },
    ],
  };

  let coordinates = {
    id: hotel._id,
    title: hotel.title,
    longitude: hotel.coordinates.longitude,
    latitude: hotel.coordinates.latitude,
    longitudeDelta: 0.01,
    latitudeDelta: 0.01,
  };

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          title={hotel.title}
          prefixIconBG={COLORS.white}
          suffixIcon={"search1"}
          suffixIconBG={COLORS.white}
          onPrefixPress={() => navigation.goBack()}
          onSuffixPress={() => {}}
          top={50}
          left={20}
          right={20}
        />
      </View>

      <View>
        <View style={styles.container}>
          <NetworkImage
            source={hotel.imageUrl}
            width={"100%"}
            height={220}
            radius={25}
          />

          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReusableText
                text={hotel.title}
                font={"medium"}
                size={SIZES.xLarge}
                color={COLORS.black}
              />

              <HeightSpacer height={5} />

              <ReusableText
                text={hotel.location}
                font={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <HeightSpacer height={5} />

              <View style={reusable.rowWithSpace("space-between")}>
                <Rating
                  maxStars={5}
                  stars={hotel.rating}
                  bordered={false}
                  color={"#FD9942"}
                />

                <ReusableText
                  text={`(${hotel.review})`}
                  font={"medium"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.container, { paddingTop: 90 }]}>
          <ReusableText
            text={"Description"}
            font={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <DescriptionText text={hotel.description} />

          <HeightSpacer height={10} />

          <ReusableText
            text={"Location"}
            font={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={15} />

          <ReusableText
            text={hotel.location}
            font={"regular"}
            size={SIZES.small + 2}
            color={COLORS.gray}
          />

          <HotelMap coordinates={coordinates} />

          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Reviews"}
              font={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />

            <TouchableOpacity>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={10} />

          <ReviewList reviews={hotel.reviews} />
        </View>
        <View style={[reusable.rowWithSpace("space-between"), styles.footer]}>
          <View>
            <ReusableText
              text={`\$ ${hotel.price}`}
              font={"medium"}
              size={SIZES.large}
              color={COLORS.black}
            />

            <HeightSpacer height={5} />

            <ReusableText
              text={"Jan 01 - Dec 25"}
              font={"medium"}
              size={SIZES.medium}
              color={COLORS.gray}
            />
          </View>

          <ReusableBtn
            onPress={() => navigation.navigate("RoomList")}
            btnText={"Select Room"}
            width={(SIZES.width - 50) / 2.2}
            backgroundColor={COLORS.green}
            boderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HotelDetails;
