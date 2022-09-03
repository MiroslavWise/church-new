import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useState, useCallback, useEffect } from 'react'



const coordinates = [51.891994, 26.859789];
const mapState = {
  center: coordinates,
  zoom: 17
};



const Maps = () => {
        const [controlPressed, setControl] = useState(0)
        const [ctrlDisplay, setCtrlDisplay] = useState(false)

        const handleCtrlKeydown = useCallback((event) => {event.key === "Control" && setControl(true)}, []);
        const handleCtrlKeyup = useCallback((event) => {event.key === "Control" && setControl(false)}, []);

        useEffect(() => {                
                window.addEventListener("keydown", handleCtrlKeydown, false);
                window.addEventListener("keyup", handleCtrlKeyup, false);

                return () => {
                        window.removeEventListener("keydown", handleCtrlKeydown, false);
                        window.removeEventListener("keyup", handleCtrlKeyup, false);
                };
        }, []);

        useEffect(() => {
                if (ctrlDisplay) {
                        setTimeout(() => {
                                setCtrlDisplay(false);
                        }, 1500);
                }
        }, [ctrlDisplay]);


        return (
                <div id="main-map" className={`w-100 ymap`} >
                        <div id="map-ctrl-display" className={`map-ctrl-display ${ctrlDisplay && 'map-ctrl-display-effect'}`}>
                                <div className="map-ctrl-display-text">
                                        Чтобы изменить масштаб, прокручивайте карту, удерживая клавишу Ctrl.
                                </div>
                        </div>
                        <YMaps>
                                <Map 
                                        state={mapState}
                                        width="100%"
                                        height="100%"
                                        onWheel={(e)=> {
                                                if (!controlPressed) {
                                                        e.stopPropagation() 
                                                        e.preventDefault()
                                                        setCtrlDisplay(true);
                                                } else {
                                                        setCtrlDisplay(false);
                                                }
                                        }}
                                >
                                        <Placemark 
                                                geometry={coordinates}
                                                options={{
                                                        preset: 'islands#icon',
                                                        iconColor: '#ea4335'
                                                }} 
                                        />
                                </Map>
                        </YMaps>
                </div>
        )
}

export {Maps}