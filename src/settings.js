export const defaultSettings = {
  defaultGraph: "polarArea",
  typeGraph: [],
  style: {
    class: '',
    showInfo: true,
    includeTitle: true,
    borderWidth: 5,
    isDark: true,
    opacityColor: 0.6
  }
}

export const setSettings = (userSettings) => {
  return {
    ...defaultSettings,
    ...userSettings,
    style: {
      ...defaultSettings.style,
      ...userSettings.style,
    }
  }
}
