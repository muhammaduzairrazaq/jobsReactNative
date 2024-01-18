import { SafeAreaView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import TweetContent from "../../components/TweetContent";

export default function TweetDetailsScreen() {
    const route = useRoute();
    const { params } = route;
    const tweet = params?.tweet;

    return (
        <SafeAreaView>
            <Text>Tweet Details</Text>
            {tweet ? (
               <TweetContent tweet={tweet} />
            ) : (
                <Text>No tweet details available.</Text>
            )}
        </SafeAreaView>
    );
}
