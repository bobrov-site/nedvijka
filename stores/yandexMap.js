export const useYandexMapStore = defineStore('yandexMapStore', {
    state: () => ({
        settingsMap: {
            location: {
                center: ['0', '0'],
                zoom: 16
            }
        },
        settingsMarker: {
            coordinates: ['0', '0'],
        }
    }),
    actions: {
        setSettingsMap(location, zoom) {
            this.settingsMap = {
                location: {
                    center: location,
                    zoom: zoom
                }
            }
        },
        setSettingsMarker(coordinates) {
            this.settingsMarker = {
                coordinates: coordinates
            }
        }
    }
})