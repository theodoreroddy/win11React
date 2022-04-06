# Win11 in React!

This React app simulates a Windows 11 desktop environment with quite a bit of functonality.

# How to use
- Clone the repository ``` git clone https://github.com/theodoreroddy/win11React && cd win11react```
- Install dependencies ``` npm install ```
- Add environment variables. Copy `.env.example` as `.env` and replace the values with your own.
- Start the development server ``` npm start ```

Be sure to create these features in your LaunchDarkly account as they will be used by the app:
- `disclaimer` (boolean, shows a popup)
- `bloatware-removal` (boolean, hides the game and donation apps)
- `desktop-wallpaper` (array of url strings, specifies the wallpaper image)
- `lock-screen-welcome-message` (string, displays a message on the lock screen)

Once started, open the terminal (from the start menu) and try running `ld` command to use my command line tool that checks feature states. `status` will also print relevant information.

![screenshot](https://raw.githubusercontent.com/theodoreroddy/win11React/master/public/img/terminal.png "Screenshot")
