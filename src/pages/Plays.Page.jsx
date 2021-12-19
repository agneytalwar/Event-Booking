import React from "react";
import Poster from "../components/Poster/Poster.Component";
import PlayFilter from "../components/PlayFilters/PlayFilters.Component"

const Plays = () =>{
    return(<>
        <div className="container mx-auto px-4 my-12">
            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-3/4 p-4">
                    <h2 className="text-2xl font-bold mb-4">Plays in National Capital Region(NCR)</h2>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNyBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319340-rdtvedtbhm-portrait.jpg' title='The Wait Until Dark' subtitle='Select City Walk: Delhi' />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316534-gbbhvncdln-portrait.jpg' title='Tansen' subtitle='The Trialogue Studio' />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNyBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319340-rdtvedtbhm-portrait.jpg' title='The Wait Until Dark' subtitle='Select City Walk: Delhi' />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316534-gbbhvncdln-portrait.jpg' title='Tansen' subtitle='The Trialogue Studio' />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNyBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319340-rdtvedtbhm-portrait.jpg' title='The Wait Until Dark' subtitle='Select City Walk: Delhi' />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316534-gbbhvncdln-portrait.jpg' title='Tansen' subtitle='The Trialogue Studio' />
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/12 p-4 rounded bg-slate-50">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlayFilter title='Date' tags={["Today","Tomorrow","This Weekend"]} />
                        </div>
                        <div>
                            <PlayFilter title='Language' tags={["English","Hindi","Urdu"]} />
                        </div>
                </div>
            </div>
        </div>
    </>)
}
export default Plays;