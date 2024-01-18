import { NavigationContainer } from "@react-navigation/native";
import Feed from "./screens/tabScreens/Feed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./screens/tabScreens/Settings";
import Notifications from "./screens/tabScreens/Notifications";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import TweetDetailsScreen from "./screens/homeStack/TweetDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Payments from "./screens/drawerScreens/Payments";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
 
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const TopTabs = createMaterialTopTabNavigator();
function TopTabsGroup() {
  return(
    <TopTabs.Navigator
    screenOptions={{
      tabBarLabelStyle: {
        textTransform: "capitalize",
        fontWeight: "bold",
      },
      tabBarIndicatorStyle: {
        height: 5,
        borderRadius: 5,
        backgroundColor: "#1DA1F2",
      }
    }}
    >
      <TopTabs.Screen name="main" component={Feed} />
      <TopTabs.Screen name="Following" component={Payments} />
      <TopTabs.Screen name="Following2" component={Payments} />
    </TopTabs.Navigator>
  )
}

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        options={{ presentation: "modal" }}
      />
    </HomeStack.Navigator>
  );
}

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else {
            iconName = focused ? "notifications" : "notifications-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "#ccc",
      })}
    >
      <Tab.Screen
        name="Feed"
        component={TopTabsGroup}
        options={{ headerShown: true, tabBarLabel: "Home" }}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeStackGroup" component={HomeStackGroup} />
      <Drawer.Screen name="Payments" component={Payments} options={{ headerShown: true }} />
    </Drawer.Navigator> 
  );
}



export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerGroup />
    </NavigationContainer>
  );
}
