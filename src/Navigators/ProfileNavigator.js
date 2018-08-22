import { createStackNavigator } from "react-navigation";
import ProfileView from "../Views/ProfileView";
import { PrivacyPolicyView } from "../Views/PrivacyPolicyView";
import { TermsConditions } from "../Views/TermsConditions";
import LoginView from "../Views/LoginView";
import { STRINGS } from "../Config/Strings";

export default createStackNavigator(
  {
    profileView: {
      screen: ProfileView,
      navigationOptions: {
        header: null
      }
    },
    profileTerms: {
      screen: TermsConditions,
      navigationOptions: {
        title: STRINGS.termsConditions
      }
    },
    profilePrivacyPolicy: {
      screen: PrivacyPolicyView,
      navigationOptions: {
        title: STRINGS.privacyPolicy
      }
    }
  },
  {
    initialRouteName: "profileView"
  }
);
