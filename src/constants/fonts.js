import { Platform } from "react-native"
const fonts = {
    semibold:Platform.OS ==="ios"?"ProximaNova-Semibold": "Proxima Nova Semibold",
    bold:Platform.OS ==="ios"?"ProximaNova-Bold":"Proxima Nova Bold",
    medium:Platform.OS ==="ios"?"ProximaNova-Semibold":"Proxima Nova Semibold",
    regular:Platform.OS ==="ios"?"ProximaNova-Regular":"Proxima Nova Regular",
    light:Platform.OS ==="ios"?"ProximaNovaA-Thin":"Proxima Nova Thin",
    softsemibold:Platform.OS ==="ios"?"ProximaNovaSoftW03-Semibold":"ProximaNovaSoftW03-Semibold"
}

export default fonts