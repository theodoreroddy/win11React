import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import UserProfile from '../../UserProfile';

// Pass the flags prop and return an element based on the state of the feature flag key
const WelcomeMessage = ({ flags }) => {
    return flags['lock-screen-welcome-message'] ? <div>{ flags['lock-screen-welcome-message'].replace("%name%", UserProfile.firstName) }</div> : <div></div>;
};

export default withLDConsumer()(WelcomeMessage);