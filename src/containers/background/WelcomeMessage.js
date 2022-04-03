import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import UserProfile from '../../UserProfile';
import SystemInformation from '../../SystemInformation';

// Pass the flags prop and return an element based on the state of the feature flag key
const WelcomeMessage = ({ flags }) => {
    if (flags['bloatware-removal'] && SystemInformation.version == "11.0") {
        return this.bsod()
    } else {
        return flags['lock-screen-welcome-message'] ? <div>{ flags['lock-screen-welcome-message'].replace("%name%", UserProfile.firstName) }</div> : <div></div>;
    }
};

export default withLDConsumer()(WelcomeMessage);