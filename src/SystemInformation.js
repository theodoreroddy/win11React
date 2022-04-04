import env from "react-dotenv"

const SystemInformation = {
    "os": "Windows 11 React",
    "version": env.OS_VERSION.toString(),
    "platform": "js",
    "language": "en_US",
    "deployment_env": env.DEPLOYMENT_ENV
}

export default SystemInformation