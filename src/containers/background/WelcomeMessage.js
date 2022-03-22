import { withLDConsumer } from 'launchdarkly-react-client-sdk';

// Pass the flags prop and return an element based on the state of the feature flag key
const WelcomeMessage = ({ flags }) => {
    return flags['lock-screen-welcome-message'] ? <div>{ flags['lock-screen-welcome-message'] }</div> : <div></div>;
};

export default withLDConsumer()(WelcomeMessage);