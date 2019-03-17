import Typography from "typography"

const typography = new Typography({
  baseFontSize: "12px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Bungee Outline',
      styles: [
        '400',
      ],
    },
    {
      name: 'Montserrat',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: ["Bungee Outline"],
  bodyFontFamily: ["Montserrat"],
})

export default typography