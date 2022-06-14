export const defaultSettings = {
  defaultGraph: "polarArea",
  typeGraph: [],
  style: {
    class: '',
    showInfo: true,
    includeTitle: true,
    borderWidth: 3,
    borderColor: 'rgba(0, 0, 0, 0.7)',
    isDark: false,
    opacityColor: 0.8
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
