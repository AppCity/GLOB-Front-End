import { useState, useEffect } from "react";
import Head from "../components/Head";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";

const Settings = (props) => {
  return (
    <>
      <Head title="Settings" content="Update your profile" />
      <SettingsScreen />
    </>
  );
};

export default Settings;
