import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon, Image, ToolBar } from "../../../utils/general";
import { useFlags } from 'launchdarkly-react-client-sdk'
import SystemInformation from "../../../SystemInformation";
import { useTranslation } from 'react-i18next';

export const AboutWin = () => {
  const flags = useFlags()
  const { abOpen } = useSelector((state) => state.desktop);
  const { locked, booted } = useSelector((state) => state.wallpaper);
  const [open, setOpen] = useState(true && process.env.REACT_APP_ENV != "development");
  const [timer, setTimer] = useState(localStorage.getItem("closeAbout") == "true" ? 0 : 5);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const action = () => {
    setOpen(false);
    localStorage.setItem("closeAbout", true);
    dispatch({ type: "DESKABOUT", payload: false });
  };

  useEffect(() => {
    if (timer > 0 && !locked && booted) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer, locked, booted]);

  if (!flags['disclaimer']) {
    return null
  } else {
    return (open || abOpen) ? (
      <div className="aboutApp floatTab dpShad">
        <div className="content p-6">
          <div className="text-xl font-semibold">IT Alert</div>
          <p>Your system has been upgraded to the latest version ({SystemInformation.version})</p>
          <p>I hope you enjoy the demo. Thanks for watching.</p>
        </div>
        <div className="okbtn px-6 py-4">
          <div data-allow={timer == 0} onClick={timer == 0 && action}>
            Ok, I understand {timer > 0 ? <span>{`( ${timer} )`}</span> : null}
          </div>
        </div>
      </div>
    ) : null;
  }
};
