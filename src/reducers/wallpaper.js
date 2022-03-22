var wps = localStorage.getItem("wps") || 0;
var locked = localStorage.getItem("locked");

// implement list flag or something

const walls = [
  "https://launchdarkly.com/open-graph.png"
]

const themes = [
  "default",
  "dark",
  "ThemeA",
  "ThemeB",
  "ThemeD",
  "ThemeC",
]

const defState = {
  themes: themes,
  wps: wps,
  src: walls[wps],
  locked: !(locked == 'false'),
  booted: false || process.env.REACT_APP_ENV == "development",
  act: '',
  dir: 0
}

const wallReducer = (state = defState, action) => {
  switch (action.type) {
    case 'WALLUNLOCK':
      localStorage.setItem("locked", false)
      return {
        ...state, locked: false, dir: 0
      };
    case 'WALLNEXT':
      var twps = (state.wps + 1) % walls.length;
      localStorage.setItem("wps", twps)
      return {
        ...state, wps: twps,
          src: walls[twps]
      };
    case 'WALLALOCK':
      return {
        ...state, locked: true, dir: -1
      };
    case 'WALLBOOTED':
      return {
        ...state, booted: true, dir: 0, act: ''
      };
    case 'WALLRESTART':
      return {
        ...state, booted: false, dir: -1,
          locked: true, act: 'restart'
      };
    case 'WALLSHUTDN':
      return {
        ...state, booted: false, dir: -1,
          locked: true, act: 'shutdn'
      };
    case 'WALLSET':
      var isIndex = !Number.isNaN(parseInt(action.payload)),
          wps = 0, src = "";

      if(isIndex){
        wps = action.payload
        src = walls[action.payload]
      }else{
        src = action.payload
        wps = walls.indexOf(action.payload)
      }

      return {
        ...state, wps: wps,
        src: src
      };
    default:
      return state
  }
}

export default wallReducer;
