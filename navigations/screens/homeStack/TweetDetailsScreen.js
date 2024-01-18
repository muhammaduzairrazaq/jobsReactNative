import { SafeAreaView, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import TweetContent from "../../components/TweetContent";
import { useLayoutEffect } from "react";

export default function TweetDetailsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { params } = route;
    const tweet = params?.tweet;

    useLayoutEffect(() => {
    navigation.setOptions({
        headerTitle: params.tweet.author.name,
    })
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {tweet ? (
               <TweetContent tweet={tweet} />
            ) : (
                <Text>No tweet details available.</Text>
            )}
        </SafeAreaView>
    );
}
