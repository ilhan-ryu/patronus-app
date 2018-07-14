import { createStackNavigator } from "react-navigation";
import LogInScreen from "app/screens/LogInScreen";

const LoggedOutNavigation = createStackNavigator({
    LogIn: {
        screen: LogInScreen,
        navigationOptions: {
            header: null
        }
    }
})

export default LoggedOutNavigation;